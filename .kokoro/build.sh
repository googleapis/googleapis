#!/bin/bash

set -e

cd ${KOKORO_ARTIFACTS_DIR}/github/googleapis
cp .kokoro/.bazelrc $HOME/.bazelrc

#
# Run build and tests
#
${BAZELISK_BIN} --output_user_root=${BAZEL_ROOT} build --keep_going //...
${BAZELISK_BIN} --output_user_root=${BAZEL_ROOT} test --flaky_test_attempts=3 --keep_going //...
