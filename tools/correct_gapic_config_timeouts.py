#! /usr/bin/python

# TODO(jcanizales): What license header to use?

# Requires:
# pip install ruamel.yaml
#
# ruamel.yaml lets you read and write back Yaml files preserving the comments
# and a nice layout.
#
# Example usage:
# ./correct_gapic_config_timeouts.py wrong.yaml > correct.yaml

import fileinput
import ruamel.yaml
import sys

input_str = "".join(fileinput.input())

# TODO(jcanizales): Abort with a nice error message if the file doesn't exist or
# is empty.

dom = ruamel.yaml.round_trip_load(input_str)

for interface in dom['interfaces']:
    for retry_def in interface['retry_params_def']:
        retry_def['initial_rpc_timeout_millis'] = 60000
        retry_def['max_rpc_timeout_millis'] = 60000

ruamel.yaml.round_trip_dump(dom, sys.stdout)
