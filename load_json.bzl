"""Helper to load configuration from JSON files."""

def _load_json_impl(repository_ctx):
    """Create a starlark equivalent of a parsed JSON file

    Args:
      repository_ctx: repository context
    """

    json_data = json.decode(repository_ctx.read(repository_ctx.attr.src))

    repository_ctx.file("BUILD", "exports_files([ \"json.bzl\"])")
    repository_ctx.file("json.bzl", "{}={}".format(
        repository_ctx.attr.variable_name,
        repr(json_data),
    ))

load_json = repository_rule(
    implementation = _load_json_impl,
    attrs = {
        "src": attr.label(allow_single_file = True, default = "//:example-file.json", doc = "a JSON file"),
        "variable_name": attr.string(default = "version_json", doc = "symbol to define by the contents of the JSON file"),
    },
    local = True,
)
