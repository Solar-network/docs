---
title: "Glossary"
---

# Glossary

Our glossary contains key terminology that is utilized in documentation and in the broader Solar. If you have any problems or requests, please [open an issue](https://github.com/solar-network/docs).

[[toc]]

## Common Terms

### Account

An account is a pair of private and public key, represented as a single address. In blockchain networks, accounts can refer to many things, such as a user, wallet or contract identity. An account is more like a record which the network participants maintain to track the network state.

On the Solar blockchain, an account is used to keep track of sent and received transactions (transfers, votes, multisignatures, second signatures, delegate registration and eventually many more). The account owner can issue an outgoing transaction with the use of his secret phrase or receive funds by having another user send a transaction from their account to the receiver's account address.

In the Bitcoin network, by contrast, the account is an evolving collection of keys which represent unspent coins that can be used for outgoing transfers ([UTXO](https://en.wikipedia.org/wiki/Unspent_transaction_output)).

### Block

A block is a collection of transactions, but also it is the incremental unit of the blockchain. Every eight seconds, a Delegate Node creates a new block by bundling a bunch of transactions, verifying each transaction, and signing the block.

Blocks hold quite a lot of metadata on the Solar blockchain, like:

- Height, an incremental ID.
- Timestamp.
- Transactions.
- Creator's signature.
- Total transfer amount.
- Total fee amount.

These are a few examples of relevant information which blocks are required to hold for the network's stability.

### Delegate

A delegate is an account, or account owner, who has registered as one on the blockchain with the use of a delegate registration transaction.

Once the registration transaction has been incorporated in the blockchain, other accounts may use a vote transaction to express their trust in the Delegate Node.

For SXP, the top 51 delegates are responsible for forging blocks and maintaining consensus over the transaction history of the blockchain. If a delegate is inactive for a given 51 block round, that slot is skipped.

Delegated block production is an advantage for a blockchain. It allows for seamless processing of blocks because the delegates are incentivized, through monetary reward, to maintain their voters' pledges by acting appropriately.

### Peer

Every Solar node maintains a registry of other full nodes, referred to as _peers_. At a minimum, a peer must expose its p2p API, but most also expose a Public API.

### Node

A node is a functional participant in the distributed network. At a minimum, a node holds a complete copy of the blockchain, allowing it to validate blocks and transactions autonomously. Currently, there is only one implementation of an Solar node, the official [Solar Core](https://https://github.com/solar-network/solar-core).

Nodes are further divided into two categories: Delegate Nodes, of which 51 exist and maintain consensus, and Relay Nodes, which do validate transactions and blogs, but refrain from creating blocks.

### Signature

A signature is the product of a cryptographic one-way hashing function which allows a lightweight and secure way to determine the authenticity and integrity of a message. In the case of blockchain networks, messages mainly refer to transactions and their payloads (SmartBridge for SXP) or blocks.

Signatures are necessary to prove that a block or transaction was forged or created by the owner of the secret passphrase linked to the public facing identity of the user.

### MultiSignature

To provide added security and utility, certain blockchain networks enable the creation of multisignature accounts, which operate much like traditional user accounts, although they are technically owned by multiple users.

If an account is secured through a multisignature transaction, each new transaction requires multiple signatures, one from each registered public key. These features are useful when sharing accounts.

### Transaction

A transaction is an atomic change in the state of the blockchain. The simplest form transfers value from address A to B, incorporating a fee for the processing Delegate Node. Transactions are bundled into a block. At that moment they are committed to the blockchain and become irreversible.

### Dsolar Address

A Dsolar address behaves like a standard Solar address, but it is only available on the Development Network of Solar and holds the DSXP currency.

### Reward

Once every 8 seconds, when a block is forged, the fees for every transaction and two Solar is awarded to the forging delegate. The block reward is important to provide an economic incentive for delegates to remain in the top 51.

### Fee

On the Solar blockchain and similar Bridgechains, fees are charged based on the type of transaction sent. A flat fee can be charged for every transfer of Solar from one address to another or when performing transactions such as delegate registrations, second signature registrations, multisignature registrations, etc.

With Solar Core, a new dynamic fee structure is implemented. The new structure allows for delegates, who are responsible for forging blocks from transactions, to set their own fees on a transaction type basis. This means that your transaction can cost more or less in fees for it to be included into a block and then the blockchain. Dynamic fees are based on the total size of the transaction in bytes, plus an offset fee.

The standard rate for a simple transfer of Solar from one address to another is 0.1 SXP, for example. You can view the current value of 1 Solar on [the Solar Explorer](https://explorer.solar.network).

### Height

A blockchains height is the total number of blocks forged; where the genesis block is either height 0 or height 1: just a regular incremental ID. Timestamps cannot be wholly trusted in distributed ledgers, but the height can.

### Missed Block

Sometimes, a delegate can have problems with their responsibility to forge a block when their time comes to do so.

When a delegate doesn't forge and broadcasts a block within the time slot allocated, their productivity decreases. Delegates with lower productivity typically lose voters when they begin missing many blocks.

### Approval

This is a value derived from the number of votes, counted in SXP, a delegate has to their name and the total amount of Solar used for voting on the blockchain.

Delegates with more votes than others will also show a higher approval rating, often shown in percentage.

### Vote

In a Delegated Proof of Stake blockchain like SXP, the nodes responsible for forging blocks are the 51 registered delegates who have the most votes. A given address can only vote for a single registered delegate, and the weight of a vote is proportional to the amount of Solar held by the voter.

### Voter

Every Solar address with a sufficient balance can become a voter by sending a vote.

## Solar Specific Terms

Here is a list of officially recognized terms and projects within the Solar. We attempt to make this glossary exhaustive, but often development moves faster than documentation. Make sure to create a [PR](https://github.com/solar-network/docs/pulls) if you find outdated information.

### Solar

The entirety of the Solar project, including the blockchain network, but also the supporting products, such as the wallet. May be interchanged with SXP.

### Solar Community

Members of the Solar community volunteer to provide assistance to new users, or work on bounties to improve SXP. They are not officially associated with the Solar Team. However, Solar does most of its recruiting from the community.

### Solar Team

The official team; funded by the ICO. Not all Solar founders are officially part of the team.

### SXPtoshi

SXPtoshi = 0.00000001 SXP

### BridgeChain

Code forks of the Solar blockchain aiming to be interoperable with SXP.

### SmartBridge

A metadata field embedded in each transaction used in cross-chain communication. In older documentation, this may be referred to as `vendorField`.

## Official Solar Projects

### Solar Core

The reference implementation for Solar nodes also called Solar v2. It is significantly more advanced than v1, using a modular design.

### Solar Node

The old node implementation also called Solar v1.

### Solar Explorer

A frontend used to query the blockchain. Explorers use a Relay Node to perform queries and offer a user-friendly interface.

### Solar Mobile Wallet

A mobile app to manage wallets, Solar Mobile is available for both Android and iOS.

### Solar Desktop Wallet\*

A desktop client to manage wallets.

### AIPs, Solar Improvement Proposals

A curated list of improvement proposals. Breaking changes are first formulated as AIPs, discussed and reviewed by the community before being implemented.

### Solar (LANG) Crypto

Language-specific Cryptography clients. Also called a crypto-SDKs. Most cryptographic operations are quite complicated and error-prone; thus Solar provides a number of libraries in different programming languages to ease onboarding of new developers.

### Solar (LANG) Client

Language-specific API clients also called client-SDKs. These SDKs use the Public-API to query the blockchain and transmit transactions through a REST API.

### Solar Deployer

A set of scripts to easily deploy BridgeChains. The deployer supports Vagrant, Docker, and bare-metal deployments.
