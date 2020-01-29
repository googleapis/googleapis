#
# Setup
#
mkdir ${KOKORO_ROOT}/tools
cd ${KOKORO_ROOT}/tools || exit
curl -L https://github.com/bazelbuild/bazel/releases/download/2.0.0/bazel-2.0.0-linux-x86_64 -o bazel
chmod +x bazel
mkdir bazel_root

#
# Run build and tests
#
cd ${KOKORO_ARTIFACTS_DIR}/github/googleapis || exit
${KOKORO_ROOT}/tools/bazel --output_user_root=${KOKORO_ROOT}/tools/bazel_root build --keep_going //...
${KOKORO_ROOT}/tools/bazel --output_user_root=${KOKORO_ROOT}/tools/bazel_root test --keep_going //...