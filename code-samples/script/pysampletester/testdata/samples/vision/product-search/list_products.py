#!/bin/bash
cd $(dirname "${BASH_SOURCE[0]}")
SAMPLE_DIRECTORY=${SAMPLE_DIRECTORY:-../../../../../python-docs-samples/vision/cloud-client/product_search}

pushd ${SAMPLE_DIRECTORY} >& /dev/null || { echo ">> Pretend call to list_products $@" ; exit 0 ; }
python3 ./product_management.py --project_id actools-sample-tester list_products "$@"
ret=$?
popd >& /dev/null
exit $ret
