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

# DO NOT EDIT! This is a generated sample ("Request",  "speech_transcribe_sync")

# To install the latest published package dependency, execute the following:
#   pip install google-cloud-speech

import sys

# [START speech_transcribe_sync]

from google.cloud import speech_v1
from google.cloud.speech_v1 import enums
import io
import six


def sample_recognize(language_code, local_file_path):
    """Transcribe local audio file"""

    # [START speech_transcribe_sync_core]

    client = speech_v1.SpeechClient()

    # language_code = 'en-US'
    # local_file_path = 'Path to local audio file, e.g. /path/audio.wav'

    if isinstance(language_code, six.binary_type):
        language_code = language_code.decode('utf-8')
    if isinstance(local_file_path, six.binary_type):
        local_file_path = local_file_path.decode('utf-8')
    sample_rate_hertz = 16000
    encoding = enums.RecognitionConfig.AudioEncoding.LINEAR16
    config = {
        'sample_rate_hertz': sample_rate_hertz,
        'language_code': language_code,
        'encoding': encoding
    }
    with io.open(local_file_path, 'rb') as f:
        content = f.read()
    audio = {'content': content}

    response = client.recognize(config, audio)
    for result in response.results:
        print('Transcript: {}'.format(result.alternatives[0].transcript))

    # [END speech_transcribe_sync_core]


# [END speech_transcribe_sync]


def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument('--language_code', type=str, default='en-US')
    parser.add_argument(
        '--local_file_path',
        type=str,
        default='Path to local audio file, e.g. /path/audio.wav')
    args = parser.parse_args()

    sample_recognize(args.language_code, args.local_file_path)


if __name__ == '__main__':
    main()
