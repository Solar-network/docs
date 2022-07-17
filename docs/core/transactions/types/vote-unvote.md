---
title: Transaction Types - Vote / Unvote / Switchvote
---

# Vote / Unvote / Switchvote

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   3   |

A key feature of the SXP DPoS model is that each address can vote for one delegate of their choosing to secure the network. A vote and unvote transaction type is therefore necessary to enable this functionality. Once an address votes for a delegate, funds can enter and leave the address as needed, and vote weight adjusts automatically. Voting does not send funds to the delegate’s SXP address in question - it only assigns vote weight

Holders of SXP vote through their wallets for delegates who secure the network, insert blocks into the ledger, and create new SXP. The top 53 vote earners are named elected forging delegates. Number of delegates is related to DPOS mechanism configuration.

| References           |                                                                                                                                                                                                                                                                |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Improvement Proposal | [AIP11](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-11.md), [AIP29](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-29.md)                                                                                                             |
| API Endpoints        | [Link](/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                       |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Vote / Unvote / Switchvote](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L126-L148) |

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
    "fee": "10000000",
    "asset": {
        "count": 1,
        "votes": ["+cactus1549"]
    }
}
```

### Serialized

```shell
ff033f0100000003000400000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192809698000000000000010b0163616374757331353439
```

### Deserialized

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0400000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0x8096980000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**         | **[59]** |       **1**        | `0x01`                                                                 |
| **Vote Length:**        | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote Type:**          | **[61]** |       **1**        | `0x01`                                                                 |
| **Vote:**               | **[62]** |       **5**        | `0x63616374757331353439`                                               |

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
    "fee": "10000000",
    "asset": {
        "count": 1,
        "votes": ["-cactus1549"]
    }
}
```

### Serialized

```shell
ff033f0100000003000500000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192809698000000000000010b0063616374757331353439
```

### Deserialized

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0400000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0x8096980000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**         | **[59]** |       **1**        | `0x01`                                                                 |
| **Vote Length:**        | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote Type:**          | **[61]** |       **1**        | `0x00`                                                                 |
| **Vote:**               | **[62]** |       **5**        | `0x63616374757331353439`                                               |

## Switch Vote

### JSON

```json
{
    "version": 3,
    "network": 63,
    "type": 3,
    "nonce": "5",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "10000000",
    "asset": {
        "count": 2,
        "votes": ["-cactus1549", "+sl33p"]
    }
}
```

### Serialized

```shell
ff033f0100000003000500000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192809698000000000000020b00636163747573313534390601736c333370
```

### Deserialized

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**             | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0300`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0200000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0x8096980000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
| **Vote Count:**         | **[59]** |       **1**        | `0x02`                                                                 |
| **Vote 1 Length:**      | **[60]** |       **1**        | `0x0b`                                                                 |
| **Vote 1 Type:**        | **[61]** |       **1**        | `0x00`                                                                 |
| **Vote 1:**             | **[62]** |       **10**       | `0x63616374757331353439`                                               |
| **Vote 2 Length:**      | **[72]** |       **1**        | `0x06`                                                                 |
| **Vote 2 Type:**        | **[73]** |       **1**        | `0x01`                                                                 |
| **Vote 2:**             | **[74]** |       **10**       | `0x736C333370`                                                         |
