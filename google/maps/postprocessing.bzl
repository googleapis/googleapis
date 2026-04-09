"""
Defines the postprocessing build rule for the Google Maps APIs.
"""

def maps_assembly_pkg(name, srcs, language, visibility = None):
    """Target to build a post-processed ads-specific GAPIC assembly package.

    Explodes a GAPIC assembly package, runs language-specific post-processing, and repackages.

    This macro assumes srcs contains in a single input, namely a {{language}}_assembly_pkg target
    produced by a gapic-generator build target.

    There must be a corresponding postprocessing_{language}.sh script to invoke.

    Args:
      name: defines the name of the main target
      srcs: collection containing exactly 1 build target, namely a
        {{language}}_assembly_pkg target produced by gapic-generator
      language: the programming language to post-process
        (e.g., "java", "csharp", "php", etc.); there must be a matching
        post-processin script of the form `postprocessing_{language}.sh
        in this package
      visibility (optional): marco visibility setting;
        (see https://docs.bazel.build/versions/master/skylark/macros.html)
    """
    cmd = """
    set -eu

    tar xzf $(SRCS);
    $(location //google/maps:postprocessing_%s) %s;
    tar czf $@ %s
    """
    dir_name = _extract_path(srcs)

    native.genrule(
        name = name,
        srcs = srcs,
        outs = ["%s.tar.gz" % name],
        cmd = cmd % (language, dir_name, dir_name),
        tools = ["//google/maps:postprocessing_%s" % language],
        visibility = visibility,
    )

def _extract_path(srcs):
    """Takes the first label in srcs and returns its target name.

    Args:
      srcs: a collection of build labels of the form "//package/name:target"

    Returns:
      The first element's target (i.e.- the part after the ":"), else None if empty.
    """

    for s in srcs:
        toks = s.split(":")
        if len(toks) == 2:
            return toks[1]
    return None
