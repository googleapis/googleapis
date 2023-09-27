#!/bin/bash

set -e

cd ${KOKORO_ARTIFACTS_DIR}/github/googleapis
cp .kokoro/.bazelrc $HOME/.bazelrc
CACHE_BUCKET=client-libraries-bazel-cache-github
CACHE_CMDLINE="--remote_cache=https://storage.googleapis.com/${CACHE_BUCKET} --google_default_credentials"

#
# Run build and tests
#
echo "Building and Testing using WORKSPACE dependencies"
${BAZELISK_BIN} --output_user_root=${BAZEL_ROOT} build ${CACHE_CMDLINE} --keep_going //...
${BAZELISK_BIN} --output_user_root=${BAZEL_ROOT} test ${CACHE_CMDLINE} --flaky_test_attempts=3 --keep_going //...

# Restart the Bazel server to prevent sandbox issues.
echo "Building and Testing using Bzlmod dependencies"
${BAZELISK_BIN} shutdown
${BAZELISK_BIN} --output_user_root=${BAZEL_ROOT} build ${CACHE_CMDLINE} --keep_going --enable_bzlmod //...
