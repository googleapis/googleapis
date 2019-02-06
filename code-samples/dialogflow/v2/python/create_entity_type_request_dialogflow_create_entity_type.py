# -*- coding: utf-8 -*-
#
# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# DO NOT EDIT! This is a generated sample ("Request",  "dialogflow_create_entity_type")

# To install the latest published package dependency, execute the following:
#   pip install google-cloud-dialogflow

import sys

# [START dialogflow_create_entity_type]

from google.cloud import dialogflow_v2
from google.cloud.dialogflow_v2 import enums
import six


def sample_create_entity_type(project_id, display_name):
    """Create Entity Type"""

    # [START dialogflow_create_entity_type_core]

    client = dialogflow_v2.EntityTypesClient()

    # project_id = 'Your Google Cloud Project ID'
    # display_name = 'Display name of Entity Type'

    if isinstance(project_id, six.binary_type):
        project_id = project_id.decode('utf-8')
    if isinstance(display_name, six.binary_type):
        display_name = display_name.decode('utf-8')
    parent = client.project_agent_path(project_id)
    kind = enums.EntityType.Kind.KIND_MAP
    entity_type = {'display_name': display_name, 'kind': kind}

    response = client.create_entity_type(parent, entity_type)
    print('Created new entity type: {}'.format(response.name))

    # [END dialogflow_create_entity_type_core]


# [END dialogflow_create_entity_type]


def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--project_id', type=str, default='Your Google Cloud Project ID')
    parser.add_argument(
        '--display_name', type=str, default='Display name of Entity Type')
    args = parser.parse_args()

    sample_create_entity_type(args.project_id, args.display_name)


if __name__ == '__main__':
    main()
