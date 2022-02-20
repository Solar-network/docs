---
title: Delegates
---

# Delegates

Delegates are regular wallets (addresses) which have registered themselves eligible to become a Delegate by a [registration transaction](/docs/core/transactions/types/delegate-registration). If a Delegate is among the top 51 highest voted (by staked SXP), it may run a forging Node, which produces a single block per round, awarding the Delegate 2 SXP + any transaction fees included in that block.

Genesis Delegates are the initial, virtualized Delegates. They were not registered nor voted in, and in the SXP `mainnet` has been replaced by actual Delegates a long time ago.

## Endpoints

```json
GET: "https://sxp.mainnet.sh/api/delegates"

```


=== "List all Delegates"

    ```json
    GET: "https://sxp.mainnet.sh/api/delegates?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Delegates",
        "description": "You can obtain all Delegates through this paginated API. Note that all registered Delegates are returned in this response, not just the top 51 forging Delegates.\nIf a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.",
        "method": "GET",
        "path": "delegates",
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
                "description": "The column and order by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "username": {
                "type": "query",
                "description": "The username of the delegate to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "address": {
                "type": "query",
                "description": "The address of the delegate to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "publicKey": {
                "type": "query",
                "description": "The public key of the delegate to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "votes": {
                "type": "query",
                "description": "The votes of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "votes.from ": {
                "type": "query",
                "description": "The minimum votes of the delegates to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "votes.to ": {
                "type": "query",
                "description": "The maximum votes of the delegates to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "isResigned": {
                "type": "query",
                "description": "The resignation status of the delegate to be retrieved.",
                "rules": ["nullable", "boolean"]
            },
            "blocks.produced": {
                "type": "query",
                "description": "The number of produced blocks of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.produced.from": {
                "type": "query",
                "description": "The minimum number of produced blocks of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.produced.to": {
                "type": "query",
                "description": "The minimum number of produced blocks of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.id": {
                "type": "query",
                "description": "The last produced block id of the delegate to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "blocks.last.height": {
                "type": "query",
                "description": "The last produced block height of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.epoch": {
                "type": "query",
                "description": "The last produced block epoch timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.epoch.from": {
                "type": "query",
                "description": "The minimum last produced block epoch timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.epoch.to": {
                "type": "query",
                "description": "The maximum last produced block epoch timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.unix": {
                "type": "query",
                "description": "The last produced block unix timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.unix.from": {
                "type": "query",
                "description": "The minimum last produced unix epoch timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.unix.to": {
                "type": "query",
                "description": "The maximum last produced unix epoch timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "blocks.last.timestamp.human": {
                "type": "query",
                "description": "The last produced block timestamp of the delegate to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "production.approval": {
                "type": "query",
                "description": "The production approval rate of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "production.approval.from": {
                "type": "query",
                "description": "The minimum production approval rate of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "production.approval.to": {
                "type": "query",
                "description": "The maximum production approval rate of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.fess": {
                "type": "query",
                "description": "The forged fees of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.fess.from": {
                "type": "query",
                "description": "The minimum forged fees of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.fess.to": {
                "type": "query",
                "description": "The maximum forged fees of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.rewards": {
                "type": "query",
                "description": "The forged rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.rewards.from": {
                "type": "query",
                "description": "The minimum forged rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.rewards.to": {
                "type": "query",
                "description": "The maximum forged rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.total": {
                "type": "query",
                "description": "The forged fees and rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.total.from": {
                "type": "query",
                "description": "The minimum forged fees and rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            },
            "forged.total.to": {
                "type": "query",
                "description": "The maximum forged fees and rewards of the delegate to be retrieved.",
                "rules": ["nullable", "integer"]
            }
        }
    }

    ```

=== "Retrieve a Delegate"

    ```json
    GET: "https://sxp.mainnet.sh/api/delegates/1"

    ```
    ```json
    {
        "title": "Retrieve a Delegate",
        "description": "You can query for a specific delegate by username, address, and public key; thus the following queries will result in an identical response. Note that public keys are always known for delegates, as they have previously transmitted a registration transaction. This is not the case for regular wallets.",
        "method": "GET",
        "path": "delegates/{username|address|publicKey}",
        "parameters": {
            "address": {
                "type": "path",
                "description": "The address of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "publicKey": {
                "type": "path",
                "description": "The public key of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "username": {
                "type": "path",
                "description": "The username of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            }
        }
    }

    ```

=== "List all voters of a Delegate"

    ```json
    GET: "https://sxp.mainnet.sh/api/delegates/1/voters?page=1"

    ```
    ```json
    {
        "title": "List All Voters of a Delegate",
        "description": "Obtaining the voters of a Delegate is trivial as well. This endpoint returns **active** voters. To acquire historical voters, it is better to query the database directly.",
        "method": "GET",
        "path": "delegates/{delegateUsername|delegateAddress|delegatePublicKey}/voters",
        "parameters": {
            "delegateAddress": {
                "type": "path",
                "description": "The address of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "delegatePublicKey": {
                "type": "path",
                "description": "The public key of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "delegateUsername": {
                "type": "path",
                "description": "The username of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
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
                "rules": ["nullable", "integer"]
            },
            "offset": {
                "type": "query",
                "description": "The number of resources to be skipped.",
                "rules": ["nullable", "integer"]
            },
            "orderBy": {
                "type": "query",
                "description": "The column and order by which the resources will be sorted.",
                "rules": ["nullable", "string"]
            },
            "address": {
                "type": "path",
                "description": "The address of the voter to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "publicKey": {
                "type": "path",
                "description": "The public key of the voter to be retrieved.",
                "rules": ["nullable", "string"]
            },
            "balance": {
                "type": "path",
                "description": "The balance of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "balance.from": {
                "type": "path",
                "description": "The minimum balance of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "balance.to": {
                "type": "path",
                "description": "The maximum balance of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "nonce": {
                "type": "path",
                "description": "The nonce of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "nonce.from": {
                "type": "path",
                "description": "The minimum nonce of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            },
            "nonce.to": {
                "type": "path",
                "description": "The maximum nonce of the voter to be retrieved.",
                "example": 1,
                "rules": ["nullable", "integer"]
            }
        }
    }


    ```
=== "List All Blocks of a Delegate"

    ```json
    GET: "https://sxp.mainnet.sh/api/delegates/1/blocks?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Blocks of a Delegate",
        "description": "The `delegate` resource allows you to obtain blocks from a specific Delegate. This is the equivalent of [searching for blocks](https://github.com/ArkEcosystem/gitbooks-api/tree/9815499ca52e615b8de858160da915cd960e6ea3/api/public/v2/blocks.html#search-all-blocks) using the `generatorPublicKey`.",
        "method": "GET",
        "path": "delegates/{delegateUsername|delegateAddress|delegatePublicKey}/blocks",
        "parameters": {
            "delegateAddress": {
                "type": "path",
                "description": "The address of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "delegatePublicKey": {
                "type": "path",
                "description": "The public key of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
            },
            "delegateUsername": {
                "type": "path",
                "description": "The username of the delegate to be retrieved.",
                "example": 1,
                "rules": ["nullable", "string"]
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
            }
        }
    }


    ```
