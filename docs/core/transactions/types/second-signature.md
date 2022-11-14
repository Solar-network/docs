---
title: Transaction Types - Second Signature Registration
---

# Second Signature Registration

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   1   |

This transaction type enables a user to add an extra layer of security to their address by creating a second passphrase, using mnemonic code for generating deterministic keys via BIP-39 to produce an additional mnemonic. Once a second signature has been registered to a wallet, the owner of the wallet will then be required to input their primary and secondary passphrase when sending a transaction to the network.

| References           |                                                                                                                                                                                                                                                     |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints        | [Link](/docs/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                            |
| AJV Schema           | [Base](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Second Signature](https://github.com/Solar-network/core/blob/main/packages/crypto/src/transactions/types/schemas.ts#L77-L101) |

## Json

```json
{
    "version": 3,
    "network": 63,
    "typeGroup": 1,
    "type": 1,
    "nonce": "2",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "2500000",
    "asset": {
        "signature": {
            "publicKey": "02877e4f35c76abaeb152b128670db0a7ae10b3999afcd28a42938b653fbf87ae9"
        }
    }
}
```

## Serialised

```shell
ff033f0100000001000200000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192a0252600000000000002877e4f35c76abaeb152b128670db0a7ae10b3999afcd28a42938b653fbf87ae9
```

## Deserialised

| Key                     |   Pos.   | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :---------------------- | :------: | :----------------: | :--------------------------------------------------------------------- |
| **Header Flag:**        | **[0]**  |       **1**        | `0xff`                                                                 |
| **Version:**            | **[1]**  |       **1**        | `0x03`                                                                 |
| **Network:**            | **[2]**  |       **1**        | `0x3f`                                                                 |
| **Typegroup:**          | **[3]**  |       **4**        | `0x01000000`                                                           |
| **Type:**               | **[7]**  |       **2**        | `0x0100`                                                               |
| **Nonce:**              | **[9]**  |       **8**        | `0x0200000000000000`                                                   |
| **SenderPublicKey:**    | **[17]** |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                | **[50]** |       **8**        | `0xa025260000000000`                                                   |
| **VendorField Length:** | **[58]** |       **1**        | `0x00`                                                                 |
| **Second PublicKey:**   | **[59]** |       **33**       | `0x02877e4f35c76abaeb152b128670db0a7ae10b3999afcd28a42938b653fbf87ae9` |
