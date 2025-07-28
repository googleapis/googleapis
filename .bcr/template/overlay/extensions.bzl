"""
Extends the bazel module with the ability to enable and disable groups of build rules
"""

_use_languages_tag = tag_class(
    attrs = {
        "cc": attr.bool(default = False),
        "upb_c": attr.bool(default = False),
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

def _switched_rules_impl(_ctx):
    # This extension is no longer used, but provided for compatibility.
    # Since only googleapis used to 'use_repo' a repository from this extension,
    # it is no longer being evaluated except possibly by 'bazel mod'. For this
    # reason, showing an error or warning here is pointless.
    pass

switched_rules = module_extension(
    implementation = _switched_rules_impl,
    tag_classes = {
        "use_languages": _use_languages_tag,
    },
)
