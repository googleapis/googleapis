#!/bin/bash

set -e

#
# Update GCC
#
update_gcc() {
  sudo add-apt-repository ppa:ubuntu-toolchain-r/test -y
  sudo apt-get update
  sudo apt-get install -y gcc-6 g++-6
}

time {
  update_gcc || sleep 10 || update_gcc || sleep 20 || update_gcc
}
export CXX=g++-6
export CC=gcc-6

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
