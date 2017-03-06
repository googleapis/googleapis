
package(default_visibility = ["//visibility:public"])

load("@submodule_grpc//bazel:grpc_build_system.bzl", "grpc_proto_library")

grpc_proto_library(
    name = "descriptor",
    srcs = [
        "descriptor.proto",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "any",
    srcs = [
        "any.proto",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "empty",
    srcs = [
        "empty.proto",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "timestamp",
    srcs = [
        "timestamp.proto",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "duration",
    srcs = [
        "duration.proto",
    ],
    use_external = True,
)
