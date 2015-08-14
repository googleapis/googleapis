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

# Choose the proto include directory.
PROTOINCLUDE ?= /usr/local/include

# Compile the entire repository
#
# NOTE: if "protoc" command is not in the PATH, you need to modify this file.
#

FLAGS+= --proto_path=.:$(PROTOINCLUDE)
ifeq ($(LANGUAGE),go)
	FLAGS+= --$(LANGUAGE)_out=plugins=grpc:$(OUTPUT)
else
	FLAGS+= --$(LANGUAGE)_out=$(OUTPUT) --grpc_out=$(OUTPUT)
	FLAGS+=	--plugin=protoc-gen-grpc=/usr/local/bin/grpc_$(LANGUAGE)_plugin
endif

ifeq ($(LANGUAGE),go)
SUFFIX:= pb.go
endif
ifeq ($(LANGUAGE),cpp)
SUFFIX:= pb.cc
endif

DEPS:= $(shell find google $(PROTOINCLUDE)/google/protobuf -type f -name '*.proto' | sed "s/proto$$/$(SUFFIX)/")

all: supported_lang $(DEPS)

supported_lang:
ifndef SUFFIX
	$(error unsupported language: [$(LANGUAGE)])
endif

ifdef OUTPUT
  mkdir -p $(OUTPUT)
endif

%.$(SUFFIX):  %.proto
	protoc $(FLAGS) $*.proto

clean:
	rm $(patsubst %,$(OUTPUT)/%,$(DEPS)) 2> /dev/null
	rm -rd $(OUTPUT)
