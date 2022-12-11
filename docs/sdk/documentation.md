---
title: Introduction
---

# Introduction

Using the Solar SDKs, developers can build applications utilising the Solar blockchain.

!!! abstract "The Solar SDKs are split into two packages for each language:"

    - **Client SDKs** - helps developers fetch information from the Solar blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.
    - **Cryptography SDKs** - assists developers in working with transactions: signing, serialising, deserialising, etc.

If your application doesn't involve sending transactions, you can most likely build your application using the Client SDK alone. Otherwise, applications looking to leverage the full spectrum of SXP APIs should make use of both Client and Cryptography SDKs.

Usage guides are included for each supported language, and examples of how to use these libraries can be found in the **Examples** section of each specific library.

## Supported languages & frameworks

| Crypto                                     | Client                                     |
| :----------------------------------------- | :----------------------------------------- |
| [TypeScript](/sdk/typescript/crypto/intro) | [TypeScript](/sdk/typescript/client/intro) |
| [Python](/sdk/python/crypto/intro)         | [Python](/sdk/python/client/intro)         |
