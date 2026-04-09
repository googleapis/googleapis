#!/bin/bash

set -e

export BAZEL_ROOT=/bazel_root

docker container run \
  --env KOKORO_ROOT --env KOKORO_ARTIFACTS_DIR --env KOKORO_PIPER_DIR --env BAZEL_ROOT \
  --volume ${KOKORO_ROOT}:${KOKORO_ROOT} \
  --tmpfs ${BAZEL_ROOT}:exec \
  --workdir ${KOKORO_ROOT} \
  --ipc=host \
  --entrypoint ${KOKORO_ARTIFACTS_DIR}/github/googleapis/.kokoro/build.sh \
  gcr.io/gapic-images/googleapis:prod

