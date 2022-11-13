---
title: Introduction
---

# Introduction

Using the Solar SDKs, developers can build applications utilising the Solar blockchain.

**The SXP SDKs are split into two packages for each language: Client and Cryptography.**

* **[Client SDKs](guidelines/client.md)** - help developers fetch information from the SXP blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.
* **[Cryptography SDKs](guidelines/crypto.md)** - assist developers in working with transactions: signing, serialising, deserialising, etc.

If your application doesn't involve sending transactions, you can most likely build your application using the Client SDK alone. Otherwise, applications looking to leverage the full spectrum of SXP APIs should make use of both Client and Cryptography SDKs.

Usage guides are included for each supported language, and examples of how to use these libraries can be found in the **Examples** section of each specific library.

## Supported Languages & Frameworks

| Crypto                                          | Client                                          |
| :---------------------------------------------- | :---------------------------------------------- |
| [TypeScript](typescript/crypto/getting-started) | [TypeScript](typescript/client/getting-started) |
| [Python](python/crypto/getting-started)         | [Python](python/client/getting-started)         |
