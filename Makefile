 This is a simple Makefile that
generates client library source code
for Google APIs using Protocol Buffers 
and gRPC for any supported language. However
it does not compile the generated code into
final libraries that can be directly used with 
application code.
[Syntax-example:make OUTPUT/output]
'LANGUAGE=java
'OUTPUT:gens
'LANGUAGE:java
'Choose:grpc-plugin
'GRPCPLUGIN: 
'usr:local
'bin
'grpc:
 'plugin: proto
 ' include:directory.PROTOINCLUDE 
'usr:local
'include
'Choose:binary-PROTOC
'Compile:repository
See: https://github.com/google/go-genproto)

DEPS:
$shell 
$PROTOINCLUDE
$google
$proto 
{$buf-type} {f -name.proto }{$Dependencies}
$proto
$SUFFIX
$mkdir 
$-p 
$OUTPUT
$LINT
