## IAM (Identity and Access Management) Protos

This folder contains [protocol buffer][protobuf] types which represent IAM
(Identity and Access Management) concepts plus a mix-in service declaration (IAMPolicy)
which can be inherited by APIs so that they follow a consistent pattern for
IAM operations.

### Key Concepts

- **Binding**: Associates a list of identities with a particular role. An identity can
  match things like all users, all authenticated users, a single user, a single service
  account, a single group, or a single domain. A role is a permission defined by IAM, such as
  `roles/viewer`, `roles/editor`, or `roles/owner`.
- **Policy**: A list of bindings where each role can only appear once. It also contains
  a version to track iterations of the bindings.

### Key Service definitions

- **IAMPolicy**: This is a mix-in service which defines three operations:
  - `SetIamPolicy`: Sets the access control policy on the specified resource.
  - `GetIamPolicy`: Gets the access control policy for a resource.
  - `TestIamPermissions`: Returns permissions that a caller has on the specified resource.

[protobuf]: https://developers.google.com/protocol-buffers/
