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
 
#### Setup

This Quickstart will walk you through the steps to generate a code sample demonstrating how to call the [Cloud Natural Language API][Natural Language] using a client library. You will generate the code sample in multiple programming languages. You will also author and run an automated test which executes the samples against the real API to verify their functionality.

1. Clone this repository

```
git clone https://github.com/beccasaurus/gapic-docs-samples.git
cd gapic-docs-samples/
```

You will be working in 2 different folders of this repository:

 - [`google/cloud/language/v1/`][Natural Language Dir] – this contains the `.proto` files and `gapic.yaml` file for the [Natural Language V1 API][Natural Language V1]
 - [`code-samples/`][Code Samples Dir] – this is where generated samples will be output & contains scripts for generating samples & more

#### Configure Code Samples

#### Generate Code Samples

#### Run Code Samples

#### Configure Sample Tests

#### Run Sample Tests

[Code Samples Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/code-samples
[Natural Language Dir]: https://github.com/beccasaurus/gapic-docs-samples/tree/master/google/cloud/language/v1
[Natural Language]: https://cloud.google.com/natural-language/docs/
[Natural Language V1]: https://cloud.google.com/natural-language/docs/reference/rpc/google.cloud.language.v1
