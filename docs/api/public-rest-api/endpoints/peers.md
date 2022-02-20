---
title: Peers
---

# Peers

The `peers` resource is much like the [node](https://github.com/ArkEcosystem/gitbooks-api/tree/9815499ca52e615b8de858160da915cd960e6ea3/public/endpoints/node/README.md) resource, but only exposes the IPs and ports of connected peers. Recursively traversing this API and its responses allow you to inspect the entire network.

## Endpoints


=== "List All Peers"

    ```json
    GET: "https://sxp.mainnet.sh/api/peers?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Peers",
        "description": "Returns all peers known by the Node. These are not necessarily all peers; only public Nodes appear here.",
        "method": "GET",
        "path": "peers",
        "parameters": {
            "page": {
                "type": "query",
                "description": "The number of the page that will be returned.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "limit": {
                "type": "query",
                "description": "The number of resources per page.",
                "example": 100,
                "rules": ["nullable", "integer"]
            },
            "offset": {
                "type": "query",
                "description": "The number of resources to be skipped.",
                "rules": ["nullable", "integer"]
            },
            "orderBy": {
                "type": "query",
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "version": {
                "type": "query",
                "description": "The node version by which the resources will be filtered.",
                "rules": ["nullable", "string"]
            }
        }
    }

    ```
=== "Retrieve a Peer"

    ```json
    GET: "https://sxp.mainnet.sh/api/peers/{ip}"

    ```
    ```json
        {
        "title": "Retrieve a Peer",
        "description": "Specific peers can be found by IP address. Note that a peer may have their Public API disabled, and thus they are only reachable by the internal `p2p` API.",
        "method": "GET",
        "path": "peers/{ip}",
        "parameters": {
            "ip": {
                "type": "path",
                "description": "The IP address of the peer to be retrieved.",
                "rules": ["required", "integer"]
            }
        }
    }

    ```
