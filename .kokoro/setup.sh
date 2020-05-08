#!/bin/bash

set -e

#
# Install bazel
#
mkdir ${KOKORO_ROOT}/tools
cd ${KOKORO_ROOT}/tools
curl -L https://github.com/bazelbuild/bazel/releases/download/3.0.0/bazel-3.0.0-linux-x86_64 -o bazel
chmod +x bazel
mkdir bazel_root
cd -

# gapic-generator-python requires python 3.6+
pyenv global 3.6.1

BAZEL=${KOKORO_ROOT}/tools/bazel
BAZEL_ROOT=${KOKORO_ROOT}/tools/bazel_root
