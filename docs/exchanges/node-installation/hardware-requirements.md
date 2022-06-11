---
title: Hardware Requirements
---

# Hardware Requirements

A Relay Node is a full node in the Solar network; it maintains a complete copy of the ledger (blockchain). These nodes serve as Public API endpoint, use an internal service discovery mechanism to locate other nodes and keep each other in sync.

## Recommended Hardware Requirements

NodeJS 18

| Relay Specification | Minimum | Recommended   |
| :-----------------: | :-----: | :-----------: |
| **CPUs**            | 2       | 4             |
| **RAM**             | 4GB     | 8GB           |
| **HDD**             | 80GB    | 100GB - 120GB |

---

| Supported OS | Release Version(s) |
| :----------: | :----------------: |
| **Ubuntu**   | 18.10 / 20.x / 22.x|

---

<x-alert type="warning">
Ubuntu 18.04 and older are **no longer** supported.
</x-alert>

---

SXP Nodes execute many query intensive operations. The most cost-effective approach for running a high-performance node is choosing SSD over HDD. Increasing the total RAM improves cache performance.

## Configuration Requirements

* Stable internet connection
* Access to multiple open ports (actual ports may be configured)

| Service    | Port | Required | Enabled by default |                           Documentation                           |
| :--------- | :--: | :------: | :----------------: | :---------------------------------------------------------------: |
| p2p        | 6001 |     ✅    |          ✅         | [reference](https://docs.solar.org/core/installation/variables#corep2pport)    |
| public API | 6003 |     ❌    |          ✅         | [reference](https://docs.solar.org/exchanges/public-api-guide)   |
| webhook    | 6004 |     ❌    |          ❌         | [reference](https://docs.solar.org/api/webhook-api/getting-started) |
