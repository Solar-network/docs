---
title: Getting Started
---

# Getting Started

<div class="admonition tip">
    <p class="admonition-title">tip</p>
    <p>All HTTP requests have to be sent with the <code>Content-Type: application/json</code> header. If the header is not present it will result in malformed responses or request rejections.</p>
</div>

This is the reference guide for the Public API. This API exposes all resources and data provided by a Solar Core node and is the preferred way of interacting with the Solar Network.

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>Each Core server (node) has its own internal blockchain and state, meaning it may have forked or be out of sync, causing queries to fail. Monitor your node by comparing it to different public nodes, such as the official Mainnet or Testnet Explorer to ensure you are in sync.</p>
    <ul>
        <li>
            <b>Mainnet Explorer</b> - <a href="https://explorer.solar.org" target="_blank" rel="noopener noreferrer">explorer.solar.org</a>
        </li>
        <li>
            <b>Testnet Explorer</b> - <a href="https://texplorer.solar.org" target="_blank" rel="noopener noreferrer">texplorer.solar.org</a>
        </li>
    </ul>
</div>

<div class="admonition question">
    <p class="admonition-title">If you have any problems or requests, please <a href="https://github.com/solar-network/core/issues/new/choose" target="_blank" rel="noopener noreferrer">open an issue</a>.</p>
</div>

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public Testing Relay

If you are not running a relay yourself you can test API calls using:

|                                         Mainnet API                                         |
| :-----------------------------------------------------------------------------------------: |
| <a href="https://api.solar.org" target="_blank" rel="noopener noreferrer">api.solar.org</a> |

|                                          Testnet API                                          |
| :-------------------------------------------------------------------------------------------: |
| <a href="https://tapi.solar.org" target="_blank" rel="noopener noreferrer">tapi.solar.org</a> |

## Self-Hosted Relay Port

When running a self-hosted Core relay instance, the default API port is `6003` (e.g., `<your_relay's_ip>:6003/api`).

Be sure to configure your firewall appropriately.

<div class="admonition warning">
    <p class="admonition-title">warning</p>
    <p>It's strongly advised to <i>only</i> enable API access on a relay node and <b>never</b> on a delegate forging node.</p>
</div>

<div class="admonition success">
    <p class="admonition-title">Happy Developing!</p>
</div>
