workspace(name = "com_google_googleapis")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

##############################################################################
# Common
##############################################################################

load("//:repository_rules.bzl", "switched_rules_by_language")

switched_rules_by_language(
    name = "com_google_googleapis_imports",
    cc = True,
    gapic = True,
    go = True,
    grpc = True,
    java = True,
    nodejs = True,
    php = True,
    ruby = True,
    csharp = True,
)

# Depending on one of the latest commits in grpc, since the protobuf_deps published in 3.9.1 is broken
# The transitive dependencies of protobuf will be imported after grpc
http_archive(
    name = "com_google_protobuf",
    strip_prefix = "protobuf-c60aaf79e63b911b2c04c04e1eacb4f3c36ef790", # this is 3.9.1 with fixes
    urls = ["https://github.com/protocolbuffers/protobuf/archive/c60aaf79e63b911b2c04c04e1eacb4f3c36ef790.zip"],
)

# Note gapic-generator contains java-specific and common code, that is why it is imported in common
# section
http_archive(
    name = "com_google_api_codegen",
    strip_prefix = "gapic-generator-708b97b95ae53ffd8f3d73b7c4661003df053c0e",
    urls = ["https://github.com/googleapis/gapic-generator/archive/708b97b95ae53ffd8f3d73b7c4661003df053c0e.zip"],
)

##############################################################################
# C++
##############################################################################
# C++ must go before everything else, since the key dependencies (protobuf and gRPC)
# are C++ repositories and they have the highest chance to have the correct versions of the
# transitive dependencies (for those dependencies which are shared by many other repositories
# imported in this workspace).
#
# Note, even though protobuf and gRPC are mostly written in C++, they are used to generate stuff
# for most of the other languages as well, so they can be considered as the core cross-language
# dependencies.

http_archive(
    name = "com_github_grpc_grpc",
    strip_prefix = "grpc-7c0764918b9f33cab507ff483b4be849b0203ec4", # this is 1.23.0 with fixes
    urls = ["https://github.com/grpc/grpc/archive/7c0764918b9f33cab507ff483b4be849b0203ec4.zip"],
)

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

load("@upb//bazel:repository_defs.bzl", "bazel_version_repository")
bazel_version_repository(
    name = "bazel_version",
)

load("@build_bazel_rules_apple//apple:repositories.bzl", "apple_rules_dependencies")
apple_rules_dependencies()

load("@build_bazel_apple_support//lib:repositories.bzl", "apple_support_dependencies")
apple_support_dependencies()

# Making sure that protobuf transitive dependencies are imported after gRPC
load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

##############################################################################
# Java
##############################################################################

# java_gapic artifacts runtime dependencies (gax-java)
#
# Keeping it here to see how this goes (what will be more maintainable: direct import of gax or via
# gapic-generator).
#
#load("@com_google_api_codegen//rules_gapic/java:java_gapic_repositories.bzl", "java_gapic_repositories")
#
#java_gapic_repositories()

http_archive(
    name = "com_google_api_gax_java",
    strip_prefix = "gax-java-425d9111bc8a2e2c950e60b7e925de83d00b9da9",
    urls = ["https://github.com/googleapis/gax-java/archive/425d9111bc8a2e2c950e60b7e925de83d00b9da9.zip"],
)

load("@com_google_api_gax_java//:repository_rules.bzl", "com_google_api_gax_java_properties")

com_google_api_gax_java_properties(
    name = "com_google_api_gax_java_properties",
    file = "@com_google_api_gax_java//:dependencies.properties",
)

load("@com_google_api_gax_java//:repositories.bzl", "com_google_api_gax_java_repositories")

com_google_api_gax_java_repositories()

# gapic-generator transitive
# (goes AFTER java-gax, since both java gax and gapic-generator are written in java and may conflict)
load("@com_google_api_codegen//:repository_rules.bzl", "com_google_api_codegen_properties")

com_google_api_codegen_properties(
    name = "com_google_api_codegen_properties",
    file = "@com_google_api_codegen//:dependencies.properties",
)

load("@com_google_api_codegen//:repositories.bzl", "com_google_api_codegen_repositories")

com_google_api_codegen_repositories()

http_archive(
    name = "com_google_protoc_java_resource_names_plugin",
    strip_prefix = "protoc-java-resource-names-plugin-86949f7d0f25546499acceb12c9c1a5741c71617",
    urls = ["https://github.com/googleapis/protoc-java-resource-names-plugin/archive/86949f7d0f25546499acceb12c9c1a5741c71617.zip"],
)

# protoc-java-resource-names-plugin (loaded in com_google_api_codegen_repositories())
# (required to support resource names feature in gapic generator)
load(
    "@com_google_protoc_java_resource_names_plugin//:repositories.bzl",
    "com_google_protoc_java_resource_names_plugin_repositories",
)

com_google_protoc_java_resource_names_plugin_repositories()

##############################################################################
# Go
##############################################################################

# rules_go (support Golang under bazel)
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "a82a352bffae6bee4e95f68a8d80a70e87f42c4741e6a448bec11998fcc82329",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.18.5/rules_go-0.18.5.tar.gz",
)

load("@io_bazel_rules_go//go:deps.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

# bazel-gazelle (support Golang under bazel)
http_archive(
    name = "bazel_gazelle",
    strip_prefix = "bazel-gazelle-0.17.0",
    urls = ["https://github.com/bazelbuild/bazel-gazelle/archive/0.17.0.zip"],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

# go_gapic artifacts runtime dependencies (gax-go)
load("@com_google_api_codegen//rules_gapic/go:go_gapic_repositories.bzl", "go_gapic_repositories")

go_gapic_repositories()

##############################################################################
# PHP
##############################################################################

load("@com_google_api_codegen//rules_gapic/php:php_gapic_repositories.bzl", "php", "php_gapic_repositories")

php(
    name = "php",
    version = "7.1.30",
)

php_gapic_repositories()
