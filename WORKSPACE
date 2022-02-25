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
    sha256 = "9111bf0b542b631165fadbd80aa60e7fb25b25311c532139ed2089d76ddf6dd7",
    strip_prefix = "protobuf-3.18.1",
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.18.1.tar.gz"],
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

# rules_go (support Golang under bazel)
# This is not in the Go section because we override the same, older dependency brought in by gRPC.
# TODO(ndietz): move this back to the Go section if gRPC is updated per https://github.com/grpc/grpc/issues/22172
#
# rules_go cannot be updated beyond v0.24.x because in v0.25.x the linker warnings regarding multiple copies of the same package
# became errors. Until rules_go is migrated to use the go_proto_library targets defined in here instead of in go-genproto, we cannot
# update this beyong v0.24.x.
# TODO(ndietz): https://github.com/bazelbuild/rules_go/issues/1986
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "dbf5a9ef855684f84cac2e7ae7886c5a001d4f66ae23f6904da0faaaef0d61fc",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.24.11/rules_go-v0.24.11.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.24.11/rules_go-v0.24.11.tar.gz",
    ],
)

# bazel-gazelle (support Golang under bazel)
http_archive(
    name = "bazel_gazelle",
    sha256 = "62ca106be173579c0a167deb23358fdfe71ffa1e4cfdddf5582af26520f1c66f",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")

# Override the go-genproto dependency to enable use of GapicMetadata types.
#
# TODO(noahdietz): remove with next rules_go release.
# https://github.com/googleapis/gapic-generator-go/issues/529
go_repository(
    name = "org_golang_google_genproto",
    build_file_proto_mode = "disable_global",
    importpath = "google.golang.org/genproto",
    sum = "h1:Et6SkiuvnBn+SgrSYXs/BrUpGB4mbdwt4R3vaPIlicA=",
    version = "v0.0.0-20220107163113-42d7afdf6368",
)

go_rules_dependencies()

go_register_toolchains()

gazelle_dependencies()

_rules_gapic_version = "0.12.0"

_rules_gapic_sha256 = "b5953a97a2e10b72ce9376a20f8446a55a30823c2984c42e19da20efffb57858"

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
_gax_java_version = "2.12.2"

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
_gapic_generator_java_version = "2.6.1"

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

_gapic_generator_python_version = "0.63.5"

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
# Go
##############################################################################

_gapic_generator_go_version = "0.25.0"

http_archive(
    name = "com_googleapis_gapic_generator_go",
    strip_prefix = "gapic-generator-go-%s" % _gapic_generator_go_version,
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v%s.tar.gz" % _gapic_generator_go_version],
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

##############################################################################
# TypeScript
##############################################################################

_gapic_generator_typescript_version = "2.14.0"

_gapic_generator_typescript_sha256 = "b49689aec9a9ba2745f9c02f0ed8419bc581eb8142e542de64263ba0ccab6573"

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

_gapic_generator_csharp_version = "1.3.17"

_gapic_generator_csharp_sha256 = "c32121547a99e75a21630bedcf736a8ae4cb5b99ba9c8646f00a4306a5f7ac31"

http_archive(
    name = "gapic_generator_csharp",
    sha256 = _gapic_generator_csharp_sha256,
    strip_prefix = "gapic-generator-csharp-%s" % _gapic_generator_csharp_version,
    urls = ["https://github.com/googleapis/gapic-generator-csharp/archive/refs/tags/v%s.tar.gz" % _gapic_generator_csharp_version],
)

load("@gapic_generator_csharp//:repositories.bzl", "gapic_generator_csharp_repositories")

gapic_generator_csharp_repositories()

##############################################################################
# Ruby
##############################################################################

_gapic_generator_ruby_version = "v0.10.7"

_gapic_generator_ruby_sha256 = "730c6e8708a861c6f1db80ed3ebd781e18c07476269ee3fe4582424fb367481a"

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

_disco_to_proto3_converter_version = "ce8d8732120cdfb5bf4847c3238b5be8acde87e3"

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
