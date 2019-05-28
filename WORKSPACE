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
)

# Note gapic-generator contains java-specific and common code, that is why it is imported in common
# section
http_archive(
    name = "com_google_api_codegen",
    strip_prefix = "gapic-generator-b465d5651c29c344e90515172cbe662fcb296dd8",
    urls = ["https://github.com/googleapis/gapic-generator/archive/b465d5651c29c344e90515172cbe662fcb296dd8.zip"],
)

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
    strip_prefix = "gax-java-6b170195c18e0d8abc8385ef063d6da9773f87de",
    urls = ["https://github.com/googleapis/gax-java/archive/6b170195c18e0d8abc8385ef063d6da9773f87de.zip"],
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

# protoc-java-resource-names-plugin (loaded in com_google_api_codegen_repositories())
# (required to support resource names feature in gapic generator)
load(
    "@com_google_protoc_java_resource_names_plugin//:repositories.bzl",
    "com_google_protoc_java_resource_names_plugin_repositories",
)

com_google_protoc_java_resource_names_plugin_repositories(omit_com_google_protobuf = True)

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
# C++
##############################################################################

http_archive(
    name = "com_google_gapic_generator_cpp",
    strip_prefix = "gapic-generator-cpp-2d9229952b649e53b2e986f5a3031d0d374af9e1",
    urls = ["https://github.com/googleapis/gapic-generator-cpp/archive/2d9229952b649e53b2e986f5a3031d0d374af9e1.zip"],
)

load(
    "@com_google_gapic_generator_cpp//gax:repositories.bzl",
    "com_google_gapic_generator_cpp_gax_repositories",
)

com_google_gapic_generator_cpp_gax_repositories()

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

load(
    "@com_google_gapic_generator_cpp//:repositories.bzl",
    "com_google_gapic_generator_cpp_repositories",
)

com_google_gapic_generator_cpp_repositories()
