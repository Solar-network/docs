---
title: Transaction Types - Delegate Resignation
---

# Delegate Resignation

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   7   |

This transaction type enables delegates to block potential voters from voting for them if they choose to withdraw their status as delegates. A non-reversible transaction can be sent to the network to indicate that the delegate should no longer be included in any future forging rounds.

This transaction acts as a "kill command" for delegates who wish to resign or retire their delegate. Activating a delegate resignation will mean delegates will no longer be able to receive any new votes. Plus, for actively forging delegates, enabling delegate resignation will mean they permanently drop out of the top 53. This provides a clean and simple way to retire a delegate.

| References           |                                                                                                                                                                                                                                                          |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                 |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Delegate Resignation](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L374-L381) |

## Transaction Structure

### Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 1,
    "nonce": "9",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "50000000",
}
```

### Serialised

```shell
ff033f0100000002000900000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19280f0fa020000000000eb08bf010000000005736c333370
```

### Deserialised

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**        | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0700`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0900000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0x80f0fa0200000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
