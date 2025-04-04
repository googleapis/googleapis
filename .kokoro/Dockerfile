FROM python:3.10.11-bullseye

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y \
    zip \
    build-essential \
    python-dev \
    openjdk-17-jdk \
    python3-dev \
    pkg-config \
    openssl \
    libcurl4-openssl-dev

RUN mkdir -p /tools
WORKDIR /tools
RUN curl -L https://github.com/bazelbuild/bazelisk/releases/download/v1.12.0/bazelisk-linux-amd64 -o bazelisk
RUN chmod +x bazelisk
RUN curl -L https://github.com/bazelbuild/bazel/releases/download/6.0.0/bazel-6.0.0-linux-x86_64 -o bazel
RUN chmod +x bazel
WORKDIR /

ENV PATH="/tools:${PATH}"

ENV BAZELISK_BIN=/tools/bazelisk
ENV BAZEL_BIN=/tools/bazelisk

RUN apt-get clean

# Ask Bazel to use C++14 by default.
# Note: Bazel will use this system-wide configuration file and will merge it
# with other bazelrc file it finds: https://bazel.build/run/bazelrc
RUN echo 'build --repo_env=BAZEL_CXXOPTS="-std=c++14"' > /etc/bazel.bazelrc

ENTRYPOINT [ "/bin/bash" ]
