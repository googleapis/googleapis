#! /bin/bash

# TODO(jcanizales): What license header to use?

# TODO(jcanizales): Make sure output file doesn't exist.

# Example usage:
#
# ./create_new_config.sh clouddebugger v2 devtools/
#
# Dependencies need to be added manually after executing.
#
# Args:
# $1 API name (e.g. pubsub)
# $2 API version (e.g. v1)
# $3 Path within googleapis/google/ (e.g. devtools/). Without the API name.

API_NAME=$1
API_VERSION=$2
SRC_SUBDIR=$3

cat > artman_${API_NAME}.yaml << EOF
common:
  api_name: google-${API_NAME}-${API_VERSION}
  proto_gen_pkg_deps:
    - google-common-protos
  import_proto_path:
    - \${REPOROOT}/googleapis
  src_proto_path:
    - \${REPOROOT}/googleapis/google/${SRC_SUBDIR}${API_NAME}/${API_VERSION}
  service_yaml:
    - \${REPOROOT}/googleapis/google/${SRC_SUBDIR}${API_NAME}/${API_NAME}.yaml
  gapic_api_yaml:
    - \${REPOROOT}/googleapis/google/${SRC_SUBDIR}${API_NAME}/${API_VERSION}/${API_NAME}_gapic.yaml
  output_dir: \${REPOROOT}/artman/output
  enable_batch_generation: True
java:
  final_repo_dir: \${REPOROOT}/google-cloud-java/google-cloud-${API_NAME}
python:
  final_repo_dir: \${REPOROOT}/artman/output/gcloud-python-${API_NAME}
go:
  final_repo_dir: \${REPOROOT}/gapi-${API_NAME}-go
csharp:
  final_repo_dir: \${REPOROOT}/artman/output/gcloud-csharp-${API_NAME}
php:
  final_repo_dir: \${REPOROOT}/artman/output/gcloud-php-${API_NAME}
ruby:
  final_repo_dir: \${REPOROOT}/google-cloud-ruby/google-cloud-${API_NAME}
  skip_packman: True
nodejs:
  final_repo_dir: \${REPOROOT}/gcloud-node/packages/${API_NAME}
  skip_packman: True
EOF
