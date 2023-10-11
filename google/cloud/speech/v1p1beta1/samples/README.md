# Google Cloud Speech v1p1beta1 – Library Samples

Code Sample Configurations for Cloud Client Libraries for Cloud Speech

> These code samples are published @ [cloud.google.com/speech/docs](https://cloud.google.com/speech-to-text/docs/)

## Configuring recognition requests

### 🔬 Beta – Enabling word-level confidence [📚](https://cloud.google.com/speech-to-text/docs/word-confidence)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_word_level_confidence_beta` | Enable option for getting confidence per word and print confidence for each word  |

### 🔬 Beta – Separating different speakers [📚](https://cloud.google.com/speech-to-text/docs/multiple-voices)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_diarization_beta` | Enable option for diarization and print transcript with "who said what" |

### 🔬 Beta – Detecting language spoken automatically [📚](https://cloud.google.com/speech-to-text/docs/multiple-languages)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_multilanguage_beta` |  Provide list of alternative languages along with audio to be transcribed. |

### 🔬 Beta – Adding recognition metadata [📚](https://cloud.google.com/speech-to-text/docs/recognition-metadata)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_recognition_metadata_beta` | Provide metadata about the audio to transcribe for improved results. |

### 🔬 Beta – Getting punctuation [📚](https://cloud.google.com/speech-to-text/docs/automatic-punctuation)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_auto_punctuation_beta` | Enable option for transcription results with punctuation. |

## Resources

Example files used by code samples and tests.

All of these files are publicly available in the cloud-samples-data Cloud Storage bucket:

 - `gs://cloud-samples-data/speech/[filename]`

> All files are formatted PCM signed 16-bit little-endian

### Tips:

 - Passing `sample_rate_hertz` and `encoding` is optional for `WAV` and `FLAC` files
 - Passing multi-channel audio files without setting `audio_channel_count` returns an error

| Audio file               | Sample Rate | Channels | Speakers | Language(s)      | Transcript (excerpt) |
|--------------------------|-------------|----------|----------|------------------|----------------------|
| [brooklyn_bridge.flac][] | 44100 Hz    | 1        | 1        | English          | _"How old is the Brooklyn Bridge?"_ |
| [multi.flac][]           | 44100 Hz    | 1        | 2        | English, Spanish | _"How are you doing?" "Estoy bien, y tu?"_ |
| [commercial_mono.wav][]  | 8000 Hz     | 1        | 2        | English          | _"I'd like to buy a Chromecast"_  |

[brooklyn_bridge.flac]: https://storage.googleapis.com/cloud-samples-data/speech/brooklyn_bridge.flac
[multi.flac]: https://storage.googleapis.com/cloud-samples-data/speech/multi.flac
[commercial_mono.wav]: https://storage.googleapis.com/cloud-samples-data/speech/commercial_mono.wav
