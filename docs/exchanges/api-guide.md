---
title: Public API Guide
---

# Exchanges API Guide

!!! tip "Explore Solar Core's interactive REST API documentation here: [Solar Core API Endpoints](/api/public-rest-api/endpoints)"

Connecting to the Public API is done via the [Crypto and Client SDKs](/sdk/documentation/). Many queries can be performed using the Client SDK alone, while the Crypto SDK performs any actions requiring cryptographic functionality (i.e., signing transactions).

At a surface level, the two SDKs are separated by their functions and intended use cases:

* The Crypto SDK provides the cryptographic functions necessary to verify and validate Solar transactions.
* The Client SDK provides wrapper functions to unify and streamline API calls between your application and the Solar blockchain.

Put another way, the Crypto SDK structures your data in a format that all Solar nodes can understand, while the Client SDK handles the actual communication between your application and a Solar node. Where the Crypto SDK is internal, the Client SDK is external, as the below diagram illustrates:

![clientCrypto](/exchanges/assets/client-crypto.png)

!!! note

    The Public API is only available after a node has fully synced. This ensures your data on the blockchain is up to date.

## Setup

These quick actions will all assume you've loaded a Client instance with the IP address of your node and the API version you're requesting.

```typescript
import { Connection } from "@solar-network/client";
const client = new Connection("https://tapi.solar.org/api");
```

## Check wallet balance

Checking a wallet balance involves using the `wallets` resource to `GET` the wallet corresponding to a given Solar address.

```typescript
const wallet = await client.api("wallets").get("SN52X5W9U2JWj3P6jd3ZHnSddUo7UJ4ASd");

console.log(wallet.body.data.balance);
```

## Find block information

If you know the ID of the block you are looking for, you can use the `GET` method on the `blocks` resource to return information on that block.

```typescript
const block = await client.api("blocks").get("b67c1c27cd37254fbec29055abe609c61dda1aecfab991a2bb284463328eb427");

console.log(block);
```

Alternatively, if you are not sure of the block ID, or if you want to find all blocks in a range, you can make use of the `blocks all` method. This endpoint accepts a JSON object representing the search parameters to use when narrowing down a list of blocks.

The following block properties can be used to create your range:

* timestamp
* height
* numberOfTransactions
* totalAmount
* totalFee
* reward
* payloadLength

To use any of these properties as a range, include the relevant key in your request as an object containing `from` and `to` specifiers.

For example, this code can be used to search all blocks between blockchain heights 720 and 735 with total fees between 0 and 2000 satoshi:

```typescript
const blocks = await client.api("blocks").all({
    height: {
      from: 720,
      to: 735
    },
    totalFee: {
      from: 0,
      to: 2000
    }
  });

  console.log(blocks); // all blocks matching the search criteria
```

## Create and broadcast transactions

To create transactions, make use of the **transactionBuilder** module of `@solar-network/crypto`. First, install the package from pnpm or equivalent:

```bash
pnpm install @solar-network/crypto
```

The `crypto` package functionality we'll use here is the transactionBuilder, which provides a series of "chainable" methods that can be called, one after another, to produce a transaction object. These methods create and define your transaction: its type, its amount in satoshi, its signature, and more.

Regardless of which SDK you use, every transactionBuilder contains a similar function to `getStruct`, which will return a completed transaction object.

After making one or more of these transaction objects, you can combine them into an array to use as the `transactions` key in your request.

With all the steps together, here is an example of how to send a transaction for approval:

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the network configuration
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.transfer()
        .nonce(senderNonce.toFixed())
        .fee("30000000")
        .memo("This is an example memo") // memo is optional
        .addTransfer("Address of Recipient Wallet 1","100000000") // 1 SXP
        .addTransfer("Address of Recipient Wallet 2","200000000") // 2 SXP
        .addTransfer("Address of Recipient Wallet 3","300000000") // 3 SXP
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

When sending your request using the `client`, ensure that the value of `transactions` is an array, even if you have only one transaction object.

If your request is successful, you will receive a response with the following `data` key:

```javascript
{
  data: {
      accept: [ '96e3952b66a370d8145055b55cedc6f1435b3a71cb17334aa954f8844ad1202f' ],
      broadcast: [ '96e3952b66a370d8145055b55cedc6f1435b3a71cb17334aa954f8844ad1202f' ],
      excess: [],
      invalid: []
    },
  errors: null
}
```

Let us look at the returned `data` object in more depth. It is composed of four arrays, each holding zero or more transaction IDs:

1. `accept` - a list of all accepted transactions
2. `broadcast` - a list of all transactions broadcast to the network
3. `excess` - if the node's pool is full, this lists all excess transactions
4. `invalid` - a list of all transactions deemed invalid by the node

Our sample code above submitted one transaction, which the node accepted and broadcast and thus the `accept` and `broadcast` arrays contain precisely one item each: the ID of the transaction we submitted.

If we had submitted any invalid transactions, the `invalid` list would have contained their IDs, and the `errors` key would have been populated with one error per invalid transaction.

The diagram below offers a top-level overview of the transaction submission process:

![Transaction Flow](/exchanges/assets/transaction-flow.png)

## Check transaction confirmations

Once a transaction has been created and added to the blockchain, you can access the number of confirmations it has by using the `transactions` resource to `get` the value matching the transaction ID.

```typescript
const transaction = await client.api("transactions").get("2b327657495156f5a4f7ca5cefebb9d35a92c91a74debdd217a0c79110e24915");

console.log(transaction);
```

If the transaction has been added to the blockchain, you'll receive the following data structure in your console:

```javascript
{
  data: {
    id: "2b327657495156f5a4f7ca5cefebb9d35a92c91a74debdd217a0c79110e24915",
    blockHeight: 2407559,
    blockId: "0c83cde40ea873cf79ba3c747b6199512e24bf11aac262e10efe259da2588a74",
    version: 3,
    type: 0,
    typeGroup: 1,
    amount: "500000000000",
    fee: "5000000",
    burnedFee: "4500000",
    sender: "SP77TpbBYC2nCpaCg3u1BBsYU7zqwqzGo7",
    senderPublicKey: "02699ab620eb6088f9e88d2c1fa1fb0ea8a179c210a46de2314817dd11d3aa16a1",
    recipient: "SS1yerXEXkf53KMvhkhNc4RUFSLu9SRR8V",
    signature: "df15dae2b84bb19270a2d2cb15a14115b752d3967ce228e84918bdd8e90925627c4aae6b244a529303ca53777c6a81775ed8bad9ded7801b3df879ccbb388aef",
    memo: "bsc:0x488cec5457eec7757984db50bf7d05972da1b1560cc440e2e6a4727ac762bb32",
    confirmations: 1308,
    timestamp: {
      epoch: 19270904,
      unix: 1667761304,
      human: "2022-11-06T19:01:44.000Z"
    },
    nonce: "4546"
  }
}
```

You can see that the `confirmations` key holds the number of confirmations this transaction has received from the network, in the above case 0. As the average block takes 8 seconds to forge, finality is typically established within a minute following a transaction's addition to the blockchain.

## Listening for transactions

it is possible to retrieve all transactions of a wallet given its address and, optionally, add filters.

```typescript
// Getting all transaction of a wallet sent after height 2000000
const transactions = await client.api("wallets").transactions("validAddress", {blockHeight: {from: 2000000}});

console.log(transactions.body.data);
```

!!! info

    Transfer transactions can be either **LegacyTransfer** (typegroup 1, type 0) or **Transfer** (typegroup 1, type 6). When listening for incoming transactions, it is essential to monitor for both of these types of transfer.

## Check node status

Checking node status can be done by using the `node` resource's `status` method:

```typescript
const status = await client.api("node").status();
console.log(status);
```

By running this code, you'd see the output in your console resembling the following object:

```javascript
{
  data: {
    synced: true,       // whether this node is fully synchronised with the network
    now: 2408921,       // the current network height of this node's blockchain
    blocksCount: 0,     // if not synced, the number of blocks yet to be synced
    timestamp: 19281807
  }
}
```

If `synced` is true, your node is operating as expected and fully synced with the Solar network. Otherwise, use the `blocksCount` key to get an estimation of how long your node will take to sync.
