---
title: Votes
---

# Votes

A vote is a specific type of transaction (type 3). A wallet votes on a different wallet, which has registered itself eligible to become a Delegate. Wallets may vote for themselves.

> Users are often confused by the voting mechanism and the fee associated with a vote. A Delegate does **not** receive SXP from their voters, nor is the number of blocks they produce proportional to their voting weight.

## Endpoints

=== "List all Votes"

    ```json
    GET: "https://sxp.mainnet.sh/api/votes?page=1&limit=100"

    ```
    ```json
    {
        "title": "List All Votes",
        "description": "All voting transactions may be obtained through this API. This is the equivalent of `transactions/search` with the body parameter `type: 3`.",
        "method": "GET",
        "path": "votes",
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

=== "Retrieve a Vote"

    ```json
    GET: "https://sxp.mainnet.sh/api/votes/beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6"

    ```
    ```json
    {
        "title": "Retrieve a Vote",
        "description": "Votes may be retrieved using their transaction ID. Note the `asset` field, which contains the `votes` object. The first character of each item in the array indicates if it was a vote: `+`, or unvote: `-`, followed by the public key of the Delegate.",
        "method": "GET",
        "path": "votes/{id}",
        "parameters": {
            "id": {
                "type": "path",
                "description": "The identifier of the vote to be retrieved.",
                "example": "beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6",
                "rules": ["required", "integer"]
            }
        }
    }


    ```
