# Instructions for updating the GAPIC IDLs and sanitized protos

<!--For more information, see go/fresh-source. -->
<!--* freshness: { owner: 'vtsao' reviewed: '2017-11-10' } *-->

Follow instructions at:
https://g3doc.corp.google.com/company/teams/veneer/user/user-guide.md#refreshing-existing-client-libraries

Additional steps:

1.  Ensure `google-iam-v1` is under `proto_deps` in
    `artman_containeranalysis.yaml`.
1.  Diff the existing `containeranalysis_gapic.yaml` with the updated one that
    was generated and ensure things like `flattening` and `required_fields`
    contain the correct fields and not include deprecated fields like `name`.
    See cl/175301075 for reference.
1.  While we still support the deprecated
    `google/devtools/source/v1/source_context.proto`, the sanitized
    `provenance.proto` still seems to import it, remove the import statement.
