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
#

DEPS:= $(shell find google -type f -name '*.proto' | sed 's/proto$$/pb.go/')
FLAGS+= --proto_path=.:/usr/local/include
ifeq ($(LANGUAGE),go)
	FLAGS+= --$(LANGUAGE)_out=plugins=grpc:$(OUTPUT)
else
	FLAGS+= --$(LANGUAGE)_out=$(OUTPUT) --grpc_out=$(OUTPUT)
	FLAGS+=	--plugin=protoc-gen-grpc=/usr/local/bin/grpc_$(LANGUAGE)_plugin
endif

all: $(DEPS)

%.pb.go:  %.proto
	mkdir -p $(OUTPUT)
	protoc $(FLAGS) $<

clean:
	rm $(patsubst %,$(OUTPUT)/%,$(DEPS)) 2> /dev/null
	rm -rd $(OUTPUT)
