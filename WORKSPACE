workspace(
    name = "com_google_googleapis",
    # This tells Bazel that the node_modules directory is special and
    # is managed by the package manager.
    # https://bazelbuild.github.io/rules_nodejs/install.html
    managed_directories = {"@npm": ["@gapic_generator_typescript//:node_modules"]}
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

##############################################################################
# Common
##############################################################################

load("//:repository_rules.bzl", "switched_rules_by_language")

switched_rules_by_language(
    name = "com_google_googleapis_imports",
    cc = True,
    csharp = True,
    gapic = True,
    go = True,
    grpc = True,
    java = True,
    nodejs = True,
    php = True,
    python = True,
    ruby = True,
)

# Protobuf depends on very old version of bazel_skylib (forward compatible with the new one).
# Importing older version of bazel_skylib first (this is one of the things that protobuf_deps() call
# below will do) breaks the grpc repositories, so importing the proper version explicitly before
# everything else.
http_archive(
    name = "bazel_skylib",
    urls = ["https://github.com/bazelbuild/bazel-skylib/releases/download/0.9.0/bazel_skylib-0.9.0.tar.gz"],
)

# Python rules should go early in the dependencies list, otherwise a wrong
# version of the library will be selected as a transitive dependency of gRPC.
http_archive(
    name = "rules_python",
    url = "https://github.com/bazelbuild/rules_python/archive/748aa53d7701e71101dfd15d800e100f6ff8e5d1.zip",
    strip_prefix = "rules_python-748aa53d7701e71101dfd15d800e100f6ff8e5d1"
)

http_archive(
    name = "com_google_protobuf",
    strip_prefix = "protobuf-a37cc13b2f6d11303811011b0bfbc867e7c0bf2b",  # this is 3.12.1
    urls = ["https://github.com/protocolbuffers/protobuf/archive/a37cc13b2f6d11303811011b0bfbc867e7c0bf2b.zip"],
)

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

http_archive(
    name = "rules_proto",
    sha256 = "602e7161d9195e50246177e7c55b2f39950a9cf7366f74ed5f22fd45750cd208",
    strip_prefix = "rules_proto-97d8af4dc474595af3900dd85cb3a29ad28cc313",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
        "https://github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
    ],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

# Note gapic-generator contains java-specific and common code, that is why it is imported in common
# section
http_archive(
    name = "com_google_api_codegen",
    strip_prefix = "gapic-generator-2.2.0",
    urls = ["https://github.com/googleapis/gapic-generator/archive/v2.2.0.zip"],
)

# rules_go (support Golang under bazel)
# This is not in the Go section because we override the same, older dependency brought in by gRPC.
# TODO(ndietz): move this back to the Go section if gRPC is updated per https://github.com/grpc/grpc/issues/22172
http_archive(
    name = "io_bazel_rules_go",
    urls = [
        "https://github.com/bazelbuild/rules_go/archive/v0.23.0.zip",
    ],
    strip_prefix = "rules_go-0.23.0",
    sha256 = "4707e6ba7c01fcfc4f0d340d123bc16e43c2b8ea3f307663d95712b36d2a0e88",
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()

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
    strip_prefix = "grpc-8347f4753568b5b66e49111c60ae2841278d3f33",  # this is 1.25.0 with fixes
    urls = ["https://github.com/grpc/grpc/archive/8347f4753568b5b66e49111c60ae2841278d3f33.zip"],
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

##############################################################################
# Java
##############################################################################

http_archive(
    name = "com_google_api_gax_java",
    strip_prefix = "gax-java-730046855da122b26adbaa3fcf535becd8afa292", # 1.55.0 with fixes
    urls = ["https://github.com/googleapis/gax-java/archive/730046855da122b26adbaa3fcf535becd8afa292.zip"],
)

load("@com_google_api_gax_java//:repository_rules.bzl", "com_google_api_gax_java_properties")

com_google_api_gax_java_properties(
    name = "com_google_api_gax_java_properties",
    file = "@com_google_api_gax_java//:dependencies.properties",
)

load("@com_google_api_gax_java//:repositories.bzl", "com_google_api_gax_java_repositories")

com_google_api_gax_java_repositories()

load("@io_grpc_grpc_java//:repositories.bzl", "grpc_java_repositories")

grpc_java_repositories()

# gapic-generator transitive
# (goes AFTER java-gax, since both java gax and gapic-generator are written in java and may conflict)
load("@com_google_api_codegen//:repository_rules.bzl", "com_google_api_codegen_properties")

com_google_api_codegen_properties(
    name = "com_google_api_codegen_properties",
    file = "@com_google_api_codegen//:dependencies.properties",
)

load("@com_google_api_codegen//:repositories.bzl", "com_google_api_codegen_repositories")

http_archive(
    name = "com_google_protoc_java_resource_names_plugin",
    strip_prefix = "protoc-java-resource-names-plugin-64dafb71ea9a385a8da89989f0b9dab925bf4610",
    urls = ["https://github.com/googleapis/protoc-java-resource-names-plugin/archive/64dafb71ea9a385a8da89989f0b9dab925bf4610.zip"],
)

com_google_api_codegen_repositories()

# protoc-java-resource-names-plugin (loaded in com_google_api_codegen_repositories())
# (required to support resource names feature in gapic generator)
load(
    "@com_google_protoc_java_resource_names_plugin//:repositories.bzl",
    "com_google_protoc_java_resource_names_plugin_repositories",
)

com_google_protoc_java_resource_names_plugin_repositories()

##############################################################################
# Python
##############################################################################
load("@com_google_api_codegen//rules_gapic/python:py_gapic_repositories.bzl", "py_gapic_repositories")

py_gapic_repositories()

http_archive(
    name = "protoc_docs_plugin",
    strip_prefix = "protoc-docs-plugin-2bdf14e394bbaa44b81286b1a19c5f229b51c667",
    urls = ["https://github.com/googleapis/protoc-docs-plugin/archive/2bdf14e394bbaa44b81286b1a19c5f229b51c667.zip"],
)

load(
    "@protoc_docs_plugin//:repositories.bzl",
    "protoc_docs_plugin_register_toolchains",
    "protoc_docs_plugin_repositories",
)

protoc_docs_plugin_repositories()

protoc_docs_plugin_register_toolchains()

load("@rules_python//python:repositories.bzl", "py_repositories")
py_repositories()

load("@rules_python//python:pip.bzl", "pip_repositories")
pip_repositories()

# Change upstream repository once PR is merged
http_archive(
    name = "gapic_generator_python",
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/0.25.0.zip"],
    strip_prefix = "gapic-generator-python-0.25.0",
)

load("@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains"
)

gapic_generator_python()

gapic_generator_register_toolchains()

load("@gapic_generator_python_pip_deps//:requirements.bzl", "pip_install")

pip_install()

##############################################################################
# Go
##############################################################################

# bazel-gazelle (support Golang under bazel)
http_archive(
    name = "bazel_gazelle",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/bazel-gazelle/releases/download/v0.21.0/bazel-gazelle-v0.21.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.21.0/bazel-gazelle-v0.21.0.tar.gz",
    ],
    sha256 = "bfd86b3cbe855d6c16c6fce60d76bd51f5c8dbc9cfcaef7a2bb5c1aafd0710e8",
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

http_archive(
    name = "com_googleapis_gapic_generator_go",
    strip_prefix = "gapic-generator-go-0.14.3",
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v0.14.3.tar.gz"],
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

load("@com_googleapis_gapic_generator_go//rules_go_gapic:go_gapic_repositories.bzl", "go_gapic_repositories")

go_gapic_repositories()

##############################################################################
# TypeScript
##############################################################################

### TypeScript generator
http_archive(
    name = "gapic_generator_typescript",
    urls = ["https://github.com/googleapis/gapic-generator-typescript/archive/v1.0.0.tar.gz"],
    strip_prefix = "gapic-generator-typescript-1.0.0",
)

load("@gapic_generator_typescript//:repositories.bzl", "gapic_generator_typescript_repositories")
gapic_generator_typescript_repositories()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")
node_repositories(
    package_json = ["@gapic_generator_typescript//:package.json"]
)
yarn_install(
    name = "npm",
    package_json = "@gapic_generator_typescript//:package.json",
    yarn_lock = "@gapic_generator_typescript//:yarn.lock",
)
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")
ts_setup_workspace()

# Note: TypeScript libraries use third-party protobuf dependency,
# protobuf.js, and official Bazel rules have a special rule to
# install this dependency and its transitive dependencies.
yarn_install(
    name = "build_bazel_rules_typescript_protobufs_compiletime_deps",
    package_json = "@npm_bazel_labs//protobufjs:package.json",
    yarn_lock = "@npm_bazel_labs//protobufjs:yarn.lock",
)

##############################################################################
# PHP
##############################################################################

load("@com_google_api_codegen//rules_gapic/php:php_gapic_repositories.bzl", "php", "php_gapic_repositories")

php(
    name = "php",
    prebuilt_phps = ["@com_google_api_codegen//rules_gapic/php:resources/php-7.1.30_linux_x86_64.tar.gz"],
    strip_prefix = "php-7.1.30",
    urls = ["https://www.php.net/distributions/php-7.1.30.tar.gz"],
)

php_gapic_repositories()
