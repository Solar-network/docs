---
title: Transaction Types - Transfer
---

# Transfer

| TypeGroup | Type  |
| :-------: | :---: |
|     1     |   6   |

A transfer allows one or multiple payments to be combined and broadcast to the network as a single transaction. This benefits the end user and delegates by lowering transaction fees per payment and reducing congestion. Solar Core allows up to 256 payments to be combined within a single transaction.

All Solar transactions contain a special data field of 255 bytes known as the 'Memo.' This data field allows raw data, code, or plain text to be stored on the blockchain. The Memo is optional, public, and immutable.

| References    |                                                                                                                                                                                                                                                                                                                       |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Endpoints | [Link](/api/public-rest-api/endpoints/transactions)                                                                                                                                                                                                                                                                   |
| AJV Schema    | [Base](https://github.com/Solar-network/core/blob/0c03aaf1feebb77bd33117110c358636bf14d9c0/packages/crypto/src/transactions/types/schemas.ts#L17-L46) \| [Transfer](https://github.com/Solar-network/core/blob/fa3acf545f1bf257d8c2a089c2dd5d7a6f4a7943/packages/crypto/src/transactions/types/schemas.ts#L325-#L351) |

## JSON

```json
{
    "version": 3,
    "network": 63,
    "type": 6,
    "nonce": "8",
    "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "fee": "50000000",
    "amount": "0",
    "asset": {
        "transfers": [
            { "amount": "1", "recipientId": "SNAgA2XCRZDKfm5Vu9h4KR1bZw5xn9EiC3" },
            { "amount": "1", "recipientId": "SjHT1fxVsW75eaQUPN4U2SEgFVU8ZqSVgk" },
            { "amount": "1", "recipientId": "SVzKH9r6u8UGcd2Ki7tAzQtB5Pa6FRn4GA" },
            { "amount": "1", "recipientId": "SVhLL7NR8WhkKRfYDzSmGxUH4Gg5k3uis7" },
            { "amount": "1", "recipientId": "SeznGToSzxw7maHDWXD2eRoTBSS2BmK8nU" },
            { "amount": "1", "recipientId": "SfVFPA5e2JYcgJeUmVBEsFCYCWpt5xkZ5o" },
            { "amount": "1", "recipientId": "SQEDRvC79Tqqmv85FrnqG4AxAxFoYPADCa" },
            { "amount": "1", "recipientId": "SX87pA6bJdQQf57JnUUkzVJxZ2n9jxDgeN" },
            { "amount": "1", "recipientId": "SMMJgffKfvtERv3d4MFeypAg53UcxJ9dE1" },
            { "amount": "1", "recipientId": "SefdTc8Sjx5pqSUu3TpfjFw6epyPYWoooQ" },
            { "amount": "1", "recipientId": "SSB1coESUy1GHsXjxd1Qzw5e1HqMUNQzRG" },
            { "amount": "1", "recipientId": "SNtHvv7fr23EcKHkXeSwCYz6w2ZLaT7y9y" },
            { "amount": "1", "recipientId": "SUogQH6n5EjwFnXwDapkJ1jri13Hrj1Ppz" },
            { "amount": "1", "recipientId": "SY4RAvsUTZ5q9PR9Df28vguH6LfRFrgB3a" },
            { "amount": "1", "recipientId": "SPZynxFxAtSBVKQWQW8LQPtrt87CBqpn7i" },
            { "amount": "1", "recipientId": "Sj6YjvZYDH4xh8HsRiYzWLBpeAkx65Nc1W" },
            { "amount": "1", "recipientId": "SX3XMHrMSbXLLNGcRVbMBy4WgQbS3MZzWV" },
            { "amount": "1", "recipientId": "SYqJcLu2wWYHDYvSomgsDPtnteCVhpNCTQ" },
            { "amount": "1", "recipientId": "Sa1v9xUZaniWKiCGzEV7qYXt1pW3G3XJbi" },
            { "amount": "1", "recipientId": "SQVwXdWCqouKWQhaAJMsNieZmjE3GLYYiz" },
            { "amount": "1", "recipientId": "SR1ZhBPLnSvrq3SQt8zeqBshemiudGb9fe" },
            { "amount": "1", "recipientId": "Sd1beR5X9pKKEYSxYWc7XXozC52y8QGJSt" },
            { "amount": "1", "recipientId": "SScQEYdkr5mPGD9uwFrdk15KjyKAfwHZFc" },
            { "amount": "1", "recipientId": "SRMhbyiuDa14kQKE7g8NB9jrBE8Jh9NwPv" },
            { "amount": "1", "recipientId": "SUwp9puY8x9GYbvq8X4eYE5UjQxCgmNJMJ" },
            { "amount": "1", "recipientId": "ShomZcGU7c15EUXTUAfZB2QHw17UsHxxyf" },
            { "amount": "1", "recipientId": "ScCTPEwY4Bz2cTJJxL4Fy388zRTrAKmV8m" },
            { "amount": "1", "recipientId": "ShqpcENQP4gSqRcrC1oqAzSiNscvutyQ3B" },
            { "amount": "1", "recipientId": "SjcaXuPypJxUv8qg4z7SaAry9ipqkVZsV2" },
            { "amount": "1", "recipientId": "SZk35koLSrjSetXda5toYEhNNv3GNbosDN" },
            { "amount": "1", "recipientId": "SVBBoMW8u2TiH4C59yi5wxk5mis81NJupL" },
            { "amount": "1", "recipientId": "SgZEJxkDxfDSWP38QjkDkAf9uQLwb4XL8N" },
            { "amount": "1", "recipientId": "SgE9Mqj1ZX9ziL9bJUUaRXzwNibEocJm5s" },
            { "amount": "1", "recipientId": "SYkqTvG2n54Fbg1hAiZDeK33DYwCYZWcuC" },
            { "amount": "1", "recipientId": "SjUcnukBRT6qxLRbbyrsQxVjbMdVLYRi5a" },
            { "amount": "1", "recipientId": "SNSmzTzFPmzSmaKgcDj32nz7aJp1dJqJ5a" },
            { "amount": "1", "recipientId": "SRdLAGYYk8HVeL3iJxRmYxZ9qvGUdRBiub" },
            { "amount": "1", "recipientId": "SQf1Dpta8b94FYjKDBu2dfFF4EdUfLMnoU" },
            { "amount": "1", "recipientId": "Si5KNcn97V6TZYH1ccZZpyMvCJZmKuLEzv" },
            { "amount": "1", "recipientId": "SfxX8nJVJ5rUbAXPVgFMXhpEbXXp1P3aWc" }
        ]
    }
}
```

## Serialised

```shell
ff033f0100000006000500000000000000034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed19280f0fa020000000000280001000000000000003f0995750207ecaf0ccf251c1265b92ad84f55366201000000000000003ff13809c4c5fb2b3967a9b40efc70843f7db462ad01000000000000003f5f60e0594115b71d5b136cf929c8504082ac199d01000000000000003f5c2aaead4ce542788406c54e1ae31f1afdb7f08101000000000000003fc2308975254751ead4df705fc76aa84116c5e34e01000000000000003fc792d1958bb950596d0e7cd0bef325062009684801000000000000003f2031100e628422b8409810fdb438e874765846ba01000000000000003f6bd2c24bded5fdfd7888a28b3c6990503699b5e801000000000000003f009ffbb10efc47ad00a0a29cc2ef6e6c83d8c6ec01000000000000003fbe9147febbfe462cdbfda8575c18dabe85db4f5b01000000000000003f358634b58d88abf4aef3a6fe264b4ad18b74e98b01000000000000003f11745fc47a9c58c4e6f5a74eb59411ac102c6a8801000000000000003f5265ceb5d6102474ea7d0f401d6e6b9f13864a0501000000000000003f7617b5f3b82f153e388b4b200abd8636fff73dd501000000000000003f18f5df4fe3108277bfa4e39071fead9d59b35b8f01000000000000003fef283e95c3fdf0e2df9ba8321407c5621f98687601000000000000003f6af453a17439c9c258c25c707aa9fc1f3b59d9b401000000000000003f7e94f3954665ebd80ced3d434c67cd4351966f2b01000000000000003f8b8ee88e27291e33ce5403ea9b159235887dcfa901000000000000003f232a71b6b2586d5b02b6a72db08759066ba2a92b01000000000000003f28c4b220f14f3745f3fff6d3c066ba2353393eb601000000000000003fac67d5bfbef4a7ed8149727b93a01e903d84ee0c01000000000000003f3a537bef2ed296a54adc354967efe3a5e52cdfb801000000000000003f2c939e4633bd96ccc1d1509dbe794299603aad9901000000000000003f53ef9af027797e4827d708d9ed47c511f4ea552401000000000000003fe103c02fc06140aeac275f8e579f3397d041f81701000000000000003fa37d6366d765f5e446fc18ddcc3da3fa300cf6bb01000000000000003fe1671fea563be042824751a3465a7dbbc482794201000000000000003ff4d63847bf07a9faad83bd69fed408b3b734dce801000000000000003f888e092eba4cbd5eab9e10646661f5a440915f9d01000000000000003f5677152f9d640b175894c8da0b9f30bad3801aff01000000000000003fd34bb692e52d515398d00fd57ce2c8bfd348055401000000000000003fcfafad73ebddc38d53317c80cdbf6d343c331d6201000000000000003f7dbca0c01f96de655cf41eb53e1b8d5e2ffa260701000000000000003ff354c71350a110a7b45b5095ed0a4601bf4bbf9d01000000000000003f0ca0fbbfb8e3f615ec4eedaef6281d4d60a8f2b201000000000000003f2f885faaf6a3fcc38b1f35c652bf72f0fd7ac60301000000000000003f24e14548f3874b9413a28f258c2b73d35ec2b2f901000000000000003fe3f48b5211d1f21034bc15908259901ecf972be801000000000000003fccbb32ea36fad927cb2c46cbc63930db6cda829d
```

## Deserialised

| Key                      |    Pos.    | Size<br/>_(bytes)_ | Value<br/>_(hex)_                                                      |
| :----------------------- | :--------: | :----------------: | :--------------------------------------------------------------------- |
| **Header:**              |  **[0]**   |       **1**        | `0xff`                                                                 |
| **Version:**             |  **[1]**   |       **1**        | `0x03`                                                                 |
| **Network:**             |  **[2]**   |       **1**        | `0x3f`                                                                 |
| **TypeGroup:**           |  **[3]**   |       **4**        | `0x01000000`                                                           |
| **Type:**                |  **[7]**   |       **2**        | `0x0600`                                                               |
| **Nonce:**               |  **[9]**   |       **8**        | `0x0800000000000000`                                                   |
| **SenderPublicKey:**     |  **[17]**  |       **33**       | `0x034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` |
| **Fee:**                 |  **[50]**  |       **8**        | `0x80f0fa0200000000`                                                   |
| **Memo Length:**         |  **[58]**  |       **1**        | `0x00`                                                                 |
| **Number of Transfers:** |  **[59]**  |       **2**        | `0x2800`                                                               |
| **Amount 1:**            |  **[61]**  |       **8**        | `0x0100000000000000`                                                   |
| **Recipient 1:**         |  **[69]**  |       **21**       | `0x3f0995750207ecaf0ccf251c1265b92ad84f553662`                         |
| **............**         |  **....**  |       **..**       | `..................`                                                   |
| **Amount 40:**           | **[1192]** |       **8**        | `0x0100000000000000`                                                   |
| **Recipient 40:**        | **[1200]** |       **21**       | `0x3fccbb32ea36fad927cb2c46cbc63930db6cda829d`                         |
