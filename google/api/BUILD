
package(default_visibility = ["//visibility:public"])

load("@submodule_grpc//bazel:grpc_build_system.bzl", "grpc_proto_library")

grpc_proto_library(
      name = "http",
      srcs = [
          "http.proto",
      ],
      use_external = True,
)

grpc_proto_library(
    name = "label",
    srcs = [
        "label.proto",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "distribution",
    srcs = ["distribution.proto"],
    deps = [
      ":annotations",
    ],
    well_known_protos = "@submodule_protobuf//:well_known_protos",
    use_external = True,
)

grpc_proto_library(
    name = "metric",
    srcs = ["metric.proto"],
    deps = [
      "//google/api:label",
    ],
    use_external = True,
)

grpc_proto_library(
    name = "annotations",
    srcs = ["annotations.proto"],
    deps = [
      ":http",
    ],
    well_known_protos = "@submodule_protobuf//:well_known_protos",
    use_external = True,
)

grpc_proto_library(
    name = "monitored_resource",
    srcs = ["monitored_resource.proto"],
    deps = [
      ":label",
    ],
    use_external = True,
)
