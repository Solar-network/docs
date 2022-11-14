---
title: Transaction Types - HTLC Claim
---

# HTLC Claim

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   9   |

A Hashed Time-Lock Contract (HTLC) is a set of transaction types that permits a designated party (the "sender/seller") to [**LOCK**](/docs/core/transactions/types/htlc-lock) funds by disclosing the preimage (secret) of a hash. It also permits a second party (the "recipient/buyer") to **CLAIM** the funds, or after a timeout is reached enter a [**REFUND**](/docs/core/transactions/types/htlc-refund) situation.

The purpose of this transaction is for the recipient to _**CLAIM**_ funds from the sender - if they know the shared secret.

| References           |                                                                                                                                                                                                                                                |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                       |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [HTLC Claim](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L299-L320) |

## JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 9,
    "nonce": "11",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "0",
    "asset": {
        "claim": {
            "lockTransactionId": "3aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f",
            "unlockSecret": "c27f1ce845d8c29eebc9006be932b604fd06755521b1a8b0be4204c65377151a"
        }
    }
}
```

## Serialised

```shell
ff033f0100000009000b00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192000000000000000000003aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f20c27f1ce845d8c29eebc9006be932b604fd06755521b1a8b0be4204c65377151a
```

## Deserialised

| Key                       |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------------ | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**               | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**              | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**              | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**            | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**                 | **[7]**  |       **2**        | `0x0900`                                                               |
| **Nonce:**                | **[9]**  |       **8**        | `0x0b00000000000000`                                                   |
| **SenderPublicKey:**      | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                  | **[50]** |       **8**        | `0x0000000000000000`                                                   |
| **VendorField Length:**   | **[58]** |       **1**        | `0x00`                                                                 |
| **Hash Type:**            | **[59]** |       **1**        | `0x00`                                                                 |
| **Lock Id:**              | **[60]** |       **32**       | `0x3aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f`   |
| **Unlock Secret Length:** | **[92]** |       **1**        | `0x20`                                                                 |
| **Unlock Secret:**        | **[93]** |       **32**       | `0xc27f1ce845d8c29eebc9006be932b604fd06755521b1a8b0be4204c65377151a`   |

#### Supported Hash Types

| Hash Type | Value |
| --------- | :---: |
| SHA256    |   0   |
| SHA384    |   1   |
| SHA512    |   2   |
| SHA3256   |   3   |
| SHA3384   |   4   |
| SHA3512   |   5   |
| Keccak256 |   6   |
| Keccak384 |   7   |
| Keccak512 |   8   |
