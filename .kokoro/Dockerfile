FROM python:3.10

RUN apt-get update

RUN apt-get install -y \
    zip \
    build-essential \
    python-dev \
    python3-dev \
    openjdk-11-jdk

RUN mkdir -p /tools
WORKDIR /tools
RUN curl -L https://github.com/bazelbuild/bazelisk/releases/download/v1.12.0/bazelisk-linux-amd64 -o bazelisk
RUN chmod +x bazelisk
RUN curl -L https://github.com/bazelbuild/bazel/releases/download/5.2.0/bazel-5.2.0-linux-x86_64 -o bazel
RUN chmod +x bazel
WORKDIR /

ENV PATH="/tools:${PATH}"

ENV BAZELISK_BIN=/tools/bazelisk
ENV BAZEL_BIN=/tools/bazelisk

RUN apt-get clean

ENTRYPOINT [ "/bin/bash" ]
