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
    strip_prefix = "rules_python-0.5.0",
    url = "https://github.com/bazelbuild/rules_python/archive/0.5.0.tar.gz",
)

http_archive(
    name = "com_google_protobuf",
    sha256 = "8b28fdd45bab62d15db232ec404248901842e5340299a57765e48abe8a80d930",
    strip_prefix = "protobuf-3.20.1",
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.20.1.tar.gz"],
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


##############################################################################
# Go
##############################################################################

# rules_go cannot be updated beyond v0.24.x because in v0.25.x the linker warnings regarding multiple copies of the same package
# became errors. Until rules_go is migrated to use the go_proto_library targets defined in here instead of in go-genproto, we cannot
# update this beyond v0.24.x.
# TODO(ndietz): https://github.com/bazelbuild/rules_go/issues/1986
#
# Furthermore, this must be above the download of gRPC (in C++ section) and rules_gapic because both repositories depend on rules_go
# and we would rather manage our version of rules_go explicitly rather than depend on the version those bring in transitively.
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

http_archive(
    name = "bazel_gazelle",
    sha256 = "62ca106be173579c0a167deb23358fdfe71ffa1e4cfdddf5582af26520f1c66f",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
    ],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

_gapic_generator_go_version = "0.28.0"

http_archive(
    name = "com_googleapis_gapic_generator_go",
    strip_prefix = "gapic-generator-go-%s" % _gapic_generator_go_version,
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v%s.tar.gz" % _gapic_generator_go_version],
    repo_mapping = {
      "@go_googleapis": "@com_google_googleapis",
    },
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

# rules_gapic also depends on rules_go, so it must come after our own dependency on rules_go.
_rules_gapic_version = "0.13.0"

_rules_gapic_sha256 = "1ebbd74b064697f4ff01d8f59764ba8431d52673f48f636be6b135b6da640b8e"

http_archive(
    name = "rules_gapic",
    sha256 = _rules_gapic_sha256,
    strip_prefix = "rules_gapic-%s" % _rules_gapic_version,
    urls = ["https://github.com/googleapis/rules_gapic/archive/v%s.tar.gz" % _rules_gapic_version],
)

load("@rules_gapic//:repositories.bzl", "rules_gapic_repositories")

rules_gapic_repositories()

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

_grpc_version = "1.42.0"

_grpc_sha256 = "9f387689b7fdf6c003fd90ef55853107f89a2121792146770df5486f0199f400"

http_archive(
    name = "com_github_grpc_grpc",
    sha256 = _grpc_sha256,
    strip_prefix = "grpc-%s" % _grpc_version,
    urls = ["https://github.com/grpc/grpc/archive/v%s.zip" % _grpc_version],
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
load("@com_google_protobuf//:protobuf_deps.bzl", "PROTOBUF_MAVEN_ARTIFACTS")

# Starting in protobuf 3.19, protobuf project started to provide
# PROTOBUF_MAVEN_ARTIFACTS variable so that Bazel users can resolve their
# dependencies through maven_install.
# https://github.com/protocolbuffers/protobuf/issues/9132
RULES_JVM_EXTERNAL_TAG = "4.2"
RULES_JVM_EXTERNAL_SHA = "cd1a77b7b02e8e008439ca76fd34f5b07aecb8c752961f9640dea15e9e5ba1ca"

http_archive(
    name = "rules_jvm_external",
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    sha256 = RULES_JVM_EXTERNAL_SHA,
    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
)

load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = PROTOBUF_MAVEN_ARTIFACTS,
    generate_compat_repositories = True,
    repositories = [
        "https://repo.maven.apache.org/maven2/",
    ],
)

_gax_java_version = "2.18.1"

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

# Java microgenerator.
# Must go AFTER java-gax, since both java gax and gapic-generator are written in java and may conflict.
_gapic_generator_java_version = "2.8.1"

http_archive(
    name = "gapic_generator_java",
    strip_prefix = "gapic-generator-java-%s" % _gapic_generator_java_version,
    urls = ["https://github.com/googleapis/gapic-generator-java/archive/v%s.zip" % _gapic_generator_java_version],
)

load("@gapic_generator_java//:repositories.bzl", "gapic_generator_java_repositories")

gapic_generator_java_repositories()

##############################################################################
# Python
##############################################################################
load("@rules_gapic//python:py_gapic_repositories.bzl", "py_gapic_repositories")

py_gapic_repositories()

load("@rules_python//python:pip.bzl", "pip_repositories")

pip_repositories()

_gapic_generator_python_version = "1.0.0"

http_archive(
    name = "gapic_generator_python",
    strip_prefix = "gapic-generator-python-%s" % _gapic_generator_python_version,
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/v%s.zip" % _gapic_generator_python_version],
)

load(
    "@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains",
)

gapic_generator_python()

gapic_generator_register_toolchains()

##############################################################################
# TypeScript
##############################################################################

_gapic_generator_typescript_version = "2.14.5"

_gapic_generator_typescript_sha256 = "f02de5e7ac46eb5b8b6323806c7b2e370191f2ac9604916e8ccb0d8affff6006"

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

# PHP micro-generator
_gapic_generator_php_version = "1.4.6"

http_archive(
    name = "gapic_generator_php",
    strip_prefix = "gapic-generator-php-%s" % _gapic_generator_php_version,
    urls = ["https://github.com/googleapis/gapic-generator-php/archive/v%s.zip" % _gapic_generator_php_version],
)

load("@rules_gapic//php:php_gapic_repositories.bzl", "php", "php_gapic_repositories")

php(
    name = "php",
    prebuilt_phps = ["@gapic_generator_php//rules_php_gapic:resources/php-7.4.15_linux_x86_64.tar.gz"],
    strip_prefix = "php-7.4.15",
    urls = ["https://www.php.net/distributions/php-7.4.15.tar.gz"],
)

php_gapic_repositories()

load("@gapic_generator_php//:repositories.bzl", "gapic_generator_php_repositories")

gapic_generator_php_repositories()

##############################################################################
# C#
##############################################################################

# Required to access the C#-specific common resources config.
_gax_dotnet_version = "Google.Api.Gax-3.3.0"
_gax_dotnet_sha256 = "c4d31345a226987e8551cb81afa685c9322d3f806077d9f02011676cf00c15d9"

http_archive(
    name = "gax_dotnet",
    build_file_content = "exports_files([\"Google.Api.Gax/ResourceNames/CommonResourcesConfig.json\"])",
    sha256 = _gax_dotnet_sha256,
    strip_prefix = "gax-dotnet-%s" % _gax_dotnet_version,
    urls = ["https://github.com/googleapis/gax-dotnet/archive/refs/tags/%s.tar.gz" % _gax_dotnet_version],
)

_gapic_generator_csharp_version = "1.3.19"
_gapic_generator_csharp_sha256 = "0e624db75f11a4d8ca1f8cc5c619c143be312aef892f76fc94695f9723a9c1e9"

http_archive(
    name = "gapic_generator_csharp",
    sha256 = _gapic_generator_csharp_sha256,
    strip_prefix = "gapic-generator-csharp-%s" % _gapic_generator_csharp_version,
    urls = ["https://github.com/googleapis/gapic-generator-csharp/archive/refs/tags/v%s.tar.gz" % _gapic_generator_csharp_version],
)

load("@gapic_generator_csharp//:repositories.bzl", "gapic_generator_csharp_repositories")
gapic_generator_csharp_repositories()


# Version of C# generator targeting GAX v3. This is present so that teams that
# do not want to move immediately to GAX v4 when it comes out (e.g. Ads) are
# able to stick with the GAX-v3-based generator.

_gapic_generator_csharp_gax_v3_version = "1.3.19"
_gapic_generator_csharp_gax_v3_sha256 = "0e624db75f11a4d8ca1f8cc5c619c143be312aef892f76fc94695f9723a9c1e9"

http_archive(
    name = "gapic_generator_csharp_gax_v3",
    sha256 = _gapic_generator_csharp_gax_v3_sha256,
    strip_prefix = "gapic-generator-csharp-%s" % _gapic_generator_csharp_gax_v3_version,
    urls = ["https://github.com/googleapis/gapic-generator-csharp/archive/refs/tags/v%s.tar.gz" % _gapic_generator_csharp_gax_v3_version],
    repo_mapping = {
        "@gapic_generator_restore": "@gapic_generator_restore_gax_v3",
    },
)

load("@gapic_generator_csharp_gax_v3//:repositories.bzl", gapic_generator_csharp_repositories_gax_v3 = "gapic_generator_csharp_repositories")
gapic_generator_csharp_repositories_gax_v3(gapic_generator_suffix = "_gax_v3")

##############################################################################
# Ruby
##############################################################################

_gapic_generator_ruby_version = "v0.13.0"

_gapic_generator_ruby_sha256 = "04ee9e58f29745825dbc8f4a68ba0c3ce2ab955172d90c5d92168bfe8f51f3b7"

http_archive(
    name = "gapic_generator_ruby",
    sha256 = _gapic_generator_ruby_sha256,
    strip_prefix = "gapic-generator-ruby-gapic-generator-%s" % _gapic_generator_ruby_version,
    urls = ["https://github.com/googleapis/gapic-generator-ruby/archive/refs/tags/gapic-generator/%s.tar.gz" % _gapic_generator_ruby_version],
)

load("@gapic_generator_ruby//rules_ruby_gapic:repositories.bzl", "gapic_generator_ruby_repositories")

gapic_generator_ruby_repositories()

##############################################################################
# Discovery
##############################################################################

_disco_to_proto3_converter_version = "c47a76dd3d591478dd1a902413636c06da1153b8"

http_archive(
    name = "com_google_disco_to_proto3_converter",
    strip_prefix = "disco-to-proto3-converter-%s" % _disco_to_proto3_converter_version,
    urls = ["https://github.com/googleapis/disco-to-proto3-converter/archive/%s.zip" % _disco_to_proto3_converter_version],
)

load("@com_google_disco_to_proto3_converter//:repository_rules.bzl", "com_google_disco_to_proto3_converter_properties")

com_google_disco_to_proto3_converter_properties(
    name = "com_google_disco_to_proto3_converter_properties",
    file = "@com_google_disco_to_proto3_converter//:pom.xml",
)

load("@com_google_disco_to_proto3_converter//:repositories.bzl", "com_google_disco_to_proto3_converter_repositories")

com_google_disco_to_proto3_converter_repositories()
