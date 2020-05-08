#!/bin/bash

set -e

cd ${KOKORO_ARTIFACTS_DIR}/github/googleapis
cp .kokoro/.bazelrc $HOME/.bazelrc

# shellcheck source=/dev/null
source .kokoro/setup.sh

#
# Run build and tests
#
${BAZEL} --output_user_root=${BAZEL_ROOT} build --keep_going //...
${BAZEL} --output_user_root=${BAZEL_ROOT} test --flaky_test_attempts=3 --keep_going //...
