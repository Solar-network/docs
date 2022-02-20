---
title: Blocks
---

# Blocks

Blocks are added every eight seconds to the blockchain by a Delegate Node. Due to network/technical errors, a Delegate might miss a block. The time between two blocks is then 16 seconds, as the round continues to the next Delegate.

All state changes to the blockchain are in the form of blocks; they contain a set of transactions and metadata. A block is rejected if one or more of the transactions is invalid; or if the metadata is invalid. Thus a block returned from the Public API is always valid.

## Endpoints

```json
GET: "https://sxp.mainnet.sh/api/blocks"

```


=== "All"
    
    ```json
    GET: "https://sxp.mainnet.sh/api/blocks?page=1&limit=100"

    ```
    ```json

        {
        "title": "List All Blocks",
        "description": "The Public API may be used to query for blocks. This dataset contains millions of blocks; thus for analytical purposes, we recommend you query the database directly.",
        "method": "GET",
        "path": "blocks",
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
            "transform": {
                "type": "query",
                "description": "The structure of response to be retrieved.",
                "rules": ["nullable", "boolean"]
            },
            "orderBy": {
                "type": "query",
                "description": "The column and order by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "id": {
                "type": "query",
                "description": "The identifier of the block to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "height": {
                "type": "query",
                "description": "The height of the block to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "height.from": {
                "type": "query",
                "description": "The height from which blocks will be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "height.to": {
                "type": "query",
                "description": "The height to which blocks will be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp": {
                "type": "query",
                "description": "The timestamp of the block to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp.from": {
                "type": "query",
                "description": "The timestamp from which blocks will be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp.to": {
                "type": "query",
                "description": "The timestamp to which blocks will be retrieved.",
                "rules": ["nullable", "integer"]
                }
            }
        }

    ```

=== "Retrieve First Block"

    ```json
    GET: "https://sxp.mainnet.sh/api/blocks/first"

    ```
    ```json
    {
        "title": "Retrieve first block",
        "description": "Retrieve first block.",
        "method": "GET",
        "path": "blocks/first",
        "parameters": {
            "transform": {
                "type": "query",
                "description": "The structure of response to be retrieved.",
                "rules": ["nullable", "boolean"]
            }
        }
    }

    ```


=== "Retrieve Last Block"

    ```json
    GET: "https://sxp.mainnet.sh/api/blocks/last"

    ```
    ```json
    {
        "title": "Retrieve last block",
        "description": "Retrieve last block.",
        "method": "GET",
        "path": "blocks/last",
        "parameters": {
            "transform": {
                "type": "query",
                "description": "The structure of response to be retrieved.",
                "rules": ["nullable", "boolean"]
            }
        }
    }

    ```

=== "Retrieve a Block"

    ```json
    GET: "https://sxp.mainnet.sh/api/blocks/{id|height}"

    ```
    ```json
    {
        "title": "Retrieve a block",
        "description": "Blocks may be retrieved by ID or by height. The height is an incremental integer.",
        "method": "GET",
        "path": "blocks/{id|height}",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the block to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "height": {
                "type": "path",
                "description": "The height of the block to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "transform": {
                "type": "query",
                "description": "The structure of response to be retrieved.",
                "rules": ["nullable", "boolean"]
            }
        }
    }

    ```

=== "List all tx's in a block"

    ```json
    GET: "https://sxp.mainnet.sh/api/blocks/{id|height}"

    ```
    ```json
        {
        "title": "List All Transactions in a Block",
        "description": "Instead of deserializing the block's payload; you can also obtain the transactions of each block as proper transaction objects directly.",
        "method": "GET",
        "path": "blocks/{blockId|height}/transactions",
        "parameters": {
            "blockId": {
                "type": "path",
                "description": "The identifier of the block to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "height": {
                "type": "path",
                "description": "The height of the block to be retrieved.",
                "rules": ["nullable", "integer"]
            },
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
            "transform": {
                "type": "query",
                "description": "The structure of response to be retrieved.",
                "rules": ["nullable", "boolean"]
            },
            "orderBy": {
                "type": "query",
                "description": "The column and order by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "id": {
                "type": "query",
                "description": "The identifier of the transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "senderPublicKey": {
                "type": "query",
                "description": "The sender public key of the transactions to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "recipientId": {
                "type": "query",
                "description": "The recipient address of the transactions to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "vendorField": {
                "type": "query",
                "description": "The vendor field of the transactions to be retrieved.",
                "rules": ["nullable", "string"]
            }
        }
    }

    ```
