"""
Confirms php proto libraries are not supported by bzlmod
"""

load("@bazel_skylib//lib:unittest.bzl", "analysistest", "asserts")

def _php_proto_library_fails_with_message_test_impl(ctx):
    env = analysistest.begin(ctx)
    asserts.expect_failure(env, """php_proto_library targets in googleapis are not supported with Bzlmod. If you need them, please file an issue at https://github.com/bazelbuild/bazel-central-registry.""")
    return analysistest.end(env)

php_proto_library_fails_with_message_test = analysistest.make(
    _php_proto_library_fails_with_message_test_impl,
    expect_failure = True,
)
