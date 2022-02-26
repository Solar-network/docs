---
title: Getting Started
---

# Getting Started

<x-alert type="danger">
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
</x-alert>

This is the reference guide for the Public API. This API exposes all resources and data provided by an Solar Core node; and is the preferred way of interacting with the Solar Network. Note that each node has its own internal blockchain and state, meaning it may have forked or be out of sync, causing queries to fail. Monitor your node by comparing it to different public nodes, such as an official explorer to ensure you are in sync.

* Mainnet: [https://explorer.solar.org](https://explorer.solar.org)
* Devnet: [https://dexplorer.solar.org](https://dexplorer.solar.org)

> If you have any problems or requests please [open an issue](https://github.com/solar-network/core/issues/new/choose).

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public Testing Relay

If you are not running a relay yourself you can test API calls using:

* Mainnet: [https://sxp.mainnet.sh/api](https://sxp.mainnet.sh/api)
* Devnet: [https://sxp.testnet.sh/api](https://sxp.testnet.sh/api)

Happy developing!
