#!/bin/bash

set -eu

# Performs Maps specific post-processing on a .tar.gz archive

# Rename nox config file from nox.py to noxfile.py if it exists
#
# Arguments:
#   postprocess_dir: The directory that contains the Java files to postprocess.
rename_nox_file() {
  postprocess_dir="${1}"

  if [ -f "$postprocess_dir/nox.py" ]; then
    mv "$postprocess_dir/nox.py" "$postprocess_dir/noxfile.py"
  fi
}

use_markdown_readme() {
  sed -e "s/= 'com\.google\.cloud'/= 'com\.google\.maps'/g" "${1}/${f}" > "${f}.new" && mv "${f}.new" "${f}"

}

# Main entry point
#
# Arguments:
#   postprocess_dir: The directory that contains the Java files to postprocess.
main() {
  postprocess_dir="$1"

  if [ "${postprocess_dir}" = "" ]; then
    echo "postprocess_dir is required"
    exit 1
  fi

  rename_nox_file "${postprocess_dir}"
}

main "$@"
