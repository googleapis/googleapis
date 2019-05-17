"""Repository rules and macros which are expected to be called from WORKSPACE file of either
googleapis itself or any third_party repository which consumes googleapis as its dependency.
"""

def _switched_rules_impl(ctx):
    disabled_rule_script = """
def {rule_name}(**kwargs):
    print("Ignoring {rule_name}(name = %s)" % kwargs.get("name",  None))
"""
    enabled_native_rule_script = """
{rule_name} = native.{rule_name}
"""
    enabled_rule_script = """
load("{file_label}", "{rule_names}")
"""
    rules = []
    for rule_name in ctx.attr.disabled_rules:
        if not rule_name:
            continue
        rules.append(disabled_rule_script.format(rule_name = rule_name))

    for enabled_native_rule in ctx.attr.enabled_native_rules:
        rules.append(enabled_native_rule_script.format(rule_name = enabled_native_rule))

    for file_label, enabled_rules in ctx.attr.enabled_rules.items():
        if not enabled_rules:
            continue
        rule_names = "\", \"".join(enabled_rules.split(":"))
        rules.append(enabled_rule_script.format(file_label = file_label, rule_names = rule_names))

    ctx.file("BUILD.bazel", "")
    ctx.file("imports.bzl", "".join(rules))

switched_rules = repository_rule(
    implementation = _switched_rules_impl,
    attrs = {
        "enabled_rules": attr.label_keyed_string_dict(
            allow_files = True,
            allow_empty = True,
            mandatory = False,
            default = {},
        ),
        "enabled_native_rules": attr.string_list(
            mandatory = False,
            allow_empty = True,
            default = [],
        ),
        "disabled_rules": attr.string_list(
            mandatory = False,
            allow_empty = True,
            default = [],
        ),
    },
)

def _switch_rules(enabled, out, rules_dict, native_rules = []):
    if enabled:
        for k, vals in rules_dict.items():
            out.enabled_rules[k] = ":".join(vals)
        out.enabled_native_rules.extend(native_rules)
    else:
        out.disabled_rules.extend([sub_val for val in rules_dict.values() for sub_val in val])
        out.disabled_rules.extend(native_rules)

def enabled_rules(
        name,
        proto = False,
        java = False,
        go = False,
        cc = False,
        python = False,
        php = False,
        ruby = False,
        js = False,
        csharp = False):
    """Determines which language-specific rules should be enabled during build. All non-enabled
    language-specific rules will default to no-op implementations. Examples of the language-specific
    rules are: java_gapic_library (Java-specific), go_proto_library (Go-specific),
    proto_library_with_info (proto-specific) etc. Note, proto_library rule is always enabled.

    To use this rule and enable Java and Go rules add the following in the external repository which
    imports com_google_googleapis repository:

        load("@com_google_googleapis//:repository_rules.bzl", "enabled_rules")

        enabled_rules(
            name = "com_google_googleapis_imports",
            go = True,
            java = True,
            proto = True,
        )

    Args:
        name (str): name of a target, is expected to be "com_google_googleapis_imports".
        proto (bool): Enable custom proto rules (like proto_library_with_info). False by default.
        java (bool): Enable Java specific rules. False by default.
        go (bool): Enable Go specific rules. False by default.
        cc (bool): Enable C++ specific rules. False by default. Not implemented yet.
        python (bool): Enable Python-specific rules. False by default. Not implemented yet.
        php (bool): Enable PHP specific rules. False by default. Not implemented yet.
        ruby (bool): Enable Ruby specific rules. False by default. Not implemented yet.
        js (bool): Enable JavaScript specific rules. False by default. Not implemented yet.
        csharp (bool): Enable C# specific rules. False by default. Not implemented yet.
    """

    rules = struct(enabled_rules = {}, enabled_native_rules = [], disabled_rules = [])

    _switch_rules(
        enabled = proto,
        out = rules,
        rules_dict = {
            "@com_google_api_codegen//rules_gapic:gapic.bzl": ["proto_library_with_info"],
        },
    )

    _switch_rules(
        enabled = java,
        out = rules,
        rules_dict = {
            "@io_grpc_grpc_java//:java_grpc_library.bzl": ["java_grpc_library"],
            "@com_google_api_codegen//rules_gapic/java:java_gapic.bzl": ["java_gapic_library"],
            "@com_google_api_codegen//rules_gapic/java:java_gapic_pkg.bzl": ["java_gapic_assembly_gradle_pkg"],
        },
        native_rules = [
            "java_proto_library",
            "java_test",
        ],
    )

    _switch_rules(
        enabled = go,
        out = rules,
        rules_dict = {
            "@io_bazel_rules_go//proto:def.bzl": ["go_proto_library"],
            "@io_bazel_rules_go//go:def.bzl": ["go_library", "go_test"],
            "@com_google_api_codegen//rules_gapic/go:go_gapic.bzl": ["go_gapic_srcjar", "go_gapic_library"],
            "@com_google_api_codegen//rules_gapic/go:go_gapic_pkg.bzl": ["go_gapic_assembly_pkg"],
        },
    )

    switched_rules(
        name = name,
        enabled_rules = rules.enabled_rules,
        enabled_native_rules = rules.enabled_native_rules,
        disabled_rules = rules.disabled_rules,
    )
