[TOC]

# Introduction

RuntimeConfig service provides Google Cloud Platform users the ability to
dynamically configure your service.

The RuntimConfig service creates and manages RuntimeConfig resources
within a Google Cloud Project and various variables within said resource.

[Contact us](mailto:dm-eng+runtimeconfig@google.com?subject=RuntimeConfig)

## Details

Each cloud project can create multiple **Config** objects. **Config** object by
itself does not contain any configuration information, but rather is a logical
grouping of variables. Variable names are hierarchical and follow file system
style, where only leaf nodes can contain values.

For example, you can have a configuration called *Flags*. Within that
configuration object, you can create the following variables.

* /ports/service_port
* /ports/monitoring_port
* /ports/admin_port

This creates three variables: `/ports/serve_port`, `/ports/monitoring_port`,
`/ports/admin_port`. Note that `/ports` cannot have a value but it can be listed.

## Apido examples

### Setup

#### OnePlatform setup

In order to make requests to RuntimeConfig service you need to enable the API
for your project.

While for prod you might just go to pantheon and enable *Google Cloud Runtime
Configuration API* for your project, to hit `staging` or `test` instances you
will actually need too enable the API via `opgcloud` (which is OnePlatform
custom build for now).

1. Optional, but further documentation presumes this: `alias opgcloud=/google/data/ro/teams/oneplatform/opgcloud`.
1. `opgcloud config set project <your-project>`
1. `opgcloud alpha service-management enable --service=<service> --consumer-project=<your-project> --force`

Where `<your-project>` is the name of your project, e.g. *dm-vagababov* and
service is one of *runtimeconfig.googleapis.com,
staging-runtimeconfig.sandbox.googleapis.com,
test-runtimeconfig.sandbox.googleapis.com*.

The execution of the command will return an operation which can be watched using
`opgcloud alpha service-management operations describe <op-name>`, but, in general, this
takes less than a minute to complete.

#### apido setup

See Apido documentation
[here](https://g3doc.corp.google.com/google/g3doc/oneplatform/apido.shtml?cl=head) to setup your client.

1. In your CitC client go to `//google/cloud/runtimeconfig`.
1. Build everything, `blaze build :all`.
1. Execute one of the targets:
    * `apido cli` ? will start a testing stack. It runs on your machine and
    executes requests against `testing` ConfigStore prefix (still prod
    ConfigStore blade target) and staging [IAM](http://goto/iam).
    * `apido cli-staging-deployed` ? will start `apido` that connects to
    the staging instance of the service via GFE (`staging-runtimeconfig.sandbox.googleapis.com`).
    This uses OnePlatform L2 GFEs.
    * `apido cli-prod-deployed` ? will start `apido` talking to the prod
    (*public*) instance ? runtimeconfig.googleapis.com ? via general pool
    L1 & L2 GFEs.
1. To actually make requests that succeed you will need to run the above
commands with `--api_key=<your project key>`. Otherwise ESF has no way of
associating your request with a GCP project. Head to Pantheon to create your
project key and then just copy-paste it in the command line. To obtain API Key
you can go here: `https://pantheon.corp.google.com/project/<your-project>/apiui/credential`,
choose `Add key`, then `Server Key`.
1. When *apido* launches, execute `scopes cloud-platform`. That will fetch your
OAuth2 creadentials. You might need to go ahead and click on a link first time
(same as with gcloud first run experience).
1. Now start the servers by executing `ssw` (start, stop, wait).
1. Oooh, whee! now  you're ready to make requests!

### Request examples

The following examples use my project *dm-vagababov*. You will need to
substitute those with your project name.

#### Config operations

1. To `list` your configurations execute `hget /v1alpha1/projects/dm-vagababov/configs`.
The very fist execution might ask to click on a link to fetch credentials and
then on success will return `{}`.
1. To `create` a new *Config* resource object execute
```
hpost  /v1alpha1/projects/dm-vagababov/configs {name: 'projects/dm-vagababov/configs/<config-name>', description: 'whatever description you desire'}
```
Now if you list your projects again the added project must be returned.
Note here, that name is relative to the API version, but is a fully
qualified resource name.
1. To `get` a config resource execute `hget /v1alpha1/projects/dm-vagababov/configs/<config-name>`.
1. To `update` a config resource execute
`hput /v1alpha1/projects/dm-vagababov/configs/<config-name> {name: 'projects/dm-vagababov/configs/<config-name>', description: 'new description'}`.
1. To `delete` a config resource, execute `hdelete  /v1alpha1/projects/dm-vagababov/configs/<config-name>`.

#### Variable operations

Those are very similar to the *Config* operations.
Variables require corresponding *Config* object to exist.
So below we presume that `config-name` *Config* resource has been created.

* To `create` a variable, execute

```
 hpost  /v1alpha1/projects/dm-vagababov/configs/config-name/variables {name: 'projects/dm-vagababov/configs/config-name/variables/<var-name>', value: 'whatever value you desire'}
```

Value is a Base64 encoded string. ESF apparently has a lot of leeway in
analyzing this string (e.g. the value used above will be seen by the backend as
`whatevervalueyoudesirQ==`. Bug is filed.). If you need to encode a string
manually, then this [site](https://www.base64encode.org/) can help.
Alternatively, you can use Python to do this

  ```python
import base64

print base64.b64encode('gazorpazorpfield')
  ```

* To `get` a variable, execute `hget /v1alpha1/projects/dm-vagababov/configs/config-name/variables/<var-name>`

* To `update` a variable, execute `hput /v1alpha1/projects/dm-vagababov/configs/config-name/variables/<var-name> {value="new value"}`

* To `delete` a variable, execute `hdelete  /v1alpha1/projects/dm-vagababov/configs/config-name/variables/<var-name>`

* To `list` variables, execute `hget /v1alpha1/projects/dm-vagababov/configs/config-name/variables?filter=<filter>`.
As you may have guessed, `?filter=<filter` part is totally optional. If
provided, though, filter corresponds to the full prefix of the variable, e.g
`projects/dm-vagababov/configs/config-name/variables/path/to/parent-variable-name`.

* To `watch` variable, execute ` hpost /v1alpha1/projects/dm-vagababov/configs/config-name/variables/<var-name>:watch`.
In v1alpha1 API version only one variable can be watched. Also note that the
HTTP verb is `post`. That is OnePlatform requirements for custom verbs. In
general this will hang for 60 seconds and then return `DEADLINE_EXCEEDED` error,
but if you start another copy of *apido* (without `ssw` command, though) and
update or delete the variable from there, you will see it return with the new
contents or status `DELETED`.