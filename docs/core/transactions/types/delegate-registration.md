---
title: Delegate Registration
---

# Delegate Registration

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   2   |

A user or organisation can register their address to become a delegate and secure the network. Upon accumulating sufficient vote weight, the delegate will begin forging transactions and receiving block rewards. The delegate assigns a custom name to their address to differentiate it from other delegates.

| References           |                                                                                                                                                                                                                                                           |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](https://api.solar.org/#/Transactions)                                                                                                                                                                                                              |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Delegate Registration](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L103-L124) |

## Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 2,
    "nonce": "3",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "7500000000",
    "asset": {
        "delegate": {
            "username": "sl33p"
        }
    }
}
```

## Serialised

```shell
ff033f0100000002000300000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19200eb08bf010000000005736c333370
```

## Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**     | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0200`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0300000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x00eb08bf01000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Username Length:** | **[59]** |       **1**        | `0x05`                                                                 |
| **Username:**        | **[60]** |       **5**        | `0x736c333370`                                                         |
