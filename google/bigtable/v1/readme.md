## API v1 Shutdown
The Cloud Bigtable v1 API was deprecated in January, 2020, and will be shut down on **January 31, 2021**. All customers using the v1 API should upgrade to the Cloud Bigtable [v2 data and admin APIs][apis].

## Migrating to v2
If you have projects or applications that use the v1 API, you should start using the v2 APIs to avoid any disruption in your service.

If you connect to Cloud Bigtable using an early version the Cloud Bigtable client libraries that uses the v1 API, please see the client library [upgrade instructions][upgrading-clients].


[apis]: https://cloud.google.com//bigtable/docs/reference/service-apis-overview
[upgrading-clients]: https://cloud.google.com//bigtable/docs/upgrading-clients.md
