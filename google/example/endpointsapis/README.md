# Service Infrastructure Codelab

This is an example API that demonstrates how to design a networked API following
[API Design Guide](https://cloud.google.com/apis/design), implement the API
as an [App Engine](https://cloud.google.com/app-engine) app,
and integrate the API with Google Cloud's
[Service Infrastructure](https://cloud.google.com/service-infrastructure).
It is intended for service providers who want to build services using
Google Cloud.

NOTE: This API is also used for Service Infrastructure reference documentation.

## Glossary

For terminology used in this example, see
[API Glossary](https://cloud.google.com/apis/design/glossary).

## Installation

You need to install [`gcloud`](https://cloud.google.com/sdk/docs),
[`go`](https://golang.org/doc/install),
[`protoc`](https://grpc.io/docs/protoc-installation/),
and [`oauth2l`](https://github.com/google/oauth2l) tools on your local machine
in order to build this example.

Run the following commands to install additional Go packages that will be used
in this example API:

```shell
go get golang.org/x/oauth2/google
go get google.golang.org/api/servicecontrol/v2
```

## Introduction

This API uses a proto file to define the API surface, and a YAML file to
configure the API service. The API backend is built as an App Engine app
written in Go, and uses the
[Service Control API](https://cloud.google.com/service-control) for
deeper integration with Service Infrastructure and Google Cloud.

This example API uses project id `endpointsapis` and service name
`endpointsapis.appspot.com`. The name `endpointsapis` has no special meaning.
If you want to build this example API by yourself, you must use your own
project id and service name. For how to create a project, see
[Getting Started](https://cloud.google.com/apis/docs/getting-started#creating_a_google_project).

WARNING: Some features used in this example are private, and you need to join
private preview programs to use such features.

### Design

This example API design follows Google's
[API Design Guide](https://cloud.google.com/apis/design). It uses a proto
file, `./v1/workspace.proto`, to define the gRPC API surface, and uses
[`google.api.http`](https://aip.dev/127) annotation to define the REST
API mapping.

For more information, see the proto definition and
[API Design Guide](https://cloud.google.com/apis/design).

### Configuration

To build a networked API and expose it to consumers, you need to configure it
as an API service. The configuration includes the API title, the network
addresses, the authentication requirements, and many other aspects.

If you create an API service using Google Cloud's Service Infrastructure,
you need to create a servie configuration using the
[`google.api.Service`](../../api/service.proto) schema. The service
configuration is the yaml representation of `google.api.Service`,
see `./endpointsapis.yaml`.

```yaml
type: google.api.Service  # The schema to use; always "google.api.Service".
name: endpointsapis.appspot.com
title: Endpoints APIs
producer_project_id: endpointsapis
apis:                     # The supported API interfaces.
- name: google.example.endpointsapis.v1.Workspaces
```

After you have created your API definition and service configuration, you need
to push them to the Service Management API, which will distribute the
information to Google Cloud infrastructure backends.

Run the following commands to generate proto descriptor and push the
descriptor and service configuration to the Service Management API.

```shell
# Generate proto descriptors from the proto files.
protoc --include_source_info --include_imports --descriptor_set_out=service.descriptors v1/workspace.proto

# Push the proto descriptors and yaml files to the Service Management API.
gcloud endpoints services deploy service.descriptors endpointsapis.yaml
```

For more information, see
[Manage Service Configurations](https://cloud.google.com/service-infrastructure/docs/manage-config).

### Implementation

Create an App Engine app that implements your API and deploy the app, see
[Building a Go App on App Engine](https://cloud.google.com/appengine/docs/standard/go/building-app).
The implementation of this code is in `goapp/main.go`. Run the following
command to deploy the code:

```shell
gcloud app deploy
```

### Integration

The Service Control API is the frontend of System Infrastructure control plane.
It provides admission control and telemetry reporting functionality to any
service that is integrated with Service Infrastructure, specifically:

*   For each request, the service calls the `Check` method for admission
    control.
*   For each response, the service calls the `Report` method for telemetry
    reporting.

For more information, see
[Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control)
and
[Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting).

In this example API, the app calls the Service Control API v2 for each request
and response, see `goapp/main.go`. You need to make sure the App Engine
service account has the necessary permissions to run the service.
For more information, see
[Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

NOTE: The telemetry reporting feature is not yet available as of July 2020.

### Verification

Follow [Getting Started](https://cloud.google.com/apis/getting-started) to set
up a client project for calling your API service. If you want to run your
test locally, you need to create an application credential in your client
project and download it to your local machine. The credential can be either
an OAuth client or a service account key in JSON format.

Use [`oauth2l`](https://github.com/google/oauth2l) to send a test request to
your App Engine app using your application credentials. `oauth2l` supports
different credential types in different environments.

```shell
curl -H "$(oauth2l header --credentials creds.json --scope cloud-platform,userinfo.email)" https://endpointsapis.uc.r.appspot.com/v1/projects/1020789478714/locations/1/workspaces
```

You should see the admission control results in the HTTP response
and the telemetry reporting results in Google Cloud Console. The producer
metrics are shown on the Endpoints page. The consumer metrics are shown on
the APIs & Services page.

## Summary

This example shows how to build a simple API service using Google Cloud
infrastructure. If you have any suggestions, please send us
[pull requests](https://github.com/googleapis/googleapis/pulls) directly.
