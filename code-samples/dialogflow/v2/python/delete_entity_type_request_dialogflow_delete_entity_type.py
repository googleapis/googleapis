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

# DO NOT EDIT! This is a generated sample ("Request",  "dialogflow_delete_entity_type")

# To install the latest published package dependency, execute the following:
#   pip install google-cloud-dialogflow

import sys

# [START dialogflow_delete_entity_type]

from google.cloud import dialogflow_v2
import six


def sample_delete_entity_type(project_id, entity_type_id):
    """Delete Entity Type"""

    # [START dialogflow_delete_entity_type_core]

    client = dialogflow_v2.EntityTypesClient()

    # project_id = 'Your Google Cloud Project ID'
    # entity_type_id = 'ID of the EntityType to delete'

    if isinstance(project_id, six.binary_type):
        project_id = project_id.decode('utf-8')
    if isinstance(entity_type_id, six.binary_type):
        entity_type_id = entity_type_id.decode('utf-8')
    name = client.entity_type_path(project_id, entity_type_id)

    client.delete_entity_type(name)
    print('Deleted EntityType')

    # [END dialogflow_delete_entity_type_core]


# [END dialogflow_delete_entity_type]


def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--project_id', type=str, default='Your Google Cloud Project ID')
    parser.add_argument(
        '--entity_type_id', type=str, default='ID of the EntityType to delete')
    args = parser.parse_args()

    sample_delete_entity_type(args.project_id, args.entity_type_id)


if __name__ == '__main__':
    main()
