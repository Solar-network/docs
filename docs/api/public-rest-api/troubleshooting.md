---
title: Troubleshooting
---

# Troubleshooting

If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing.

## _"Why am I getting a 404 error on a resource that exists?"_

!!! tip

    All HTTP requests have to be sent with the `Content-Type: application/json` header.  
    If the header is not present it will result in malformed responses or request rejections.

Typically, this means that the node you are sending your requests to is out of sync and missing data that exists on other nodes that are in sync.

To troubleshoot, ensure you're querying a node that is in sync, and third-party application restrictions are not blocking access. Querying the public <a href="https://api.solar.org/api" target="_blank" rel="noopener noreferrer">Mainnet API</a> is usually a good start.

## _"Why am I not seeing all my results?"_

Most API calls accessing a list of resources (e.g., blocks and transactions) support pagination. If you're making requests and receiving an incomplete set of results, you're probably only seeing the first page. You'll need to request the remaining pages to get more results.

It's important not to try to guess the format of the pagination URL. Not every API call uses the same structure. Instead, extract the pagination information from the `meta` field, which is sent with every request.

## _"My node is running, but API keeps returning `CONNECTION REFUSED`?"_

Note that the Public API is only available after a node has fully synced. This ensures your data on the blockchain is up to date. A full sync may take up to 15h, depending on your hardware configuration and network speed.

If your node is synced and you still get `CONNECTION_REFUSED` error, please check your firewall configuration and if needed whitelist your client.