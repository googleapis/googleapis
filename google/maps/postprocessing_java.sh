#!/bin/bash

set -eu

# Performs Maps-specific post-processing on a .tar.gz archive produced by rule
# java_gapic_assembly_gradle_pkg

# Add gradle publish plugin
#
# Arguments:
#   postprocess_dir: The directory that contains the Java files to postprocess.
add_gradle_publish() {
  postprocess_dir="${1}"
  cat >> "${postprocess_dir}/build.gradle" <<EOF

apply from: "./publish.gradle"
EOF
  echo "INFO: Added gradle publish plugin."
}

# Change group name from cloud
#
# Arguments:
#   postprocess_dir: The directory that contains the Java files to postprocess.
change_group() {
  postprocess_dir="${1}"
  for f in $(find "${postprocess_dir}" -name "*.gradle" -type f); do
    sed -e "s/= 'com\.google\.cloud'/= 'com\.google\.maps'/g" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
    sed -e "s/= 'com\.google\.api\.grpc'/= 'com\.google\.maps'/g" "${f}" > "${f}.new" && mv "${f}.new" "${f}"
done
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

  add_gradle_publish "${postprocess_dir}"
  change_group "${postprocess_dir}"
}

main "$@"
