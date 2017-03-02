# Google APIs

This repository contains the original interface definitions of public
Google APIs that support both REST and gRPC protocols. Reading the
original interface definitions can provide a better understanding of
Google APIs and help you to utilize them more efficiently. You can also
use these definitions with open source tools to generate client
libraries, documentation, and other artifacts.

For more details on all Google APIs and developer tools, see the [Google
Developers](https://developers.google.com/products/) site.

## Overview

Google APIs are typically deployed as API services that are hosted
under different DNS names. One API service may implement multiple APIs
and multiple versions of the same API.

Google APIs use [Protocol Buffers](https://github.com/google/protobuf)
version 3 (proto3) as their Interface Definition Language (IDL) to
define the API interface and the structure of the payload messages. The
same interface definition is used for both REST and RPC versions of the
API, which can be accessed over different wire protocols.

There are two ways of accessing Google APIs:

1.  JSON over HTTP: You can access Google APIs directly using JSON
over HTTP, using
[Google API client libraries](https://developers.google.com/api-client-libraries)
or third-party API client libraries.

2.  Protocol Buffers over gRPC: You can access Google APIs published
in this repository through [GRPC](https://github.com/grpc), which is
a high-performance binary RPC protocol over HTTP/2. It offers many
useful features, including request/response multiplex and full-duplex
streaming.

## Discussions

Please use GitHub Issues to discuss bugs and features related to this
repository.

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

## Generate gRPC Source Code

To generate gRPC source code for Google APIs in this repository, you
first need to install both Protocol Buffers and gRPC on your local
machine, then you can run `make LANGUAGE=xxx all` to generate the
source code. You need to integrated the generated source code into
your application build system.

**NOTE:** The Makefile is only intended to generate source code for the
entire repository. It is not for generating linkable client library
for a specific API. Please see other repositories under
https://github.com/googleapis for generating linkable client libraries.

### Using bazel with gRPC
Bazel build now works for a subset of the repository. You can use build
targets from this repo as dependency into your grpc code. For example,
this works:  ```bazel build //google/monitoring/v3:metric_service```

### Go gRPC Source Code
It is difficult to generate Go gRPC source code from this repository,
since Go has different directory structure.
Please use [this repository](https://github.com/google/go-genproto) instead.
