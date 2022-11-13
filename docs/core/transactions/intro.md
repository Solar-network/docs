---
title: Overview
---

# Solar Core v3 Transactions

This section will help you learn about Solar Transactions as well as their structures and `serde` processes (serialisation and deserialisation of transactions).

<div class="admonition info">
    <p class="admonition-title">info</p>
    <p>Transactions are the heart of any blockchain, cryptocurrency, or otherwise. They represent a transfer of value from one network participant to another. In SXP, transactions can be of one of many types which can impact the content and data structure of each transaction's payload.</p>
</div>

Using the [SXP SDKs](/sdk/documentation), developers can employ the programming language of their choice to build applications utilising the SXP blockchain. The SXP SDKs are split into two packages for each language: Client and Cryptography.

**Client** SDKs help developers fetch information from the SXP blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.

**Cryptography** SDKs, by contrast, assist developers in working with transactions: signing, serialising, deserialising, etc.

For more information about SDK implementations, visit the [SXP SDK documentation](/sdk/documentation).

## Content

- [The Transaction Lifecycle](/core/transactions/lifecycle)
- [The Transaction Nonce](/core/transactions/nonce)
- **Transaction Types**
    - TypeGroup 1
        - [Type 0: Legacy Transfer](/core/transactions/types/legacy-transfer) _(DEPRECATED)_
        - [Type 1: Second Signature Registration](/core/transactions/types/second-signature)
        - [Type 2: Delegate Registration](/core/transactions/types/delegate-registration)
        - [Type 3: Legacy Vote](/core/transactions/types/legacy-vote) _(DEPRECATED)_
        - [Type 5: IPFS](/core/transactions/types/ipfs)
        - [Type 6: Transfer](/core/transactions/types/transfer)
        - [Type 7: Delegate Resignation](/core/transactions/types/delegate-resignation)
        - [Type 8: HTLC Lock](/core/transactions/types/htlc-lock)
        - [Type 9: HTLC Claim](/core/transactions/types/htlc-claim)
        - [Type 10: HTLC Refund](/core/transactions/types/htlc-refund)
    - TypeGroup 2
        - [Type 0: Burn](/core/transactions/types/burn)
        - [Type 2: Vote](/core/transactions/types/vote)
