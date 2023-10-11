## Logging types

This package contains shared [protocol buffer][protobuf] types that are populated
by the Cloud Logging API and consumed by other APIs.

### Key Concepts

- **HttpRequest**: Contains the complete set of information about a particular
  HTTP request, such as HTTP method, request URL, status code, and other things.
- **LogSeverity**: The severity of a log entry (e.g. `DEBUG`, `INFO`, `WARNING`).

[protobuf]: https://developers.google.com/protocol-buffers/
