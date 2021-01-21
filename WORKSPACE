workspace(
    name = "com_google_googleapis",
    # This tells Bazel that the node_modules directory is special and
    # is managed by the package manager.
    # https://bazelbuild.github.io/rules_nodejs/install.html
    managed_directories = {"@npm": ["@gapic_generator_typescript//:node_modules"]},
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
    strip_prefix = "rules_python-0.1.0",
    url = "https://github.com/bazelbuild/rules_python/archive/0.1.0.tar.gz",
)

http_archive(
    name = "com_google_protobuf",
    sha256 = "d0f5f605d0d656007ce6c8b5a82df3037e1d8fe8b121ed42e536f569dec16113",
    strip_prefix = "protobuf-3.14.0",
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.14.0.tar.gz"],
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
    strip_prefix = "gapic-generator-2.10.4",
    urls = ["https://github.com/googleapis/gapic-generator/archive/v2.10.4.zip"],
)

# rules_go (support Golang under bazel)
# This is not in the Go section because we override the same, older dependency brought in by gRPC.
# TODO(ndietz): move this back to the Go section if gRPC is updated per https://github.com/grpc/grpc/issues/22172
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "dbf5a9ef855684f84cac2e7ae7886c5a001d4f66ae23f6904da0faaaef0d61fc",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.24.11/rules_go-v0.24.11.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.24.11/rules_go-v0.24.11.tar.gz",
    ],
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
    sha256 = "0f330e4734f49d2bfdb9ad195b021720b5dd2e2a534cdf21c7ddc7f7eb42e170",
    strip_prefix = "grpc-1.33.1",
    urls = ["https://github.com/grpc/grpc/archive/v1.33.1.zip"],
)

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

load("@com_github_grpc_grpc//bazel:grpc_extra_deps.bzl", "grpc_extra_deps")

grpc_extra_deps()

load("@build_bazel_rules_apple//apple:repositories.bzl", "apple_rules_dependencies")

apple_rules_dependencies()

load("@build_bazel_apple_support//lib:repositories.bzl", "apple_support_dependencies")

apple_support_dependencies()

##############################################################################
# Java
##############################################################################
# Java microgenerator.
_gapic_generator_java_version = "0.0.18"

http_archive(
    name = "gapic_generator_java",
    strip_prefix = "gapic-generator-java-%s" % _gapic_generator_java_version,
    urls = ["https://github.com/googleapis/gapic-generator-java/archive/v%s.zip" % _gapic_generator_java_version],
)

load("@gapic_generator_java//:repository_rules.bzl", "gapic_generator_java_properties")

gapic_generator_java_properties(
    name = "gapic_generator_java_properties",
    file = "@gapic_generator_java//:dependencies.properties",
)

load("@gapic_generator_java//:repositories.bzl", "gapic_generator_java_repositories")

gapic_generator_java_repositories()

_gax_java_version = "1.59.0"

http_archive(
    name = "com_google_api_gax_java",
    strip_prefix = "gax-java-%s" % _gax_java_version,
    urls = ["https://github.com/googleapis/gax-java/archive/v%s.zip" % _gax_java_version],
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
    strip_prefix = "protoc-java-resource-names-plugin-8d749cb5b7aa2734656e1ad36ceda92894f33153",
    urls = ["https://github.com/googleapis/protoc-java-resource-names-plugin/archive/8d749cb5b7aa2734656e1ad36ceda92894f33153.zip"],
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

load("@rules_python//python:pip.bzl", "pip_repositories")

pip_repositories()

http_archive(
    name = "gapic_generator_python",
    strip_prefix = "gapic-generator-python-0.39.1",
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/v0.39.1.zip"],
)

load(
    "@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains",
)

gapic_generator_python()

gapic_generator_register_toolchains()

##############################################################################
# Go
##############################################################################

# bazel-gazelle (support Golang under bazel)
http_archive(
    name = "bazel_gazelle",
    sha256 = "b85f48fa105c4403326e9525ad2b2cc437babaa6e15a3fc0b1dbab0ab064bc7c",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/bazel-gazelle/releases/download/v0.22.2/bazel-gazelle-v0.22.2.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.22.2/bazel-gazelle-v0.22.2.tar.gz",
    ],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

http_archive(
    name = "com_googleapis_gapic_generator_go",
    strip_prefix = "gapic-generator-go-0.17.1",
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v0.17.1.tar.gz"],
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

load("@com_googleapis_gapic_generator_go//rules_go_gapic:go_gapic_repositories.bzl", "go_gapic_repositories")

go_gapic_repositories()

##############################################################################
# TypeScript
##############################################################################

_gapic_generator_typescript_version = "1.2.8"

_gapic_generator_typescript_sha256 = "1206afaf44143de21881c59646ce6a121f490b8ef193fc81f00bae20e90dbb7d"

### TypeScript generator
http_archive(
    name = "gapic_generator_typescript",
    sha256 = _gapic_generator_typescript_sha256,
    strip_prefix = "gapic-generator-typescript-%s" % _gapic_generator_typescript_version,
    urls = ["https://github.com/googleapis/gapic-generator-typescript/archive/v%s.tar.gz" % _gapic_generator_typescript_version],
)

load("@gapic_generator_typescript//:repositories.bzl", "gapic_generator_typescript_repositories")

gapic_generator_typescript_repositories()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    package_json = ["@gapic_generator_typescript//:package.json"],
)

yarn_install(
    name = "npm",
    package_json = "@gapic_generator_typescript//:package.json",
    yarn_lock = "@gapic_generator_typescript//:yarn.lock",
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

##############################################################################
# C#
##############################################################################

# Required to access the C#-specific common resources config.
http_archive(
    name = "gax_dotnet",
    build_file_content = "exports_files([\"Google.Api.Gax/ResourceNames/CommonResourcesConfig.json\"])",
    strip_prefix = "gax-dotnet-b4bf8c3e67a89e558f06af60f777bd12abe84392",
    urls = ["https://github.com/googleapis/gax-dotnet/archive/b4bf8c3e67a89e558f06af60f777bd12abe84392.zip"],
)

http_archive(
    name = "gapic_generator_csharp",
    strip_prefix = "gapic-generator-csharp-1.3.1",
    urls = ["https://github.com/googleapis/gapic-generator-csharp/archive/v1.3.1.zip"],
)

load("@gapic_generator_csharp//:repositories.bzl", "gapic_generator_csharp_repositories")

gapic_generator_csharp_repositories()

##############################################################################
# Ruby
##############################################################################

http_archive(
    name = "gapic_generator_ruby",
    sha256 = "48e4054927cc163f20e6ecc7e2239e021610fbcc74042f024c638ce4896995fe",
    strip_prefix = "gapic-generator-ruby-gapic-generator-v0.6.10",
    urls = ["https://github.com/googleapis/gapic-generator-ruby/archive/gapic-generator/v0.6.10.zip"],
)

load("@gapic_generator_ruby//rules_ruby_gapic:repositories.bzl", "gapic_generator_ruby_repositories")

gapic_generator_ruby_repositories()
