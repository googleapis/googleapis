load(":repository_rules.bzl", "switched_rules_by_language")

_use_languages_tag = tag_class(
    attrs = {
        "cc": attr.bool(default = False),
        "csharp": attr.bool(default = False),
        "gapic": attr.bool(default = False),
        "go": attr.bool(default = False),
        "go_test": attr.bool(default = False),
        "grpc": attr.bool(default = False),
        "java": attr.bool(default = False),
        "nodejs": attr.bool(default = False),
        "php": attr.bool(default = False),
        "python": attr.bool(default = False),
        "ruby": attr.bool(default = False),
    },
)

def _switched_rules_impl(ctx):
    attrs = {}
    for module in ctx.modules:
        if not module.is_root:
            continue

        is_tag_set = False
        set_tag_name = ""

        for t in module.tags.use_languages:
            if is_tag_set:
                fail("Multiple use_language tags are set in the root module: '{}' and '{}'. Only one is allowed.".format(set_tag_name, module.name))

            is_tag_set = True
            set_tag_name = module.name

            attrs = {
                "cc": t.cc,
                "csharp": t.csharp,
                "gapic": t.gapic,
                "go": t.go,
                "go_test": t.go_test,
                "grpc": t.grpc,
                "java": t.java,
                "nodejs": t.nodejs,
                "php": t.php,
                "python": t.python,
                "ruby": t.ruby,
            }

    switched_rules_by_language(
        name = "com_google_googleapis_imports",
        **attrs
    )

switched_rules = module_extension(
    implementation = _switched_rules_impl,
    tag_classes = {
        "use_languages": _use_languages_tag,
    },
)
