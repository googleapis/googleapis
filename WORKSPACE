workspace(
    name = "com_google_googleapis",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

##############################################################################
# Generator versions stored in generator-versions.json
##############################################################################

load("//:load_json.bzl", "load_json")

load_json(
    name = "generator_versions",
    src = "//:generator-versions.json",
    variable_name = "generator_versions",
)

load("@generator_versions//:json.bzl", "generator_versions")

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
    go_test = True,
    grpc = True,
    java = True,
    nodejs = True,
    php = True,
    python = True,
    ruby = True,
)

_bazel_skylib_version = "1.7.1"

_bazel_skylib_sha256 = "bc283cdfcd526a52c3201279cda4bc298652efa898b10b4db0837dc51652756f"

http_archive(
    name = "bazel_skylib",
    sha256 = _bazel_skylib_sha256,
    urls = ["https://github.com/bazelbuild/bazel-skylib/releases/download/{0}/bazel-skylib-{0}.tar.gz".format(_bazel_skylib_version)],
)

_bazel_features_version = "1.25.0"

_bazel_features_sha256 = "66f363065d6693a6f958893114d246698188e63456c64350f58000490b8f2d59"

http_archive(
    name = "bazel_features",
    sha256 = _bazel_features_sha256,
    strip_prefix = "bazel_features-%s" % _bazel_features_version,
    url = "https://github.com/bazel-contrib/bazel_features/releases/download/v{0}/bazel_features-v{0}.tar.gz".format(_bazel_features_version),
)

# Protobuf depends on very old version of rules_jvm_external.
# Importing older version of rules_jvm_external first (this is one of the things that protobuf_deps() call
# below will do) breaks the Java client library generation process, so importing the proper version explicitly before calling protobuf_deps().
RULES_JVM_EXTERNAL_TAG = "5.3"

RULES_JVM_EXTERNAL_SHA = "6cc8444b20307113a62b676846c29ff018402fd4c7097fcd6d0a0fd5f2e86429"

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
_io_bazel_rules_go_version = "0.49.0"

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "d93ef02f1e72c82d8bb3d5169519b36167b33cf68c252525e3b9d3d5dd143de7",
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

_absl_version = "20240722.0"  # Matches requirements for gRPC 1.74

_absl_sha256 = "f50e5ac311a81382da7fa75b97310e4b9006474f9560ac46f54a9967f07d4ae3"

http_archive(
    name = "com_google_absl",
    sha256 = _absl_sha256,
    strip_prefix = "abseil-cpp-%s" % _absl_version,
    urls = ["https://github.com/abseil/abseil-cpp/archive/refs/tags/%s.tar.gz" % _absl_version],
)

_grpc_version = "1.78.1"

_grpc_sha256 = "f9b1d9fe1648024150593efa077ee0f600f9823a21e9d618b4f304e6c09c9902"

http_archive(
    name = "com_github_grpc_grpc",
    repo_mapping = {
        "@abseil-cpp": "@com_google_absl",
    },
    sha256 = _grpc_sha256,
    strip_prefix = "grpc-%s" % _grpc_version,
    urls = ["https://github.com/grpc/grpc/archive/v%s.zip" % _grpc_version],
)

# Explicitly declaring Protobuf version, while Protobuf dependency is already
# instantiated in grpc_deps().
_protobuf_version = "31.0"

_protobuf_sha256 = "2b695cb1eaef8e173f884235ee6d55f57186e95d89ebb31361ee55cb5fd1b996"

http_archive(
    name = "com_google_protobuf",
    repo_mapping = {
        "@abseil-cpp": "@com_google_absl",
        "@protobuf_maven": "@maven",
    },
    sha256 = _protobuf_sha256,
    strip_prefix = "protobuf-%s" % _protobuf_version,
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v%s.tar.gz" % _protobuf_version],
)

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")

grpc_deps()

# Protobuf 31.0 and later use abseil-cpp name for Abseil.
# We map it to com_google_absl which is the name used by gRPC.
# Defining it before protobuf_deps() ensures that Protobuf won't try to download its own.

load("@com_google_protobuf//:protobuf_deps.bzl", "PROTOBUF_MAVEN_ARTIFACTS", "protobuf_deps")

# This is actually already done within grpc_deps but calling this for Bazel convention.
protobuf_deps()

load("@rules_python//python:repositories.bzl", "py_repositories")

py_repositories()

load("@rules_python//python:pip.bzl", "pip_parse")

pip_parse(
    name = "protobuf_pip_deps",
    requirements_lock = "@com_google_protobuf//:python/requirements.txt",
)

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
    sha256 = "6fb6767d1bef535310547e03247f7518b03487740c11b6c6adb7952033fe1295",
    strip_prefix = "rules_proto-6.0.2",
    url = "https://github.com/bazelbuild/rules_proto/releases/download/6.0.2/rules_proto-6.0.2.tar.gz",
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies")

rules_proto_dependencies()

http_archive(
    name = "rules_java",
    sha256 = "6901869e94443ef199517548b792190f845a90757a31b40285a7309cf8c10557",
    url = "https://github.com/bazelbuild/rules_java/releases/download/8.6.1/rules_java-8.6.1.tar.gz",
)

load("@rules_java//java:rules_java_deps.bzl", "rules_java_dependencies")

rules_java_dependencies()

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

_gapic_generator_go_commit = generator_versions["go"]["commit"]

_gapic_generator_go_version = generator_versions["go"]["version"]

_gapic_generator_go_sha256 = generator_versions["go"]["sha"]

http_archive(
    name = "com_googleapis_gapic_generator_go",
    sha256 = _gapic_generator_go_sha256,
    strip_prefix = "gapic-generator-go-%s" % _gapic_generator_go_version if _gapic_generator_go_version else "gapic-generator-go-%s" % _gapic_generator_go_commit,
    urls = ["https://github.com/googleapis/gapic-generator-go/archive/v%s.tar.gz" % _gapic_generator_go_version if _gapic_generator_go_version else "https://github.com/googleapis/gapic-generator-go/archive/%s.tar.gz" % _gapic_generator_go_commit],
)

load("@com_googleapis_gapic_generator_go//:repositories.bzl", "com_googleapis_gapic_generator_go_repositories")

com_googleapis_gapic_generator_go_repositories()

# rules_go and gazelle dependencies are loaded after gapic-generator-go
# dependencies to ensure that they do not override any of the go_repository
# dependencies of gapic-generator-go.
load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_register_toolchains(version = "1.24.9")

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

_gapic_generator_java_commit = generator_versions["java"]["commit"]

_gapic_generator_java_version = generator_versions["java"]["version"]

_gapic_generator_java_sha256 = generator_versions["java"]["sha"]

http_archive(
    name = "gapic_generator_java",
    sha256 = _gapic_generator_java_sha256,
    strip_prefix = "sdk-platform-java-%s" % _gapic_generator_java_version if _gapic_generator_java_version else "sdk-platform-java-%s" % _gapic_generator_java_commit,
    urls = ["https://github.com/googleapis/sdk-platform-java/archive/v%s.zip" % _gapic_generator_java_version if _gapic_generator_java_version else "https://github.com/googleapis/sdk-platform-java/archive/%s.zip" % _gapic_generator_java_commit],
)

# gax-java is part of sdk-platform-java repository
http_archive(
    name = "com_google_api_gax_java",
    sha256 = _gapic_generator_java_sha256,
    strip_prefix = "sdk-platform-java-%s/gax-java" % _gapic_generator_java_version if _gapic_generator_java_version else "sdk-platform-java-%s/gax-java" % _gapic_generator_java_commit,
    urls = ["https://github.com/googleapis/sdk-platform-java/archive/v%s.zip" % _gapic_generator_java_version if _gapic_generator_java_version else "https://github.com/googleapis/sdk-platform-java/archive/%s.zip" % _gapic_generator_java_commit],
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
    name = "maven",
    artifacts = [
                    "com.google.api:gapic-generator-java:" + _gapic_generator_java_version,
                ] + PROTOBUF_MAVEN_ARTIFACTS +
                IO_GRPC_GRPC_JAVA_ARTIFACTS,
    #Update this False for local development
    fail_on_missing_checksum = True,
    generate_compat_repositories = True,
    repositories = [
        "m2Local",
        "https://repo.maven.apache.org/maven2",
    ],
)

##############################################################################
# Python
##############################################################################

# Load Python-specific gRPC deps
load("@com_github_grpc_grpc//bazel:grpc_python_deps.bzl", "grpc_python_deps")

grpc_python_deps()

load("@rules_gapic//python:py_gapic_repositories.bzl", "py_gapic_repositories")

py_gapic_repositories()

_gapic_generator_python_commit = generator_versions["python"]["commit"]

_gapic_generator_python_version = generator_versions["python"]["version"]

_gapic_generator_python_sha256 = generator_versions["python"]["sha"]

http_archive(
    name = "gapic_generator_python",
    sha256 = _gapic_generator_python_sha256,
    strip_prefix = "gapic-generator-python-%s" % _gapic_generator_python_version if _gapic_generator_python_version else "gapic-generator-python-%s" % _gapic_generator_python_commit,
    urls = ["https://github.com/googleapis/gapic-generator-python/archive/v%s.zip" % _gapic_generator_python_version if _gapic_generator_python_version else "https://github.com/googleapis/gapic-generator-python/archive/%s.tar.gz" % _gapic_generator_python_commit],
)

load(
    "@gapic_generator_python//:repositories.bzl",
    "gapic_generator_python",
    "gapic_generator_register_toolchains",
)

py_repositories()

pip_parse(
    name = "gapic_generator_python_pip_deps",
    extra_pip_args = [
        "--index-url=https://pypi.org/simple",
        "--no-cache-dir",
    ],
    requirements_lock = "@gapic_generator_python//:requirements.txt",
)

load("@gapic_generator_python_pip_deps//:requirements.bzl", "install_deps")

install_deps()

gapic_generator_python()

gapic_generator_register_toolchains()

##############################################################################
# TypeScript
##############################################################################

_gapic_generator_typescript_commit = generator_versions["typescript"]["commit"]

_gapic_generator_typescript_version = generator_versions["typescript"]["version"]

_gapic_generator_typescript_sha256 = generator_versions["typescript"]["sha"]

### TypeScript generator
http_archive(
    name = "gapic_generator_typescript",
    sha256 = _gapic_generator_typescript_sha256,
    strip_prefix = "google-cloud-node-gapic-generator-v{version}/core/generator/gapic-generator-typescript".format(version = _gapic_generator_typescript_version),
    urls = ["https://github.com/googleapis/google-cloud-node/archive/refs/tags/gapic-generator-v{version}.tar.gz".format(version = _gapic_generator_typescript_version)],
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

_gapic_generator_php_commit = generator_versions["php"]["commit"]

_gapic_generator_php_version = generator_versions["php"]["version"]

_gapic_generator_php_sha256 = generator_versions["php"]["sha"]

http_archive(
    name = "gapic_generator_php",
    sha256 = _gapic_generator_php_sha256,
    strip_prefix = "gapic-generator-php-%s" % _gapic_generator_php_version if _gapic_generator_php_version else "gapic-generator-php-%s" % _gapic_generator_php_commit,
    urls = ["https://github.com/googleapis/gapic-generator-php/archive/v%s.zip" % _gapic_generator_php_version if _gapic_generator_php_version else "https://github.com/googleapis/gapic-generator-php/archive/%s.tar.gz" % _gapic_generator_php_commit],
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

_gapic_generator_csharp_commit = generator_versions["csharp"]["commit"]

_gapic_generator_csharp_version = generator_versions["csharp"]["version"]

_gapic_generator_csharp_sha256 = generator_versions["csharp"]["sha"]

http_archive(
    name = "gapic_generator_csharp",
    sha256 = _gapic_generator_csharp_sha256,
    strip_prefix = "gapic-generator-csharp-%s" % _gapic_generator_csharp_version if _gapic_generator_csharp_version else "gapic-generator-csharp-%s" % _gapic_generator_csharp_commit,
    urls = ["https://github.com/googleapis/gapic-generator-csharp/archive/refs/tags/v%s.tar.gz" % _gapic_generator_csharp_version if _gapic_generator_csharp_version else "https://github.com/googleapis/gapic-generator-csharp/archive/%s.tar.gz" % _gapic_generator_csharp_commit],
)

load("@gapic_generator_csharp//:repositories.bzl", "gapic_generator_csharp_repositories")

gapic_generator_csharp_repositories()

##############################################################################
# Ruby
##############################################################################

_gapic_generator_ruby_commit = generator_versions["ruby"]["commit"]

_gapic_generator_ruby_version = generator_versions["ruby"]["version"]

_gapic_generator_ruby_sha256 = generator_versions["ruby"]["sha"]

http_archive(
    name = "gapic_generator_ruby",
    sha256 = _gapic_generator_ruby_sha256,
    strip_prefix = "gapic-generator-ruby-gapic-generator-v%s" % _gapic_generator_ruby_version if _gapic_generator_ruby_version else "gapic-generator-ruby-%s" % _gapic_generator_ruby_commit,
    urls = ["https://github.com/googleapis/gapic-generator-ruby/archive/refs/tags/gapic-generator/v%s.tar.gz" % _gapic_generator_ruby_version if _gapic_generator_ruby_version else "https://github.com/googleapis/gapic-generator-ruby/archive/%s.tar.gz" % _gapic_generator_ruby_commit],
)

load("@gapic_generator_ruby//rules_ruby_gapic:repositories.bzl", "gapic_generator_ruby_repositories")

gapic_generator_ruby_repositories()

##############################################################################
# Discovery
##############################################################################

_disco_to_proto3_converter_version = "0b10e37e72ec12dfaf85893392a8e4796f935593"

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
