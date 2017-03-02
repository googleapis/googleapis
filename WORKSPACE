# nanopb
bind(
    name = "nanopb",
    actual = "//third_party/nanopb",
)

# Boringssl
bind(
    name = "libssl",
    actual = "@submodule_boringssl//:ssl",
)

new_local_repository(
    name = "submodule_boringssl",
    build_file = "third_party/boringssl-with-bazel/BUILD",
    path = "third_party/boringssl-with-bazel",
)

# Zlib
bind(
    name = "zlib",
    actual = "@submodule_zlib//:z",
)

local_repository(
    name = "submodule_zlib",
    path = "third_party/zlib",
)


# Protobuf
bind(
    name = "_cc_wkt_protos_only",
    actual = "@submodule_protobuf//:cc_wkt_protos",
)
bind(
    name = "protobuf",
    actual = "@submodule_protobuf//:protobuf",
)

bind(
    name = "protobuf_clib",
    actual = "@submodule_protobuf//:protoc_lib",
)

bind(
    name = "protocol_compiler",
    actual = "@submodule_protobuf//:protoc",
)

new_local_repository(
    name = "submodule_protobuf",
    build_file = "third_party/protobuf/BUILD",
    path = "third_party/protobuf",
)

# grpc
bind(
    name = "grpc++",
    actual = "@submodule_grpc//:grpc++",
)

bind(
    name = "grpc++_codegen_proto",
    actual = "@submodule_grpc//:grpc++_codegen_proto",
)

bind(
    name = "grpc_cpp_plugin",
    actual = "@submodule_grpc//:grpc_cpp_plugin",
)

git_repository(
    name = "submodule_grpc",
    remote = "https://github.com/grpc/grpc",
    tag = "v1.1.0",
)

# mongoose
git_repository(
    name   = "mongoose_repo",
    commit = "4120a97945b41195a6223a600dae8e3b19bed19e",
    remote = "https://github.com/makdharma/mongoose.git"
)

# gflags
bind(
    name = "gflags",
    actual = "@com_github_gflags_gflags//:gflags",
)

local_repository(
    name = "com_github_gflags_gflags",
    path = "third_party/gflags",
)
