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
 * DO NOT EDIT! This is a generated sample ("LongRunningRequestAsync",  "speech_transcribe_async")
 */

// [START speech_transcribe_async]
require __DIR__ . '/vendor/autoload.php';

use Google\Cloud\Speech\V1\SpeechClient;
use Google\Cloud\Speech\V1\RecognitionAudio;
use Google\Cloud\Speech\V1\RecognitionConfig;
use Google\Cloud\Speech\V1\RecognitionConfig_AudioEncoding;

function sampleLongRunningRecognize($languageCode, $localFilePath)
{
    // [START speech_transcribe_async_core]

    $speechClient = new SpeechClient();

    // $languageCode = 'en-US';
    // $localFilePath = 'Path to local audio file, e.g. /path/audio.wav';
    $sampleRateHertz = 16000;
    $encoding = RecognitionConfig_AudioEncoding::LINEAR16;
    $config = new RecognitionConfig();
    $config->setSampleRateHertz($sampleRateHertz);
    $config->setLanguageCode($languageCode);
    $config->setEncoding($encoding);
    $content = file_get_contents($localFilePath);
    $audio = new RecognitionAudio();
    $audio->setContent($content);

    try {
        // start the operation, keep the operation name, and resume later
        $operationResponse = $speechClient->longRunningRecognize($config, $audio);
        $operationName = $operationResponse->getName();
        // ... do other work
        $newOperationResponse = $speechClient->resumeOperation($operationName, 'longRunningRecognize');
        while (!$newOperationResponse->isDone()) {
            // ... do other work
            $newOperationResponse->reload();
        }
        if ($newOperationResponse->operationSucceeded()) {
            $response = $newOperationResponse->getResult();
            foreach ($response->getResults() as $result) {
                printf('Transcript: %s'.PHP_EOL, $result->getAlternatives()[0]->getTranscript());
            }
        } else {
            $error = $newOperationResponse->getError();
            // handleError($error)
        }
    } finally {
        $speechClient->close();
    }

    // [END speech_transcribe_async_core]
}
// [END speech_transcribe_async]

$opts = [
    'languageCode::',
    'localFilePath::',
];

$defaultOptions = [
    'languageCode' => 'en-US',
    'localFilePath' => 'Path to local audio file, e.g. /path/audio.wav',
];

$options = getopt('', $opts);
$options += $defaultOptions;

$languageCode = $options['languageCode'];
$localFilePath = $options['localFilePath'];

sampleLongRunningRecognize($languageCode, $localFilePath);
