---
title: Understanding the Lifecycle
---

# Understanding the Transaction Lifecycle

Describing the journey of a transaction from client to Core.

!!! success ""

    A transaction is an atomic change in the state of the blockchain. The simplest form transfers value from address A to B, incorporating a fee for the processing. Transactions are bundled into a block. At that moment they are committed to the blockchain and become irreversible.

All valid transactions are submitted as payload data via the [Public REST API](/api/public-rest-api/getting-started) and are immutable once added to the blockchain (i.e., included in blocks). While the implementation specifics will depend on the platform used to submit the transaction, SXP's extensive [SDK](/api) coverage ensures that developers experience a unified workflow across languages and platforms.

In the next sections we will look into the transaction lifecycle from creation to final inclusion in the blocks.

## Transaction journey from client To blockchain

### 1. Create and sign transaction locally

Transactions are generated and signed locally with one of many available [SDK libraries](/sdk/documentation). Locally generated and signed transactions are sent as a <a href="https://api.solar.org/#/Transactions/post_transactions" target="_blank" rel="noopener noreferrer">POST request</a> with transaction data to a server running Core.

!!! danger

    Core will accept a valid transaction, signed with a valid signature from a private key. Make sure you invoke the SDK builder's **sign** method on your transaction object using the sender's private key.

![](/core/assets/send_to_node.png)

### 2. Receive and validate transaction on a server running Core

Transactions are sent to the POST `/api/transactions` endpoint of the Public API. From there all requests are first validated by the API endpoint schema. Each endpoint schema defines the structure that requests should conform to.

**Transaction flow in short:**

1. Transaction Payload is received by Core ([Public API Endpoint](/api/public-rest-api/endpoints))
2. API Handler validates schema and sends transaction to the <a href="https://github.com/Solar-network/core/blob/75e3aa11e3466956fc7a860671bd4dd870a9d9fa/packages/pool/src/processor.ts" target="_blank" rel="noopener noreferrer">TransactionProcessor</a>
3. TransactionProcessor performs additional transaction payload checks in relation to the blockchain protocol. If all checks are valid, the transaction is added to the pool

!!! note

    All <a href="/sdk/documentation">Client SDKs</a> already create API requests to conform to this standard so will typically result in your transaction passing validation.

Notably, no blockchain-level validation occurs at this earliest stage in the transaction lifecycle. Request validation ensures that your POST request can be understood by the network, not that the data it contains represents a valid transaction. This task falls to the next class to handle transaction requests: the <a href="https://github.com/Solar-network/core/blob/75e3aa11e3466956fc7a860671bd4dd870a9d9fa/packages/pool/src/processor.ts" target="_blank" rel="noopener noreferrer">TransactionProcessor</a> from Core's `pool` package.

Assuming validation is successful, the posted transactions are processed by the request handler, which passes the data to the TransactionProcessor for validation.

All transactions submitted to the **TransactionProcessor** <a href="https://api.solar.org/#/Transactions/post_transactions" target="_blank" rel="noopener noreferrer">are returned in one of four arrays</a>:

* accept
* broadcast
* excess
* invalid

Internally, the `TransactionProcessor` processes transactions in its `validate` method by separating:

* transactions already in the pool
* transactions from blocked senders
* transactions from the future
* transactions with low fees for broadcast/pool inclusion
* transactions that fail to conform to their transaction type

!!! info

    At this point, Core has a list of incoming transactions to add to the pool. TransactionProcessor now checks the pool to see whether it is at capacity. If so, it compares the incoming transactions against the pooled transactions and removes the transactions with the lowest fees.

### 3. From transaction pool to transaction inclusion within blocks

Transactions move out of the pool once a forging delegate (block producer) is ready and eligible to forge it. At the moment of forging, transactions in the forger's pool are grouped into a potential block and passed to the delegate's `forge` method for inclusion in a block.

Inside the `forge` method, all transaction values, fees, and IDs within the block are added together. The values and fees are used to calculate block metadata, while the hashed IDs are concatenated and used as the block's `payloadHash` property.

![](/core/assets/forger.png)

With this information in hand, the block data and sorted transactions are passed to the crypto library's `Block.create` method alongside the forging delegate's keys.

### 4. Block creation

A block is a collection of transactions, but also it is the incremental unit of the blockchain. Every eight seconds, an active delegate produces a new block by bundling a bunch of transactions, verifying each transaction, and signing the block.

Blocks hold quite a lot of metadata on the SXP blockchain, like:

* Height, an incremental ID.
* Timestamp.
* Transactions.
* Creator's signature.
* Total transfer amount.
* Total fee amount.

The `Block.create` method uses the following algorithm to create a new block:

1. Derive the delegate's public key from the function's `keys` parameter.
2. Create a payload hash by serialising the block data into a binary-encoded format.
3. Create a SHA256 hash by using the payload hash as input.
4. Sign the SHA256 hash with the delegate's private key.
5. Create a block ID using the hashed block data.
6. Cast the data into a Block model using the new transaction and block ID.
7. Return the cast Block object.

### 5. Block propagation

With the forged block successfully returned to the forger library, the only remaining responsibility is to let the network know about the new block - block propagation.

The forged block is relayed to peers via the peer-to-peer protocol.
