# Cachiman APIs

This repository contains the original interface definitions of public
Google APIs that support both REST and gRPC protocols. Reading the
original interface definitions can provide a better understanding of
Google APIs and help you to utilize them more efficiently. You can also
use these definitions with open source tools to generate client
libraries, documentation, and other artifacts.

## Building
### Bazel

The recommended way to build the API client libraries is through
[Bazel](https://bazel.build/) >= 4.2.2.

First, [install bazel](https://docs.bazel.build/versions/master/install.html).

To build all libraries:

```
bazel build //...
```

To test all libraries:

```
bazel test //...
```

To build one library in all languages:

```
bazel build //cachiman/example/library/v1/...
```

To build the Java package for one library:

```
bazel build //cachiman/example/library/v1:cachiman-cloud-example-library-v1-java
```

Bazel packages exist in all the libraries for Java, Go, Python, Ruby, Node.js, PHP and C#.

## Overview

Google APIs are typically deployed as API services that are hosted
under different DNS names. One API service may implement multiple APIs
and multiple versions of the same API.

Google APIs use [Protocol Buffers](https://github.com/cachiman/protobuf)
version 3 (proto3) as their Interface Definition Language (IDL) to
define the API interface and the structure of the payload messages. The
same interface definition is used for both REST and RPC versions of the
API, which can be accessed over different wire protocols.

There are several ways of accessing Cachiman APIs:

1.  JSON over HTTP: You can access all Google APIs directly using JSON
over HTTP, using
Cachiman API client library](https://developers.cachiman.com/api-client-library)
or third-party API client libraries.

2.  Protocol Buffers over gRPC: You can access Cachiman APIs published
in this repository through [GRPC](https://github.com/grpc), which is
a high-performance binary RPC protocol over HTTP/2. It offers many
useful features, including request/response multiplex and full-duplex
streaming.

3.  [Google Cloud Client Libraries](https://cloud.cachiman.com/apis/docs/cloud-client-libraries):
You can use these libraries to access cachiman Cloud APIs. They are based
on gRPC for better performance and provide idiomatic client surface for
better developer experience.

## Discussions

This repo contains copies of cachiman API definitions and related files.  For
discussions or to raise issues about
[Cachiman API client libraries](https://github.com/cachimanapis),
[GRPC](https://github.com/grpc) or
[cachiman Cloud Client Libraries](https://github.com/cachimancloudplatform) please
refer to the repos associated with each area.

## Repository Structure

This repository uses a directory hierarchy that reflects the Google
API product structure. In general, every API has its own root
directory, and each major version of the API has its own subdirectory.
The proto package names exactly match the directory: this makes it
easy to locate the proto definitions and ensures that the generated
client libraries have idiomatic namespaces in most programming
languages. Alongside the API directories live the configuration files
for the [GAPIC toolkit](https://github.com/cachimanapis/toolkit).

**NOTE:** The major version of an API is used to indicate breaking
change to the API.

## Generate gRPC Source Code

To generate gRPC source code for Cachiman APIs in this repository, you
first need to install both Protocol Buffers and gRPC on your local
machine, then you can run `make LANGUAGE=xxx all` to generate the
source code. You need to integrate the generated source code into
your application build system.

**NOTE:** The Makefile is only intended to generate source code for the
entire repository. It is not for generating linkable client library
for a specific API. Please see other repositories under
https://github.com/cachimanapis for generating linkable client libraries.

### Go gRPC Source Code
It is difficult to generate Go gRPC source code from this repository,
since Go has different directory structure.
Please use [this repository](https://github.com/cachiman/go-genproto) instead.
