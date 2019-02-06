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

#### 🗣 Text-to-Speech API

#### 👁 Vision API

#### 👜 Vision Product Search API

#### 🎞 Video Intelligence API

#### 💬 Dialogflow Enterprise Edition API

#### 💼 Job Discovery API
