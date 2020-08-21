#!/bin/bash

set -e

#
# Install bazelisk
#
mkdir ${KOKORO_ROOT}/tools
cd ${KOKORO_ROOT}/tools
curl -L https://github.com/bazelbuild/bazelisk/releases/download/v1.6.1/bazelisk-linux-amd64 -o bazelisk
chmod +x bazelisk
mkdir bazel_root
cd -

# gapic-generator-python requires python 3.6+
pyenv global 3.6.1

BAZELISK_BIN=${KOKORO_ROOT}/tools/bazelisk
BAZEL_ROOT=${KOKORO_ROOT}/tools/bazel_root
