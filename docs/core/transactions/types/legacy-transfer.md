---
title: Transaction Types - Transfer _(**DEPRECATED**)_
---

# Transfer _(**DEPRECATED**)_

> 🛑 Transfer (Type 0) has been deprecated, please visit ['TypeGroup 1, Type 6: Transfer'](/core/transactions/types/transfer) to see the updated transaction.

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   0   |

A Transfer transaction enables a user to broadcast a transaction to the network sending SXP tokens from one SXP wallet to another.

All Solar transactions contain a special data field of 255 bytes known as the 'Memo.' This data field allows raw data, code, or plain text to be stored on the blockchain. The Memo is optional, public, and immutable.

| References    |                                                                                                                                                                                                                                                                                                                    |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints | [Link](/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                                |
| AJV Schema    | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Transfer](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L64-L74) |

## Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 0,
    "nonce": "1",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "5000000",
    "Memo": "This is a test Memo.",
    "amount": "100000000",
    "expiration": 0,
    "recipientId": "SNAgA2XCRZDKfm5Vu9h4KR1bZw5xn9EiC3"
}
```

## Serialised

```shell
ff033f0100000000000100000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192404b4c00000000001b54686973206973206120746573742076656e646f726669656c642e00e1f50500000000000000003f0995750207ecaf0ccf251c1265b92ad84f553662
```

## Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**     | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0000`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0100000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x404b4c0000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x1b`                                                                 |
| **Memo:**            | **[59]** |       **26**       | `0x54686973206973206120746573742076656e646f726669656c642e`             |
| **Amount:**          | **[85]** |       **8**        | `0x00e1f50500000000`                                                   |
| **Expiration:**      | **[93]** |       **4**        | `0x00000000`                                                           |
| **Recipient:**       | **[97]** |       **21**       | `0x3f0995750207ecaf0ccf251c1265b92ad84f553662`                         |
