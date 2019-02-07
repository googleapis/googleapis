> ⚠️ This repository is temporary for staging code samples and tests. It may be deleted at any time.

# 🦇 Code Sample Generation

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

## 🏃🏼‍♀️ Quickstart

In this Quickstart you will author a new code sample which calls the [Cloud Natural Language API][Natural Language].

 - You will update an existing configuration file to add a **new code sample**.
 - You will generate the new code sample in **multiple programming languages**.
 - You will **run the generated code** samples manually.
 - You will configure **automated tests** to run this sample against the live API in all languages.
 - You will r**un the automated tests** against the generated code samples in multiple programming languages.
 
Are you ready? Let's get to it! 😎

 1. 👩🏼‍💻 [Setup](/)
 1. 🔍 [Understanding Configuration Files](/)
 1. 🖋 [Configure Code Samples](/)
 1. 🤖 [Generate Code Samples](/)
 1. 🚗 [Run Code Samples](/)
 1. 🖋 [Configure Sample Tests](/)
 1. 🚗 [Run Sample Tests](/)
 1. ☕️ Conclusion
 
### 👩🏼‍💻 Setup

Clone this repository:

```
git clone https://github.com/beccasaurus/gapic-docs-samples.git
cd gapic-docs-samples/
```

You will be working in 2 directories of this repository:

 - [`google/cloud/language/v1beta2/`][Natural Language Dir] – contains the API definition and configuration files for the [Natural Language API][Natural Language v1beta2].
 - [`code-samples/`][Code Samples Dir] – this is where generated samples will be output & contains scripts for generating samples & more.

----

### 🔍 Understanding Configuration Files

The [`google/cloud/language/v1beta2/`][Natural Language Dir] directory contains two important files:

 - [`language_service.proto`][Review proto] – API definition
 - [`language_gapic.yaml`][Review gapic] – Code Sample and Client Library configuration 

Let's look at these two important files in detail...

----

#### 🔍 Review of [`language_service.proto`][language_proto] – API Definition

[`language_service.proto`][language_proto] defines the Natural Language v1beta2 API interface.

For example, the Natural Language API provides an API endpoint for [analyzing the sentiment][Analyzing Sentiment] of text.

So, presumably the API must accept text content as a parameter and return a numeric representation of the predicted sentiment?

It sure does! Below is an abridged/annotated excerpt of the relevant sections of the `.proto` which defines this functionality. Pay close attention to the [`AnalyzeSentiment`][] method, the [`AnalyzeSentimentRequest`][] message it accepts as parameters, and the [`AnalyzeSentimentResponse`][] message it returns.

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

Code sample configurations are based on these `.proto` API definitions.

> Note: you can also find the RPC reference online for most APIs, e.g. [click here][Natural Language v1beta2] to see the online reference for `google.cloud.language.v1beta2`

For example, when we create a code sample for calling `AnalyzeSentiment`, we will configure the sample to essentially perform the following:

```python
# this is purely make believe pseudocode to demonstrate what we will want the sample to do

response = AnalyzeSentiment(
    encoding_type=UTF8
    document = Document(
        type=PLAIN_TEXT
        content="Text with a very happy sentiment!"
        language="en-US"
    )
)

print response.document_sentiment.magniture
print response.document_sentiment.score
```

Please see the 

----

#### 🔍 Review of [`language_gapic.yaml`][language_gapic] – Code Sample and Client Library configuration

...

### 🖋 Configure Code Samples

### 🤖 Generate Code Samples

### 🚗 Run Code Samples

### 🖋 Configure Sample Tests

### 🚗 Run Sample Tests

### ☕️ Conclusion

[language_gapic]: https://github.com/beccasaurus/gapic-docs-samples/blob/master/google/cloud/language/v1beta2/language_gapic.yaml
[language_proto]: https://github.com/beccasaurus/gapic-docs-samples/blob/master/google/cloud/language/v1beta2/language_service.proto

[Code Samples Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/code-samples
[Natural Language Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/google/cloud/language/v1beta2
[Natural Language]: https://cloud.google.com/natural-language/docs/
[Natural Language v1beta2]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1beta2

[Analyzing Sentiment]: https://cloud.google.com/natural-language/docs/analyzing-sentiment#language-sentiment-string-python

[`AnalyzeSentiment`]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1beta2#google.cloud.language.v1beta2.LanguageService.AnalyzeSentiment
[`AnalyzeSentimentRequest`]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1beta2#google.cloud.language.v1beta2.AnalyzeSentimentRequest
[`AnalyzeSentimentResponse`]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1beta2#google.cloud.language.v1beta2.AnalyzeSentimentResponse

[Review proto]: #-review-oflanguage_serviceproto
[Review gapic]: #-review-of-language_gapicyaml
