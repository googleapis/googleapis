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
 * DO NOT EDIT! This is a generated sample ("Request",  "dialogflow_delete_entity_type")
 */

// [START dialogflow_delete_entity_type]
require __DIR__ . '/vendor/autoload.php';

use Google\Cloud\Dialogflow\V2\EntityTypesClient;

function sampleDeleteEntityType($projectId, $entityTypeId)
{
    printf('ENTITY TYPE ID BELOW');
    printf($entityTypeId);
    printf('ENTITY TYPE ID ABOVE');
    // [START dialogflow_delete_entity_type_core]

    $entityTypesClient = new EntityTypesClient();

    // $projectId = 'Your Google Cloud Project ID';
    // $entityTypeId = 'ID of the EntityType to delete';
    $formattedName = $entityTypesClient->entityTypeName($projectId, $entityTypeId);

    try {
        $entityTypesClient->deleteEntityType($formattedName);
        printf('Deleted EntityType'.PHP_EOL);
    } finally {
        $entityTypesClient->close();
    }

    // [END dialogflow_delete_entity_type_core]
}
// [END dialogflow_delete_entity_type]

$opts = [
    'projectId::',
    'entityTypeId::',
];

$defaultOptions = [
    'projectId' => 'Your Google Cloud Project ID',
    'entityTypeId' => 'ID of the EntityType to delete',
];

$options = getopt('', $opts);
$options += $defaultOptions;

$projectId = $options['projectId'];
$entityTypeId = $options['entityTypeId'];

sampleDeleteEntityType($projectId, $entityTypeId);
