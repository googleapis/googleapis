# IMPORTANT INFORMATION!
#
# This workspace configuration assumes `--experimental_enable_repo_mapping` command line argument
# on every build of anything under this workspace. The repo mapping is a recently released feature
# (bazel >= 0.16.0) and allows to solve two very nasty problems:
#     1) Allowing two or more workspaces with dependency conflicts (same dependency name but
#        different version) to coexist under same project (when one workspace imports another via
#        `*_repository()` workspace rules). Example: `gapic-generator` and `grpc-java` have a guava
#         dependency conflict (grpc-java uses latest java7 compatible version, while gapic-generator
#         uses fresher (java8 compatible) version)
#     2) Allowing two or more workspaces to have same dependency, but assign different names to it
#       (i.e. at least one of the workspaces does not follow naming conventions).
#
# Even if the experimental feature will be eventually cancelled, there will still be a solution
# for solving the problems desribed above, so it is relatively safe to structure workspaces and
# packages under the assumption that the dependencies naming conflicts can be solved in the "outer"
# workspace (the one, which imports the "inner" workspace via `*_repository` rule).
#
# Note, the rule arguments related to the repo mapping feature (like repo_mapping arument in
# `*_repository` rules) are currently highlighted as erroneous by IDE plugins (is expected taking
# into account that the feature is new and experimental). This problem is temporary and will go
# away once the repo mapping feature (or its "better" replacement) is stabilized.
#
# To fix enable bazel project sync in IntelliJ plugin add the following lines to .bazelproject file:
#
# build_flags:
#  --experimental_enable_repo_mapping

workspace(name = "com_google_googleapis")

#
# grpc-java repository dependencies (required to by `java_grpc_library` bazel rule)
#
git_repository(
    name = "io_grpc_grpc_java",
    remote = "https://github.com/grpc/grpc-java.git",
    tag = "v1.13.1",
)

load(
    "@io_grpc_grpc_java//:repositories.bzl",
    "grpc_java_repositories",
)

grpc_java_repositories(
    omit_com_google_api_grpc_google_common_protos = True,
    omit_com_google_auth_google_auth_library_credentials = True,
    omit_com_google_code_findbugs_jsr305 = True,
    omit_com_google_code_gson = False,
    omit_com_google_errorprone_error_prone_annotations = False,
    omit_com_google_guava = False,
    omit_com_google_protobuf = True,
    omit_com_google_protobuf_java = False,
    omit_com_google_protobuf_javalite = True,
    omit_com_google_protobuf_nano_protobuf_javanano = True,
    omit_com_google_re2j = True,
    omit_com_google_truth_truth = True,
    omit_com_squareup_okhttp = True,
    omit_com_squareup_okio = True,
    omit_io_netty_buffer = True,
    omit_io_netty_codec = True,
    omit_io_netty_codec_http = True,
    omit_io_netty_codec_http2 = True,
    omit_io_netty_codec_socks = True,
    omit_io_netty_common = True,
    omit_io_netty_handler = True,
    omit_io_netty_handler_proxy = True,
    omit_io_netty_resolver = True,
    omit_io_netty_tcnative_boringssl_static = True,
    omit_io_netty_transport = True,
    omit_io_opencensus_api = True,
    omit_io_opencensus_grpc_metrics = True,
    omit_javax_annotation = False,
    omit_junit_junit = True,
    omit_org_apache_commons_lang3 = True,
)

#
# Java GAPIC (gapic-generator generated artifacts) dependencies. The dependencies may clash with
# gapic-generator and have different versions, especially taking into account that generated
# artifacts are Java 1.7 and gapic-generator is Java 1.8 compatible.
#
maven_jar(
    name = "com_google_guava_guava__com_google_api_codegen",
    artifact = "com.google.guava:guava:26.0-jre",
)

maven_jar(
    name = "com_google_api_grpc_proto_google_common_protos__com_google_api_codegen",
    artifact = "com.google.api.grpc:proto-google-common-protos:1.13.0-pre1",
)

git_repository(
    name = "com_google_api_codegen",
    commit = "4ae22668fb8dafbe6ecb476c0ffe83a28d2121fb",
    remote = "https://github.com/googleapis/gapic-generator.git",
    repo_mapping = {
        "@com_google_guava_guava": "@com_google_guava_guava__com_google_api_codegen",
        "@com_google_api_grpc_proto_google_common_protos": "@com_google_api_grpc_proto_google_common_protos__com_google_api_codegen",
    },
)

load(
    "@com_google_api_codegen//rules_gapic/java:java_gapic_pkg_repos.bzl",
    "java_gapic_direct_repositories",
    "java_gapic_gax_repositories",
)

java_gapic_direct_repositories(
    omit_com_google_api_gax_httpjson = True,
    omit_com_google_api_gax_httpjson_testlib = True,
    omit_junit_junit = True,
)

java_gapic_gax_repositories(
    omit_com_fasterxml_jackson_core_jackson_core = True,
    omit_com_google_code_gson_gson = True,
    omit_com_google_guava_guava = True,
)

#
# gapic-generator repository dependencies (required to compile and run gapic-generator)
#
load(
    "@com_google_api_codegen//:repositories.bzl",
    "com_google_api_codegen_repositories",
    "com_google_api_codegen_test_repositories",
    "com_google_api_codegen_tools_repositories",
)

#TODO:  Update all omitted dependencies in gapic_generator so they match the newer versions used by
#       grpc-java and gax
com_google_api_codegen_repositories(
    omit_com_google_api_api_common = True,
    omit_com_google_api_grpc_proto_google_common_protos = True,
    omit_com_google_code_findbugs_jsr305 = True,
    omit_com_google_code_gson_gson = True,
    omit_com_google_guava_guava = True,
    omit_io_grpc_grpc_core = True,
    omit_org_threeten_threetenbp = True,
)

com_google_api_codegen_test_repositories()

com_google_api_codegen_tools_repositories()

#
# protoc-java-resource-names-plugin repository dependencies (required to support resource names
# feature in gapic generator)
#
git_repository(
    name = "com_google_protoc_java_resource_names_plugin",
    commit = "46d8662701a9ce9a7afcf16c2262f686f9dbe279",
    remote = "https://github.com/googleapis/protoc-java-resource-names-plugin.git",
)

load(
    "@com_google_protoc_java_resource_names_plugin//:repositories.bzl",
    "com_google_protoc_java_resource_names_plugin_repositories",
)

com_google_protoc_java_resource_names_plugin_repositories(omit_com_google_protobuf = True)
