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

# Choose grpc plugin
#GRPCPLUGIN ?= /usr/bin/grpc_$(LANGUAGE)_plugin
GRPCPLUGIN ?= /opt/build/grpc/bin/grpc_$(LANGUAGE)_plugin

# Choose the proto include directory.
#PROTOINCLUDE ?= /usr/include
PROTOINCLUDE ?= /opt/build/protobuf/include

# Choose protoc binary
#PROTOC ?= protoc
PROTOC ?= /opt/build/protobuf/bin/protoc

# Compile the entire repository
#
# NOTE: if "protoc" command is not in the PATH, you need to modify this file.
#

ifeq ($(LANGUAGE),go)
$(error Go source files are not generated from this repository. See: https://github.com/google/go-genproto)
endif

FLAGS+= --proto_path=.:$(PROTOINCLUDE)
FLAGS+= --$(LANGUAGE)_out=$(OUTPUT) --grpc_out=$(OUTPUT)
FLAGS+=	--plugin=protoc-gen-grpc=$(GRPCPLUGIN)

SUFFIX:= pb.cc
SUFFIX_SRC:= pb.cc
SUFFIX_HDR:= pb.h
SUFFIX_OBJ:= o

OUTPUT_BIN:=$(OUTPUT)_obj

PROTOS:= $(shell find google $(PROTOINCLUDE)/google/protobuf -type f -name '*.proto')

DEPS_SRC:= $(PROTOS:.proto=.$(SUFFIX_SRC))
DEPS_HDR:= $(PROTOS:.proto=.$(SUFFIX_HDR))

DEPS_OBJ:= $(PROTOS:.proto=.$(SUFFIX_OBJ))

all: libgoogleapis.a

libgoogleapis.a: $(addprefix $(OUTPUT_BIN)/,$(DEPS_OBJ))
	ar r libgoogleapis.a $?

$(OUTPUT_BIN)/%.$(SUFFIX_OBJ): $(OUTPUT)/%.$(SUFFIX_SRC) | $(addprefix $(OUTPUT)/,$(DEPS_HDR))
	mkdir -p $(dir $@)
	g++ -I$(OUTPUT) -c -g -O2 -o $@ $^

$(OUTPUT)/%.$(SUFFIX_SRC) $(OUTPUT)/%.$(SUFFIX_HDR): %.proto
	mkdir -p $(OUTPUT)
	$(PROTOC) $(FLAGS) $*.proto

clean:
	rm -f $(patsubst %,$(OUTPUT)/%,$(DEPS_SRC)) $(patsubst %,$(OUTPUT)/%,$(DEPS_HDR))
	rm -rfd $(OUTPUT)
	rm -f $(patsubst %,$(OUTPUT_BIN)/%,$(DEPS_OBJ))
	rm -rfd $(OUTPUT_BIN)
	rm -f libgoogleapis.a
