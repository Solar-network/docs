---
title: Introduction
---

# Introduction

Using the Solar SDKs, developers can build applications utilising the Solar blockchain.

<div class="admonition abstract">
    <p class="admonition-title">The Solar SDKs are split into two packages for each language:</p>
    <ul>
        <li>
            <b>Client SDKs</b> - help developers fetch information from the Solar blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.
        </li>
        <li>
            <b>Cryptography SDKs</b> - assist developers in working with transactions: signing, serialising, deserialising, etc.
        </li>
    </ul>
</div>

If your application doesn't involve sending transactions, you can most likely build your application using the Client SDK alone. Otherwise, applications looking to leverage the full spectrum of SXP APIs should make use of both Client and Cryptography SDKs.

Usage guides are included for each supported language, and examples of how to use these libraries can be found in the **Examples** section of each specific library.

## Supported Languages & Frameworks

| Crypto                                     | Client                                     |
| :----------------------------------------- | :----------------------------------------- |
| [TypeScript](/sdk/typescript/crypto/intro) | [TypeScript](/sdk/typescript/client/intro) |
| [Python](/sdk/python/crypto/intro)         | [Python](/sdk/python/client/intro)         |
