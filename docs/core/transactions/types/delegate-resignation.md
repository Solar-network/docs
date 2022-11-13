---
title: Delegate Resignation
---

# Delegate Resignation

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   7   |

A 'Delegate Resignation' transaction allows a delegate to resign temporarily or permanently. If ranked in the top 53 Delegates, the delegate will be removed from their forging position immediately.

A 'Permanent Resignation' is for delegates who wish to permanently retire their position as a delegate on the Solar Network. Once resigned permanently, a delegate cannot reinstate their candidacy.

| References           |                                                                                                                                                                                                                                                          |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](https://api.solar.org/#/Transactions)                                                                                                                                                                                                             |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Delegate Resignation](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L374-L381) |

## Transaction Structure

### Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 7,
    "nonce": "9",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "0",
    "asset": {
        "resignationType": 1
    }
}
```

### Serialised

```shell
ff033f0100000007000900000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192000000000000000000eb08bf010000000005736c33337001
```

### Deserialised

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**     | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0700`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0900000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x0000000000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Resignation Type** | **[59]** |       **1**        | `0x01`                                                                 |

### Resignation Types

| Resignation Type | Value | Description                                                                                                                  |
| ---------------- | :---: | :--------------------------------------------------------------------------------------------------------------------------- |
| Temporary        |   0   | Resign only for a short time. Delegate will be removed from forging. *(the default when no resign type is declared)*         |
| Permanent        |   1   | Irreversible. Delegate will no longer be allowed to receive votes or forge.                                                  |
| Revoke           |   2   | Reverses a temporary resignation.                                                                                            |
