#!/bin/bash

# copy appropriate basic protos from the protobuf repository
mkdir google/protobuf
cp -r third_party/protobuf/src/google/protobuf/*.proto google/protobuf/

# copy build files to each subdirectory of interest
cp google.api.BUILD google/api/BUILD
cp google.rpc.BUILD google/rpc/BUILD
cp google.protobuf.BUILD google/protobuf/BUILD
cp google.monitoring.v3.BUILD google/monitoring/v3/BUILD
