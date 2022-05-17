---
title: Transaction Types - Burn
---

# Burn

| TypeGroup | Type  |
| :-------: | :---: |
|     2     |   0   |

This transaction type allows burning an arbirary amount of SXP tokens. The burned amount is deducted from the sender's wallet as well as from the chain's circulating supply.

| References                         |                                                                                                                                                                                                                                           |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <!-- SXP Improvement Proposals --> | <!-- [AIP11](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-11.md), [AIP29](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-29.md) -->                                                                               |
| API Endpoints                      | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                  |
| AJV Schema                         | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Burn](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/solar/burn.ts#L15-L25) |

## Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 2,
    "type": 0,
    "nonce": "12",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "0",
    "burnedFee": "0",
    "amount": "100000000"
}
```

## Serialized

```shell
ff033f0200000000000c00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19200000000000000000000e1f50500000000
```

## Deserialized

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**        | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x02000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0000`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0c00000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0x0000000000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
| **Amount:**             | **[59]** |       **8**        | `0x00e1f50500000000`                                                   |
