#!/bin/bash
set -e

readonly GOOGLEAPIS_ROOT=$(dirname "$(readlink -f "$0")")
readonly REPO="googleapis"
readonly DEFAULT_ORG="googleapis"
readonly DEFAULT_PROTOBUF_VERSION="21.7"
readonly DEFAULT_BCR_ORGANIZATION="bazelbuild"

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

function to_base_64_hash() {
	sha="$1"
	echo "sha256-$(cut -d' ' -f1 <<< "${sha}" | xxd -r -p | base64)"
}

# Abstracts repeated logic in overlay and patches folder
function update_shas_helper() {
	local target_folder="$1"
	local base_path="$2"
	local files="$3"
	local target_json="$4"
	for file in ${files}; do
		local sha256=$(to_base_64_hash "$(sha256sum "${file}")")
		local value_path="$(sed "s|${target_folder}/${base_path}/||" <<< "${file}")"
		cat <<< $(jq ".${base_path}.\"${value_path}\" = \"${sha256}\"" "${target_json}") > "${target_json}"
	done
}

function get_version() {
	local target_folder="$1"
	local ref="$2"
	pushd "${target_folder}" &> /dev/null
    local commit_sha=$(git rev-parse "${ref}")
	popd &> /dev/null
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
	local version_string="$(get_version "${target_folder}" "${ref}")"
	for file in ${template_files}; do
		# here we render the values in each template file
		sed -i "s|{VERSION}|${ref}|" "${file}"
		sed -i "s|{GOOGLEAPIS_VERSION}|${version_string}|" "${file}"
		sed -i "s|{PROTOBUF_VERSION}|${protobuf_version}|" "${file}"
		sed -i "s|{OWNER}|${org}|" "${file}"
		sed -i "s|{REPO}|${REPO}|" "${file}"
		# we remove the .template string from the filename
		mv "${file}" $(sed 's|\.template||' <<< "${file}")
	done
}

# updates the integrity entry of source.json
function update_integrity() {
	local target_folder="$1"
	local source_json="${target_folder}/source.json"
	url=$(jq -r '.url' "${source_json}")
	sha=$(curl "${url}" | sha256sum)
	b64sha=$(to_base_64_hash "${sha}")
    cat <<< $(jq ".integrity = \"${b64sha}\"" "${source_json}") > "${source_json}"
}

# append the version specified in $2 to the specified metadata file
function append_version_to_metadata() {
	local version="$1"
	local metadata_file="$2"
    cat <<< $(jq ".versions += [\"${version}\"]" "${metadata_file}") > "${metadata_file}"
}

function create_pull_request() {
	local target_folder="$1"
	local bcr_folder="$2"
	local bcr_organization="$3"
	local ref="$4"

	local version=$(get_version "${target_folder}" "${ref}")
	googleapis_module_root="${bcr_folder}/modules/googleapis"
	cp -r "${target_folder}" "${googleapis_module_root}/${version}"
	pushd "${bcr_folder}"	
	append_version_to_metadata "${version}" "${googleapis_module_root}/metadata.json"
	# we create a branch with a random string in case of multiple local runs
	git checkout -b "add-googleapis-${version}-$(openssl rand -hex 3)"
	git add "modules"
	commit_message="Add googleapis ${version}"
	git commit -m "${commit_message}"
	pr_command="gh pr create --title \"\${commit_message}\" --body \"\" --repo \"\${bcr_organization}/bazel-central-registry\""
	read -p "The PR is ready to be raised. Do you wish to proceed? [y/N]: " -n 1 -r confirmation
	if [[ "${confirmation}" =~ ^[Yy]$ ]]
	then
	  echo "Creating Pull Request"
      eval ${pr_command}
	else
      echo "The branch is ready. You can create a PR by runing:"
	  echo "cd $(pwd) && ${pr_command}"
	fi
	popd
}

function main() {
	local ref="$1"
	local org="$2"
	local protobuf_version="$3"
	local bcr_organization="$4"
	local bcr_folder="$5"

	local target_folder="$(mktemp -d)"
	readonly target_folder
	local template_folder="${target_folder}/.bcr/template"
	local repo_url="https://github.com/${org}/${REPO}"
	checkout_definitions "${target_folder}" "${repo_url}" "${ref}"
	update_shas "${template_folder}"
	render_templates "${template_folder}" "${ref}" "${protobuf_version}" "${org}"
	update_integrity "${template_folder}"
	
	if [[ -z "${bcr_folder}" ]] || [[ ! -d "${bcr_folder}" ]]; then
		bcr_folder="${target_folder}/bazel-central-registry"
		git clone "https://github.com/${bcr_organization}/bazel-central-registry" "${bcr_folder}"
	fi
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

main "${ref}" "${org}" "${protobuf_version}" "${bcr_organization}" "${bcr_folder}"
