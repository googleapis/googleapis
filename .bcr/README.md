# BCR Publisher

This document explains how to use the `publish-to-bcr.sh` script to publish `googleapis` to the Bazel Central Registry (BCR).

## Usage

The `publish-to-bcr.sh` script is used to automate the process of creating a new version of the `googleapis` module in the BCR.

### Arguments

The script accepts the following arguments:

*   `-r`, `--ref`: **(Required)** The git ref (commit SHA, tag, or branch) of `googleapis` to be published.
*   `-t`, `--templates_ref`: The git ref to use for the templates. Defaults to the value of `--ref`.
*   `-o`, `--org`: The GitHub organization. Defaults to `googleapis`.
*   `-p`, `--protobuf_version`: The version of protobuf to use. Defaults to `21.7`.
*   `-b`, `--bcr_organization`: The GitHub organization for the Bazel Central Registry. Defaults to `bazelbuild`.
*   `-f`, `--bcr_folder`: The local path to a fork of the `bazel-central-registry` repository. If not provided, the script will clone it from `https://github.com/{bcr_organization}/bazel-central-registry`.

### Example

```bash
./publish-to-bcr.sh --ref <your-commit-sha>
```

### After running the script

After the script is executed, it will perform the following actions:

1.  A new branch will be created in your local fork of `bazel-central-registry`.
2.  The script will prompt you to create a Pull Request. If you agree, a new PR will be created in the `bazelbuild/bazel-central-registry` repository.
3.  The script will automatically add a comment to the PR with the content: `@bazel-io skip_check unstable_url`. This is necessary to bypass the URL stability check.

Once the Pull Request has been created and all Continuous Integration (CI) checks are passing, a maintainer of the Bazel Central Registry will review and merge it.

#### Note on re-running the script

During development, you may need to run the script several times.
Between each call, it's strongly recommended to reset your local fork of bazel-central-registry.
For this, you can run the following command:

```bash
pushd "${fork_location}"
git reset --hard
git checkout main
git clean -d -f
popd
```

## Testing

To run the unit tests for the script, use the following command:

```bash
./publish-to-bcr_test.sh
```