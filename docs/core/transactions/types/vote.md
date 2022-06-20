---
title: Transaction Types - Vote
---

# Vote

| TypeGroup | Type  |
| :-------: | :---: |
|     2     |   2   |

A key feature of the SXP DPoS model is that each address can vote for one delegate of their choosing to secure the network. A vote and unvote transaction type is therefore necessary to enable this functionality. Once an address votes for a delegate, funds can enter and leave the address as needed, and vote weight adjusts automatically. Voting does not send funds to the delegate’s SXP address in question - it only assigns vote weight

Holders of SXP vote through their wallets for delegates who secure the network, insert blocks into the ledger, and create new SXP. The top 53 vote earners are named elected forging delegates. Number of delegates is related to DPOS mechanism configuration.

| References    |                                                                                                                                                                                                                                                                                                                  |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                         |
| AJV Schema    | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Vote](https://github.com/Solar-network/core/blob/fa3acf545f1bf257d8c2a089c2dd5d7a6f4a7943/packages/crypto/src/transactions/types/schemas.ts#L157-L183) |

### JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 2,
    "type": 2,
    "nonce": "13",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "9000000",
    "asset": {
        "votes": {
            "gym": 50,
            "cactus1549": 25,
            "sl33p": 25
        }
    }
}
```

### Serialized

```shell
ff033f0200000002000d00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192405489000000000000030367796d88130a63616374757331353439c40905736c333370c409
```

### Deserialized

| Key                     |   Pos.   | Size<br>_(bytes)_ | Value<br> _(hex)_                                                      |
| :---------------------- | :------: | :---------------: | :--------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**       | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**       | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**       | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**       | `0x02000000`                                                           |
| **Type:**               | **[7]**  |       **2**       | `0x0200`                                                               |
| **Nonce:**              | **[9]**  |       **8**       | `0x0d00000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |      **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**       | `0x4054890000000000`                                                   |
| **Memo Length:**        | **[58]** |       **1**       | `0x00`                                                                 |
| **Vote Count:**         | **[59]** |       **1**       | `0x03`                                                                 |
| **Vote 1 Name Length:** | **[60]** |       **1**       | `0x03`                                                                 |
| **Vote 1 Name:**        | **[61]** |       **3**       | `0x67796d`                                                             |
| **Vote 1 Percentage:**  | **[64]** |       **2**       | `0x8813`                                                               |
| **Vote 2 Name Length:** | **[66]** |       **1**       | `0x0a`                                                                 |
| **Vote 2 Name:**        | **[67]** |      **10**       | `0x63616374757331353439`                                               |
| **Vote 2 Percentage:**  | **[77]** |       **2**       | `0xc409`                                                               |
| **Vote 3 Name Length:** | **[79]** |       **1**       | `0x05`                                                                 |
| **Vote 3 Name:**        | **[80]** |       **5**       | `0x736c333370`                                                         |
| **Vote 3 Percentage:**  | **[85]** |       **2**       | `0xc409`                                                               |

## Cancel Vote

### JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 3,
    "nonce": "14",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "9000000",
    "asset": {}
}
```

### Serialized

```shell
ff033f0100000003000e00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19240548900000000000000
```

### Deserialized

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0e00000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x4054890000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**      | **[59]** |       **1**        | `0x00`                                                                 |
