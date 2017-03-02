
package(default_visibility = ["//visibility:public"])

load("//bazel:grpc_build_system.bzl", "grpc_proto_library")

grpc_proto_library(name = "metric",
    srcs = ["metric.proto"],
    deps = [
      "//google/api:metric",
      "//google/api:monitored_resource",
      ":common",
    ],
)

grpc_proto_library(
    name = "common",
    srcs = ["common.proto"],
    deps = [
      "//google/api:distribution",
      "//google/api:annotations",
    ],
)

grpc_proto_library(
    name = "metric_service",
    srcs = ["metric_service.proto"],
    deps = [
      "//google/api:annotations",
      "//google/api:metric",
      "//google/api:monitored_resource",
      "//google/api:label",
      "//google/protobuf:empty",
      "//google/rpc:status",
      ":common",
      ":metric",
    ]
)
