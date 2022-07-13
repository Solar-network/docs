---
title: Transaction Types - Vote
---

# Vote

| TypeGroup | Type  |
| :-------: | :---: |
|     2     |   2   |

A key feature of the Solar DPoS model is the ability to vote (or stake) for one or multiple delegates at once. Anywhere from 1 to 53 delegates in total may be voted for. The wallet's vote weight can be distributed evenly across their chosen delegates or customised by setting the distribution percentage as desired. Once a wallet is actively voting, funds can be sent and received freely and its vote weight adjusts accordingly.

To vote for a new delegate or set of delegates, create a new vote transaction containing the list of delegates for which you'd like to vote.

To stop voting altogether, simply create a new vote transaction containing an empty delegate list, also known as a '[Cancel Vote](#cancel-vote).'

> Voting does _not_ require sending funds to the delegate or delegates - it only assigns the wallet's vote weight.

| References    |                                                                                                                                                                                                                                                                                                                  |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints | [Link](/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                              |
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

### Serialised

```shell
ff033f0200000002000d00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192405489000000000000030367796d88130a63616374757331353439c40905736c333370c409
```

### Deserialised

| Key                     |   Pos.   | Size<br>_(bytes)_ | Value<br> _(hex)_                                                      |
| :---------------------- | :------: | :---------------: | :--------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**       | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**       | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**       | `0x3f`                                                                 |
| **TypeGroup:**          | **[3]**  |       **4**       | `0x02000000`                                                           |
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

### Serialised

```shell
ff033f0100000003000e00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19240548900000000000000
```

### Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0e00000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x4054890000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**      | **[59]** |       **1**        | `0x00`                                                                 |
