
# Configuration model for the API service platform.
This directory contains protos that define the configuration model used by API service platofrm. Below is a brief overview of how to configure this model. To learn how to configure specific part of it, please refer to individual proto files where the top of the file has detail documentation with examples _(Example: To know how to configure authentication, please read auth.proto)_.

# Configuration Model

A service configuration specifies how a set of APIs is exposed as a
service. The configuration includes:

- the name of the service, a DNS address where the service is served;
- which apis are served;
- information about how a caller is authenticated;
- information how the APIs are exposed on transports like HTTP
- information about representation of data types and interfaces in
  client binding code.

Service configurations are written in YAML. Below is an example of a
configuration:

    type: google.api.Service
    name: library-example.<appspot>.com
    title: Google Example Library API
    apis:
    - name: google.example.library.v1.LibraryService
    documentation:
      overview: A simple Google Example Library API.
    http:
      rules:
      - selector: google.example.library.v1.LibraryService.ListShelves
        get: '/v1/shelves'

This defines a service named `library-example.<appspot>.com` which exposes
an implementation of the API `google.example.library.v1.LibraryService`.
Documentation for the service is provided.

The configuration schema groups configuration aspects in sections such
as 'documentation', 'http', etc. Some of those sections use
configuration rules to associate information with individual elements
of the service.

A rule uses a selector pattern to identify the element. A pattern is a
qualified name of the element which may end in `*`, indicating a
wildcard (wildcards are only allowed at the end and for a whole
component of the qualified name, i.e. `foo.*` is ok, but not `foo.b*`
or `foo.*.bar`.) To specify a default for all applicable elements, the
whole pattern `*` is used.

Instead of single selector, a comma-separated list of selectors can be
also provided, such as `foo.a.*, foo.b.*`.

Rules are evaluated sequentially, the last matching one in declaration
order is taken.

# Annotations

A selected set of service options can be annotated at Protocol Buffers
definitions, using the
[options mechanism](https://developers.google.com/protocol-buffers/docs/proto?csw=1#options).
Currently, this includes the [HTTP](http_rest.shtml) configuration.

Annotations should be used if the configuration option is
intended to be invariant over all usages of the protocol buffer
definition. For example, if an API has one single implementation, or
all implementation are required to have the same HTTP interface, the
HTTP configuration might be annotated in proto.

If a configuration option is provided both via annotation and via
the service configuration, the service configuration overrides the
annotation.

Example:

    rpc ListShelves(ListShelvesRequest) returns (ListShelvesResponse) {
        option (google.api.http) = { get: "/v1/shelves" };
    }

See also
[annotations.proto](https://github.com/googleapis/googleapis/blob/master/google/api/annotations.proto).

# Configuration Validation

Most tools trigger validation during processing of the service
configuration. Validation looks at the combination of YAML files and
protocol buffers and flags errors and warnings.

Warnings are divided into regular and linter warnings. Linter warnings
use an identifier of the form `<group>-<rule>`, where `<group>`
indicates the configuration group, and `<rule>` the particular linter
rule. For example, below the group is `versioning` and the rule is
`http-version-prefix`:

```
WARNING: library.proto:51:3: (lint) versioning-http-version-prefix: method
'google.api.v1.Service.GetObject' has a different version prefix in HTTP path ('v2')
than api version 'v1'.
```

You can suppress linter warnings by adding a directive to the
documentation of an API element. This can be either done in
documentation in the proto or in documentation provided in the YAML
file. For example, the following suppresses the above warning:

```proto
package google.api.v1;
service Service {
  // Returns an object.
  // (== suppress_warning versioning-http-version-prefix ==)
  rpc GetObject(GetObjectRequest) returns (Object) {
    option (google.api.http).get = "/v2/{name=objects/*}";
  }
}
```

Instead of the rule name a wildcard (`*`) can be provided. For
example, `versioning-*` suppresses all warnings related to the
`versioning` group.

Suppression directives attached to parent elements apply to all
children. For example, the above suppression when attached to the
service suppresses the specified warning for all rpcs in the
service. To globally suppress a warning, attach it to the overview
documentation of the service configuration:

```
type: google.api.Service
name: library-example.<appspot>.com
title: Google Example Library API
apis:
- name: google.example.library.v1.LibraryService
documentation:
    overview: |
      A simple Google Example Library API.
      (== suppress_warning documentation-presence ==)
```

Note that directives in documentation like `suppress_warning` must
appear on a their own line, otherwise they will not be
recognized. YAML block literal markers like `>` do remove all
newlines, so if you would use `overview: >` in the above example, the
suppression would not work. For background on block literals in YAML,
[see here](http://en.wikipedia.org/wiki/YAML#Block_literals)


