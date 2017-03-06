
package(default_visibility = ["//visibility:public"])

load("@submodule_grpc//bazel:grpc_build_system.bzl", "grpc_proto_library")

grpc_proto_library(
    name = "status",
    srcs = ["status.proto"],
    deps = [
      "//google/protobuf:any",
    ],
    use_external = True,
)
