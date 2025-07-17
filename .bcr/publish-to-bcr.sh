#!/bin/bash
#set -e

readonly GOOGLEAPIS_ROOT=$(dirname "$(readlink -f "$0")")
readonly BCR_FOLDER="${GOOGLEAPIS_ROOT}/.bcr"
readonly REPO="goolgeapis"
readonly OWNER="googleapis"

# This function checks out the entirety of this repo
# to the specified commit SHA, except for the script
# implementation (.bcr/publish-to-bcr.sh).
function checkout_definitions() {
	ref="$1"
	pushd "${GOOGLEAPIS_ROOT}"
    all_files_except_bcr=$(find . -maxdepth 1 -mindepth 1 \
		-not -name '.bcr' \
		-not -name '.git' \
		-printf '%p ')
    # note the lack of quotes meant for argument expansion
	git checkout "${ref}" -- ${all_files_except_bcr}
	popd
}

# Takes the files in the .bcr folder meant to go in the PR
# and computes the sha256 of each one
function update_shas() {
	patch_files=$(find "${BCR_FOLDER}/patches" -mindepth 1 -type f)
	overlay_files=$(find "${BCR_FOLDER}/overlay" -mindepth 1 -type f)

	update_shas_helper 'patches' "${patch_files}"
	update_shas_helper 'overlay' "${overlay_files}"
}

# Abstracts repeated logic in overlay and patches folder
function update_shas_helper() {
	base_path="$1"
	files="$2"
	for file in ${files}; do
		sha256="sha256-$(sha256sum "${file}" | cut -d' ' -f1 | xxd -r -p | base64)"
		value_path="$(sed "s|${BCR_FOLDER}/${base_path}/||" <<< "${file}")"
		update_source_json_entry ".${base_path}.\"${value_path}\"" "${sha256}" ".bcr/source.template.json"
	done
}

# Helper function that writes a value ($2) into
# the specified path ($1) of the form path.to.key
# $3 specifies the target json file
function update_source_json_entry() {
	key="$1"
	value="$2"
	source_json="$3"
	#"${BCR_FOLDER}/source.template.json
	cat <<< $(jq "${key} = \"${value}\"" "${source_json}") > "${source_json}"
}

function get_version() {
	commit_sha="$1"
	echo "0.0.0-$(date "+%Y%m%d")-${commit_sha:0:8}"
}

function render_templates() {
	googleapis_version="$1"
	protobuf_version="$2"
	commit_sha="$3"
    template_files=$(find "${BCR_FOLDER}" -type f -name '*.template.*')
	for file in "${template_files}"; do
		sed -i "s|{GOOGLEAPIS_VERSION}|${googleapis_version}|" "${file}"
		sed -i "s|{PROTOBUF_VERSION}|${protobuf_version}|" "${file}"
		sed -i "s|{VERSION}|$(get_version)|" "${file}"
		sed -i "s|{OWNER}|${OWNER}|" "${file}"
		sed -i "s|{REPO}|${REPO}|" "${file}"
	done
}
