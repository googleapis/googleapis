<?php
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * DO NOT EDIT! This is a generated sample ("RequestPagedAll",  "dialogflow_list_entity_types")
 */

// [START dialogflow_list_entity_types]
require __DIR__ . '/vendor/autoload.php';

use Google\Cloud\Dialogflow\V2\EntityTypesClient;

function sampleListEntityTypes($projectId)
{
    // [START dialogflow_list_entity_types_core]

    $entityTypesClient = new EntityTypesClient();

    // $projectId = 'Your Google Cloud Project ID';
    $formattedParent = $entityTypesClient->projectAgentName($projectId);

    try {
        // Iterate through all elements
        $pagedResponse = $entityTypesClient->listEntityTypes($formattedParent);
        foreach ($pagedResponse->iterateAllElements() as $responseItem) {
            printf('Entity type name: %s'.PHP_EOL, $responseItem->getName());
            printf('Entity type display name: %s'.PHP_EOL, $responseItem->getDisplayName());
        }
    } finally {
        $entityTypesClient->close();
    }

    // [END dialogflow_list_entity_types_core]
}
// [END dialogflow_list_entity_types]

$opts = [
    'projectId::',
];

$defaultOptions = [
    'projectId' => 'Your Google Cloud Project ID',
];

$options = getopt('', $opts);
$options += $defaultOptions;

$projectId = $options['projectId'];

sampleListEntityTypes($projectId);
