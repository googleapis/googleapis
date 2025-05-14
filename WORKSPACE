workspace(
    name = "com_google_googleapis",
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

_bazel_skylib_version = "1.4.0"

_bazel_skylib_sha256 = "f24ab666394232f834f74d19e2ff142b0af17466ea0c69a3f4c276ee75f6efce"

http_archive(
    name = "bazel_skylib",
    sha256 = _bazel_skylib_sha256,
    urls = ["https://github.com/bazelbuild/bazel-skylib/releases/download/{0}/bazel-skylib-{0}.tar.gz".format(_bazel_skylib_version)],
)

_bazel_features_version = "1.2.0"

_bazel_features_sha256 = "b8789c83c893d7ef3041d3f2795774936b27ff61701a705df52fd41d6ddbf692"

http_archive(
    name = "bazel_features",
    sha256 = _bazel_features_sha256,
    strip_prefix = "bazel_features-%s" % _bazel_features_version,
    url = "https://github.com/bazel-contrib/bazel_features/releases/download/v{0}/bazel_features-v{0}.tar.gz".format(_bazel_features_version),
)

# Protobuf depends on very old version of rules_jvm_external.
# Importing older version of rules_jvm_external first (this is one of the things that protobuf_deps() call
# below will do) breaks the Java client library generation process, so importing the proper version explicitly before calling protobuf_deps().
RULES_JVM_EXTERNAL_TAG = "4.5"

RULES_JVM_EXTERNAL_SHA = "b17d7388feb9bfa7f2fa09031b32707df529f26c91ab9e5d909eb1676badd9a6"

http_archive(
    name = "rules_jvm_external",
    sha256 = RULES_JVM_EXTERNAL_SHA,
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
)

load("@rules_jvm_external//:repositories.bzl", "rules_jvm_external_deps")

rules_jvm_external_deps()

load("@rules_jvm_external//:setup.bzl", "rules_jvm_external_setup")

rules_jvm_external_setup()

# Python rules should go early in the dependencies list, otherwise a wrong
# version of the library will be selected as a transitive dependency of gRPC.
_rules_python_version = "0.26.0"

_rules_python_sha256 = "9d04041ac92a0985e344235f5d946f71ac543f1b1565f2cdbc9a2aaee8adf55b"

http_archive(
    name = "rules_python",
    sha256 = _rules_python_sha256,
    strip_prefix = "rules_python-{}".format(_rules_python_version),
    url = "https://github.com/bazelbuild/rules_python/archive/{}.tar.gz".format(_rules_python_version),
)

http_archive(
    name = "rules_pkg",
    sha256 = "8a298e832762eda1830597d64fe7db58178aa84cd5926d76d5b744d6558941c2",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.7.0/rules_pkg-0.7.0.tar.gz",
        "https://github.com/bazelbuild/rules_pkg/releases/download/0.7.0/rules_pkg-0.7.0.tar.gz",
    ],
)

load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

rules_pkg_dependencies()

# This and gazelle must be above the download of gRPC (in C++ section) and
# rules_gapic_repositories because both depend on them and we need to manage
# our versions explicitly rather than depend on the version those bring in
# transitively.
_io_bazel_rules_go_version = "0.46.0"

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "80a98277ad1311dacd837f9b16db62887702e9f1d1c4c9f796d0121a46c8e184",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v{0}/rules_go-v{0}.zip".format(_io_bazel_rules_go_version),
        "https://github.com/bazelbuild/rules_go/releases/download/v{0}/rules_go-v{0}.zip".format(_io_bazel_rules_go_version),
    ],
)

_bazel_gazelle_version = "0.36.0"

http_archive(
    name = "bazel_gazelle",
    sha256 = "75df288c4b31c81eb50f51e2e14f4763cb7548daae126817247064637fd9ea62",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v{0}/bazel-gazelle-v{0}.tar.gz".format(_bazel_gazelle_version),
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v{0}/bazel-gazelle-v{0}.tar.gz".format(_bazel_gazelle_version),
    ],
)

##############################################################################
# C++
##############################################################################
# C++ must go before everything else, since the key dependencies (protobuf and gRPC)
# are C++ repositories and they have the highest chance to have the correct versions of the
# transitive dependencies (for those dependencies which are shared by many other repositories
# imported in this workspace).
#
# This comes before Protobuf's section, meaning we prioritize gRPC's dependencies
# (including upb and absl) over Protobuf's. Because the gRPC team prioritizes their
# own dependencies when they test gRPC and Protobuf compatibility, gRPC's dependencies have
# better chance to make it work.
#
# Note, even though protobuf and gRPC are mostly written in C++, they are used to generate stuff
# for most of the other languages as well, so they can be considered as the core cross-language
# dependencies.

_grpc_version = "1.60.0"

_grpc_sha256 = "09640607a340ff0d97407ed22fe4adb177e5bb85329821122084359cd57c3dea"

http_archive(
    name = "com_github_grpc_grpc",
    sha256 = _grpc_sha256,
    strip_prefix = "grpc-%s" % _grpc_version,
    urls = ["https://github.com/grpc/grpc/archive/v%s.zip" % _grpc_version],
)

# Explicitly declaring Protobuf version, while Protobuf dependency is already
# instantiated in grpc_deps().
_protobuf_version = "25.3"

_protobuf_sha256 = "d19643d265b978383352b3143f04c0641eea75a75235c111cc01a1350173180e"

http_archive(
    name = "com_google_protobuf",
    sha256 = _protobuf_sha256,
    strip_prefix = "protobuf-%s" % _protobuf_version,
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v%s.tar.gz" % _protobuf_version],
)

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

load("@com_google_protobuf//:protobuf_deps.bzl", "PROTOBUF_MAVEN_ARTIFACTS", "protobuf_deps")

# This is actually already done within grpc_deps but calling this for Bazel convention.
protobuf_deps()

# gRPC enforces a specific version of Go toolchain which conflicts with our build.
# All the relevant parts of grpc_extra_deps() are imported in this  WORKSPACE file
# explicitly, that is why we do not call grpc_extra_deps() here and call
# apple_rules_dependencies and apple_support_dependencies macros explicitly.

load("@build_bazel_rules_apple//apple:repositories.bzl", "apple_rules_dependencies")

apple_rules_dependencies()

load("@build_bazel_apple_support//lib:repositories.bzl", "apple_support_dependencies")

apple_support_dependencies()

# End of C++ section

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

# rules_gapic also depends on rules_go, so it must come after our own dependency on rules_go.
# It must also come before gapic-generator-go so as to ensure that it does not bring in an old
# version of rules_gapic.
_rules_gapic_version = "1.0.0"

http_archive(
    name = "rules_gapic",
    strip_prefix = "rules_gapic-%s" % _rules_gapic_version,
    urls = ["https://github.com/googleapis/rules_gapic/archive/v%s.tar.gz" % _rules_gapic_version],
)

_gapic_generator_go_version = "0.52.0"

http_archive(
    name = "com_googleapis_gapic_generator_go",
    strip_prefix = "gapic-generator-go-%s" % _gapic_generator_go_version,
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v%s.tar.gz" % _gapic_generator_go_version],
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

# rules_go and gazelle dependencies are loaded after gapic-generator-go
# dependencies to ensure that they do not override any of the go_repository
# dependencies of gapic-generator-go.
load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_register_toolchains(version = "1.22.11")

go_rules_dependencies()

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

load("@rules_gapic//:repositories.bzl", "rules_gapic_repositories")

rules_gapic_repositories()

##############################################################################
# Java
##############################################################################

# Starting in protobuf 3.19, protobuf project started to provide
# PROTOBUF_MAVEN_ARTIFACTS variable so that Bazel users can resolve their
# dependencies through maven_install.
# https://github.com/protocolbuffers/protobuf/issues/9132

load("@rules_jvm_external//:defs.bzl", "maven_install")

_gapic_generator_java_version = "2.58.0"

http_archive(
    name = "gapic_generator_java",
    strip_prefix = "sdk-platform-java-%s" % _gapic_generator_java_version,
    urls = ["https://github.com/googleapis/sdk-platform-java/archive/v%s.zip" % _gapic_generator_java_version],
)

# gax-java is part of sdk-platform-java repository
http_archive(
    name = "com_google_api_gax_java",
    strip_prefix = "sdk-platform-java-%s/gax-java" % _gapic_generator_java_version,
    urls = ["https://github.com/googleapis/sdk-platform-java/archive/v%s.zip" % _gapic_generator_java_version],
)

load("@com_google_api_gax_java//:repository_rules.bzl", "com_google_api_gax_java_properties")

com_google_api_gax_java_properties(
    name = "com_google_api_gax_java_properties",
    file = "@com_google_api_gax_java//:dependencies.properties",
)

load("@com_google_api_gax_java//:repositories.bzl", "com_google_api_gax_java_repositories")

com_google_api_gax_java_repositories()

load("@io_grpc_grpc_java//:repositories.bzl", "IO_GRPC_GRPC_JAVA_ARTIFACTS", "grpc_java_repositories")

grpc_java_repositories()

load("@envoy_api//bazel:repositories.bzl", "api_dependencies")

api_dependencies()

maven_install(
    artifacts = [
                    "com.google.api:gapic-generator-java:" + _gapic_generator_java_version,
                ] + PROTOBUF_MAVEN_ARTIFACTS +
                IO_GRPC_GRPC_JAVA_ARTIFACTS,
    #Update this False for local development
    fail_on_missing_checksum = True,
    generate_compat_repositories = True,
    repositories = [
        "m2Local",
        "https://repo.maven.apache.org/maven2/",
    ],
)

load("@maven//:compat.bzl", "compat_repositories")

compat_repositories()

##############################################################################
# Python
##############################################################################
load("@rules_gapic//python:py_gapic_repositories.bzl", "py_gapic_repositories")

py_gapic_repositories()

_gapic_generator_python_version = "1.25.0"

_gapic_generator_python_sha256 = "29a395fd13e9eef6a52006745c301b2c420dde2269e3dca2baa81132092344dd"

http_archive(
    name = "gapic_generator_python",
    sha256 = _gapic_generator_python_sha256,
    strip_prefix = "gapic-generator-python-%s" % _gapic_generator_python_version,
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/v%s.zip" % _gapic_generator_python_version],
)

load(
    "@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains",
)
load("@rules_python//python:repositories.bzl", "py_repositories")

py_repositories()

load("@rules_python//python:pip.bzl", "pip_parse")

pip_parse(
    name = "gapic_generator_python_pip_deps",
    requirements_lock = "@gapic_generator_python//:requirements.txt",
)

load("@gapic_generator_python_pip_deps//:requirements.bzl", "install_deps")

install_deps()

gapic_generator_python()

gapic_generator_register_toolchains()

##############################################################################
# TypeScript
##############################################################################

_gapic_generator_typescript_version = "4.9.0"

_gapic_generator_typescript_sha256 = "223fcf700ff27ab156b969f79ac802178a5fec73a9c09c603fa022ef998193df"

### TypeScript generator
http_archive(
    name = "gapic_generator_typescript",
    sha256 = _gapic_generator_typescript_sha256,
    strip_prefix = "gapic-generator-typescript-%s" % _gapic_generator_typescript_version,
    urls = ["https://github.com/googleapis/gapic-generator-typescript/archive/v%s.tar.gz" % _gapic_generator_typescript_version],
)

load("@gapic_generator_typescript//:repositories.bzl", "gapic_generator_typescript_repositories")

gapic_generator_typescript_repositories()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    ts_version_from = "@gapic_generator_typescript//:package.json",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@aspect_rules_js//js:toolchains.bzl", "DEFAULT_NODE_VERSION", "rules_js_register_toolchains")

rules_js_register_toolchains(node_version = DEFAULT_NODE_VERSION)

load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock", "pnpm_repository")

npm_translate_lock(
    name = "npm",
    data = ["@gapic_generator_typescript//:package.json"],
    pnpm_lock = "@gapic_generator_typescript//:pnpm-lock.yaml",
    update_pnpm_lock = True,
)

pnpm_repository(name = "pnpm")

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

##############################################################################
# PHP
##############################################################################

# PHP micro-generator
_gapic_generator_php_version = "1.18.3"

http_archive(
    name = "gapic_generator_php",
    strip_prefix = "gapic-generator-php-%s" % _gapic_generator_php_version,
    urls = ["https://github.com/googleapis/gapic-generator-php/archive/v%s.zip" % _gapic_generator_php_version],
)

load("@rules_gapic//php:php_gapic_repositories.bzl", "php_gapic_repositories")

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

_gapic_generator_csharp_version = "1.4.33"

_gapic_generator_csharp_sha256 = "f4c790c7541c7a52f2995d78185d2dbea75d48c9c93e77f78e9d867781bc9f5e"

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

_gapic_generator_ruby_version = "v0.45.1"

_gapic_generator_ruby_sha256 = "a1afab1d286df6077f68ce2690583765376fce0aa57b1a08605bfa708b413b62"

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

_disco_to_proto3_converter_version = "ebc9e9e267bfbc9a1173dd5f212a2dd03bf7b9d5"

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
