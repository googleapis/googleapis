# Google APIs

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

## Repository Structure

This repository uses a directory hierarchy that reflects the Google
API product structure. In general, every API has its own root
directory, and each major version of the API has its own subdirectory.
The proto package names exactly match the directory: this makes it
easy to locate the proto definitions and ensures that the generated
client libraries have idiomatic namespaces in most programming
languages. Alongside the API directories live the configuration files
for GAPIC generators.

The `preview/` subdirectory is a nested API root dedicated to API surfaces that
are explicitly in preview. This is a subset of APIs found in the root of the
repository. These **must not** be consumed alongside API protos found in the
root of the repository. Generally, do not depend on these protos directly.

**NOTE:** The major version of an API is used to indicate breaking
change to the API.
