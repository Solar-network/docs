---
title: Transactions
---

# Transactions

Transactions are signed, serialized payloads; batched together to form a block.

## Endpoints

### Retrieve

=== "List All Transactions"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Transactions",
        "description": "The paginated API is used to query for multiple transactions. You can apply _filters_ through the query parameter to search for specific transactions.",
        "method": "GET",
        "path": "transactions",
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "address": {
                "type": "query",
                "description": "The sender or recipient address of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "senderId": {
                "type": "query",
                "description": "The sender address of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "senderPublicKey": {
                "type": "query",
                "description": "The sender public key of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "recipientId": {
                "type": "query",
                "description": "The recipient address of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "id": {
                "type": "query",
                "description": "The id of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "version": {
                "type": "query",
                "description": "The version of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blockId": {
                "type": "query",
                "description": "The block id of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "sequence": {
                "type": "query",
                "description": "The sequence of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "sequence.from": {
                "type": "query",
                "description": "The minimum sequence of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "sequence.to": {
                "type": "query",
                "description": "The maximum sequence of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp": {
                "type": "query",
                "description": "The timestamp of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp.from": {
                "type": "query",
                "description": "The minimum timestamp of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "timestamp.to": {
                "type": "query",
                "description": "The maximum timestamp of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce": {
                "type": "query",
                "description": "The nonce of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce.from": {
                "type": "query",
                "description": "The minimum nonce of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce.to": {
                "type": "query",
                "description": "The maximum nonce of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "type": {
                "type": "query",
                "description": "The type of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "typeGroup": {
                "type": "query",
                "description": "The typeGroup of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "vendorField": {
                "type": "query",
                "description": "The vendorField of transaction to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "amount": {
                "type": "query",
                "description": "The amount of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "amount.from": {
                "type": "query",
                "description": "The minimum amount of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "amount.to": {
                "type": "query",
                "description": "The maximum amount of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "fee": {
                "type": "query",
                "description": "The fee of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "fee.from": {
                "type": "query",
                "description": "The minimum fee of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "fee.to": {
                "type": "query",
                "description": "The maximum fee of transaction to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "asset": {
                "type": "query",
                "description": "The asset of transaction to be retrieved.",
                "rules": ["nullable", "object"]
            }
        }
    }


    ```

=== "Retrieve a Transaction"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/{id}"

    ```
    ```json
    {
        "title": "Retrieve a Transaction",
        "description": "Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).",
        "method": "GET",
        "path": "transactions/{id}",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the transaction to be retrieved.",
                "rules": ["required", "string"]
            }
        }
    }


    ```
### Unconfirmed Transactions

=== "List all Unconfirmed Transactions"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/unconfirmed?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Unconfirmed Transaction",
        "description": "Unconfirmed transactions have not been incorporated in the blockchain, but reside in the mempool. Although usually the mempool is cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time. If you have set the transaction with a fee of near zero, it might not be picked up by a Delegate and will time out.",
        "method": "GET",
        "path": "transactions/unconfirmed",
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```

=== "Get an Unconfirmed Transaction"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/unconfirmed/{id}"

    ```
    ```json
    {
        "title": "Get an Unconfirmed Transaction",
        "description": "As with confirmed transactions, you may query for unconfirmed transactions directly.",
        "method": "GET",
        "path": "transactions/unconfirmed/{id}",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the transaction to be retrieved.",
                "rules": ["required", "string"]
            }
        }
    }


    ```

### Broadcast

=== "Broadcast Transactions"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions"

    ```
    ```json
    {
        "title": "Broadcast Transactions",
        "description": "Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialization protocol. Our [crypto SDKs](/docs/sdk) provide the functionality needed in most major programming languages. You can read more about it in the send transaction section.",
        "method": "POST",
        "path": "transactions",
        "parameters": {
            "transactions": {
                "type": "body",
                "description": "The list of transactions to broadcast.",
                "rules": ["nullable", "array"]
            }
        }
    }


    ```

### Fees, Types and Schemas

=== "Get Static Transaction Fees"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/fees"

    ```
    ```json
    {
        "title": "Get Transaction Fees (Non-Dynamic)",
        "description": "The static transaction fees are significantly higher than the dynamic transaction fees. Use the [node resource](https://github.com/ArkEcosystem/gitbooks-api/tree/9815499ca52e615b8de858160da915cd960e6ea3/api/public/v2/node.html#retrieve-the-configuration) to find dynamic fees, and prefer using these.",
        "method": "GET",
        "path": "transactions/fees"
    }


    ```

=== "Get Transaction Types"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/types"

    ```
    ```json
    {
        "title": "Get Transaction Types",
        "description": "The transaction types are network specific. SXP currently supports eight different types, but BridgeChains may define more or less if needed for their business purpose.",
        "method": "GET",
        "path": "transactions/types"
    }


    ```

=== "Get Transaction Schemas"

    ```json
    GET: "https://sxp.mainnet.sh/api/transactions/schemas"

    ```
    ```json
    {
        "title": "Get Transaction Schemas",
        "description": "Get transaction schemas.",
        "method": "GET",
        "path": "transactions/schemas"
    }


    ```


