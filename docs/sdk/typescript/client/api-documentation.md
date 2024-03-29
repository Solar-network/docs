---
title: API Documentation
---

# API Documentation

## ConnectionManager

### `connect()`

```typescript
public connect(host: string, name = "main")
```

Connect to the given connection.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | host | Yes | Node URL |
| string | name | No | Network name |

#### Return value

`Connection`

### `disconnect()`

```typescript
public disconnect(name?: string)
```

Disconnect from the given connection.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | name | No | Network Name |

#### Return value

`void`

### `connection()`

```typescript
public connection(name?: string)
```

Get a connection instance.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | name | No | Network Name |

#### Return value

`Connection`

### `getDefaultConnection()`

```typescript
public getDefaultConnection()
```

Get the default connection name.

#### Return value

`string`

### `setDefaultConnection()`

```typescript
public setDefaultConnection(name: string)
```

Set the default connection name.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | name | No | Network Name |

#### Return value

`void`

### `getConnections()`

```typescript
public getConnections()
```

Return all of the created connections.

#### Return value

`Record<string, Connection>`

## Connection

### `constructor()`

```typescript
public constructor(private readonly host: string)
```

Create a new Connection class instance.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | host | Yes | Node URL |

### `api()`

```typescript
public api<T = any>(name: string)
```

Instantiate new Api.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | name | Yes | Network name |

#### Return value

`T`

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | host | Yes | Node URL |

### `withOptions()`

```typescript
public withOptions(opts: Record<string, any>)
```

Apply options to future connection requests.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | opts | Yes | Connection options |

#### Return value

`this`

### `get()`

```typescript
public async get<T = any>(url: string, opts?: Record<string, any>)
```

Send a GET request with query parameters.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | url | Yes | Endpoint |
| Record | opts? | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `post()`

```typescript
public async post<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>>
```

Send a POST request with JSON-encoded parameters.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | url | Yes | Endpoint |
| Record | opts? | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

## RequestError

### `constructor()`

```typescript
public constructor(error)
```

Create a new RequestError class instance.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | error | Yes | Error |

## Resources\Blockchain

### `blockchain()`

```typescript
public async blockchain<T = any>(query?: Record<string, any>)
```

Get all blockchains.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `search()`

```typescript
public async search<T = any>(payload?: Record<string, any>)
```

Filter all blockchains by the given parameters.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | payload | No | Search parameters |

#### Return value

`Promise<IResponse<T>>`

## Resources\Blocks

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all blocks.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `first()`

```typescript
public async first<T = any>(query?: Record<string, any>)
```

Get the first block.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `last()`

```typescript
public async last<T = any>(query?: Record<string, any>)
```

Get the last (most recent) block.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a block by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Block ID |

#### Return value

`Promise<IResponse<T>>`

### `transactions()`

```typescript
public async transactions<T = any>(id: string, query?: Record<string, any>)
```

Get all transactions by the given block.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Block ID |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `missed()`

```typescript
public async missed<T = any>(payload?: Record<string, any>)
```

Shows all the missed blocks by all delegates in the last 30 days

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | payload | No | Search parameters |

#### Return value

`Promise<IResponse<T>>`

## Resources\Locks

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all locks.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a lock by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Bridgechain identifier |

#### Return value

`Promise<IResponse<T>>`

### `unlocked()`

```typescript
public async unlocked<T = any>(payload?: Record<string, any>)
```

Search for unlocked locks.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | payload | No | Search parameters |

#### Return value

`Promise<IResponse<T>>`

## Resources\Delegates

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all accounts.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a delegate by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Delegate identifier |

#### Return value

`Promise<IResponse<T>>`

### `blocks()`

```typescript
public async blocks<T = any>(id: string, query?: Record<string, any>)
```

Get all blocks for the given delegate.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Delegate identifier |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `missed()`

```typescript
public async missed<T = any>(id: string, query?: Record<string, any>)
```

List Recent Missed Blocks of a Delegate

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Delegate identifier |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `voters()`

```typescript
public async voters<T = any>(id: string, query?: Record<string, any>)
```

Get all voters for the given delegate.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Delegate identifier |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

## Resources\Node

### `configuration()`

```typescript
public async configuration<T = any>()
```

Get the node configuration.

#### Return value

`Promise<IResponse<T>>`

### `status()`

```typescript
public async status<T = any>()
```

Get the node status.

#### Return value

`Promise<IResponse<T>>`

### `syncing()`

```typescript
public async syncing<T = any>()
```

Get the node syncing status.

#### Return value

`Promise<IResponse<T>>`

### `crypto()`

```typescript
public async crypto<T = any>()
```

Get the node crypto configuration.

#### Return value

`Promise<IResponse<T>>`

### `fees()`

```typescript
public async fees<T = any>(days: number)
```

Get the node fee statistics.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| number | days | Yes | Days |

#### Return value

`Promise<IResponse<T>>`

## Resources\Peers

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all peers.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(ip: string)
```

Get a peer by the given IP address.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | ip | Yes | IP address |

#### Return value

`Promise<IResponse<T>>`

## Resources\Rounds

### `delegates()`

```typescript
public async delegates<T = any>(id: number)
```

Get delegates for a round.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| number | id | yes | Round number |

#### Return value

`Promise<IResponse<T>>`

## Resources\Transactions

### `create()`

```typescript
public async create<T = any>(payload: object[])
```

Create a new transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| object\[\] | payload | Yes | Transaction(s) to broadcast |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a transaction by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Transaction ID |

#### Return value

`Promise<IResponse<T>>`

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all transactions.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `allUnconfirmed()`

```typescript
public async allUnconfirmed<T = any>(query?: Record<string, any>)
```

Get all unconfirmed transactions.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `getUnconfirmed()`

```typescript
public async getUnconfirmed<T = any>(id: string)
```

Get an unconfirmed transaction by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Transaction ID |

#### Return value

`Promise<IResponse<T>>`

### `schemas()`

```typescript
public async search<T = any>(payload: Record<string, any>)
```

Get a list of transaction schemas.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | payload | Yes | Search parameters |

#### Return value

`Promise<IResponse<T>>`

### `types()`

```typescript
public async types<T = any>()
```

Get a list of valid transaction types.

#### Return value

`Promise<IResponse<T>>`

### `fees()`

```typescript
public async fees<T = any>(): Promise<IResponse<T>>
```

Get the node fee statistics.

#### Return value

`Promise<IResponse<T>>`

## Resources\Votes

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all votes.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a vote by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Vote ID |

#### Return value

`Promise<IResponse<T>>`

## Resources\Wallets

### `all()`

```typescript
public async all<T = any>(query?: Record<string, any>)
```

Get all wallets.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | No | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `get()`

```typescript
public async get<T = any>(id: string)
```

Get a wallet by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |

#### Return value

`Promise<IResponse<T>>`

### `locks()`

```typescript
public async locks<T = any>(id: string, query?: Record<string, any>)
```

Get a wallet by the given id.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |
| Record | query | No | Search parameters |

#### Return value

`Promise<IResponse<T>>`

### `transactions()`

```typescript
public async transactions<T = any>(id: string, query?: Record<string, any>)
```

Get all transactions for the given wallet.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |
| Record | query | Yes | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `transactionsReceived()`

```typescript
public async transactionsReceived<T = any>(id: string, query?: Record<string, any>)
```

Get all transactions received by the given wallet.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |
| Record | query | Yes | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `transactionsSent()`

```typescript
public async transactionsSent<T = any>(id: string, query?: Record<string, any>)
```

Get all transactions sent by the given wallet.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |
| Record | query | Yes | Query parameters |

#### Return value

`Promise<IResponse<T>>`

### `votes()`

```typescript
public async votes<T = any>(id: string)
```

Get all votes by the given wallet.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| string | id | Yes | Wallet identifier |

#### Return value

`Promise<IResponse<T>>`

### `top()`

```typescript
public async top<T = any>(query?: Record<string, any>)
```

Get all wallets sorted by balance in descending order.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Record | query | Yes | Query parameters |

#### Return value

`Promise<IResponse<T>>`
