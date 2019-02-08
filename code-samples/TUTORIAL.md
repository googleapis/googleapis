# 🎓 Code Generation Tutorial

In this Quickstart you will author a new code sample which calls the [Cloud Natural Language API][Natural Language].

 - You will update an existing configuration file to add a **new code sample**.
 - You will generate the new code sample in **multiple programming languages**.
 - You will **run the generated code** samples manually.
 - You will configure **automated tests** to run this sample against the live API in all languages.
 - You will r**un the automated tests** against the generated code samples in multiple programming languages.
 
Are you ready? Let's get to it! 😎

----

 1. 👩🏼‍💻 [Setup](#-setup)
 1. 🔍 [Understanding Configuration Files](#-understanding-configuration-files)
 1. 🎓 My First Code Sample!
    - 🖋 [Configure First Code Sample](#-configure-first-code-sample)
    - 🤖 [Generate First Code Sample](#-generate-first-code-sample)
    - 🚗 [Run First Code Sample](#-run-first-code-sample)
 1. ⚙️ Code Sample Parameters and Output
     - 🖋 [Configure Code Sample with Parameters and Output](#-configure-code-sample-with-parameters-and-output)
    - 🤖 [Generate Code Sample with Parameters and Output](#-generate-code-sample-with-parameters-and-output)
    - 🚗 [Run Code Sample with Parameters and Output](#-run-code-sample-with-parameters-and-output)
 1. 🏆 Code Sample Tests
    - 🖋 [Configure Sample Tests](#-configure-sample-tests)
    - 🚗 [Run Sample Tests](#-run-sample-tests)
 1. ☕️ [Next Steps](#-next-steps)
 
 ----
 
## 👩🏼‍💻 Setup

**Programming Languages**

To run generated samples you must have the target languages installed.

This tutorial generates code samples in 🐍 [Python](https://www.python.org/)
and 🐘 [PHP](http://php.net/). At least one of these languages is required.

**Docker**

This sample requires [Docker](https://www.docker.com/).

Pull the [Docker image](https://hub.docker.com/r/googleapis/artman/) for the Client Library and Code Sample generator:

```
docker pull googleapis/artman
```

**Tutorial Repository**

Clone this repository:

```
git clone https://github.com/beccasaurus/gapic-docs-samples.git
cd gapic-docs-samples/
```

**Folder Structure**

You will be working in 2 directories of this repository:

 - [`google/cloud/language/v1beta2/`][Natural Language Dir] – contains the API definition and configuration files for the [Natural Language API][Natural Language v1beta2].
 - [`code-samples/`][Code Samples Dir] – this is where generated samples will be output & contains scripts for generating samples & more.

----

## 🔍 Understanding Configuration Files

The [`google/cloud/language/v1beta2/`][Natural Language Dir] directory contains two important files:

 - [`language_service.proto`][Review proto] – API definition
 - [`language_gapic.yaml`][Review gapic] – Code Sample and Client Library configuration 

Let's look at these two important files in detail...

----

### 🔍 Review of [`language_service.proto`][language_proto] – API Definition

The [`language_service.proto`][language_proto] file defines the Natural Language v1beta2 API interface.

For example, the Natural Language API provides an API endpoint for [analyzing the sentiment][Analyzing Sentiment] of text.

So, presumably the API must have a method which accepts text content as a parameter and returns a numeric representation of the predicted sentiment?

It sure does! Below is an abridged/annotated excerpt of the relevant sections of the `.proto` which defines this functionality.

Pay close attention to the [`AnalyzeSentiment`][] method, the [`AnalyzeSentimentRequest`][] message used to pass parameters, and the [`AnalyzeSentimentResponse`][] message the API returns.

```proto
service LanguageService {

  // **API method** for analyzing the sentiment of provided text content.
  //
  rpc AnalyzeSentiment(AnalyzeSentimentRequest) returns (AnalyzeSentimentResponse) { }

  // **Request** interface to pass to AnalyzeSentiment.
  //
  message AnalyzeSentimentRequest {
    // Input document.
    Document document = 1;

    // The encoding type used by the API to calculate sentence offsets.
    EncodingType encoding_type = 2;
  }
  
  // **Response** interface which AnalyzeSentiment returns/
  //
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

> **Note:** you can also find the RPC reference online for most APIs.
> [click here][Natural Language v1beta2] to see the online reference for `google.cloud.language.v1beta2`

Code sample configurations are based on these API definitions.

For example, let's say we want to generate a code sample which demonstrates how to analyze sentiment!

Based on the RPC interface of `AnalyzeSentiment`, we would want the sample to demonstrate something like the pseudocode below:

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

We will configure this sample below!

----

### 🔍 Review of [`language_gapic.yaml`][language_gapic] – Code Sample and Client Library configuration

The [`language_gapic.yaml`][Review gapic] file contains configuration for generating client libraries for the Natural Language v2beta1 API.

For example:
 – What should the name of the generated Java library package to be?
 - Should the generated source code files contain a license header?
   - If so, what license?
 - What should the retry behavior be for API calls which timeout?
 - How can we configure retry behavior for _specific_ API methods?
 - Should an error be raised if required parameters are not passed?
 - Which parameters for each _specific_ API method are required?
 - **_Should there be code samples for a given specific API method?_**
   - **_If so, what should those samples look like?_**

All of this is configured in the GAPIC configuration files (authored in YAML).

Below is a preview showing the high-level structure of GAPIC configuration files:

```yaml
type: com.google.api.codegen.ConfigProto
config_schema_version: 1.0.0
language_settings:
license_header:
interfaces:
- name: google.cloud.language.v1beta2.LanguageService
  methods:
  - name: AnalyzeSentiment  <= <= <=
    required_fields:
    timeout_millis:
    samples:                <= <= <=
    sample_value_sets:      <= <= <=
```

Code samples for each method are nested under that rpc method (see `<=` above).

Next, you will add code samples to an existing GAPIC configuration files!

## 🖋 Configure First Code Sample

The code samples are configured in the GAPIC configuration file for Natural Language v1beta2:

 - [`google/cloud/language/v1beta2/language_gapic.yaml`][language_gapic]

Open this file to edit it in your favorite text editor.

Scroll down until you find this section which configures the `AnalyzeSentiment` method:

```yaml
  methods:
  - name: AnalyzeSentiment
    flattening:
      groups:
      - parameters:
        - document
    required_fields:
    - document
    retry_codes_name: idempotent
    retry_params_name: default
    timeout_millis: 30000
```

There are no samples configured. Let's add one!

First, choose a unique identifier for your sample. These are used to identify the sample and embed it in cloud.google.com.

We will name this sample `language_analyze_sentiment_v1beta2`

```yaml
  methods:
  - name: AnalyzeSentiment
    flattening:
      groups:
      - parameters:
        - document
    required_fields:
    - document
    retry_codes_name: idempotent
    retry_params_name: default
    timeout_millis: 30000
    
    samples:
      standalone:
      - calling_forms: ".*"
        value_sets: [language_analyze_sentiment_v1beta2]
        region_tag: language_analyze_sentiment_v1beta2
        
    sample_value_sets:
    - id: language_analyze_sentiment_v1beta2
      description: "Analyze sentiment of text"
```

Each sample requires two sections in the YAML configuration:

 1. `samples:`  
    `standalone:`
   - header defining each code sample's `region_tag:` identifier
   - allows for selection of specific `calling_forms:` templates to render (covered in the [`AUTHORING_GUIDE.md`](AUTHORING_GUIDE.md)
 2. `sample_value_sets:`
   - defines the sample structure and data
   - defines a description of the sample
   - defines input parameters the sample should take
   - defines fields to print from a successful API response
   - and more

For now, let's go ahead and generate this sample! We will add more content to it below.

## 🤖 Generate First Code Sample

To generate the source code for this sample in Python:

```
./script/generate language v1beta2 python
```



## 🚗 Run First Code Sample

## 🖋 Configure Code Sample with Parameters and Output

## 🤖 Generate Code Sample with Parameters and Output

## 🚗 Run Code Sample with Parameters and Output

## 🖋 Configure Sample Tests

## 🚗 Run Sample Tests

## ☕️ Next Steps

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
