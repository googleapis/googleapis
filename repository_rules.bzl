"""Repository rules and macros which are expected to be called from WORKSPACE file of either
googleapis itself or any third_party repository which consumes googleapis as its dependency.
"""

def _switched_rules_impl(ctx):
    disabled_rule_script = """
def {rule_name}(**kwargs):
    pass
"""
    enabled_native_rule_script = """
{rule_name} = {native_rule_name}
"""
    enabled_rule_script = """
load("{file_label}", _{rule_name} = "{loaded_rule_name}")
"""
    elabled_rule_scrip_alias = """
{rule_name} = _{rule_name}
"""
    load_rules = []  # load() must go before everythin else in .bzl files since Bazel 0.25.0
    rules = []

    for rule_name, value_and_name in ctx.attr.rules.items():
        value = value_and_name[0]
        loaded_rule_name = value_and_name[1] if value_and_name[1] else rule_name

        if not value:
            rules.append(disabled_rule_script.format(rule_name = rule_name))
        elif value.startswith("@"):
            load_rules.append(enabled_rule_script.format(
                file_label = value,
                rule_name = rule_name,
                loaded_rule_name = loaded_rule_name,
            ))
            rules.append(elabled_rule_scrip_alias.format(rule_name = rule_name))
        elif value.startswith("native."):
            rules.append(
                enabled_native_rule_script.format(rule_name = rule_name, native_rule_name = value),
            )
        else:
            rules.append(value)

    ctx.file("BUILD.bazel", "")
    ctx.file("imports.bzl", "".join(load_rules + rules))

switched_rules = repository_rule(
    implementation = _switched_rules_impl,
    attrs = {
        "rules": attr.string_list_dict(
            allow_empty = True,
            mandatory = False,
            default = {},
        ),
    },
)

def switched_rules_by_language(
        name,
        gapic = False,
        grpc = False,
        java = False,
        go = False,
        cc = False,
        php = False,
        nodejs = False,
        python = False,
        ruby = False,
        csharp = False,
        go_test = False,
        rules_override = {}):
    """Switches rules in the generated imports.bzl between no-op and the actual implementation.

    This defines which language-specific rules (or client type specific, like grpc or gapic) should
    be enabled during the build. All non-enabled language-specific rules will default to no-op
    implementations. Examples of the language-specific rules are: java_gapic_library
    (Java-specific), go_proto_library (Go-specific), proto_library_with_info (gapic-specific) etc.
    Note, proto_library rule is always enabled.

    For example, to use this rule and enable Java and Go rules, add the following in the external
    repository which imports com_google_googleapis repository and its corresponding dependencies:

        load("@com_google_googleapis//:repository_rules.bzl", "switched_rules_by_language")

        switched_rules_by_language(
            name = "com_google_googleapis_imports",
            grpc = True,
            gapic = True,
            go = True,
            java = True,
        )

    Note, for build to work you should also import the language-specific transitive dependencies.

    Args:
        name (str): name of a target, is expected to be "com_google_googleapis_imports".
        gapic (bool): Enable GAPIC specific rules. The GAPIC rules are also language-specific, so
            the actual enabled rules will be determined by the other language-specific arguments of
            this rule. False by default.
        grpc (bool): Enable gRPC specific rules. The gRPC rules are also language-specific, so
            the actual enabled rules will be determined by the other language-specific arguments of
            this rule. False by default.
        java (bool): Enable Java specific rules. False by default.
        go (bool): Enable Go specific rules. False by default.
        cc (bool): Enable C++ specific rules. False by default. Partially implemented (no GAPIC
            support).
        php (bool): Enable PHP specific rules. False by default.
        nodejs (bool): Enable Node.js specific rules. False by default.
        ruby (bool): Enable Ruby specific rules. False by default.
        python (bool): Enable Python-specific rules. False by default.
        csharp (bool): Enable C# specific rules. False by default.
        go_test (bool): A special temporary flag to disable only go_test targets. This is needed to
            support rules_go version 0.24.0+, which made importmap duplicates an error instead of a
            warning. More details: https://github.com/bazelbuild/rules_go/issues/1986.
        rules_override (dict): Custom rule overrides (for advanced usage).
    """

    rules = {}

    #
    # Common
    #
    rules["proto_library_with_info"] = _switch(
        gapic,
        "@rules_gapic//:gapic.bzl",
    )
    rules["moved_proto_library"] = _switch(
        gapic,
        "@rules_gapic//:gapic.bzl",
    )

    #
    # Java
    #
    rules["java_proto_library"] = _switch(
        java,
        "native.java_proto_library",
    )
    rules["java_grpc_library"] = _switch(
        java and grpc,
        "@io_grpc_grpc_java//:java_grpc_library.bzl",
    )
    rules["java_gapic_library"] = _switch(
        java and grpc and gapic,
        "@gapic_generator_java//rules_java_gapic:java_gapic.bzl",
    )
    rules["java_gapic_test"] = _switch(
        java and grpc and gapic,
        "@gapic_generator_java//rules_java_gapic:java_gapic.bzl",
    )
    rules["java_gapic_assembly_gradle_pkg"] = _switch(
        java and grpc and gapic,
        "@gapic_generator_java//rules_java_gapic:java_gapic_pkg.bzl",
    )

    #
    # Python
    #
    rules["py_proto_library"] = _switch(
        python,
        "@com_github_grpc_grpc//bazel:python_rules.bzl",
    )
    rules["py_grpc_library"] = _switch(
        python and grpc,
        "@com_github_grpc_grpc//bazel:python_rules.bzl",
    )
    rules["py_gapic_library"] = _switch(
        python and grpc and gapic,
        "@gapic_generator_python//rules_python_gapic:py_gapic.bzl",
    )
    rules["py_test"] = _switch(
        python and grpc and gapic,
        "native.py_test",
    )
    rules["py_gapic_assembly_pkg"] = _switch(
        python and grpc and gapic,
        "@gapic_generator_python//rules_python_gapic:py_gapic_pkg.bzl",
    )

    #
    # Go
    #
    rules["go_proto_library"] = _switch(
        go,
        "@io_bazel_rules_go//proto:def.bzl",
    )
    rules["go_library"] = _switch(
        go,
        "@io_bazel_rules_go//go:def.bzl",
    )
    rules["go_test"] = _switch(
        go and grpc and gapic and go_test,
        "@io_bazel_rules_go//go:def.bzl",
    )
    rules["go_gapic_library"] = _switch(
        go and grpc and gapic,
        "@com_googleapis_gapic_generator_go//rules_go_gapic:go_gapic.bzl",
    )
    rules["go_gapic_assembly_pkg"] = _switch(
        go and grpc and gapic,
        "@com_googleapis_gapic_generator_go//rules_go_gapic:go_gapic_pkg.bzl",
    )

    #
    # C++
    #
    rules["cc_proto_library"] = _switch(
        cc,
        "native.cc_proto_library",
    )
    rules["cc_grpc_library"] = _switch(
        cc and grpc,
        "@com_github_grpc_grpc//bazel:cc_grpc_library.bzl",
    )
    rules["cc_gapic_library"] = _switch(False)

    #
    # PHP
    #
    rules["php_proto_library"] = _switch(
        php,
        "@gapic_generator_php//rules_php_gapic:php_gapic.bzl",
        "php_proto_library",
    )
    rules["php_grpc_library"] = _switch(
        php and grpc,
        "@gapic_generator_php//rules_php_gapic:php_gapic.bzl",
        "php_grpc_library",
    )
    rules["php_gapic_library"] = _switch(
        php and grpc and gapic,
        "@gapic_generator_php//rules_php_gapic:php_gapic.bzl",
        "php_gapic_library",
    )
    rules["php_gapic_assembly_pkg"] = _switch(
        php and grpc and gapic,
        "@gapic_generator_php//rules_php_gapic:php_gapic_pkg.bzl",
        "php_gapic_assembly_pkg",
    )

    #
    # Node.js
    #
    rules["nodejs_gapic_library"] = _switch(
        nodejs and grpc and gapic,
        "@gapic_generator_typescript//rules_typescript_gapic:typescript_gapic.bzl",
        "typescript_gapic_library",
    )
    rules["nodejs_gapic_assembly_pkg"] = _switch(
        nodejs and grpc and gapic,
        "@gapic_generator_typescript//rules_typescript_gapic:typescript_gapic_pkg.bzl",
        "typescript_gapic_assembly_pkg",
    )

    #
    # Ruby
    #
    rules["ruby_proto_library"] = _switch(
        ruby,
        "@gapic_generator_ruby//rules_ruby_gapic:ruby_gapic.bzl",
    )
    rules["ruby_grpc_library"] = _switch(
        ruby and grpc,
        "@gapic_generator_ruby//rules_ruby_gapic:ruby_gapic.bzl",
    )
    rules["ruby_ads_gapic_library"] = _switch(
        ruby and grpc and gapic,
        "@gapic_generator_ruby//rules_ruby_gapic:ruby_gapic.bzl",
    )
    rules["ruby_cloud_gapic_library"] = _switch(
        ruby and grpc and gapic,
        "@gapic_generator_ruby//rules_ruby_gapic:ruby_gapic.bzl",
    )
    rules["ruby_gapic_assembly_pkg"] = _switch(
        ruby and grpc and gapic,
        "@gapic_generator_ruby//rules_ruby_gapic:ruby_gapic_pkg.bzl",
    )

    #
    # C#
    #
    rules["csharp_proto_library"] = _switch(
        csharp,
        "@rules_gapic//csharp:csharp_gapic.bzl",
    )
    rules["csharp_grpc_library"] = _switch(
        csharp and grpc,
        "@rules_gapic//csharp:csharp_gapic.bzl",
    )
    rules["csharp_gapic_library"] = _switch(
        csharp and grpc and gapic,
        "@gapic_generator_csharp//rules_csharp_gapic:csharp_gapic.bzl",
    )
    rules["csharp_gapic_assembly_pkg"] = _switch(
        csharp and grpc and gapic,
        "@gapic_generator_csharp//rules_csharp_gapic:csharp_gapic_pkg.bzl",
    )

    rules.update(rules_override)

    switched_rules(
        name = name,
        rules = rules,
    )

def _switch(enabled, enabled_value = "", actual_name = ""):
    if enabled:
        return [enabled_value, actual_name]
    else:
        return ["", actual_name]
