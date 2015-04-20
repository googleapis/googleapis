# This is a simple Makefile that generates client library source code
# for Google APIs using Protocol Buffers and gRPC for any supported
# language. However, it does not compile the generated code into final
# libraries that can be directly used with application code.
#
# Syntax example: make OUTPUT=./output LANGUAGE=java
#

# Choose the output directory
OUTPUT ?= ./gens

# Choose the target language.
LANGUAGE ?= cpp

# Compile the entire repository
#
# NOTE: if the "protoc" command is not in the PATH or the protobuf include
# directory is not "/usr/local/include", you need to modify this file.
all:
	mkdir -p $(OUTPUT)
	find google -type f -name '*.proto' | xargs protoc \
	--proto_path=.:/usr/local/include \
	--$(LANGUAGE)_out=$(OUTPUT) --grpc_out=$(OUTPUT) \
	--plugin=protoc-gen-grpc=/usr/local/bin/grpc_$(LANGUAGE)_plugin

clean:
	rm -rf $(OUTPUT)
