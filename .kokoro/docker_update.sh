#!/bin/sh

# This script will build a Docker image for googleapis and recompile
# PHP and Ruby runtimes binaries to use in GAPIC generators for these
# languages.
#
# Historically, PHP and Ruby keep their compiled runtimes in the generators'
# repositories:
# https://github.com/googleapis/gapic-generator-php/tree/main/rules_php_gapic/resources
# https://github.com/googleapis/gapic-generator-ruby/tree/main/rules_ruby_gapic/prebuilt
# They are needed to prevent rebuilding of PHP and Ruby runtime (each taking
# several minutes) every time the build is executed from a clean workspace.
#
# Sometimes these binaries need to be updated: they are dynamically linked,
# and may stop working if some dependency changes in an incompatible way.
# Use this script to update both the googleapis Docker image, and those
# binaries.
#
# Run from any local working directory where you have write access.
#
# Usage:
# $ mkdir workdir
# $ cd workdir
# $ sh /path/to/.kokoro/docker_update.sh
#
# After the script completes, it should print out commands to push the new
# Docker image and to create pull requests against Ruby and PHP generators.
# Whenever the image is published, tag it in Google Cloud Console,
# then release new versions of the generators and update the image tag in
# start.sh scripts in Kokoro folders in all googleapis workspaces.

set -e

PWD="`pwd`"
SHARED="$PWD/volume"
SCRIPT=$0
DIRNAME=`dirname $SCRIPT`

if test -d "$SHARED"; then
  echo "The working directory $SHARED already exists, please delete it first."
  exit 1
fi
mkdir -p "$SHARED"

# 1. Build the latest Docker image using the Dockerfile from google3

echo "Using Dockerfile from $DIRNAME"
cat "$DIRNAME/Dockerfile" > "$PWD/Dockerfile"

echo "Building googleapis Docker image..."
docker build -t googleapis .
docker tag googleapis gcr.io/gapic-images/googleapis
echo "Done."

# 2. Clone Ruby and PHP generators
cd "$SHARED"
echo "Cloning Ruby generator..."
git clone --depth 1 git@github.com:googleapis/gapic-generator-ruby.git
echo "Done."
echo "Cloning PHP generator..."
git clone --depth 1 git@github.com:googleapis/gapic-generator-php.git
echo "Done."

# 3. Generate a script that would run Bazel to build both generators
cat > build.sh <<EOD
#!/bin/sh
set -e
export USER="$USER"
export HOME=/volume
cd /volume
cd gapic-generator-ruby
bazel build //rules_ruby_gapic/gapic-generator:gapic_generator_bundled_context
cd /volume
cd gapic-generator-php
bazel build //rules_php_gapic:php_gapic_generator_binary
cd ..
EOD
chmod +x build.sh

# 4. Execute the script inside Docker image
echo "Building generators inside Docker..."
# Note: without --privileged, the container has problems accessing the filesystem.
# We don't care much about it at this moment. Discussed here:
# https://forums.docker.com/t/what-capabilities-are-required-for-ls/92223
DOCKER_COMMAND="docker run --privileged --user=$UID --workdir=/volume -i --rm -v $SHARED:/volume"
$DOCKER_COMMAND --entrypoint /volume/build.sh googleapis
echo "Done."

# Fix permissions of the mounted folder
chmod -R u+w "$SHARED"

# 5. Pack the resulting Ruby and PHP binaries
RUBY_DIRECTORY=`ls -d .cache/bazel/*/*/external/gapic_generator_ruby_runtime`
RUBY_VERSION=`echo 'puts RUBY_VERSION' | $DOCKER_COMMAND --entrypoint "" googleapis /volume/$RUBY_DIRECTORY/bin/ruby`

echo "Ruby version: $RUBY_VERSION, packing..."
RUBY_ARCHIVE_DIR="ruby-$RUBY_VERSION"
RUBY_TARBALL_FILENAME="ruby-${RUBY_VERSION}_glinux_x86_64.tar.gz"
mkdir -p "$RUBY_ARCHIVE_DIR"
cp -r "$RUBY_DIRECTORY"/bin "$RUBY_DIRECTORY"/include "$RUBY_DIRECTORY"/lib "$RUBY_ARCHIVE_DIR"
tar cfz "$RUBY_TARBALL_FILENAME" "$RUBY_ARCHIVE_DIR"
echo "Done: $RUBY_TARBALL_FILENAME"

PHP_DIRECTORY=`ls -d .cache/bazel/*/*/external/php_micro`
PHP_VERSION=`echo '<? echo phpversion(); ?>' | $DOCKER_COMMAND --entrypoint "" googleapis /volume/$PHP_DIRECTORY/bin/php`

echo "PHP version: $PHP_VERSION, packing..."
PHP_ARCHIVE_DIR="php-$PHP_VERSION"
PHP_TARBALL_FILENAME="php-${PHP_VERSION}_linux_x86_64.tar.gz"
mkdir -p "$PHP_ARCHIVE_DIR"
cp -r "$PHP_DIRECTORY"/bin "$PHP_DIRECTORY"/include "$PHP_DIRECTORY"/lib "$PHP_ARCHIVE_DIR"
tar cfz "$PHP_TARBALL_FILENAME" "$PHP_ARCHIVE_DIR"
echo "Done: $PHP_TARBALL_FILENAME"

# 6. Commit the tarballs
BRANCH="update-binary-`date +%Y%m%dT%H%M%S`"

RUBY_TARBALL_LOCATION=rules_ruby_gapic/prebuilt
cd "$SHARED/gapic-generator-ruby"
git checkout -b "$BRANCH"
git rm -f "$RUBY_TARBALL_LOCATION"/*.tar.gz
cp "$SHARED/$RUBY_TARBALL_FILENAME" "$RUBY_TARBALL_LOCATION/"
git add "$RUBY_TARBALL_LOCATION/$RUBY_TARBALL_FILENAME"
git commit -m "fix: update Ruby prebuilt binary, version $RUBY_VERSION"
echo "Pushing Ruby branch to GitHub..."
git push --set-upstream origin "$BRANCH"
echo "Done"

PHP_TARBALL_LOCATION=rules_php_gapic/resources
cd "$SHARED/gapic-generator-php"
git checkout -b "$BRANCH"
git rm -f "$PHP_TARBALL_LOCATION"/*.tar.gz
cp "$SHARED/$PHP_TARBALL_FILENAME" "$PHP_TARBALL_LOCATION/"
git add "$PHP_TARBALL_LOCATION/$PHP_TARBALL_FILENAME"
git commit -m "fix: update PHP prebuilt binary, version $PHP_VERSION"
echo "Pushing PHP branch to GitHub..."
git push --set-upstream origin "$BRANCH"
echo "Done"

echo
echo "Please create pull requests:"
echo "  https://github.com/googleapis/gapic-generator-ruby/pull/new/$BRANCH"
echo "  https://github.com/googleapis/gapic-generator-php/pull/new/$BRANCH"
echo "and push this Docker image to gcr.io:"
echo "  docker push gcr.io/gapic-images/googleapis"
