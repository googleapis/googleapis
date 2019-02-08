# 🎓 Code Generation Tutorial

In this Quickstart you will author a new code sample which calls the [Cloud Natural Language API][Natural Language].

 - You will update an existing configuration file to add a **new code sample**.
 - You will generate the new code sample in **multiple programming languages**.
 - You will **run the generated code** samples manually.
 - You will configure **automated tests** to run this sample against the live API in all languages.
 - You will r**un the automated tests** against the generated code samples in multiple programming languages.
 
Are you ready? Let's get to it! 😎

----

 1. 👩🏼‍💻 [Before you begin](#-before-you-begin)
 1. 👩🏼‍💻 [Setup](#-setup)
 1. 🔍 [Understanding Configuration Files](#-understanding-configuration-files)
    - [API Definition: `language_service.proto`](#-review-oflanguage_serviceproto-api-definition)
    - [Code Sample and Client Library configuration: `language_gapic.yaml`](#-review-of-language_gapicyaml--code-sample-and-client-library-configuration)
 1. 🎓 My First Code Sample!
    - 🖋 [Configure First Code Sample](#-configure-first-code-sample)
    - 🤖 [Generate First Code Sample](#-generate-first-code-sample)
    - 🚗 [Run First Code Sample](#-run-first-code-sample)
 1. ⚙️ Customizing Code Samples
    - ⌨️ [Code Sample CLI Parameters](#️-code-sample-cli-parameters)
    - 💬 [Code Sample Response Output](#-code-sample-response-output)
 1. 🦇 [Generate and Run Code Sample in Other Languages](#-generate-and-run-code-sample-in-other-languages-----️-)  🐍 🐘 🐹 ☕️ 🚀
 1. 🏆 Code Sample Tests
    - 🖋 [Configure Sample Tests](#-configure-sample-tests)
    - 🚗 [Run Sample Tests](#-run-sample-tests)
 1. ☕️ [Next Steps](#-next-steps)
 
----

## ☝️ Before you begin

**Programming Languages**

To run generated samples you must have the target languages installed.

This tutorial generates code samples in 🐍 [Python](https://www.python.org/)
and 🐘 [PHP](http://php.net/). At least one of these languages is required.

**Google Cloud Platform**

This Tutorial will generate code samples for the [Natural Language API][Natural Language].

Running these samples requires setting up a Google Cloud Project and configuring service
account credentials.

Please successfully complete the [Natural Language API – Client Libraries Quickstart](https://cloud.google.com/natural-language/docs/quickstart-client-libraries)
before starting this tutorial.

## 👩🏼‍💻 Setup

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

If all goes well, you should see the following output:

```
Sample files saved to: language/v1beta2/python
- language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py

To run a sample:
>> python language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py --input_param="value"
```

The sample file was generated in a new directory `code-samples/language/v1beta2/python/`

Let's take a look at some of the generated code sample:

```py
# [START language_analyze_sentiment_v1beta2]
from google.cloud import language_v1beta2

def sample_analyze_sentiment():
    """Analyze sentiment of text"""

    client = language_v1beta2.LanguageServiceClient()

    # TODO: Initialize `document`:
    document = {}

    response = client.analyze_sentiment(document)
    print(response)
# [END language_analyze_sentiment_v1beta2]

def main():
    import argparse

    parser = argparse.ArgumentParser()
    args = parser.parse_args()

    sample_analyze_sentiment()

if __name__ == '__main__':
    main()
```

The snippet includes:
 - The `region_tag:` we defined `language_analyze_sentiment_v1beta2` which wraps the body of the main snippet (to embed in documentation)
 - The `description:` we defined `"""Analyze sentiment of text"""` as a docstring for the function
 - Executable `main()` which invokes the snippet function when the file is run

You'll notice that there is a comment with a `TODO`:

```py
# TODO: Initialize `document`:
document = {}
```

This is a message for the developer. If they want to run this sample successfully, they need to manually instantiate a valid request object (a Python representation of the [`AnalyzeSentimentRequest`][] we saw in the [`.proto` review][Review proto])

## 🚗 Run First Code Sample

Let's try to run the code snippet to hit the real API:

```
python language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py
```

Because the `document` needs to be initialized, the API throws an error:

```
google.api_core.exceptions.InvalidArgument: 400 One of content, or gcs_content_uri must be set.
```

If you look at the [`.proto` review][Review proto] above, you'll see that `AnalyzeSentimentRequest` contains a `Document` which is used to specify the text to analyze.

`Document` has two fields for specifying the content:

1. `string content`: `// The content of the input in string format.`
2. `string gcs_content_uri`: `// The Google Cloud Storage URI where the file content is located.`

The `Document` also requires a `type` to specify if the text is `PLAIN_TEXT` or `HTML`.

Rather than edit this file by hand, let's update the code sample configuration so that it generates a working sample.

```yaml
    sample_value_sets:
    - id: language_analyze_sentiment_v1beta2
      description: "Analyze sentiment of text"
      
      # Initialize Document with required values
      parameters:
        defaults:
        - document.content="Example text for sentiment analysis"
        - document.type=PLAIN_TEXT
```

Regenerate the sample:

```
./script/generate language v1beta2 python
```

The updated Python code:

```py
def sample_analyze_sentiment():
    """Analyze sentiment of text"""

    client = language_v1beta2.LanguageServiceClient()

    content = 'Example text for sentiment analysis'
    type_ = enums.Document.Type.PLAIN_TEXT
    document = {'content': content, 'type': type_}

    response = client.analyze_sentiment(document)
    print(response)
```

Run the sample again:

```
python language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py
```

The sentiment should be printed out!

```
document_sentiment {
  magnitude: 0.20000000298
  score: 0.20000000298
}
language: "en"
sentences {
  text {
    content: "Example text for sentiment analysis"
    begin_offset: -1
  }
  sentiment {
    magnitude: 0.20000000298
    score: 0.20000000298
  }
}
```

Great!

Note that the text content is now hard-coded into the Python sample: `"Example text for sentiment analysis"`

Next, we will configure the code sample so that:

1. The text content can be passed in from the command line
2. The sample prints out a custom response message

## ⌨️ Code Sample CLI Parameters

Simple code sample parameters (`string` values) can be configured as command-line arguments, allowing users to pass in values via the command line.

Let's configure `document.content` so that it can be provided via a `--text_content=""` CLI argument:

```yaml
      # Initialize Document with required values
      parameters:
        defaults:
        - document.content="Example text for sentiment analysis"
        - document.type=PLAIN_TEXT
        # Configure attributes of parameters, including CLI arguments              
        attributes:                                                                
        - parameter: document.content                                           
          sample_argument_name: text_content
```

Regenerate the sample:

```
./script/generate language v1beta2 python
```

You should see the following output:

```
Sample files saved to: language/v1beta2/python
- language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py

To run a sample:
>> python language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py --input_param="value"

This sample accepts the following parameters:
text_content
```

Let's try running the sample passing custom text to analyze:

```
$ python language/v1beta2/python/analyze_sentiment_request_language_analyze_sentiment_v1beta2.py --text_content="I am sad and upset"

document_sentiment {
  magnitude: 0.5
  score: -0.5
}
language: "en"
sentences {
  text {
    content: "I am sad and upset"
    begin_offset: -1
  }
  sentiment {
    magnitude: 0.5
    score: -0.5
  }
}
```

Perfect. If you run the sample without `--text_content`, it will continue to use the default value.

Here is an excerpt of the generated Python:


```py
def sample_analyze_sentiment(text_content):
    """Analyze sentiment of text"""

    client = language_v1beta2.LanguageServiceClient()

    # text_content = 'Example text for sentiment analysis'

    if isinstance(text_content, six.binary_type):
        text_content = text_content.decode('utf-8')
    type_ = enums.Document.Type.PLAIN_TEXT
    document = {'content': text_content, 'type': type_}

    response = client.analyze_sentiment(document)
    print(response)

def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--text_content',
        type=str,
        default='Example text for sentiment analysis')
    args = parser.parse_args()

    sample_analyze_sentiment(args.text_content)
```

Currently, the sample simply outputs the entire API response via `print(response)`

Let's update the sample to output a custom response.

## 💬 Code Sample Response Output



## 🦇 Generate and Run Code Sample in Other Languages  🐍 🐘 🐹 ☕️ 🚀

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

[Review proto]: #-review-oflanguage_serviceproto-api-definition
[Review gapic]: #-review-of-language_gapicyaml--code-sample-and-client-library-configuration
