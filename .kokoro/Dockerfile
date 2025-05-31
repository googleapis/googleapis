FROM marketplace.gcr.io/google/debian12:latest

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
    apt-utils \
    curl \
    zip \
    build-essential \
    python-dev-is-python3 \
    openjdk-17-jdk \
    python3-dev \
    pkg-config \
    openssl \
    libxml2-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    && apt-get clean

RUN mkdir -p /tools
WORKDIR /tools
RUN curl -L https://github.com/bazelbuild/bazelisk/releases/download/v1.26.0/bazelisk-linux-amd64 -o bazelisk
RUN chmod +x bazelisk
RUN curl -L https://github.com/bazelbuild/bazel/releases/download/7.6.1/bazel-7.6.1-linux-x86_64 -o bazel
RUN chmod +x bazel
WORKDIR /

ENV PATH="/tools:${PATH}"

ENV BAZELISK_BIN=/tools/bazelisk
ENV BAZEL_BIN=/tools/bazelisk


# Ask Bazel to use C++14 by default.
# Note: Bazel will use this system-wide configuration file and will merge it
# with other bazelrc file it finds: https://bazel.build/run/bazelrc
RUN echo 'build --repo_env=BAZEL_CXXOPTS="-std=c++14"' > /etc/bazel.bazelrc

ENTRYPOINT [ "/bin/bash" ]
