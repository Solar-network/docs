---
title: Getting Started
---

# Getting started

!!! tip

    All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.

This is the reference guide for the Public API. This API exposes all resources and data provided by a Solar Core node and is the preferred way of interacting with the Solar Network.

!!! question "If you have any problems or requests, please <a href="https://github.com/solar-network/core/issues/new/choose" target="_blank" rel="noopener noreferrer">open an issue</a>."

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public testing relay

If you are not running a relay yourself you can test API calls using:

|                                         Mainnet API                                         |
| :-----------------------------------------------------------------------------------------: |
| <a href="https://api.solar.org" target="_blank" rel="noopener noreferrer">api.solar.org</a> |

|                                          Testnet API                                          |
| :-------------------------------------------------------------------------------------------: |
| <a href="https://tapi.solar.org" target="_blank" rel="noopener noreferrer">tapi.solar.org</a> |

## Self-hosted relay port

When running a self-hosted Core relay instance, the default API port is `6003`.  
(e.g., `<your_relay's_ip>:6003/api`).

Be sure to configure your firewall appropriately.

!!! warning

    It's strongly advised to *only* enable API access on a relay node and **never** on a delegate forging node.

!!! success "Happy Developing!"
