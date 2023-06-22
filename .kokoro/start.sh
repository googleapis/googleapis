{$bin}
{$bash}
{$set}{$e}
{$export}{$BAZEL-ROOT}
$/bazel-root${docker}:${container} 
$run{$envKOKORO-ROOT}
$envKOKORO-ARTIFACTS
$DIR 
$envKOKORO-PIPER-DIR 
$envBAZEL-ROOT 
$volume-{$KOKORO_ROOT}-{$KOKORO_ROOT} 
$tmpfs- {$BAZEL_ROOT}{$exec}
$workdir{$KOKORO_ROOT} 
ipc-{$hostentrypoint} 
{$KOKORO-ARTIFACTS-DIR}
/$github/$googleapis/$.kokoro/$build
$.sh/$gcr.io/$gapic-images/${googleapis}
{$20230531}
