// The goapp command implements a simple App Engine app to demonstrate how to
// use the Service Control API v2 for admission control. For more information,
// see https://cloud.google.com/service-infrastructure/docs/admission-control.
package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	// WARNING:`go get google.golang.org/api/servicecontrol/v2" may take
	// 30 minutes or longer, depending on your network speed.
	"google.golang.org/api/servicecontrol/v2"
)

// Check calls Service Control API v2 for admission control.
// Name specifies the target resource name. Permission specifies
// the required permission on the target resource. Received
// specifies the timestamp when the request is received.
func check(w http.ResponseWriter, r *http.Request, name string, permission string, received time.Time, client *servicecontrol.Service) (string, error) {
	// Construct CheckRequest from the incoming HTTP request.
	// The code assumes the incoming request processed by App Engine ingress.
	req := &servicecontrol.CheckRequest{
		ServiceConfigId: "latest",
		Attributes: &servicecontrol.AttributeContext{
			Origin: &servicecontrol.Peer{
				Ip: r.Header.Get("x-appengine-user-ip"),
			},
			Api: &servicecontrol.Api{
				Service:   "endpointsapis.appspot.com",
				Operation: "google.example.endpointsapis.v1.Workspaces.GetWorkspace",
				Version:   "v1",
				Protocol:  r.Header.Get("x-forwarded-proto"),
			},
			Request: &servicecontrol.Request{
				Id:     r.Header.Get("x-appengine-request-log-id"),
				Time:   received.UTC().Format(time.RFC3339),
				Method: r.Method,
				Scheme: r.Header.Get("x-forwarded-proto"),
				Host:   r.Host,
				Path:   r.URL.Path,
				Headers: map[string]string{
					"authorization": r.Header.Get("authorization"),
					"user-agent":    r.Header.Get("user-agent"),
					"origin":        r.Header.Get("origin"),
					"referer":       r.Header.Get("referer"),
				},
			},
			Resource: &servicecontrol.Resource{
				Name: name,
			},
		},
		Resources: []*servicecontrol.ResourceInfo{
			{
				Name:       name,
				Type:       "endpointsapis.appspot.com/Workspace",
				Permission: permission,
			},
		},
	}
	resp, err := client.Services.Check("endpointsapis.appspot.com", req).Do()
	if err != nil {
		return "", err
	}
	json, err := resp.MarshalJSON()
	if err != nil {
		return "", err
	}
	return string(json), nil
}

// Report calls Service Control API v2 for telemetry reporting.
// Name specifies the target resource name. ResponseCode specifies
// the response code returned to user. Received specifies the
// timestamp when the request is received.
func report(w http.ResponseWriter, r *http.Request, name string, responseCode int64, received time.Time, client *servicecontrol.Service) (string, error) {
	// Construct ReportRequest from the incoming HTTP request.
	// The code assumes the incoming request processed by App Engine ingress.
	req := &servicecontrol.ReportRequest{
		ServiceConfigId: "latest",
		Operations: []*servicecontrol.AttributeContext{
			{
				Api: &servicecontrol.Api{
					Service:   "endpointsapis.appspot.com",
					Operation: "google.example.endpointsapis.v1.Workspaces.GetWorkspace",
					Version:   "v1",
					Protocol:  r.Header.Get("x-forwarded-proto"),
				},
				Request: &servicecontrol.Request{
					Size: r.ContentLength,
					Time: received.UTC().Format(time.RFC3339),
				},
				Response: &servicecontrol.Response{
					Time:           time.Now().UTC().Format(time.RFC3339),
					Code:           responseCode,
					BackendLatency: "0.007s",
				},
				Destination: &servicecontrol.Peer{
					RegionCode: "us-central1",
				},
				Resource: &servicecontrol.Resource{
					Name: name,
				},
			},
		},
	}
	_, err := client.Services.Report("endpointsapis.appspot.com", req).Do()
	if err != nil {
		return "", err
	}
	return "{}", nil
}

// Parse processes the request path and extract the resource name and
// permissions.
func parse(r *http.Request) (string, string, error) {
	// Split the request path.
	segments := strings.Split(r.URL.Path, "/")

	// The request path must match "/v1/projects/*/locations/*/workspaces/*" or
	// "/v1/projects/*/locations/*/workspaces". They correspond to the
	// GetWorkspace() and ListWorkspaces() methods defined in ../v1/workspace.proto.
	if segments[0] != "" || segments[1] != "v1" || segments[2] != "projects" || segments[4] != "locations" || segments[6] != "workspaces" || len(segments) > 8 {
		return "", "", errors.New("Resource '" + r.URL.Path + "' not found.")
	}

	// Skip prefix "/v1/".
	resource := r.URL.Path[4:]
	permission := "endpointsapis.appspot.com/workspaces.list"
	if len(segments) == 8 {
		permission = "endpointsapis.appspot.com/workspaces.get"
	}
	return resource, permission, nil
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	received := time.Now()

	// Create a client for Service Control API v2.
	client, err := servicecontrol.NewService(r.Context())
	if err != nil {
		fmt.Fprintln(w, "Error:")
		fmt.Fprintln(w, err.Error())
		return
	}

	resource, permission, err := parse(r)
	if err != nil {
		fmt.Fprintln(w, "Error:")
		fmt.Fprintln(w, err.Error())
		return
	}

	// Perform admission control.
	result, err := check(w, r, resource, permission, received, client)

	var responseCode int64 = 200
	// Print the admission control result.
	if err != nil {
		fmt.Fprintln(w, "Error:")
		fmt.Fprintln(w, err.Error())
		responseCode = 403
	} else {
		fmt.Fprintln(w, "CheckResponse:")
		fmt.Fprintln(w, result)
	}

	// Print all environment variables.
	fmt.Fprintln(w, "Environments:")
	fmt.Fprintln(w, strings.Join(os.Environ(), "\n"))

	// Print all request headers.
	fmt.Fprintln(w, "Headers:")
	for key, values := range r.Header {
		for _, value := range values {
			fmt.Fprintf(w, "%v: %v\n", key, value)
		}
	}

	// Perform telemetry report.
	report(w, r, resource, responseCode, received, client)
}

func main() {
	http.HandleFunc("/", indexHandler)

	port := os.Getenv("PORT")

	log.Printf("Listen and serve on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
