<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Speech v1 – Library Samples

Code Sample Configurations for Cloud Client Libraries for Cloud Speech

> These code samples are published @ [cloud.google.com/speech/docs](https://cloud.google.com/speech-to-text/docs/)

## Performing Speech Recognition

### Transcribing short audio files [📚](https://cloud.google.com/speech-to-text/docs/sync-recognize)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_sync` | Transcribe a local audio file. Synchronous: immediate result. |
| `speech_transcribe_sync_gcs` | Transcribe an audio file in Cloud Storage. |

### Transcribing long audio files [📚](https://cloud.google.com/speech-to-text/docs/async-recognize)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_async` | Start a long running operation to transcribe a local file. Async: wait for results. |
| `speech_transcribe_async_gcs` | Start a long running operation to transcribe a file in Cloud Storage. |

## Configuring recognition requests

### Transcribing audio with multiple channels [📚](https://cloud.google.com/speech-to-text/docs/multi-channel)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_multichannel` | Specify channels to transcribe and print result per channel (from local file) |
| `speech_transcribe_multichannel_gcs` | Specify channels to transcribe and print result per channel (from GCS) |

### Selecting a transcription model [📚](https://cloud.google.com/speech-to-text/docs/transcription-model)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_model_selection` | Specify a model to use for transcribing provided audio (from local file) |
| `speech_transcribe_model_selection_gcs` | Specify a model to use for transcribing provided audio (from GCS) |

### Using enhanced models [📚](https://cloud.google.com/speech-to-text/docs/enhanced-models)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_enhanced_model` | Specify an enhanced model, e.g. phone_call (available if opted-into data logging) |

### Getting word timestamps [📚](https://cloud.google.com/speech-to-text/docs/async-time-offsets)

| Region Tag | Description |
|------------|-------------|
| `speech_transcribe_async_word_time_offsets_gcs` | Output the start and end time of each word that was spoken. |

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
| [brooklyn_bridge.raw][]  | 16000 Hz    | 1        | 1        | English          | _"How old is the Brooklyn Bridge?"_ |
| [brooklyn_bridge.flac][] | 44100 Hz    | 1        | 1        | English          | _"How old is the Brooklyn Bridge?"_ |
| [brooklyn_bridge.wav][]  | 16000 Hz    | 2 *      | 1        | English          | _"How old is the Brooklyn Bridge?"_ |
| [hello.raw][]            | 16000 Hz    | 1        | 1        | English          | _"Hello"_ |
| [hello.wav][]            | 16000 Hz    | 1        | 1        | English          | _"Hello"_ |
| [multi.wav][]            | 44100 Hz    | 2        | 2        | English, Spanish | _"How are you doing?" "Estoy bien, y tu?"_ |
| [multi.flac][]           | 44100 Hz    | 1        | 2        | English, Spanish | _"How are you doing?" "Estoy bien, y tu?"_ |
| [commercial_mono.wav][]  | 8000 Hz     | 1        | 2        | English          | _"I'd like to buy a Chromecast"_  |

> \* _brooklyn_bridge.wav is formatted with 2 channels but only contains one channel of data_

[brooklyn_bridge.raw]: https://storage.googleapis.com/cloud-samples-data/speech/brooklyn_bridge.raw
[brooklyn_bridge.flac]: https://storage.googleapis.com/cloud-samples-data/speech/brooklyn_bridge.flac
[brooklyn_bridge.wav]: https://storage.googleapis.com/cloud-samples-data/speech/brooklyn_bridge.wav
[hello.raw]: https://storage.googleapis.com/cloud-samples-data/speech/hello.raw
[hello.wav]: https://storage.googleapis.com/cloud-samples-data/speech/hello.wav
[multi.wav]: https://storage.googleapis.com/cloud-samples-data/speech/multi.wav
[multi.flac]: https://storage.googleapis.com/cloud-samples-data/speech/multi.flac
[commercial_mono.wav]: https://storage.googleapis.com/cloud-samples-data/speech/commercial_mono.wav
