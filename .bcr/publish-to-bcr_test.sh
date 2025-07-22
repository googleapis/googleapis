#!/bin/bash
set -e

# Test suite for the publish-to-bcr.sh script

# --- Mocks ---
function git() {
  if [[ "$1" == "rev-parse" ]]; then
    echo "mock_commit_sha"
  fi
}

function date() {
  if [[ "$1" == "+%Y%m%d" ]]; then
    echo "20250101"
  else
    command date "$@"
  fi
}

function jq() {
    # A simple mock for the append_version_to_metadata test
    echo '{"versions": ["1.0.0", "2.0.0"]}'
}

# Load functions from the script without executing the main logic
functions_to_load=$(sed '/^# parse input parameters/,$d' "$(dirname "$0")/publish-to-bcr.sh")
eval "$functions_to_load"

# --- Test setup and teardown ---
function setUp() {
  TEST_DIR=$(mktemp -d)
  export TEST_DIR
  pushd "${TEST_DIR}" > /dev/null
  command git init > /dev/null
  popd > /dev/null
}

function tearDown() {
  rm -rf "${TEST_DIR}"
}

# --- Test functions ---
function test_get_version() {
  local version
  version=$(get_version "${TEST_DIR}" "dummy_ref")
  assertEquals "0.0.0-20250101-mock_com" "${version}" "get_version"
}

function test_render_templates() {
  mkdir -p "${TEST_DIR}/.bcr/template"
  echo "{VERSION}|{GOOGLEAPIS_VERSION}|{PROTOBUF_VERSION}|{OWNER}|{REPO}" > "${TEST_DIR}/.bcr/template/file1.template.txt"

  render_templates "${TEST_DIR}/.bcr/template" "my-ref" "my-proto" "my-org"

  local content=$(cat "${TEST_DIR}/.bcr/template/file1.txt")
  local expected="my-ref|0.0.0-20250101-mock_com|my-proto|googleapis|googleapis"
  assertEquals "${expected}" "${content}" "render_templates content"

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
  assertEquals '{"versions": ["1.0.0", "2.0.0"]}' "${content}" "append_version_to_metadata"
}


# --- Test runner ---
function assertEquals() {
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
  setUp
  test_get_version
  test_render_templates
  test_append_version_to_metadata
  tearDown
}

run_tests

echo "All tests passed."
