# Google APIs

This repository contains the original interface definitions of public
Google APIs that support both REST and gRPC protocols. Reading the
original interface definitions can provide a better understanding of
Google APIs and help you to utilize them more efficiently. You can also
use these definitions with open source tools to generate client
libraries, documentation, and other artifacts.

## Client Libraries

The client libraries for these APIs are generated into language specific
repositories. Please visit the `googleapis/google-cloud-<lang>` repo for 
the language of interest.

Building these directly via Bazel, or consuming in any other way is 
no longer supported.

## Overview

Google APIs are typically deployed as API services that are hosted
under different DNS names. One API service may implement multiple APIs
and multiple versions of the same API.

Google APIs use [Protocol Buffers](https://github.com/google/protobuf)
version 3 (proto3) as their Interface Definition Language (IDL) to
define the API interface and the structure of the payload messages. The
same interface definition is used for both REST and RPC versions of the
API, which can be accessed over different wire protocols.

There are several ways of accessing Google APIs:

1.  JSON over HTTP: You can access all Google APIs directly using JSON
over HTTP, using
[Google API client library](https://developers.google.com/api-client-library)
or third-party API client libraries.

2.  Protocol Buffers over gRPC: You can access Google APIs published
in this repository through [GRPC](https://github.com/grpc), which is
a high-performance binary RPC protocol over HTTP/2. It offers many
useful features, including request/response multiplex and full-duplex
streaming.

3.  [Google Cloud Client Libraries](https://cloud.google.com/apis/docs/cloud-client-libraries):
You can use these libraries to access Google Cloud APIs. They are based
on gRPC for better performance and provide idiomatic client surface for
better developer experience.

## Discussions

This repo contains copies of Google API definitions and related files.  For
discussions or to raise issues about
[Google API client libraries](https://github.com/googleapis),
[GRPC](https://github.com/grpc) or
[Google Cloud Client Libraries](https://github.com/googlecloudplatform) please
refer to the repos associated with each area.

## Repository Structure

This repository uses a directory hierarchy that reflects the Google
API product structure. In general, every API has its own root
directory, and each major version of the API has its own subdirectory.
The proto package names exactly match the directory: this makes it
easy to locate the proto definitions and ensures that the generated
client libraries have idiomatic namespaces in most programming
languages. Alongside the API directories live the configuration files
for the [GAPIC toolkit](https://github.com/googleapis/toolkit).

**NOTE:** The major version of an API is used to indicate breaking
change to the API.
