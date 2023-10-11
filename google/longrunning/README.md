## Long-running Operations API

This package contains the definition of an abstract interface that
manages long running operations with API services.

### Operation

The primary message to understand within LRO is the `Operation` message.
Operations have a unique name (in the context of a particular endpoint).
Additionally, a service (called `Operations` -- plural) defines the interface
for querying the state of any given operation.

APIs that implement a concept of long-running operations are encouraged
to follow this pattern: When a caller invokes an API backend to start a job...

  * The API backend starts asychronous work to fulfill the caller's
    request, and generates a unique name (the `Operation` name) to refer
    to the ongoing asychronous work.
  * The API backend immediately returns the `Operation` back to the caller.
  * The caller can invoke the API methods defined in the `Operations` service
    to get the current status of the asychronous work, and also to
    discover the final result (success or error).

For Google APIs, the implementation of this pattern and the use of this
proto are part of our [design rules][operations-rules]. Additionally, our
[API client tooling][gapic-generator] seeks to be intelligent about these, to
improve the client API consumption experience. Therefore, APIs outside of
Google can also benefit by following this same pattern.

  [operations-rules]: https://cloud.google.com/apis/design/design_patterns#long_running_operations
  [gapic-generator]: https://github.com/googleapis/gapic-generator
