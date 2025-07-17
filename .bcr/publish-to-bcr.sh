#!/bin/bash
set -e

readonly GOOGLEAPIS_ROOT=$(dirname "$(readlink -f "$0")")
readonly REPO="googleapis"
readonly DEFAULT_ORG="googleapis"
readonly DEFAULT_PROTOBUF_VERSION="21.7"

# This function checks out the .bcr folder
# to the specified commit SHA ($1) into the folder
# specified in $2
function checkout_definitions() {
	local target_folder="$1"
	local repo_url="$2"
	local ref="$3"
	pushd "${target_folder}"
	git init
	git remote add origin "${repo_url}"
	git sparse-checkout init --cone
	git sparse-checkout set ".bcr"
	git fetch --depth 1 origin "${ref}"
	git checkout "${ref}"
	popd
}

# Takes the files in the .bcr folder meant to go in the PR
# and computes the sha256 of each one
function update_shas() {
	local target_folder="$1"
	local target_json="${target_folder}/source.template.json"
	local patch_files=$(find "${target_folder}/patches" -mindepth 1 -type f)
	local overlay_files=$(find "${target_folder}/overlay" -mindepth 1 -type f)

	update_shas_helper "${target_folder}" 'patches' "${patch_files}" "${target_json}"
	update_shas_helper "${target_folder}" 'overlay' "${overlay_files}" "${target_json}"
}

# Abstracts repeated logic in overlay and patches folder
function update_shas_helper() {
	local target_folder="$1"
	local base_path="$2"
	local files="$3"
	local target_json="$4"
	for file in ${files}; do
		local sha256="sha256-$(sha256sum "${file}" | cut -d' ' -f1 | xxd -r -p | base64)"
		local value_path="$(sed "s|${target_folder}/${base_path}/||" <<< "${file}")"
		cat <<< $(jq ".${base_path}.\"${value_path}\" = \"${sha256}\"" "${target_json}") > "${target_json}"
	done
}

function get_version() {
	local commit_sha="$1"
	echo "0.0.0-$(date "+%Y%m%d")-${commit_sha:0:8}"
}

# Replaces values in all files containing the ".template." string in
# their filenames
function render_templates() {
	local target_folder="$1"
	local ref="$2"
	local protobuf_version="$3"
	local org="$4"

    local template_files=$(find "${target_folder}" -type f -name '*.template.*')
	pushd "${target_folder}"
    local commit_sha=$(git rev-parse "${ref}")
	popd
	local version_string="$(get_version "${commit_sha}")"
	for file in ${template_files}; do
		# here render the values in each template file
		sed -i "s|{VERSION}|${version_string}|" "${file}"
		sed -i "s|{GOOGLEAPIS_VERSION}|${version_string}|" "${file}"
		sed -i "s|{PROTOBUF_VERSION}|${protobuf_version}|" "${file}"
		sed -i "s|{OWNER}|${org}|" "${file}"
		sed -i "s|{REPO}|${REPO}|" "${file}"
		# we remove the .template string from the filename
		mv "${file}" $(sed 's|\.template||' <<< "${file}")
	done
}

function main() {
	local commit_sha="$1"
	local org="$2"
	local protobuf_version="$3"

	local target_folder="$(mktemp -d)"
	local template_folder="${target_folder}/.bcr/template"
	readonly target_folder
	local repo_url="https://github.com/${org}/${REPO}"
	checkout_definitions "${target_folder}" "${repo_url}" "${commit_sha}"
	update_shas "${template_folder}"
	render_templates "${template_folder}" "${commit_sha}" "${protobuf_version}" "${org}"
	vi "${template_folder}"
}

# parse input parameters
while [[ $# -gt 0 ]]; do
key="$1"
case $key in
  -c|--commit_sha)
    commit_sha="$2"
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
  *)
    echo "Invalid option: [$1]"
    exit 1
    ;;
esac
shift # past argument or value
done

if [[ -z "${commit_sha}" ]]; then
	echo "Missing option --commit_sha"
	exit 0
fi

if [[ -z "${org}" ]]; then
	echo "Using default value for --org: ${DEFAULT_ORG}"
	org="${DEFAULT_ORG}"
fi

if [[ -z "${protobuf_version}" ]]; then
	echo "Using default value for --protobuf_version: ${DEFAULT_PROTOBUF_VERSION}"
	protobuf_version="${DEFAULT_PROTOBUF_VERSION}"
fi

main "${commit_sha}" "${org}" "${protobuf_version}"
