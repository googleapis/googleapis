#!/bin/bash
#
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

set -e

# Test suite for the publish-to-bcr.sh script

# --- Mocks ---
function git() {
  case "$1" in
    "rev-parse")
      echo "mock_commit_sha" "$@"
      ;;
    "log")
      echo "20250101"
      ;;
    "fetch")
      echo "mock git fetch" "$@"
      ;;
    "checkout")
      echo "mock git checkout" "$@"
      ;;
    *)
      command git "$@"
      ;;
  esac
}



function jq() {
    # A simple mock for the append_version_to_metadata test
    echo '{"versions": ["1.0.0", "2.0.0"]}'
}

function bazelisk() {
  echo "mock bazelisk" "$@"
}

function ln() {
  echo "mock ln" "$@"
}

# Load functions from the script without executing the main logic
functions_to_load=$(sed '/^# parse input parameters/,$d' "$(dirname "$0")/publish-to-bcr.sh")
eval "$functions_to_load"

# --- Test setup and teardown ---
function set_up() {
  TEST_DIR=$(mktemp -d)
  export TEST_DIR
  pushd "${TEST_DIR}" > /dev/null
  popd > /dev/null
}

function tear_down() {
  rm -rf "${TEST_DIR}"
}

# --- Test functions ---
function test_checkout_definitions() {
  local output
  output=$(checkout_definitions "${TEST_DIR}" "mock_repo_url" "mock_templates_ref" "mock_definitions_ref")
  local expected_output="$(cat <<EOF
Initialized empty Git repository in ${TEST_DIR}/.git/
mock git fetch fetch --depth 1 origin mock_templates_ref
mock git fetch fetch --depth 2 origin mock_definitions_ref
mock git checkout checkout mock_definitions_ref
mock git checkout checkout mock_templates_ref -- .bcr/
EOF
  )"
  assert_equals "${expected_output}" "${output}" "checkout_definitions"
}

function test_get_version() {
  local version
  version=$(get_version "${TEST_DIR}" "dummy_ref")
  assert_equals "0.0.0-20250101-mock_com" "${version}" "get_version"
}

function test_render_templates() {
  mkdir -p "${TEST_DIR}/.bcr/template"
  echo "{VERSION}|{GOOGLEAPIS_VERSION}|{PROTOBUF_VERSION}|{OWNER}|{REPO}" > "${TEST_DIR}/.bcr/template/file1.template.txt"

  render_templates "${TEST_DIR}/.bcr/template" "my-ref" "my-proto" "my-org"

  local content=$(cat "${TEST_DIR}/.bcr/template/file1.txt")
  local expected="my-ref|0.0.0-20250101-mock_com|my-proto|googleapis|googleapis"
  assert_equals "${expected}" "${content}" "render_templates content"

  if [ -f "${TEST_DIR}/.bcr/template/file1.template.txt" ]; then
    echo "FAIL: render_templates did not remove template file"
    exit 1
  fi
  echo "PASS: render_templates removed template file"
}

function test_append_version_to_metadata() {
  local metadata_file="${TEST_DIR}/metadata.json"
  echo '{"versions": ["1.0.0"]}' > "${metadata_file}"

  append_version_to_metadata "2.0.0" "${metadata_file}"

  local content=$(cat "${metadata_file}")
  assert_equals '{"versions": ["1.0.0", "2.0.0"]}' "${content}" "append_version_to_metadata"
}

function test_validate_bcr_module() {
  local output
  output=$(validate_bcr_module "${TEST_DIR}" "${TEST_DIR}" "dummy_ref")
  assert_equals "mock bazelisk run -- //tools:bcr_validation --skip_validation url_stability --check=googleapis@0.0.0-20250101-mock_com" "${output}" "validate_bcr_module"
}

function test_create_module_symlink() {
  mkdir -p "${TEST_DIR}/overlay"
  touch "${TEST_DIR}/MODULE.bazel"
  local output
  output=$(create_module_symlink "${TEST_DIR}")
  assert_equals "mock ln -rs ${TEST_DIR}/MODULE.bazel ${TEST_DIR}/overlay/MODULE.bazel" "${output}" "create_module_symlink"
}

function test_update_module_integrity() {
  local output
  output=$(update_module_integrity "${TEST_DIR}" "dummy_version")
  assert_equals "mock bazelisk run -- //tools:update_integrity googleapis" "${output}" "update_module_integrity"
}


# --- Test runner ---
function assert_equals() {
  local expected="$1"
  local actual="$2"
  local message="$3"

  if [ "${expected}" != "${actual}" ]; then
    echo "FAIL: ${message}. Expected '${expected}', but got '${actual}'"
    exit 1
  fi
  echo "PASS: ${message}"
}

function run_tests() {
  set_up
  test_checkout_definitions
  test_get_version
  test_render_templates
  test_append_version_to_metadata
  test_validate_bcr_module
  test_create_module_symlink
  test_update_module_integrity
  tear_down
}

run_tests

echo "All tests passed."