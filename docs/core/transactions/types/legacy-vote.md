---
title: Transaction Types - Vote / Unvote / Switchvote _(**DEPRECATED**)_
---

# Vote / Unvote / Switchvote _(**DEPRECATED**)_

> 🛑 Vote (Type 3) has been deprecated, please visit ['TypeGroup 2, Type 2: Vote'](/docs/core/transactions/types/vote) to see the updated transaction.

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   3   |

The vote and unvote transaction types enable each address to vote for one delegate of their choosing to secure the network. Once an address votes for a delegate, funds can enter and leave the address as needed, and vote weight adjusts automatically. Voting does not send funds to the delegate’s SXP address in question - it only assigns vote weight

Holders of SXP vote through their wallets for delegates who secure the network, insert blocks into the ledger, and create new SXP. The top 53 vote earners are named elected forging delegates. Number of delegates is related to DPoS mechanism configuration.

| References    |                                                                                                                                                                                                                                                                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                                               |
| AJV Schema    | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Vote / Unvote / Switchvote](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L126-L148) |

## Vote

### JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 3,
    "nonce": "4",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "5000000",
    "asset": {
        "count": 1,
        "votes": ["+cactus1549"]
    }
}
```

### Serialised

```shell
ff033f0100000003000400000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192404b4c000000000000010b0163616374757331353439
```

### Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0400000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x404b4c0000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**      | **[59]** |       **1**        | `0x01`                                                                 |
| **Vote Length:**     | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote Type:**       | **[61]** |       **1**        | `0x01`                                                                 |
| **Vote:**            | **[62]** |       **5**        | `0x63616374757331353439`                                               |

## Unvote

### JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 3,
    "nonce": "5",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "5000000",
    "asset": {
        "count": 1,
        "votes": ["-cactus1549"]
    }
}
```

### Serialised

```shell
ff033f0100000003000500000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192404b4c000000000000010b0063616374757331353439
```

### Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0400000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x404b4c0000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**      | **[59]** |       **1**        | `0x01`                                                                 |
| **Vote Length:**     | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote Type:**       | **[61]** |       **1**        | `0x00`                                                                 |
| **Vote:**            | **[62]** |       **5**        | `0x63616374757331353439`                                               |

## Switch Vote

### JSON

```json
{
    "version": 3,
    "network": 63,
    "type": 3,
    "nonce": "5",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "5000000",
    "asset": {
        "count": 2,
        "votes": ["-cactus1549", "+sl33p"]
    }
}
```

### Serialised

```shell
ff033f0100000003000500000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192404b4c000000000000020b00636163747573313534390601736c333370
```

### Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0200000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x404b4c0000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**      | **[59]** |       **1**        | `0x02`                                                                 |
| **Vote 1 Length:**   | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote 1 Type:**     | **[61]** |       **1**        | `0x00`                                                                 |
| **Vote 1:**          | **[62]** |       **10**       | `0x63616374757331353439`                                               |
| **Vote 2 Length:**   | **[72]** |       **1**        | `0x06`                                                                 |
| **Vote 2 Type:**     | **[73]** |       **1**        | `0x01`                                                                 |
| **Vote 2:**          | **[74]** |       **10**       | `0x736C333370`                                                         |
