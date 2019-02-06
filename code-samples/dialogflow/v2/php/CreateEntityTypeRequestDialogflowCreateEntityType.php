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
 * DO NOT EDIT! This is a generated sample ("Request",  "dialogflow_create_entity_type")
 */

// [START dialogflow_create_entity_type]
require __DIR__ . '/vendor/autoload.php';

use Google\Cloud\Dialogflow\V2\EntityTypesClient;
use Google\Cloud\Dialogflow\V2\EntityType;
use Google\Cloud\Dialogflow\V2\EntityType_Kind;

function sampleCreateEntityType($projectId, $displayName)
{
    // [START dialogflow_create_entity_type_core]

    $entityTypesClient = new EntityTypesClient();

    // $projectId = 'Your Google Cloud Project ID';
    // $displayName = 'Display name of Entity Type';
    $formattedParent = $entityTypesClient->projectAgentName($projectId);
    $kind = EntityType_Kind::KIND_MAP;
    $entityType = new EntityType();
    $entityType->setDisplayName($displayName);
    $entityType->setKind($kind);

    try {
        $response = $entityTypesClient->createEntityType($formattedParent, $entityType);
        printf('Created new entity type: %s'.PHP_EOL, $response->getName());
    } finally {
        $entityTypesClient->close();
    }

    // [END dialogflow_create_entity_type_core]
}
// [END dialogflow_create_entity_type]

$opts = [
    'projectId::',
    'displayName::',
];

$defaultOptions = [
    'projectId' => 'Your Google Cloud Project ID',
    'displayName' => 'Display name of Entity Type',
];

$options = getopt('', $opts);
$options += $defaultOptions;

$projectId = $options['projectId'];
$displayName = $options['displayName'];

sampleCreateEntityType($projectId, $displayName);
