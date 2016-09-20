#! /usr/bin/python

# TODO(jcanizales): What license header to use?

# Requires:
# pip install ruamel.yaml
#
# ruamel.yaml lets you read and write back Yaml files preserving the comments
# and a nice layout.
#
# Example usage:
# cat pubsub.yaml | sed 's/>$/|/g' | sed '/^[[:blank:]]*#/d;s/#.*//' | filter_service_yaml.py > filtered.yaml
#
# The first sed filter replaces yaml's ">" with "|", which ruamel doesn't handle
# well.
#
# The second one removes comments from the input. ruamel.yaml turns out to be
# quite arbitrary in what comments it preserves and which it doesn't. E.g. it
# sometimes doesn't preserve the comments attached to top-level keys, and
# sometimes it preserves comments attached to keys we've deleted.
# I think it's precisely because we're deleting some of those keys, and that
# disrupts ruamel's data structure.
# This is a secondary problem right now: Because nobody's aware that the service
# config is to be open-sourced, those comments are full of internal info.
#
# TODO(jcanizales): Change API tutorials and documentation to use
# "internal-only" markers in some comments, as is done with proto files.
#
# TODO(jcanizales): Do the regex replacing here after reading the input.

import fileinput
import ruamel.yaml
import sys

input_str = "".join(fileinput.input())

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
