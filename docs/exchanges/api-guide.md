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
Managers.configManager.setHeight("11800000);
```

### Testnet

```typescript
Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(8500000);
```

!!! info

    You may also configure the block height using Solar's REST API as shown in the following sections.

## Creating and broadcasting a transfer transaction

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
        .memo("This is an example memo") // memo is optional
        .addPayment("Address of Recipient Wallet 1","100000000") // 1 tSXP
        .addPayment("Address of Recipient Wallet 2","200000000") // 2 tSXP
        .addPayment("Address of Recipient Wallet 3","300000000") // 3 tSXP
        .sign("this is a top secret passphrase");

    // Step 4: Broadcast the transaction
    const broadcastResponse = await client.api("transactions").create({ transactions: [transaction.build().toJson()] });

    // Step 5: Log the response
    console.log(JSON.stringify(broadcastResponse.body.data, null, 4))
})();
```

!!! info

    The memo is optional and limited to a length of 255 characters. It can be a good idea to add a memo to your transactions if you want to be able to easily track or identify them in the future or include a personal message to the transaction's recipient(s).

## Creating and broadcasting a second signature transaction

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

## Creating and broadcasting a vote transaction

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

!!! info

    Note the **numbers** in the object that is passed on the **votesAsset** function represent the percentage of the wallet balance you want to vote towards the related delegate. This implies that the sum of all of them must be 100 or the object has to be empty to cancel an existing vote.
