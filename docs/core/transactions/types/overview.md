---
title: Transaction Types - Overview
---

# Solar Core v3 Transaction Types Overview

This sections describes Mainnet Transaction Types and its structure related to the `serde` process (serialisation and deserialisation of transactions).

> ℹ️ **INFO** - Transactions are the heart of any blockchain, cryptocurrency or otherwise. They represent a transfer of value from one network participant to another. In SXP, transactions can be of one of multiple types which can impact the content and data structure of each transaction's payload.

Using the [SXP SDKs](/sdk/documentation), developers can employ the programming language of their choice to build applications utilising the SXP blockchain. The SXP SDKs are split into two packages for each language: Client and Cryptography.

**Client** SDKs help developers fetch information from the SXP blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.

**Cryptography** SDKs, by contrast, assist developers in working with transactions: signing, serialising, deserialising, etc.

For more information about SDK implementations visit [SXP SDKs hub](/sdk/documentation).

<!--
In the following sections basic transaction types and their structure is presented. If you are interested in the signature generation process and algorithm used, please check the [Cryptography Overview](/core/overview/cryptography) page.
-->

## List of Transaction Types

* TypeGroup 1
    * [Type 0: Legacy Transfer](/core/transactions/types/legacy-transfer) _(**DEPRECATED**)_
    * [Type 1: Second Signature Registration](/core/transactions/types/second-signature)
    * [Type 2: Delegate Registration](/core/transactions/types/delegate-registration)
    * [Type 3: Legacy Vote](/core/transactions/types/legacy-vote) _(**DEPRECATED**)_
    * [Type 4: MultiSignature Registration](/core/transactions/types/multisignature-registration)
    * [Type 5: IPFS](/core/transactions/types/ipfs)
    * [Type 6: Transfer](/core/transactions/types/transfer)
    * [Type 7: Delegate Resignation](/core/transactions/types/delegate-resignation)
    * [Type 8: HTLC Lock](/core/transactions/types/htlc-lock)
    * [Type 9: HTLC Claim](/core/transactions/types/htlc-claim)
    * [Type 10: HTLC Refund](/core/transactions/types/htlc-refund)
* TypeGroup 2
    * [Type 0: Burn](/core/transactions/types/burn)
    * [Type 2: Vote](/core/transactions/types/vote)
