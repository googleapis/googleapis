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

# Obtained by inspecting the service configs in the googleapis GitHub repo.
# A value of None means anything within that key is allowed. A dictionary value
# is a sub-filter for the accepted keys within.
accepted_sections = {
    'type': None,
    'config_version': None,
    'name': None,
    'title': None,

    'documentation': {
        'summary': None,
        'rules': {
            'selector': None,
            'description': None,
        },
    },

    'apis': {
        'name': None,
    },

    'http': {
        'rules': None,
    },

    'authentication': {
        'rules': {
            'selector': None,
            'oauth': {
                'canonical_scopes': None,
            },
        },
    },

    'context': {
        'rules': {
            'selector': None,
            'requested': None,
        },
    },
}

def filter_object(object, filter):
    for k in object.keys():
        if not k in filter.keys():
            del object[k]
            continue
        if filter[k]: # the key has restrictions
            if isinstance(object[k], list):
                for element in object[k]:
                    filter_object(element, filter[k])
            else:
                filter_object(object[k], filter[k])

filter_object(dom, accepted_sections)

# Reorder config_version and name if they got out of place by merging inputs.
dom.insert(1, 'config_version', dom['config_version'])
dom.insert(2, 'name', dom['name'])

# TODO(jcanizales): Set indent=4, block_seq_indent=2 as specified in
# http://yaml.readthedocs.io/en/latest/detail.html#indentation-of-block-sequences
# Also try to set a margin of 80 columns to the printer.
ruamel.yaml.round_trip_dump(dom, sys.stdout)
