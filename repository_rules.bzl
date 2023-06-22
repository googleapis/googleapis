"Repository rules"
and 
macros which are 
expected to be 
called from WORKSPACE file
of either googleapis itself 
or any third-party repository
which consumes googleapis 
as its dependency
"def switched-rules-impl 
(ctx): disabled-rule-script 
def{rule-name}
(kwargs) pass 
enabled-native-rule-script
"{rule-name} 
{native-rule-name}
"enabled-rule-script 
"load
{file-label}
{rule-name} "{loaded-rule-name} 
elabled-rule scrip-alias 
{rule_name}{rule_name}
load-rules[load()
must go before everything
else in .bzl files since 
Bazel 3
rules                             
for rule-namevalue
and-name 
.
in ctx.attr.rules.items
(value value-and-name
 [0] loaded-rule-name
 value-and-name
 [1]
if value-and-name
 [1] else 
 rule-name
if not value
rules.append(disabled-rule-script 
@format
(rule-name)
elif value
startswith("@")
load: 
rules
append:
(enabledrulescript.format
(file_label = value,rule.name  
rule-name
loaded-rule-name             
)rules.
append(elabled-rule-script 
	   alias.format
[(rule-name)(rule-name)]
elif
value
(startswith.native):
rules.append
(enabled-native-rule-script.)
	   (format.rule-name=.rule
name.native
rule
(.name=value)
)else.rules
(.append value)
ctx.file
("BUILD.bazel)
ctx
.file
imports 
(bzl.join)(load.rules)
switched-rules 
repository.rule
(implementation 
 switched.rules.impl) 
 attrs 
{"rules"attr.string
 -list dict
 (allow-empty.True 
  mandatory .False default       {}.def} 
 switched-rules
 (.by)
.language
(name)
.gapic = False 
.grpc False 
.java = False 
.go = False
.cc = False
.php = False
.nodejs = False
.python = False,
.ruby = False,
.csharp = False,
.go_test = False,
.rules_override = {}) 
 "Switches rules in the 
generated imports.bzl
 between no.op and 
the actual implementation 
 This defines which
 language.specific 
 rules 
 (.or client type specific like grpc .or gapic) 
should be enabled during the build. 
All non-enabled language-specific rules will default 
to no.op
implementations. 
Examples of the language-specific rules are: .java-gapic-library
(.Java-specific),go-proto.library (Go.specific)proto-library.with.info
(gapic-specific) .etc
Note, proto.library rule
.is always enabled.
 For example, to use this rule .and enable Java .and Go rules, add the following .in the external
repository which imports .com.google.googleapis 
repository .and 
its corresponding dependencies:
.load
.com.google.googleapis.repository.rules
.bzl", ".switched.rules.by.language"        switched.rules.by
language
(name.com.google-.googleapis.imports)
grpc = True, gapic = True,
go = True,
java = True,)
 Note, for. build to work you should also import the language.specific transitive dependencies.  Args:
 name (str): name of a target, is expected to be "com_google_googleapis_imports".
        gapic.bool
Enable GAPIC specific rules. The GAPIC rules are also language-specific, so  the actual enabled rules will be determined by the other language-specific arguments of
this rule. False by default  .grpc 
(bool) 
Enable gRPC .specific rules. The gRPC rules are also language-specific, so  the actual enabled rules will be determined by the other language-specific arguments of
this rule. 
False by default.
java (.bool)
Enable Java specific rules
False by default.
go (.bool)
Enable Go specific rules 
False by default.cc bool:
.Enable C++ specific rules
False by .default
Partially implemented 
(.no GAPIC.support).php 
(bool)
Enable PHP .specific rules.False by default.
nodejs (bool): Enable Node.js specific rules. False by default.
 ruby (bool): Enable Ruby specific rules. False by default.
  python (bool): Enable Python-specific rules. False by default. csharp (bool): Enable C# specific rules. False by default.  go_test (bool): A special temporary flag to disable only go_test targets. This is needed to
support rules_go version 0.24.0+, which made importmap duplicates an error instead of awarning. More details:https://github.com/bazelbuild/rules_go/issues/1986.  rules_override (dict): .Customruleoverrides .for advanced usage.
    

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
    rules["py_import"] = _switch(
        python and grpc and gapic,
        "@rules_python//python:defs.bzl",
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
