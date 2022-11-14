---
title: Transaction Types - Transfer
---

# Transfer

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   0   |

The transfer transaction enables a user to broadcast a transaction to the network sending SXP tokens from one SXP wallet to another. This transaction type provides the utility of store-of-value and value transfer. It also contains a special data field of 255 bytes called the vendor field, allowing raw data, code or plain text to be stored on the blockchain. The vendor field is public and immutable, and is also utilised in SXP SmartBridge Technology.

| References           |                                                                                                                                                                                                                                                                                                                  |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                         |
| AJV Schema           | [Base](https://github.com/ArkEcosystem/core/blob/aef8a3848fdc91aa6f44248dd37643e0fe7926e7/packages/crypto/src/transactions/types/schemas.ts#L17-L45) \| [Transfer](https://github.com/ArkEcosystem/core/blob/aef8a3848fdc91aa6f44248dd37643e0fe7926e7/packages/crypto/src/transactions/types/schemas.ts#L64-L74) |

## Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 0,
    "nonce": "1",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "2500000",
    "vendorField": "This is a test vendorfield.",
    "amount": "100000000",
    "expiration": 0,
    "recipientId": "SNAgA2XCRZDKfm5Vu9h4KR1bZw5xn9EiC3"
}
```

## Serialised

```shell
ff033f0100000000000100000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192a0252600000000001b54686973206973206120746573742076656e646f726669656c642e00e1f50500000000000000003f0995750207ecaf0ccf251c1265b92ad84f553662
```

## Deserialised

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**        | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0000`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0100000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0xa025260000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x1b`                                                                 |
| **VendorField:**        | **[59]** |       **26**       | `0x54686973206973206120746573742076656e646f726669656c642e`             |
| **Amount:**             | **[85]** |       **8**        | `0x00e1f50500000000`                                                   |
| **Expiration:**         | **[93]** |       **4**        | `0x00000000`                                                           |
| **Recipient:**          | **[97]** |       **21**       | `0x3f0995750207ecaf0ccf251c1265b92ad84f553662`                         |
