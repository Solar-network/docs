---
title: Node
---

# Node

The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.

> Note that these parameters are returned by the specific Node and that other nodes might adhere to a different set of parameters.

## Endpoints

### Node Configuration

=== "Retrieve Node Configuration"

    ```json
    GET: "https://sxp.mainnet.sh/api/node/configuration"

    ```
    ```json
    {
        "title": "Retrieve the configuration",
        "description": "Used to access a Node's configuration and the network it is attached to (identified by the `nethash`).",
        "method": "GET",
        "path": "node/configuration"
    }

    ```


=== "Retrieve Crypto Configuration"

    ```json
    GET: "https://sxp.mainnet.sh/api/node/configuration/crypto"

    ```
    ```json
    {
        "title": "Retrieve the Cryptography Configuration",
        "description": "Used to access a Node's configuration for the `@solar-network/crypto` package that handles all cryptography operations.",
        "method": "GET",
        "path": "node/configuration/crypto"
    }

    ```

=== "Retrieve Fee Statistics"

    ```json
    GET: "https://sxp.mainnet.sh/api/node/fees"

    ```
    ```json
    {
        "title": "Retrieve the Fee Statistics",
        "description": "Used to access a Node’s fee statistics. By default, this endpoint returns calculations based on the 20 most-recent transactions for each type. Also note while using the `days` query that statistics may not be available for all transaction-types over a given period of time.",
        "method": "GET",
        "path": "node/fees",
        "parameters": {
            "days": {
                "type": "query",
                "description": "The number of days [1-30] to search.",
                "rules": ["nullable", "integer"]
            }
        }
    }

    ```

### Node Status

=== "Retrieve Status"

    ```json
    GET: "https://sxp.mainnet.sh/api/node/status"

    ```
    ```json
        {
        "title": "Retrieve the status",
        "description": "The status allows for health checking, showing if the node is in sync with the network.",
        "method": "GET",
        "path": "node/status"
    }

    ```

=== "Retrieve Syncing Status"

    ```json
    GET: "https://sxp.mainnet.sh/api/node/syncing"

    ```
    ```json
    {
        "title": "Retrieve the Syncing Status",
        "description": "The `syncing` resource is very much alike `node/status`, providing information on the syncing progress. If a node is not syncing but significantly behind in blocks, it might be time to perform a check.",
        "method": "GET",
        "path": "node/syncing"
    }

    ```
