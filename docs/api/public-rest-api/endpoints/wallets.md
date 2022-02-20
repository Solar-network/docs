---
title: Wallets
---

# Wallets

A Wallet resource is reachable using an associated Address or PublicKey.

> Note that a PublicKey might not yet be associated with a Wallet if a particular Address has never sent funds.

## Endpoints

### Retrieve Wallet
=== "List All Wallets"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Wallets",
        "description": "A paginated API is provided to obtain all wallets, including empty ones.",
        "method": "GET",
        "path": "wallets",
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
            "address": {
                "type": "query",
                "description": "The address of the wallet to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "publicKey": {
                "type": "query",
                "description": "The public key of the wallet to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "balance": {
                "type": "query",
                "description": "The balance of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "balance.from": {
                "type": "query",
                "description": "The minimum balance of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "balance.to": {
                "type": "query",
                "description": "The maximum balance of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce": {
                "type": "query",
                "description": "The nonce of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce.from": {
                "type": "query",
                "description": "The minimum nonce of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "nonce.to": {
                "type": "query",
                "description": "The maximum nonce of the wallet to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "attributes": {
                "type": "query",
                "description": "The attributes of the wallet to be retrieved.",
                "rules": ["nullable", "object"]
            }
        }
    }


    ```
=== "Retrieve a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{id}"

    ```
    ```json
    {
        "title": "Retrieve a Wallet",
        "description": "Specific wallets can be obtained either by their `publicKey` or `address`.",
        "method": "GET",
        "path": "wallets/{id}",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
            }
        }
    }


    ```
### Transactions Wallet
=== "List All Transactions of a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{walletId}/transactions?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Transactions of a Wallet",
        "description": "All transactions belonging to a wallet can be obtained using this API. Equivalent to `/transactions` with parameter `address`.",
        "method": "GET",
        "path": "wallets/{walletId}/transactions",
        "parameters": {
            "walletId": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```
=== "List All Sent Transactions of a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{id}/transactions/sent?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Sent Transactions of a Wallet",
        "description": "Outgoing transactions can be obtained as well, Equivalent to `/transactions` with parameter `senderId` set.\n> Note that the balance of a wallet does not equal `totalIncoming - totalOutgoing` if the wallet is a Delegate. You must then also add the total reward from transaction fees and forged blocks to their balance.",
        "method": "GET",
        "path": "wallets/{id}/transactions/sent",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```
=== "List All Received Transactions of a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{id}/transactions/received?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Received Transactions of a Wallet",
        "description": "Incoming transactions can be obtained as well, Equivalent to `/transactions` with parameter `recipientId` set.",
        "method": "GET",
        "path": "wallets/{id}/transactions/received",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```
    
### Votes Wallet
=== "List All Votes of a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{id}/votes?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Votes of a Wallet",
        "description": "Returns all votes made by the wallet. Often users create a new wallet instead of recasting their vote, as the former was historically cheaper. Equivalent to `/transactions` with parameter `senderId` and vote `type` set.",
        "method": "GET",
        "path": "wallets/{id}/votes",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
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
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```
### Locks Wallet
=== "List All Lock Transactions of a Wallet"

    ```json
    GET: "https://sxp.mainnet.sh/api/wallets/{walletId}/locks?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Lock Transactions of a Wallet",
        "description": "All lock transactions belonging to a wallet can be obtained using this API. Equivalent to `/locks` with parameter `senderPublicKey`.",
        "method": "GET",
        "path": "wallets/{walletId}/locks",
        "parameters": {
            "walletId": {
                "type": "path",
                "description": "The identifier of the wallet to be retrieved.",
                "rules": ["required", "string"]
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
            "orderBy": {
                "type": "query",
                "description": "The column by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            }
        }
    }


    ```