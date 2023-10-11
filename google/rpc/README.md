## RPC (Remote Procedure Call) Types

This package contains [protocol buffer][protobuf] types that represent remote procedure
call concepts. While [gRPC](https://grpc.io) uses these types, we encourage their
use in any interested RPC implementation to promote compatibility and consistency.

### Key Concepts

- **Code**: An enum that represents an error code returned by an RPC. These error codes
  map to HTTP codes, but are slightly finer-grained. Every gRPC code has exactly one
  corresponding HTTP code; however, some HTTP codes have more than one corresponding
  gRPC code.
- **Error details**: Any of the types contained in `error_details.proto` which provide
  extra details about particular types of failures.
- **Status**: Combines a code, message, and error details to represent the success or
  failure details of an RPC call.

[protobuf]: https://developers.google.com/protocol-buffers/
