def _lts_rules_impl(ctx):
    lts = ctx.os.environ.get("LTS", "")
    if lts.lower() == "java8":
        PROTOBUF_SHA256 = "ce2fbea3c78147a41b2a922485d283137845303e5e1b6cbd7ece94b96ade7031"
        PROTOBUF_VERSION = "3.21.7"
        GAPIC_GENERATOR_JAVA_VERSION = "2.17.0"
    else:
        PROTOBUF_SHA256 = "930c2c3b5ecc6c9c12615cf5ad93f1cd6e12d0aba862b572e076259970ac3a53"
        PROTOBUF_VERSION = "3.21.12"
        GAPIC_GENERATOR_JAVA_VERSION = "2.18.0"

    config_content = """
LTS = {}
PROTOBUF_SHA256 = {}
PROTOBUF_VERSION = {}
GAPIC_GENERATOR_JAVA_VERSION = {}
    """.format(
        repr(lts),
        repr(PROTOBUF_SHA256),
        repr(PROTOBUF_VERSION),
        repr(GAPIC_GENERATOR_JAVA_VERSION),
    )
    ctx.file("lts_config.bzl", config_content)
    ctx.file("BUILD")

lts_rules = repository_rule(
    implementation = _lts_rules_impl,
    environ = ["LTS"],
)
