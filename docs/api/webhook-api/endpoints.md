---
title: Endpoints
---

# Endpoints

## List All Webhooks

The webhooks resource returns all enabled and disabled webhooks. There is thus no need to store all active webhooks client side; as the node maintains a register for you.

### Endpoint

```bash
GET /api/webhooks
```

### Query Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| page | int | The number of the page that will be returned. | No |
| limit | int | The number of resources per page. | No |

### Response

```javascript
{
  "meta": {
    "count": 29,
    "pageCount": 1,
    "totalCount": 29,
    "next": null,
    "previous": null,
    "self": "/api/v2/webhooks?page=1&limit=100",
    "first": "/api/v2/webhooks?page=1&limit=100",
    "last": "/api/v2/webhooks?page=1&limit=100"
  },
  "data": [
    {
      "id": "4b255244-a535-4aca-aa92-9ff9e02c98dd",
      "event": "block.forged",
      "target": "https://httpbin.org/post",
      "enabled": true,
      "conditions": [
        {
          "key": "generatorPublicKey",
          "condition": "eq",
          "value": "032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515"
        }
      ]
    }
  ]
}
```

## Retrieve a Webhook

It is possible to query for a specific webhook by ID, which has to be saved client-side or obtained from another API call.

### Endpoint

```bash
GET /api/webhooks/{id}
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the webhook to be retrieved. | Yes |

### Response

```javascript
{
  "data": {
    "id": "4b255244-a535-4aca-aa92-9ff9e02c98dd",
    "event": "block.forged",
    "target": "https://httpbin.org/post",
    "enabled": true,
    "conditions": [
      {
        "key": "generatorPublicKey",
        "condition": "eq",
        "value": "032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515"
      }
    ]
  }
}
```

## Create a Webhook

It is recommended to have a backend service running that will handle your webhook calls, as you'll have to provide a `target` value when creating the webhook. To give you an idea of how this works, we created a couple of [example setups](/api/webhook-api/usage#handling-webhooks) that you can use or get inspiration from. A webhook may be triggered by multiple conditions; as long as one of the conditions evaluates to `true`, the webhook will fire.

The returned `token` should be saved and used to validate the webhook origin. It is a secret value which should not be shared. For extra security, whitelist the IP of the node with your target service, ensuring other parties are not able to post webhook payloads.

The `conditions` lists consists of an `array` of objects, with the following properties:

* `key`: the key used on the object that is passed along with the specified event
* `condition`: a [condition](/api/webhook-api/endpoints#conditions) used to check the value against
* `value`: (Optional) a value used to check the `key` against. This is not needed for the `falsy` and `truthy` conditions. In case of `between` and `not-between`, you'll have to provide an object like this: `"value": { "min": "someValue", "max": "someValue" }`

### Endpoint

```bash
POST /api/webhooks
```

### Body Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| event | string | The name of the [event](/api/webhook-api/endpoints#events) to be listened for. | Yes |
| target | string | The target URL for the HTTP payload. | Yes |
| enabled | string | The value to enable or disable the webhook. | No |
| conditions | array | The list of conditions required to trigger the webhook. | Yes |

### Response

```javascript
{
  "data": {
    "id": "4b255244-a535-4aca-aa92-9ff9e02c98dd",
    "event": "block.forged",
    "target": "https://httpbin.org/post",
    "token": "7e66949f67b36c34a05eeb3a866957b3f1b6f8947fb215500b78e5091d4e484a",
    "enabled": true,
    "conditions": [
      {
        "key": "generatorPublicKey",
        "condition": "eq",
        "value": "032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515"
      }
    ]
  }
}
```

### Events

| Event | Description | Implemented |
| :--- | :--- | :--- |
| kernel.booted | Fires when the kernel has booted | Yes |
| kernel.booting | Fires when the kernel is booting | Yes |
| kernel.bootstrapper.bootstrapped | Fires when the bootstrapper has bootstrapped | Yes |
| kernel.bootstrapper.bootstrapping | Fires when the bootstrapper is bootstrapping  | Yes |
| kernel.serviceProvider.booted | Fires when the kernel service provider has booted | Yes |
| kernel.serviceProvider.disposed | Fires when the kernel service provider has been disposed | Yes |
| kernel.serviceProvider.registered | Fires when the kernel service provider has been registered | Yes |
| cache.flushed | Fires when the cache has been flushed | Yes |
| cache.forgotten | Fires when the cache has been forgotten | Yes |
| cache.hit | Fires when the cache has been hit | Yes |
| cache.missed | Fires when the cache has been missed | Yes |
| cache.written | Fires when the cache has been written to | Yes |
| crypto.milestone.changed | Fires when the crypto milestone has changed | Yes |
| blockchain.synced | Fires when the blockchain has synced | Yes |
| block.applied | Fires when a block is saved | Yes |
| block.disregarded | Fires when a block is disregarded | Yes |
| block.forged | Fires when a block is forged | Yes |
| block.received | Fires when a block is incoming | Yes |
| block.reverted | Fires when a block is removed from the database (e.g. on a rollback) | Yes |
| database.preConnect | Fires during the database pre-connection state | Yes |
| database.postConnect | Fires during the database post-connection state | Yes |
| database.preDisconnect | Fires during the database pre-diconnection state | Yes |
| database.postDisconnect | Fires during the database post-disconnection state | Yes |
| delegate.productivityChanged | Fireds after a delagates productivity has changed | Yes |
| delegate.registered | Fires when a new delegate is registered | Yes |
| delegate.resigned | Fires when a delegate resigns | Yes |
| wallet.vote | Fires when a delegate resigns | Yes |
| forger.failed | Fires when the forger module fails to start | Yes |
| forger.missing | Fires when it is detected that the forger module isn't running | Yes |
| forger.started | Fires when the forger module forges a new block | No |
| peer.added | Fires when a peer is added | Yes |
| peer.disconnect | Fires when a peer will disconnect | Yes |
| peer.disconnected | Fires when a peer has disconnected | Yes |
| peer.disconnecting | Fires when a peer is disconnecting | Yes |
| peer.removed | Fires when a peer is removed | Yes |
| round.applied | Fires when a new round has been applied | Yes |
| round.created | Fires when a new round is created and saved to the database | Yes |
| round.missed | Fires when a round has been missed | Yes |
| state:builder.finished | Fires when the state builder has finished building | Yes |
| state:started | Fires when the state builder has started building | No |
| state:starting | Fires when the state builder is starting to build| Yes |
| transaction.pool.added | Fires when transactions are added to the pool | Yes |
| transaction.applied | Fires when a transaction is saved | Yes |
| transaction.expired | Fires when an unconfirmed transaction expires | Yes |
| transaction.forged | Fires when a transaction is forged by a delegate | Yes |
| transaction.pool.rejected | Fires when transactions are rejected and _not_ added to the pool | Yes |
| transaction.pool.removed | Fires when a transaction is removed from the pool by its ID | Yes |
| transaction.reverted | Fires when a transaction is removed from the database | Yes |
| schedule.blockJob.finished | Fires when a block job has finished running | Yes |
| schedule.cronJob.finished | Fires when a cron job has finished running | Yes |
| queue.finished | Fires when the queue has finished | Yes |
| queue.failed | Fires when the queue has failed | Yes |

### Conditions

| Condition | Description |
| :--- | :--- |
| between | Check if the given value is between min and max |
| contains | Check if A contains B |
| eq | Check if A equals B |
| falsy | Check if the given value is false |
| gt | Check if A is greater than B |
| gte | Check if A is greater than or equal to B |
| lt | Check if A is lesser than B |
| lte | Check if A is lesser than or equal to B |
| ne | Check if A does not equal B |
| not-between | Check if the given value is not between min and max |
| regexp | Check if the given value matches |
| truthy | Check if the given value is true |

## Update a Webhook

Existing webhooks may be updated. _Note that this is the equivalent of deleting and creating a webhook; but retaining the same token_. If you are often updating and creating webhooks; consider deleting and creating new webhooks instead of updating to rotate your validation token often.

### Endpoint

```bash
PUT /api/webhooks/{id}
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the webhook to be updated. | Yes |

### Body Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| event | string | The name of the event to be listened for. | No |
| target | string | The target URL for the HTTP payload. | No |
| enabled | string | The value to enable or disable the webhook. | No |
| conditions | array | The list of conditions required to trigger the webhook. | No |

### Response

```javascript
HTTP/1.1 204 No Content
{}
```

## Delete a Webhook

A webhook may be deleted by ID. Delete unused webhooks to save machine resources.

### Endpoint

```bash
DELETE /api/webhooks/{id}
```

### Path Parameters

| Name | Type | Description | Required |
| :--- | :---: | :--- | :---: |
| id | string | The identifier of the webhook to be deleted. | Yes |

### Response

```javascript
HTTP/1.1 204 No Content
{}
```
