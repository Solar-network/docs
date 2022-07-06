---
title: Transaction Types - HTLC Lock
---

# HTLC Lock

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   8   |

A Hashed Time-Lock Contract (HTLC) is a set of transaction types that permits a designated party (the "sender/seller") to **LOCK** funds by disclosing the preimage (secret) of a hash. It also permits a second party (the "recipient/buyer") to [**CLAIM**](/docs/core/transactions/types/htlc-claim) the funds, or after a timeout is reached enter a [**REFUND**](/docs/core/transactions/types/htlc-refund) situation.

The purpose of this transaction is to _**LOCK**_ funds of the sender and make them possible for retrieval by the recipient, if they know the shared secret.

| References           |                                                                                                                                                                                                                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Improvement Proposal | [AIP102](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-102.md)                                                                                                                                                                                                                                            |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                              |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [HTLC Lock](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L266-L297) |

## JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 8,
    "nonce": "10",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "5000000",
    "amount": "1",
    "recipientId": "SNAgA2XCRZDKfm5Vu9h4KR1bZw5xn9EiC3",
    "asset": {
        "lock": {
            "secretHash": "9c1a3815d49e0c9f78b872bfb017e825ea2db708158b70815526a830c85912b4",
            "expiration": {
                "type": 1,
                "value": 78740307
            }
        }
    }
}
```

## Serialised

```shell
ff033f0100000008000a00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192404b4c0000000000000100000000000000029c1a3815d49e0c9f78b872bfb017e825ea2db708158b70815526a830c85912b401537bb1043f0995750207ecaf0ccf251c1265b92ad84f553662
```

## Deserialised

| Key                     |   Pos.    | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :-------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**             |  **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            |  **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            |  **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          |  **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               |  **[7]**  |       **2**        | `0x0800`                                                               |
| **Nonce:**              |  **[9]**  |       **8**        | `0x0a00000000000000`                                                   |
| **SenderPublicKey:**    | **[17]**  |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]**  |       **8**        | `0x404b4c0000000000`                                                   |
| **Memo Length:**        | **[58]**  |       **1**        | `0x00`                                                                 |
| **Amount:**             | **[59]**  |       **8**        | `0x0100000000000000`                                                   |
| **Secret Hash Length:** | **[67]**  |       **8**        | `0x20`                                                                 |
| **Secret Hash:**        | **[68]**  |       **32**       | `0x9c1a3815d49e0c9f78b872bfb017e825ea2db708158b70815526a830c85912b4`   |
| **Expiration Type:**    | **[100]** |       **1**        | `0x01`                                                                 |
| **Expiration Value:**   | **[101]** |       **4**        | `0x537bb104`                                                           |
| **Recipient:**          | **[105]** |       **21**       | `0x3f0995750207ecaf0ccf251c1265b92ad84f553662`                         |
