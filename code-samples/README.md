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
