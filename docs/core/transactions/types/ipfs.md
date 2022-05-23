---
title: Transaction Types - IPFS
---

# IPFS

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   5   |

This transaction type utilizes a special data field similar to the vendor field to store Interplanetary File System data on the blockchain. This provides an easy way to timestamp and optionally encrypt and verify files. This implementation of the IPFS transaction type won’t allow storing data on the blockchain - for that, special IPFS nodes are needed.

| References           |                                                                                                                                                                                                                                          |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Improvement Proposal | [AIP11](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-11.md), [AIP29](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-29.md)                                                                                       |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                 |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [IPFS](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L246-L264) |

## JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 5,
    "nonce": "7",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "500000000",
    "asset": {
        "ipfs": "QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KKB"
    }
}
```

## Serialized

```shell
ff033f0100000005000700000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed1920065cd1d000000000012209608184d6cee2b9af8e6c2a46fc9318adf73329aeb8a86cf8472829fff5bb89e
```

## Deserialized

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                        |
| :---------------------- | :------: | :----------------: | :----------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**        | `0xff`                                                                   |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                   |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                   |
| **TypeGroup:**          | **[3]**  |       **4**        | `0x01000000`                                                             |
| **Type:**               | **[7]**  |       **2**        | `0x0500`                                                                 |
| **Nonce:**              | **[9]**  |       **8**        | `0x0700000000000000`                                                     |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192`   |
| **Fee:**                | **[50]** |       **8**        | `0x0065cd1d00000000`                                                     |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                   |
| **IPFS Hash:**          | **[59]** |       **34**       | `0x12209608184d6cee2b9af8e6c2a46fc9318adf73329aeb8a86cf8472829fff5bb89e` |

## IPFS Hash

| Item               | Length<br/>_(chars)_ | Value                                                                    |
| :----------------- | :------------------: | :----------------------------------------------------------------------- |
| **IPFS Hash**      |        **46**        | `QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KKB`                         |
| **Decoded Base58** |        **34**        | `0x12209608184d6cee2b9af8e6c2a46fc9318adf73329aeb8a86cf8472829fff5bb89e` |
| **Hash Type**      |        **1**         | `0x12`                                                                   |
| **Hash Length**    |        **1**         | `0x20`                                                                   |
| **32-Byte Hash**   |        **32**        | `0x9608184d6cee2b9af8e6c2a46fc9318adf73329aeb8a86cf8472829fff5bb89e`     |
