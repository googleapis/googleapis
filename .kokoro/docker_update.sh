#!/bin/sh

# Historically, PHP and Ruby keep their compiled runtimes in the generators'
# repositories:
# https://github.com/googleapis/gapic-generator-php/tree/main/rules_php_gapic/resources
# https://github.com/googleapis/gapic-generator-ruby/tree/main/rules_ruby_gapic/prebuilt
# They are needed to prevent rebuilding of PHP and Ruby runtime (each taking
# several minutes) every time the build is executed from a clean workspace.
#
# Sometimes these binaries need to be updated: they are dynamically linked,
# and may stop working if some dependency changes in an incompatible way.
#
# The gcr.io/gapic-images/googleapis image source is now maintained on GitHub at
# https://github.com/googleapis/testing-infra-docker/tree/main/infrastructure/googleapis
# When changes are made to this file, we automatically build a new image and
# precompile the binaries which are stored on GCS.
#
# Use this script to update the cached Ruby and PHP runtimes in the Gapic
# generator repositories.
#
# After the script completes, it should print out commands create pull requests
# against Ruby and PHP generators.

set -e

SHARED=$(mktemp -d)
BRANCH="update-binary-`date +%Y%m%dT%H%M%S`"

pushd "${SHARED}"

echo "Cloning Ruby generator..."
git clone --depth 1 git@github.com:googleapis/gapic-generator-ruby.git
echo "Done."

echo "Updating Ruby prebuilt binaries..."
pushd gapic-generator-ruby
git checkout -b "${BRANCH}"
rm -rf rules_ruby_gapic/prebuilt/ruby-*.tar.gz
gsutil cp 'gs://gapic-images/prebuild/ruby-*.tar.gz' rules_ruby_gapic/prebuilt
git add rules_ruby_gapic/prebuilt/
git commit -m "fix: update Ruby prebuilt binary"
echo "Pushing Ruby branch to GitHub..."
git push --set-upstream origin "$BRANCH"
popd

echo "Cloning PHP generator..."
git clone --depth 1 git@github.com:googleapis/gapic-generator-php.git
echo "Done."

echo "Updating PHP prebuilt binaries..."
pushd gapic-generator-php
git checkout -b "${BRANCH}"
rm -rf rules_php_gapic/resources/php-*.tar.gz
gsutil cp 'gs://gapic-images/prebuild/php-*.tar.gz' rules_php_gapic/resources
git add rules_php_gapic/resources/
git commit -m "fix: update PHP prebuilt binary"
echo "Pushing PHP branch to GitHub..."
git push --set-upstream origin "$BRANCH"
popd

popd

echo
echo "Please create pull requests:"
echo "  https://github.com/googleapis/gapic-generator-ruby/pull/new/$BRANCH"
echo "  https://github.com/googleapis/gapic-generator-php/pull/new/$BRANCH"
