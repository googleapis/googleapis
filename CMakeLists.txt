cmake_minimum_required(VERSION 3.11)

set(Protobuf_USE_STATIC_LIBS OFF)

if(NOT Protobuf_SRC_ROOT_FOLDER)
    set(Protobuf_SRC_ROOT_FOLDER ${CMAKE_INSTALL_PREFIX})
endif()

set(Protobuf_IMPORT_DIRS 
  ${CMAKE_SOURCE_DIR}
  ${CMAKE_BINARY_DIR}
  ${CMAKE_INSTALL_PREFIX}/include
)

if(NOT WIN32)
    set(BIN_SUFFIX "")
    set(PATH_SEPERATOR ":")
else()
    set(PATH_SEPERATOR ";")
    set(BIN_SUFFIX ".exe")
endif()

find_package(Protobuf REQUIRED)

include_directories(${CMAKE_BINARY_DIR})

if(NOT Protobuf_FOUND)
    message(FATAL_ERROR "Set Protobuf_SRC_ROOT_FOLDER to the desired sysroot...")
endif()
message(STATUS "Protobuf_VERSION=${Protobuf_VERSION}")

# Choose the output directory
if(NOT OUTPUT)
    set(OUTPUT ./gens)
endif()
file(MAKE_DIRECTORY ${OUTPUT})


# Choose the target language.
if(NOT LANGUAGE)
    set(LANGUAGE cpp)
endif()
if(${LANGUAGE} STREQUAL "go")
    MESSAGE(FATAL_ERROR "Go source files are not generated from this repository. See: https://github.com/google/go-genproto")
endif()


# Choose grpc plugin
if(NOT GRPCPLUGIN_PATH)
    set(GRPCPLUGIN_PATH /usr/local/bin/grpc_${LANGUAGE}_plugin)
endif()
set(GRPCPLUGIN "${GRPCPLUGIN_PATH}/grpc_${LANGUAGE}_plugin${BIN_SUFFIX}")

get_filename_component(protoc_path ${Protobuf_PROTOC_EXECUTABLE} DIRECTORY)
file(TO_NATIVE_PATH ${protoc_path} protoc_path)

set(ENV{PATH} "${protoc_path}${PATH_SEPERATOR}$ENV{PATH}")

# Compile the entire repository
#
file(TO_NATIVE_PATH ${OUTPUT} NATIVE_OUTPUT)
file(TO_NATIVE_PATH ${GRPCPLUGIN} NATIVE_GRPCPLUGIN)
file(TO_NATIVE_PATH ${Protobuf_INCLUDE_DIRS} NATIVE_Protobuf_INCLUDE_DIRS)
MESSAGE(STATUS "Protobuf_INCLUDE_DIRS=${NATIVE_Protobuf_INCLUDE_DIRS}")
MESSAGE(STATUS "OUTPUT=${NATIVE_OUTPUT}")
MESSAGE(STATUS "LANGUAGE=${LANGUAGE}")
MESSAGE(STATUS "GRPCPLUGIN=${NATIVE_GRPCPLUGIN}")
message(STATUS "WORKING_DIRECTORY=${CMAKE_SOURCE_DIR}")

file(MAKE_DIRECTORY ${OUTPUT})

file(GLOB_RECURSE src_list ${CMAKE_SOURCE_DIR} google/*.proto)

foreach(src ${src_list})
    string (REGEX REPLACE "^${CMAKE_SOURCE_DIR}/" "" rel_src ${src})
    file(TO_NATIVE_PATH ${rel_src} NATIVE_rel_src)

    if(Protobuf_DEBUG)
        MESSAGE(STATUS "protoc${BIN_SUFFIX} --proto_path=.${PATH_SEPERATOR}${NATIVE_Protobuf_INCLUDE_DIRS} --${LANGUAGE}_out=${NATIVE_OUTPUT} --grpc_out=${NATIVE_OUTPUT} --plugin=protoc-gen-grpc=${NATIVE_GRPCPLUGIN} ${NATIVE_rel_src}")
    else()
        MESSAGE(STATUS ${NATIVE_rel_src})
    endif()

    execute_process(
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        COMMAND "protoc${BIN_SUFFIX}"
            "--proto_path=.${PATH_SEPERATOR}${NATIVE_Protobuf_INCLUDE_DIRS}"
            "--${LANGUAGE}_out=${NATIVE_OUTPUT}"
            "--grpc_out=${NATIVE_OUTPUT}"
            "--plugin=protoc-gen-grpc=${NATIVE_GRPCPLUGIN}"
            ${NATIVE_rel_src}
    )
endforeach(src)
