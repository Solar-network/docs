---
title: Transaction Types - HTLC Refund
---

# HTLC Refund

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   3   |

A Hashed Time-Lock Contract (HTLC) is a set of transaction types that permits a designated party (the "sender/seller") to [**LOCK**](/docs/core/transactions/types/htlc-lock) funds by disclosing the preimage (secret) of a hash. It also permits a second party (the "recipient/buyer") to [**CLAIM**](/docs/core/transactions/types/htlc-claim) the funds, or after a timeout is reached enter a **REFUND** situation.

The purpose of this transaction is for the sender to retrieve their locked funds, in the case of the recipient not claiming them using a _CLAIM_ transactions.

| References           |                                                                                                                                                                                                                                                                                                                         |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Improvement Proposal | [AIP102](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-102.md)                                                                                                                                                                                                                                              |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                                |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [HTLC Refund](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L322-L342) |

## JSON

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 10,
    "nonce": "11",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "0",
    "amount": "0",
    "asset": {
        "refund": {
            "lockTransactionId": "3aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f"
        }
    }
}
```

## Serialized

```shell
ff033f010000000a000b00000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed1920000000000000000003aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f
```

## Deserialized

| Key                  |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**          | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**         | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**         | **[2]**  |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**       | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**            | **[7]**  |       **2**        | `0x0a00`                                                               |
| **Nonce:**           | **[9]**  |       **8**        | `0x0b00000000000000`                                                   |
| **SenderPublicKey:** | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**             | **[50]** |       **8**        | `0x0000000000000000`                                                   |
| **Memo Length:**     | **[58]** |       **1**        | `0x00`                                                                 |
| **Lock Id:**         | **[59]** |       **32**       | `0x3aade2b98391ba7230252530cdd5124183a9f4e582660666ae873da48173ea5f`   |
