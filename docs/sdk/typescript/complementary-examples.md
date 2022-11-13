---
title: Complementary Examples
---

# Complementary Examples

## Prerequisites

Before we get started we need to make sure that all of the required dependencies are installed. These dependencies are the [Crypto SDK](/sdk/typescript/crypto/api-documentation) and [Client SDK](/sdk/typescript/client/api-documentation). You can head on over to their documentations to read more about them but for now we are only concerned with installing them to get up and running.

Open your project and execute the following commands to install both SDKs. Make sure that those complete without any errors. If you encounter any errors, please [open an issue](https://github.com/solar-network/core/issues/new) with as much information as you can provide so that our developers can have a look and get to the bottom of the issue.

### [yarn](https://yarnpkg.com/)

```bash
yarn add @solar-network/crypto
yarn add @solar-network/client
```

### [pnpm](https://pnpm.js.org/)

```bash
pnpm add @solar-network/crypto
pnpm add @solar-network/client
```

### [npm](https://www.npmjs.com/)

```bash
npm install @solar-network/crypto
npm install @solar-network/client
```

Now that we're setup and ready to go we'll look into some examples for the most common tasks you'll encounter when wanting to interact with the SXP Blockchain.

## Persisting your transaction on the blockchain

The process of getting your transaction verified and persisted on the SXP Blockchain involves a few steps with which our SDKs will help you but lets break them down to get a better idea of what is happening.

1. Install the Client SDK and configure it to use a node of your choosing to broadcast your transactions to. Always make sure that you have a fallback node that you can use for broadcasting in case your primary node goes offline or acts strange otherwise.
2. Install the Crypto SDK and configure it to match the configuration of the network. This is the most important part as misconfiguration can lead to a myriad of issues as Core will reject your transactions.
3. Retrieve the nonce of the sender wallet and increase it by 1. You can read about what a sequential nonce is and why it is important [here](/core/transactions/nonce).
4. Create an instance of the builder for the type of transaction you want to create. This is the step where we actually create a transaction and sign it so that the SXP Blockchain can later on verify it and decide if it will be accepted, forged and finally. You can read the relevant [API documentation](/sdk/typescript/crypto/api-documentation) if you want more detailed information about the design and usage.
5. Turn the newly created transaction into JSON and broadcast it to the network through the Client SDK. You can read the relevant [API documentation](/sdk/typescript/client/api-documentation) if you want more detailed information about the design and usage.
6. Process the API response and verify that your transaction was accepted. If the network rejects your transaction you'll receive the reason as to why that is the case in the response which might mean that you need to create a new transaction and broadcast it.

## Troubleshooting

A common issue when trying to get your transaction onto the blockchain is that you'll receive an error to the effect of **Transaction Version 2 is not supported** which indicates that your Crypto SDK configuration might be wrong.

The solution to this is to make sure that your Crypto SDK instance is properly configured. This includes both the network preset and the height it's configured to assume the network has passed, if any of those don't match up you'll encounter the aforementioned issue with the version of your transactions.

### Mainnet

```typescript
Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(2477000);
```

### Testnet

```typescript
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);
```

## Creating and Broadcasting a Transfer Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.transfer()
        .nonce(senderNonce.toFixed())
        .memo("This is an example memo")
        .addTransfer("Address of Recipient Wallet 1", 1 * 1e8)
        .addTransfer("Address of Recipient Wallet 2", 1 * 1e8)
        .addTransfer("Address of Recipient Wallet 3", 1 * 1e8)
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>The memo is optional and limited to a length of 255 characters. It can be a good idea to add a memo to your transactions if you want to be able to easily track or identify them in the future or include a personal message to the transaction's recipient(s).</p>
</div>

## Creating and Broadcasting a Second Signature Registration Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.secondSignature()
        .version(2)
        .nonce(senderNonce.toFixed())
        .signatureAsset("this is a top secret second passphrase")
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a Delegate Registration Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.delegateRegistration()
        .nonce(senderNonce.toFixed())
        .usernameAsset("johndoe")
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a Vote Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.vote()
        .nonce(senderNonce.toFixed())
        .votesAsset({"sl33p": 100})
        // you can also vote for multiple delegates (up to 53 in total)
        // .votesAsset({"sl33p": 50, "cactus1549": 50})
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>When voting for multiple delegates, the custom allocation amounts represent the vote-weight percentage to be applied.<br /><br />The total percentage must equal 100 to be valid.</p>
</div>

## Creating and Broadcasting an Unvote Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.vote()
        .nonce(senderNonce.toFixed())
        .votesAsset({})
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>Note that unvoting is simply the act of sending an empty votes object.</p>
</div>

## Creating and Broadcasting an IPFS Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.ipfs()
        .nonce(senderNonce.toFixed())
        .ipfsAsset("QmR45FmbVVrixReBwJkhEKde2qwHYaQzGxu4ZoDeswuF9w")
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a Delegate Resignation Transaction


Previously, v2-style Delegate Resignation was a permanent action. There was no way for a resigned delegate to reinstate their eligibility to receive votes and produce blocks. This was only useful in cases where a delegate no longer wanted to participate in network consensus.

Solar Core `4.x` adds a new 'Temporary' resignation option where their resigned status may be 'Revoked' after at least two rounds (~106 blocks). This is useful when a delegate may only wish to resign for a short time without negatively impacting the network (e.g., missing blocks) and can be for a variety of reasons, from temporary node maintenance to personal/private matters.

| Resignation Type | Value | Description                                                                                                                                                 |
| ---------------- | :---: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temporary        |   0   | Resign only for a short time.<br/>Delegate will be temporarily blocked from receiving votes or forging.<br/>_(the default when no resign type is declared)_ |
| Permanent        |   1   | Irreversible. Delegate will no longer be allowed to receive votes or forge.                                                                                 |
| Revoke           |   2   | Reverses a temporary resignation.                                                                                                                           |

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.delegateResignation()
        .nonce(senderNonce.toFixed())
        .resignationTypeAsset(0)
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>A delegate resignation has to be sent from the delegate wallet itself to verify its identity.</p>
</div>

## Creating and Broadcasting a HTLC Lock Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcLock()
        .nonce(senderNonce.toFixed())
        .htlcLockAsset({
            secretHash: "0f128d401958b1b30ad0d10406f47f9489321017b4614e6cb993fc63913c5454",
            expiration: {
                type: 1,
                value: Math.floor(Date.now() / 1000),
            },
        })
        .amount(1 * 1e8)
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a HTLC Claim Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcClaim()
        .nonce(senderNonce.toFixed())
        .htlcClaimAsset({
            hashType: 0
            lockTransactionId: "943c220691e711c39c79d437ce185748a0018940e1a4144293af9d05627d2eb4",
            unlockSecret: "c27f1ce845d8c29eebc9006be932b604fd06755521b1a8b0be4204c65377151a",
        })
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a HTLC Refund Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.htlcRefund()
        .nonce(senderNonce.toFixed())
        .htlcRefundAsset({
            lockTransactionId: "943c220691e711c39c79d437ce185748a0018940e1a4144293af9d05627d2eb4",
        })
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a Burn Transaction

```typescript
const { Transactions, Managers, Utils } = require("@solar-network/crypto");
const { Connection } = require("@solar-network/client");

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

// Set the chain and height
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(972604);

(async () => {
    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.burn()
        .nonce(senderNonce.toFixed())
        .amount(100 * 1e8)
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```
