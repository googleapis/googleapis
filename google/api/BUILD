
package(default_visibility = ["//visibility:public"])

load("//bazel:grpc_build_system.bzl", "grpc_proto_library")

grpc_proto_library(name = "http", srcs = ["http.proto"],)
grpc_proto_library(name = "label", srcs = ["label.proto"],)
grpc_proto_library(
    name = "distribution",
    srcs = ["distribution.proto"],
    deps = [
      ":annotations",
      "//google/protobuf:any",
      "//google/protobuf:timestamp",
      "//google/protobuf:duration",
    ],
)
grpc_proto_library(
    name = "metric",
    srcs = ["metric.proto"],
    deps = [
      "//google/api:label",
    ],
)

grpc_proto_library(
    name = "annotations",
    srcs = ["annotations.proto"],
    deps = [
      ":http",
      "//google/protobuf:descriptor",
    ]
)

grpc_proto_library(
    name = "monitored_resource",
    srcs = ["monitored_resource.proto"],
    deps = [
      ":label",
    ],
)

grpc_proto_library(
    name = "all",
    srcs = [],
    deps = [
      ":http",
      ":metric",
    ],
)
