---
title: Requirements
---

# Hardware Requirements

A Relay Node is a full node in the Solar network; it maintains a complete copy of the ledger (blockchain). These nodes serve as Public API endpoint, use an internal service discovery mechanism to locate other nodes and keep each other in sync.

## Requirements

| Supported NodeJS Version |
| :----------------------: |
|          **18**          |

---

| Supported OS | Release   |
| :----------: | :-------: |
| **Ubuntu**   | `>= 20.x` |
| **Debian**   | `>= 10.x` |

<div class="admonition warning">
    <p class="admonition-title"><b>Ubuntu</b> <code><= 18.x</code> and <b>Debian</b> <code><= 9</code> are no longer supported</p>
</div>

---

| Relay Requirements | Recommended   | Minimum |
| :----------------: | :-----------: | :-----: |
| **CPUs**           | 4             | 2       |
| **RAM**            | 8GB           | 4GB     |
| **HDD**            | 100GB - 120GB | 80GB    |

---

SXP Nodes execute many query intensive operations. The most cost-effective approach for running a high-performance node is choosing SSD over HDD. Increasing the total RAM improves cache performance.

## Configuration Requirements

* Stable internet connection
* Access to multiple open ports (actual ports may be configured)

| Service    | Port | Required | Enabled by default  | Documentation                                            |
| :--------- | :--: | :------: | :-----------------: | :------------------------------------------------------- |
| P2P        | 6001 |     ✅    |          ✅         | [reference](/core/installation/variables/#core_p2p_port) |
| Public API | 6003 |     ❌    |          ✅         | [reference](/exchanges/api-guide)                        |
| Webhooks   | 6004 |     ❌    |          ❌         | [reference](/api/webhook-api/getting-started)            |
