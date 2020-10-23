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
    strip_prefix = "rules_python-748aa53d7701e71101dfd15d800e100f6ff8e5d1",
    url = "https://github.com/bazelbuild/rules_python/archive/748aa53d7701e71101dfd15d800e100f6ff8e5d1.zip",
)

http_archive(
    name = "com_google_protobuf",
    sha256 = "1c744a6a1f2c901e68c5521bc275e22bdc66256eeb605c2781923365b7087e5f",
    strip_prefix = "protobuf-3.13.0",
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.13.0.zip"],
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
    strip_prefix = "gapic-generator-2.6.2",
    urls = ["https://github.com/googleapis/gapic-generator/archive/v2.6.2.zip"],
)

# rules_go (support Golang under bazel)
# This is not in the Go section because we override the same, older dependency brought in by gRPC.
# TODO(ndietz): move this back to the Go section if gRPC is updated per https://github.com/grpc/grpc/issues/22172
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "4707e6ba7c01fcfc4f0d340d123bc16e43c2b8ea3f307663d95712b36d2a0e88",
    strip_prefix = "rules_go-0.23.0",
    urls = [
        "https://github.com/bazelbuild/rules_go/archive/v0.23.0.zip",
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
http_archive(
    name = "gapic_generator_java",
    strip_prefix = "gapic-generator-java-89fed885c17ef141584b43324347b64cc632e2c8",
    urls = ["https://github.com/googleapis/gapic-generator-java/archive/89fed885c17ef141584b43324347b64cc632e2c8.zip"],
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

load("@rules_python//python:repositories.bzl", "py_repositories")

py_repositories()

load("@rules_python//python:pip.bzl", "pip_repositories")

pip_repositories()

# Change upstream repository once PR is merged
http_archive(
    name = "gapic_generator_python",
    strip_prefix = "gapic-generator-python-0.33.6",
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/v0.33.6.zip"],
)

load(
    "@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains",
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
    strip_prefix = "gapic-generator-go-0.15.2",
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v0.15.2.tar.gz"],
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
    strip_prefix = "gapic-generator-typescript-1.1.0",
    urls = ["https://github.com/googleapis/gapic-generator-typescript/archive/v1.1.0.tar.gz"],
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
    strip_prefix = "gapic-generator-ruby-9cc95d8f4e05bdfe4ea9c67e6ca670f27c01c8f2",
    #sha256 = "432f708c7107a8dffcf293af03df2114e5072abb57beb04423561603ee91b432",
    urls = ["https://github.com/googleapis/gapic-generator-ruby/archive/9cc95d8f4e05bdfe4ea9c67e6ca670f27c01c8f2.zip"],
)

load("@gapic_generator_ruby//rules_ruby_gapic:repositories.bzl", "gapic_generator_ruby_repositories")

gapic_generator_ruby_repositories()
