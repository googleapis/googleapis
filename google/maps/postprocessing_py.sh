#!/bin/bash

set -eu

# Performs Maps specific post-processing on a .tar.gz archive

use_map_namespace() {
  f="${1}/setup.py"
  sed -e "s/google.cloud/google.maps/g" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
}

use_markdown_readme() {
  f="${1}/setup.py"
  sed -e "s/README.rst/README.md/g" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
  rm -f "${1}/README.rst"
}

update_python_versions() {
  f="${1}/setup.py"
  sed -e "/Python :: 2/d" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
  sed -e "/Python :: 3.4/d" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
  sed -e "/enum34/d" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
  sed -e "s/'Programming Language :: Python :: 3.6',/'Programming Language :: Python :: 3.6',\n        'Programming Language :: Python :: 3.7',/g" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
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

  use_markdown_readme "${postprocess_dir}"
  update_python_versions "${postprocess_dir}"
  use_map_namespace "${postprocess_dir}"
}

main "$@"
