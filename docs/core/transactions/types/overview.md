---
title: Transaction Types - Overview
---

# Solar Core v3 Transaction Types Overview

This sections describes Mainnet Transaction Types and its structure related to the `serde` process (serialization and deserialization of transactions).

> ℹ️ **INFO** - Transactions are the heart of any blockchain, cryptocurrency or otherwise. They represent a transfer of value from one network participant to another. In SXP, transactions can be of one of multiple types, specified in AIP11, which can affect the content and data structure of each transaction's payload.

Using the [SXP SDKs](/docs/sdk/documentation), developers can employ the programming language of their choice to build applications utilizing the SXP blockchain. The SXP SDKs are split into two packages for each language: Client and Cryptography.

**Client** SDKs help developers fetch information from the SXP blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on.

**Cryptography** SDKs, by contrast, assist developers in working with transactions: signing, serializing, deserializing, etc.

For more information about SDK implementations visit [SXP SDKs hub](/docs/sdk/documentation).

<!--
In the following sections basic transaction types and their structure is presented. If you are interested in the signature generation process and algorithm used, please check the [Cryptography Overview](/docs/core/overview/cryptography) page.
-->

## List of Transaction Types

* TypeGroup 1
  * [Type 0: Legacy Transfer](/docs/core/transactions/types/legacy-transfer) _(**DEPRECATED**)_
  * [Type 1: Second Signature Registration](/docs/core/transactions/types/second-signature)
  * [Type 2: Delegate Registration](/docs/core/transactions/types/delegate-registration)
  * [Type 3: Legacy Vote](/docs/core/transactions/types/legacy-vote) _(**DEPRECATED**)_
  * [Type 4: MultiSignature Registration](/docs/core/transactions/types/multisignature-registration)
  * [Type 5: IPFS](/docs/core/transactions/types/ipfs)
  * [Type 6: Transfer](/docs/core/transactions/types/transfer)
  * [Type 7: Delegate Resignation](/docs/core/transactions/types/delegate-resignation)
  * [Type 8: HTLC Lock](/docs/core/transactions/types/htlc-lock)
  * [Type 9: HTLC Claim](/docs/core/transactions/types/htlc-claim)
  * [Type 10: HTLC Refund](/docs/core/transactions/types/htlc-refund)
* TypeGroup 2
  * [Type 0: Burn](/docs/core/transactions/types/burn)
  * [Type 2: Vote](/docs/core/transactions/types/vote)
