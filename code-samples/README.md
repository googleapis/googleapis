> ⚠️ This repository is temporary for staging code samples and tests. It may be deleted at any time.

## 🦇 Code Sample Generation

[googleapis]: https://github.com/googleapis/googleapis

This repository is a fork of the official [`googleapis/googleapis`][googleapis] repository.

> Note: this fork is for temporary staging and will **never** be pushed upstream.

[`googleapis`][googleapis] contains two types of files which are relevant to generating code samples:

 1. `.proto` – these files define an API, e.g. the methods and object types of an API
 2. `gapic.yaml` – these files configure libraries for an API, e.g. Java library package name

To generate **code samples** demonstrating how to call an API using its libraries,
you must add code sample definitions to the `gapic.yaml` configuration file for that API's library.

This repository contains:

 1. Updated `gapic.yaml` configuration files with code sample definitions added
 2. New `test.yaml` configuration files for defining automated tests for generated code samples
 3. Scripts for generating code samples, running tests, and other various utilities

For a full guide on authoring code samples, see [`AUTHORING_GUIDE.md`](AUTHORING_GUIDE.md)

### 🏃🏼‍♀️ Quickstart

This section will take you from zero to sample generation!

 1. [Setup](/)
 1. [Configure Code Samples](/)
 1. [Generate Code Samples](/)
 1. [Run Code Samples](/)
 1. [Configure Sample Tests](/)
 1. [Run Sample Tests](/)
 
#### 👩🏼‍💻 Setup

This Quickstart will walk you through the steps to generate a code sample demonstrating how to call the [Cloud Natural Language API][Natural Language] using a client library. You will generate the code sample in multiple programming languages. You will also author and run an automated test which executes the samples against the real API to verify their functionality.

1. Clone this repository

```
git clone https://github.com/beccasaurus/gapic-docs-samples.git
cd gapic-docs-samples/
```

You will be working in 2 different folders of this repository:

 - [`google/cloud/language/v1/`][Natural Language Dir] – this contains the `.proto` files and `gapic.yaml` file for the [Natural Language V1 API][Natural Language V1]
 - [`code-samples/`][Code Samples Dir] – this is where generated samples will be output & contains scripts for generating samples & more

#### 🖋 Configure Code Samples

[`google/cloud/language/v1/`][Natural Language Dir] contains two important files:

###### [`language_service.proto`][language_proto]

This `.proto` defines the Natural Language V1 API interface.

For example, the Natural Language API provides an API endpoint for [analyzing the sentiment][Analyzing Sentiment] of text.

So, presumably the API must accept text content as a parameter and return a numeric representation of the predicted sentiment?

It sure does! Below is an abridged/annotated excerpt of the relevant sections of the `.proto` which defines this functionality. Pay close attention to the `AnalyzeSentiment` method, the `AnalyzeSentimentRequest` message it accepts as parameters, and the `AnalyzeSentimentResponse` message it returns.

```proto
service LanguageService {

  // API method for analyzing the sentiment of provided text content.
  rpc AnalyzeSentiment(AnalyzeSentimentRequest) returns (AnalyzeSentimentResponse) { }

  message AnalyzeSentimentRequest {
    // Input document.
    Document document = 1;

    // The encoding type used by the API to calculate sentence offsets.
    EncodingType encoding_type = 2;
  }
  
  message AnalyzeSentimentResponse {
    // The overall sentiment of the input document.
    Sentiment document_sentiment = 1;

    // The language of the text, which will be the same as the language specified
    // in the request or, if not specified, the automatically-detected language.
    string language = 2;
  }
  
  // Represents the feeling associated with the entire text or entities in the text.
  message Sentiment {
    // A non-negative number in the [0, +inf) range, which represents
    // the absolute magnitude of sentiment regardless of score (positive or negative).
    float magnitude = 2;

    // Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
    float score = 3;
  }

  message Document {
    Type type = 1;

    // The source of the document: a string containing the content or a Google Cloud Storage URI.
    oneof source {
      // The content of the input in string format.
      string content = 2;

      // The Google Cloud Storage URI where the file content is located.
      string gcs_content_uri = 3;
    }

    // The language of the document (if not specified, the language is
    // automatically detected). Both ISO and BCP-47 language codes are accepted.
    string language = 4;

    // Format type of the content (HTML or plain text)
    enum Type {
      TYPE_UNSPECIFIED = 0;
      PLAIN_TEXT = 1;
      HTML = 2;
    }
  }

  enum EncodingType {
    NONE = 0;
    UTF8 = 1;
    UTF16 = 2;
    UTF32 = 3;
  }
}
```

###### [`language_gapic.yaml`][language_gapic]



#### 🤖 Generate Code Samples

#### 🚗 Run Code Samples

#### 🖋 Configure Sample Tests

#### 🚗 Run Sample Tests

[language_gapic]: https://github.com/beccasaurus/gapic-docs-samples/blob/master/google/cloud/language/v1/language_gapic.yaml
[language_proto]: https://github.com/beccasaurus/gapic-docs-samples/blob/master/google/cloud/language/v1/language_service.proto

[Code Samples Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/code-samples
[Natural Language Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/google/cloud/language/v1
[Natural Language]: https://cloud.google.com/natural-language/docs/
[Natural Language V1]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1

[Analyzing Sentiment]: https://cloud.google.com/natural-language/docs/analyzing-sentiment#language-sentiment-string-python
