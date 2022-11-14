---
title: Complementary Examples
---

# Complementary Examples

## Prerequisites

Before we get started we need to make sure that all of the required dependencies are installed. These dependencies are the [Crypto SDK](/sdk/typescript/crypto/intro) and [Client SDK](/sdk/typescript/client/intro). You can head on over to their documentations to read more about them but for now we are only concerned with installing them to get up and running.

Open your project and execute the following commands to install both SDKs. Make sure that those complete without any errors. If you encounter any errors, please [open an issue](https://github.com/solar-network/core/issues/new) with as much information as you can provide so that our developers can have a look and get to the bottom of the issue.

### <a href="https://pnpm.js.org" target="_blank" rel="noopener noreferrer">pnpm</a>

```bash
pnpm add @solar-network/crypto
pnpm add @solar-network/client
```

### <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm</a>

```bash
npm install @solar-network/crypto
npm install @solar-network/client
```

### <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer">yarn</a>

```bash
yarn add @solar-network/crypto
yarn add @solar-network/client
```

Now that we're setup and ready to go we'll look into some examples for the most common tasks you'll encounter when wanting to interact with the SXP Blockchain.

## Persisting your transaction on the blockchain

The process of getting your transaction verified and persisted on the SXP Blockchain involves a few steps with which our SDKs will help you but lets break them down to get a better idea of what is happening.

1. Install the Client SDK and configure it to use a node of your choosing to broadcast your transactions to. Always make sure that you have a fallback node that you can use for broadcasting in case your primary node goes offline or acts strange otherwise.
2. Install the Crypto SDK and configure it to match the configuration of the network. This is the most important part as misconfiguration can lead to a myriad of issues as Core will reject your transactions.
3. Retrieve the nonce of the sender wallet and increase it by 1. You can read about what a sequential nonce is and why it is important [here](/core/transactions/nonce).
4. Create an instance of the builder for the type of transaction you want to create. This is the step where we actually create a transaction and sign it so that the SXP Blockchain can later on verify it and decide if it will be accepted and finally forged.
5. Turn the newly created transaction into JSON and broadcast it to the network through the Client SDK.
6. Process the API response and verify that your transaction was accepted. If the network rejects your transaction you'll receive the reason as to why that is the case in the response which might mean that you need to create a new transaction and broadcast it.

## Troubleshooting

A common issue when trying to get your transaction onto the blockchain is that you'll receive an error to the effect of **Transaction Version 2 is not supported** which indicates that your Crypto SDK configuration might be wrong.

The solution to this is to make sure that your Crypto SDK instance is properly configured. This includes both the network preset and the height it's configured to assume the network has passed, if any of those don't match up you'll encounter the aforementioned issue with the version of your transactions.

### Mainnet

```typescript
Managers.configManager.setFromPreset("mainnet");
Managers.configManager.setHeight(current_height);
```

### Testnet

```typescript
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(current_height);
```

## Creating and Broadcasting a Transfer

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {

    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);


    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.transfer()
        .nonce(senderNonce.toFixed())
        .fee("30000000")
        .addTransfer("Address of Recipient 1", "100000000")
        .addTransfer("Address of Recipient 2", "100000000")
        .memo("Hello World") // Memo is optional
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

## Creating and Broadcasting a Second Signature

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {

    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);

    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.secondSignature()
        .nonce(senderNonce.toFixed())
        .signatureAsset("this is a top secret second passphrase")
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

## Creating and Broadcasting a Delegate Registration

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {
    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);

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

## Creating and Broadcasting a Vote

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {
    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);

    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.vote()
        .nonce(senderNonce.toFixed())
        .votesAsset({delegate1: 40, delegate2: 60}) // The sum has to be 100
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>Note the <b>numbers</b> in the object that is passed on the <b>votesAsset</b> function represent the percentage of the wallet balance you want to vote towards the related delegate. This implies that the sum of all of them must be 100 or the object has to be empty for unvoting.</p>
</div>

## Creating and Broadcasting a IPFS

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {
    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);

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

## Creating and Broadcasting a Delegate Resignation

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
import { Connection } from "@solar-network/client";

// Configure our API client
const client = new Connection("https://tapi.solar.org/api");

(async () => {
    // Get current height
    const height = (await client.api("blockchain").blockchain()).body.data.block.height;

    // Set the chain's presets and height
    Managers.configManager.setFromPreset("testnet");
    Managers.configManager.setHeight(height);

    // Step 1: Retrieve the incremental nonce of the sender wallet
    const senderWallet = await client.api("wallets").get("YOUR_SENDER_WALLET_ADDRESS");
    const senderNonce = Utils.BigNumber.make(senderWallet.body.data.nonce).plus(1);

    // Step 2: Create the transaction
    const transaction = Transactions.BuilderFactory.delegateResignation()
        .resignationTypeAsset(0)
        .nonce(senderNonce.toFixed())
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>
        A delegate resignation has to be sent from the delegate wallet itself to verify its identity.
Resignation can be of 2 types:
        <ul>
            <li>0 meaning the resignation is only temporary and can be undone</li>
            <li>1 meaning the resignation is permanent</li>
        </ul>
    </p>
</div>
