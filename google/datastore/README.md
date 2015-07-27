# Google Cloud Datastore Overview

## API

This file describes the API for [Google Cloud Datastore][0]. Google Cloud Datastore
is a fully managed, schemaless, non-relational datastore accessible through
Google APIs infrastructure. It provides a rich set of query capabilities,
supports atomic transactions, and automatically scales up and down in response
to load.

The API is deliberately low-level to map to the underlying Datastore RPC model
and provide more flexibility to developers and higher level library
implementers.

## Client libraries

The Datastore can be used with many client libraries. Getting started
guides for the different libraries are available on the [Getting Started][1]
page.

## Features

The Datastore is a schemaless NoSQL datastore providing robust,
scalable storage for your application, with the following features:

* No planned downtime
* Atomic transactions
* High availability of reads and writes
* Strong consistency for reads and ancestor queries
* Eventual consistency for all other queries

The Datastore replicates data across multiple datacenters using a system
based on the Paxos algorithm. This provides a high level of availability for
reads and writes. Most queries are eventually consistent.

## Data Model

*   **Entity**: An entity has one or more *properties*, named values of one of
    several supported data types: for instance, a property can be a string, an
    integer, or a reference to another entity. Each entity is identified by its
    *kind*, which categorizes the entity for the purpose of queries, and a *key*
    that uniquely identifies it within its kind.

*   **Key**: Each entity belongs to a specific kind, which categorizes it for
    the purpose of queries. In addition, each entity has its own key which
    uniquely identifies it. The key consists of a kind, an identifier, and an
    optional [ancestor path][2].

*   **Transaction**: The Datastore can execute multiple operations in a single
    transaction. By definition, a transaction cannot succeed unless every one
    of its operations succeeds; if any of the operations fails, the transaction
    is automatically rolled back.

[0]: https://cloud.google.com/datastore/
[1]: https://cloud.google.com/datastore/docs/getstarted
[2]: https://cloud.google.com/datastore/docs/concepts/overview#Datastore_Ancestor_paths
