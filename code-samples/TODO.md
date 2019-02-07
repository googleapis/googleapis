## 🦇 Project TODOs

There are a few types of work which need to happen to ship these samples:

1. **Migrate** existing hand-written samples and tests to YAML definitions
2. Update **templates** of generated samples and tests to match canonical samples

----

### 🏆 Canonical Sample Examples

For every language, we need a list of snippets and tests to use as **target output**.

These snippets should demonstrate synchronous calls, long-running operations, file inputs, and other _"features"_ provided by the sample generator.

| Language | Synchronous | Long-running operation | File input | File output | Resource Paths | 
|----------|-------------|------------------------|------------|-------------|----------------|
| 🐹 **Go** | | | | | |
| ☕️ **Java** | | | | | |
| 🚀 **Node.js** | | | | | |
| 🐘 **PHP** | | | | | |
| 🐍 **Python** | | | | | |

----

### 🖋 Sample Authoring

Here we can track the individual samples which we have authored in YAML!

Please only cross of each individual language after confirming that the tests pass for that language.

> There may be some snippets we need to write to support test suites, e.g. if the website only displays a snippet which _creates_ a resource, our tests will need to be able to _list_ and _delete_ the same resource. We do not need to track those here, only published samples.

_If there are blocking issues, we can use this document to note them down._

#### 📜 Natural Language API

 - [Analyzing Syntax][]
   - [ ] `language_syntax_text` 
   - [ ] `language_syntax_gcs`
 - [Analyzing Sentiment][]
   - [ ] `language_sentiment_text` 
   - [ ] `language_sentiment_gcs`
 - [Analyzing Entities][]
   - [ ] `language_entities_text` 
   - [ ] `language_entities_gcs`
 - [Analyzing Entity Sentiment][]
   - [ ] `language_entity_sentiment_text`
   - [ ] `language_entity_sentiment_gcs`
 - [Classifying Content][]
   - [ ] `language_classify_text`
   - [ ] `language_classify_gcs`
 
[Analyzing Syntax]: https://cloud.google.com/natural-language/docs/analyzing-syntax
[Analyzing Sentiment]: https://cloud.google.com/natural-language/docs/analyzing-sentiment
[Analyzing Entities]: https://cloud.google.com/natural-language/docs/analyzing-entities
[Analyzing Entity Sentiment]: https://cloud.google.com/natural-language/docs/analyzing-entity-sentiment
[Classifying Content]: https://cloud.google.com/natural-language/docs/classifying-text

#### 👂 Speech-to-Text API

 - [Transcribing short audio files][]
   - [ ] `speech_transcribe_sync`
   - [ ] `speech_transcribe_sync_gcs`
 - [Transcribing long audio files][]
   - [ ] `speech_transcribe_async`
   - [ ] `speech_transcribe_async_gcs`
 - [Getting word timestamps][]
   - [ ] `speech_transcribe_async_word_time_offsets_gcs`
 - 🔬 Beta Features
   - [Enabling word-level confidence][]
     - [ ] `speech_transcribe_word_level_confidence_beta`
   - [Separating different speakers in an audio recording][]
     - [ ] `speech_transcribe_diarization_beta`
   - [Detecting language spoken automatically][]
     - [ ] `speech_transcribe_multilanguage_beta`
   - [Transcribing audio with multiple channels][]
     - [ ] `speech_transcribe_multichannel_beta`
   - [Using enhanced models][]
     - [ ] `speech_transcribe_enhanced_model_beta`
   - [Adding recognition metadata][]
     - [ ] `speech_transcribe_recognition_metadata_beta`
   - [Getting punctuation][]
     - [ ] `speech_transcribe_auto_punctuation_beta`
 
 [Transcribing short audio files]: https://cloud.google.com/speech-to-text/docs/sync-recognize
 [Transcribing long audio files]: https://cloud.google.com/speech-to-text/docs/async-recognize
 [Getting word timestamps]: https://cloud.google.com/speech-to-text/docs/async-time-offsets
 [Enabling word-level confidence]: https://cloud.google.com/speech-to-text/docs/word-confidence
 [Separating different speakers in an audio recording]: https://cloud.google.com/speech-to-text/docs/multiple-voices
 [Detecting language spoken automatically]: https://cloud.google.com/speech-to-text/docs/multiple-languages
 [Transcribing audio with multiple channels]: https://cloud.google.com/speech-to-text/docs/multi-channel
 [Using enhanced models]: https://cloud.google.com/speech-to-text/docs/enhanced-models
 [Adding recognition metadata]: https://cloud.google.com/speech-to-text/docs/recognition-metadata
 [Getting punctuation]: https://cloud.google.com/speech-to-text/docs/automatic-punctuation

#### 🗣 Text-to-Speech API

 - [Creating voice audio files][] - Converting text to synthetic voice audio
   - [ ] `tts_synthesize_text`
   - [ ] `tts_synthesize_text_file`
 - [Creating voice audio files][] - Converting SSML to synthetic voice audio
   - [ ] `tts_synthesize_ssml`
   - [ ] `tts_synthesize_ssml_file`
 - [Listing all supported voices][]
   - [ ] `tts_list_voices`
 - 🔬 Beta Features
   - [Using device profiles for generated audio][] (beta)
     - [ ] `tts_synthesize_text_audio_profile_beta`
 
[Creating voice audio files]: https://cloud.google.com/text-to-speech/docs/create-audio
[Listing all supported voices]: https://cloud.google.com/text-to-speech/docs/list-voices
[Using device profiles for generated audio]: https://cloud.google.com/text-to-speech/docs/audio-profiles

#### 👁 Vision API

#### 👜 Product Search API

 - [Creating a product set resource][]
   - [ ] `vision_product_search_create_product_set`
   - [ ] `vision_product_search_import_product_images`
 - [Creating and managing your product resources][]
   - [ ] `vision_product_search_create_product`
   - [ ] `vision_product_search_add_product_to_product_set`
   - [ ] `vision_product_search_remove_product_from_product_set`
 - [Creating your reference images & indexing][]
   - [ ] `vision_product_search_create_reference_image`
   - `vision_product_search_import_product_images` _(used on another page above)_
 - [Getting and listing resources][]
   - [ ] `vision_product_search_list_product_sets`
   - [ ] `vision_product_search_get_product_set`
   - [ ] `vision_product_search_list_products`
   - [ ] `vision_product_search_get_product`
   - [ ] `vision_product_search_list_reference_images`
   - [ ] `vision_product_search_get_reference_image`
 - [Updating resources][]
   - [ ] `vision_product_search_update_product_labels`
 - [Deleting resources][]
   - [ ] `vision_product_search_delete_reference_image`
   - [ ] `vision_product_search_delete_product`
   - [ ] `vision_product_search_delete_product_set`
 - [Searching for Products][]
   - [ ] `vision_product_search_get_similar_products`
   - [ ] `vision_product_search_get_similar_products_gcs`
 
[Creating a product set resource]: https://cloud.google.com/vision/product-search/docs/create-product-set
[Creating and managing your product resources]: https://cloud.google.com/vision/product-search/docs/create-product
[Creating your reference images & indexing]: https://cloud.google.com/vision/product-search/docs/create-reference-images
[Getting and listing resources]: https://cloud.google.com/vision/product-search/docs/get-list-resources
[Updating resources]: https://cloud.google.com/vision/product-search/docs/update-resources
[Deleting resources]: https://cloud.google.com/vision/product-search/docs/delete-resources
[Searching for Products]: https://cloud.google.com/vision/product-search/docs/searching

#### 🎞 Video Intelligence API

 - [Analyzing Videos for Labels][]
   - [ ] `video_analyze_labels`
   - [ ] `video_analyze_labels_gcs`
 - [Analyzing Videos for Shot Changes][]
   - [ ] `video_analyze_shots`
 - [Analyzing Videos for Explicit Content][]
   - [ ] `video_analyze_explicit_content`
 - [Speech Transcription][]
   - [ ] `video_speech_transcription_gcs`
 - 🔬 Beta Features
   - [Object Tracking][]
     - [ ] `video_object_tracking_beta`
     - [ ] `video_object_tracking_gcs_beta`
   - [Text Detection][]
     - [ ] `video_detect_text_beta`
     - [ ] `video_detect_text_gcs_beta`
 
[Analyzing Videos for Labels]: https://cloud.google.com/video-intelligence/docs/analyze-labels
[Analyzing Videos for Shot Changes]: https://cloud.google.com/video-intelligence/docs/analyze-shots
[Analyzing Videos for Explicit Content]: https://cloud.google.com/video-intelligence/docs/analyze-safesearch
[Speech Transcription]: https://cloud.google.com/video-intelligence/docs/transcription
[Object Tracking]: https://cloud.google.com/video-intelligence/docs/object-tracking
[Text Detection]: https://cloud.google.com/video-intelligence/docs/text-detection

#### 💬 Dialogflow Enterprise Edition API

- [Quickstart: Agent interaction using the API][]
  - [ ] `dialogflow_detect_intent_text`
- [Detecting Intent from Audio][]
  - [ ] `dialogflow_detect_intent_audio`
- [Creating Intents][]
  - [ ] `dialogflow_create_intent`
- [Listing and Deleting Intents][]
  - [ ] `dialogflow_list_intents`
  - [ ] `dialogflow_delete_intent`
 - 🔬 Beta Features
   - [Adding Speech Response to Detect Intent Requests][]
     - [ ] `dialogflow_detect_intent_with_texttospeech_response`
   - [Adding Sentiment Analysis to Detect Intent Requests][]
     - [ ] `dialogflow_detect_intent_with_sentiment_analysis`
   - [Knowledge Connectors][]
     - [ ] `dialogflow_create_knowledge_base`
     - [ ] `dialogflow_create_document`
     - [ ] `dialogflow_detect_intent_knowledge`

[Quickstart: Agent interaction using the API]: https://cloud.google.com/dialogflow-enterprise/docs/quickstart-api
[Detecting Intent from Audio]: https://cloud.google.com/dialogflow-enterprise/docs/detect-intent-audio
[Creating Intents]: https://cloud.google.com/dialogflow-enterprise/docs/create-intent
[Listing and Deleting Intents]: https://cloud.google.com/dialogflow-enterprise/docs/delete-intent
[Adding Speech Response to Detect Intent Requests]: https://cloud.google.com/dialogflow-enterprise/docs/detect-intent-tts
[Adding Sentiment Analysis to Detect Intent Requests]: https://cloud.google.com/dialogflow-enterprise/docs/sentiment
[Knowledge Connectors]: https://cloud.google.com/dialogflow-enterprise/docs/knowledge-connectors

#### 💼 Job Discovery API
