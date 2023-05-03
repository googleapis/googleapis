def _lts_rules_impl(ctx):
    config = ctx.os.environ.get("LTS", "")
    if config.lower() == "java8":
        GAPIC_GENERATOR_JAVA_VERSION = "2.17.0"
    else:
        GAPIC_GENERATOR_JAVA_VERSION = "2.18.0"

    config_content = """
LTS = {}
GAPIC_GENERATOR_JAVA_VERSION = {}
    """.format(repr(config), repr(GAPIC_GENERATOR_JAVA_VERSION))
    ctx.file("lts_config.bzl", config_content)
    ctx.file("BUILD")

lts_rules = repository_rule(
    implementation = _lts_rules_impl,
    environ = ["LTS"],
)
