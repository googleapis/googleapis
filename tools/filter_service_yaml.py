#! /usr/bin/python

# TODO(jcanizales): What license header to use?

# Requires:
# pip install ruamel.yaml
#
# ruamel.yaml lets you read and write back Yaml files preserving the comments
# and a nice layout.
#
# Example usage:
# filter_service_yaml.py base.yaml override.yaml > filtered.yaml

import fileinput
import re
import ruamel.yaml
import sys

# We remove comments from the input. ruamel.yaml turns out to be quite arbitrary
# in what comments it preserves and which it doesn't. E.g. it sometimes doesn't
# preserve the comments attached to top-level keys, and sometimes it preserves
# comments attached to keys we've deleted.
# I think it's precisely because we're deleting some of those keys, and that
# disrupts ruamel's data structure.
# This is a secondary problem right now: Because nobody's aware that the service
# config is to be open-sourced, those comments are full of internal info.
#
# TODO(jcanizales): Change API tutorials and documentation to use
# "internal-only" markers in some comments, as is done with proto files.

full_line_comment = re.compile('^\s*#')
end_of_line_comment = re.compile('\s*#.*')
yaml_line_continuation = re.compile('>\s*$')

input_str = ""
for line in fileinput.input():
    # Remove comments
    if full_line_comment.match(line):
        continue
    line = re.sub(end_of_line_comment, '', line)

    # Replace yaml's ">" with "|", as ruamel doesn't handle the former.
    line = re.sub(yaml_line_continuation, '|\n', line)
    
    input_str += line

# TODO(jcanizales): Abort with a nice error message if the file doesn't exist or
# is empty.

dom = ruamel.yaml.round_trip_load(input_str)

# List obtained by:
# cat logging.yaml | grep -Eo ^[a-z]+: > logging.sections
# cat pubsub.yaml | grep -Eo ^[a-z]+: > pubsub.sections
# cat pubsub.sections logging.sections | sort | uniq > accepted.sections
#
# TODO(jcanizales): Turn this list into a dictionary, so subsections can be
# recursively filtered (e.g. authentication > rules > selector). Alternatively,
# instantiate a default message of service.proto (or its descriptor) and walk
# it. But the open-source service.proto includes fields like
# producer_project_id, which I'm not sure an API producer would like to be
# published.
#
# TODO(jcanizales): No "http" section??
accepted_sections = [
    'apis',
    'authentication',
    'config_version',
    'context',
    'documentation',
    'name',
    'title',
    'type',
]

for k in dom.keys():
    if not k in accepted_sections:
        del dom[k]

# If the original service config didn't specify a config version, specify one.
if not 'config_version' in dom.keys():
    dom.insert(1, 'config_version', 2, comment="(assumed)")

# Until we have smarter filtering, do these ad-hoc:
accepted_auth_subsections = [
    'selector',
    'oauth',
]
for auth_rule in dom['authentication']['rules']:
    for k in auth_rule.keys():
        if not k in accepted_auth_subsections:
            del auth_rule[k]

# TODO(jcanizales): Set indent=4, block_seq_indent=2 as specified in
# http://yaml.readthedocs.io/en/latest/detail.html#indentation-of-block-sequences
# Also try to set a margin of 80 columns to the printer.
ruamel.yaml.round_trip_dump(dom, sys.stdout)
