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

readonly DEFAULT_REPO="googleapis"
readonly DEFAULT_ORG="googleapis"
readonly DEFAULT_PROTOBUF_VERSION="21.7"
readonly DEFAULT_BCR_ORGANIZATION="bazelbuild"
readonly SKIP_URL_CHECK_COMMENT='@bazel-io skip_check unstable_url'
readonly SKIP_FLAG_CHECK_COMMENT='@bazel-io skip_check incompatible_flags'

# This function checks out the .bcr folder
# to the specified commit SHA ($1) into the folder
# specified in $2
function checkout_definitions() {
  local target_folder="$1"
  local repo_url="$2"
  local templates_ref="$3"
  local definitions_ref="$4"

  pushd "${target_folder}" > /dev/null
  git init
  git remote add origin "${repo_url}"
  git sparse-checkout init --cone
  git sparse-checkout set ".bcr"
  git fetch --depth 1 origin "${templates_ref}"
  git fetch --depth 2 origin "${definitions_ref}"
  git checkout "${definitions_ref}"
  git checkout "${templates_ref}" -- .bcr/ || (echo "--templates_ref does not contain the templates .bcr folder" && exit 1)
  popd > /dev/null
}

function get_version() {
  local target_folder="$1"
  local ref="$2"
  pushd "${target_folder}" &> /dev/null
  local commit_sha=$(git rev-parse "${ref}")
  local commit_date=$(git log --format=%cd '--date=format:%Y%m%d' "${ref}~1..${ref}")
  popd &> /dev/null
  echo "0.0.0-${commit_date}-${commit_sha:0:8}"
}

# Replaces values in all files containing the ".template." string in
# their filenames
function render_templates() {
  local target_folder="$1"
  local ref="$2"
  local protobuf_version="$3"
  local org="$4"

  local template_files=$(find "${target_folder}" -type f -name '*.template.*')
  local version_string="$(get_version "${target_folder}" "${ref}")"
  for file in ${template_files}; do
    # here we render the values in each template file
    sed -i "s|{VERSION}|${ref}|" "${file}"
    sed -i "s|{GOOGLEAPIS_VERSION}|${version_string}|" "${file}"
    sed -i "s|{PROTOBUF_VERSION}|${protobuf_version}|" "${file}"
    sed -i "s|{OWNER}|${DEFAULT_ORG}|" "${file}"
    sed -i "s|{REPO}|${DEFAULT_REPO}|" "${file}"
    # we remove the .template string from the filename
    mv "${file}" $(sed 's|\.template||' <<< "${file}")
  done
}

# Creates a .patch file to indicate the introduction of MODULE.bazel
function create_module_patch() {
  target_googleapis_module="$1"
  filename="$(basename "${target_googleapis_module}")"
  destination="$2"
  diff -Nau /dev/null "${target_googleapis_module}" \
    | sed "1 s|.*|--- ${filename}|" \
    | sed "2 s|.*|+++ ${filename}|" > "${destination}"
}

# append the version specified in $2 to the specified metadata file
function append_version_to_metadata() {
  local version="$1"
  local metadata_file="$2"
  cat <<< $(jq ".versions += [\"${version}\"]" "${metadata_file}") > "${metadata_file}"
}

function create_module_symlink() {
  local bcr_module_folder="$1"
  local target_symlink="${bcr_module_folder}/overlay/MODULE.bazel"
  local target_file="${bcr_module_folder}/MODULE.bazel"
  if [[ -f "${target_symlink}" ]]; then
    rm "${target_symlink}"
  fi

  ln -rs "${target_file}" "${target_symlink}"
}

function update_module_integrity() {
  bcr_folder="$1"
  version="$2"
  pushd "${bcr_folder}" > /dev/null
  bazelisk run -- //tools:update_integrity "googleapis" \
    || exit 1
  popd > /dev/null
}

function prepare_bcr_repo() {

  local target_folder="$1"
  local bcr_folder="$2"
  local ref="$3"

  local version=$(get_version "${target_folder}" "${ref}")
  pushd "${bcr_folder}"
  local googleapis_module_root="${bcr_folder}/modules/googleapis"
  local googleapis_target_module="${googleapis_module_root}/${version}"
  cp -r "${target_folder}" "${googleapis_target_module}"
  create_module_symlink "${googleapis_target_module}"
  append_version_to_metadata "${version}" "${googleapis_module_root}/metadata.json"
  update_module_integrity "${bcr_folder}" "${version}"
  popd
}

function validate_bcr_module() {
  local target_folder="$1"
  local bcr_folder="$2"
  local ref="$3"

  version="$(get_version "${target_folder}" "${ref}")"
  pushd "${bcr_folder}" > /dev/null
  # we skip the url stability check because we don't have releases of googleapis/googleapis
  bazelisk run -- //tools:bcr_validation --skip_validation url_stability "--check=googleapis@${version}" \
    || exit "$?"
  popd > /dev/null
}

function create_pull_request() {
  local target_folder="$1"
  local bcr_folder="$2"
  local bcr_organization="$3"
  local ref="$4"

  local version=$(get_version "${target_folder}" "${ref}")
  pushd "${bcr_folder}"
  # we create a branch with a random string in case of multiple local runs
  git checkout -b "add-googleapis-${version}-$(openssl rand -hex 3)"
  git add "modules"
  commit_message="Add googleapis ${version}"
  git commit -m "${commit_message}"
  git push origin
  pr_command="gh pr create --title \"${commit_message}\" --body \"\" --repo \"${bcr_organization}/bazel-central-registry\""
  read -p "The PR is ready to be raised. Do you wish to proceed? [y/N]: " -n 1 -r confirmation
  if [[ "${confirmation}" =~ ^[Yy]$ ]]
  then
    echo "Creating Pull Request"
    export pr_creation_output=$(bash -c "${pr_command}")
    pr_url=$(grep '/pull/' <<< "${pr_creation_output}")
    gh pr comment --body "${SKIP_URL_CHECK_COMMENT}" "${pr_url}"
    gh pr comment --body "${SKIP_FLAG_CHECK_COMMENT}" "${pr_url}"
    echo "Done! You can see the created PR in ${pr_url}"
  else
    echo "The branch is ready. You can create a PR by runing:"
    echo "cd $(pwd) && ${pr_command}"
    echo "Make sure to add a comment with the content: '${SKIP_URL_CHECK_COMMENT}'"
    echo "as well as a comment with the content '${SKIP_FLAG_CHECK_COMMENT}'"
  fi
  popd
}

function confirm_tools() {
	for tool in gh bazelisk git jq; do
    if ! command -v "${tool}" &> /dev/null ; then
      echo "Tool ${tool} is not installed. Please install it and try again."
      exit 1
    fi
  done
}

function main() {
  local ref="$1"
  local templates_ref="$2"
  local org="$3"
  local protobuf_version="$4"
  local bcr_organization="$5"
  local bcr_folder="$6"

  local target_folder="$(mktemp -d)"
  readonly target_folder
  local template_folder="${target_folder}/.bcr/template"
  local repo_url="https://github.com/${org}/${DEFAULT_REPO}"
	confirm_tools
  checkout_definitions "${target_folder}" "${repo_url}" "${templates_ref}" "${ref}"
  render_templates "${template_folder}" "${ref}" "${protobuf_version}" "${org}"
  create_module_patch "${template_folder}/MODULE.bazel" "${template_folder}/patches/module_dot_bazel.patch"

  if [[ -z "${bcr_folder}" ]] || [[ ! -d "${bcr_folder}" ]]; then
    bcr_folder="${target_folder}/bazel-central-registry"
    git clone "https://github.com/${bcr_organization}/bazel-central-registry" "${bcr_folder}"
  fi
  prepare_bcr_repo "${template_folder}" "${bcr_folder}" "${ref}"
  validate_bcr_module "${template_folder}" "${bcr_folder}" "${ref}"
  create_pull_request "${template_folder}" "${bcr_folder}" "${bcr_organization}" "${ref}"
}

# parse input parameters
while [[ $# -gt 0 ]]; do
key="$1"
case $key in
  -r|--ref)
    ref="$2"
    shift
    ;;
  -t|--templates_ref)
    templates_ref="$2"
    shift
    ;;
  -o|--org)
    org="$2"
    shift
    ;;
  -p|--protobuf_version)
    protobuf_version="$2"
    shift
    ;;
  -b|--bcr_organization)
    bcr_organization="$2"
    shift
    ;;
  -f|--bcr_folder)
    bcr_folder="$2"
    shift
    ;;
  -d|--dry_run)
    dry_run="$2"
    shift
    ;;
  *)
    echo "Invalid option: [$1]"
    exit 1
    ;;
esac
shift # past argument or value
done

if [[ -z "${ref}" ]]; then
  echo "Missing option --ref"
  exit 0
fi

if [[ -z "${templates_ref}" ]]; then
  echo "assuming templates_ref to be the HEAD of master"
  templates_ref="$(git ls-remote https://github.com/googleapis/googleapis HEAD | awk '{ print $1}')"
fi

if [[ -z "${org}" ]]; then
  echo "Using default value for --org: ${DEFAULT_ORG}"
  org="${DEFAULT_ORG}"
fi

if [[ -z "${protobuf_version}" ]]; then
  echo "Using default value for --protobuf_version: ${DEFAULT_PROTOBUF_VERSION}"
  protobuf_version="${DEFAULT_PROTOBUF_VERSION}"
fi

if [[ -z "${bcr_organization}" ]]; then
  echo "Using default value for --bcr_organization: ${DEFAULT_BCR_ORGANIZATION}"
  bcr_organization="${DEFAULT_BCR_ORGANIZATION}"
fi

if [[ -z "${bcr_folder}" ]] && [[ "${bcr_organization}" == "${DEFAULT_BCR_ORGANIZATION}" ]]; then
  echo "Cannot create branches in the ${DEFAULT_BCR_ORGANIZATION}/bazel-central-registry repo."
	echo "Please specify either a --bcr_folder or --bcr_organization we can push to."
	echo "(This needs a fork of the repo.)"
  exit 1
fi

main "${ref}" "${templates_ref}" "${org}" "${protobuf_version}" "${bcr_organization}" "${bcr_folder}"
