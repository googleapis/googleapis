# Google Ads API

This folder contains the [protocol
buffer](https://developers.google.com/protocol-buffers/) definitions and
**experimental** build files (see below) for the [Google Ads
API](https://developers.google.com/google-ads/api/).

To use this
API, we encourage you to take a look at our [official client
libraries](https://developers.google.com/google-ads/api/docs/client-libs) for
Java, Ruby, PHP, Python or .NET. Refer to the
[Quickstart](https://developers.google.com/google-ads/api/docs/first-call/overview)
to learn how to make your first API call.

To develop in a programming language without an official client library, refer
to the [API Concepts
Guide](https://developers.google.com/google-ads/api/docs/concepts/overview) and
consult these protocol buffer definitions as a reference when constructing API
requests.

Use [the official Google Ads API
forum](https://groups.google.com/d/forum/adwords-api) to request an official
client library in another programming language, report bugs, request new
features in the Google Ads API, or provide feedback.

## Build files (experimental)

> **IMPORTANT** The Bazel build files are **experimental**. The structure and
> content of the Bazel packages are subject to change, and the resulting
> generated API clients are not officially supported Google products.

The [Bazel](https://bazel.build/) build files contain targets for building
**generated API clients (GAPICs)** from the Google Ads API protocol buffer
descriptors. Our [officially supported
client libraries](https://developers.google.com/google-ads/api/docs/client-libs)
are built upon these GAPIC artifacts, but add significant performance and
usability enhancements. Thus, we strongly recommend using an official
client library.

However, developers looking to understand the internals of the API's client
libraries or build their own custom [gRPC](https://grpc.io/)-based clients can
use these build files as reference points.

For details on using these files, see the
[Bazel section](https://github.com/googleapis/googleapis#bazel) of the
repository's main
[README.md](https://github.com/googleapis/googleapis/blob/master/README.md).
