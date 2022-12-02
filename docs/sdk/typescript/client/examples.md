---
title: Examples
---

# Examples

## Initialization

```typescript
import { Connection } from "@solar-network/client";

const client = new Connection(`${server}/api`);
```

## Blocks

This service API grants access to the <a href="https://api.solar.org/#/Blocks" target="_blank" rel="noopener noreferrer">blocks resource</a>. A block is a signed set of transactions created by a delegate and permanently committed to the SXP blockchain.

!!! info

    It is not possible to `POST` a block through the public API. Relay Nodes accept only blocks posted by a delegate at the correct time through the internal API.

### List all blocks

```typescript
const response = await client.api("blocks").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 24801,
        "totalCount": 2480074,
        "next": "/blocks?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/blocks?transform=true&page=1&limit=100",
        "first": "/blocks?transform=true&page=1&limit=100",
        "last": "/blocks?transform=true&page=24801&limit=100"
    },
    "data": [
        {
            "id": "4dcbf9a09e8718683e2d1cf6e1cd6cd5e2e3c6e8195026736cf78db383c9e1b2",
            "version": 0,
            "height": 2480073,
            "previous": "15898babf680b3fdb615564c05072ddaebf7c4b61353c6913101c82d0c59f002",
            "forged": {
                "reward": "1012500000",
                "donations": {
                    "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": "50625000",
                    "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": "50625000"
                },
                "fee": "0",
                "burnedFee": "0",
                "amount": "0",
                "total": "911250000"
            },
            "payload": {
                "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                "length": 0
            },
            "generator": {
                "username": "acanthus",
                "publicKey": "0335c0fb2c7a020b8e0b503657867ac18b072fa14fc35790ea6bf8df66ec07631d"
            },
            "signature": "56d2729810bfb09d51d5aa388839c07ee630818ab76964ad180033f2beb3ec62f141f1239cff61306946881af17ac82191089e7b883411ade80dfb7bba6bfa3a",
            "confirmations": 1,
            "transactions": 0,
            "timestamp": {
                "epoch": 19851096,
                "unix": 1668341496,
                "human": "2022-11-13T12:11:36.000Z"
            }
        },
        [...]
    ]
}
```

### Retrieve a block

```typescript
const response = await client.api("blocks").get("4dcbf9a09e8718683e2d1cf6e1cd6cd5e2e3c6e8195026736cf78db383c9e1b2"); //blockid

console.log(response.body);
```

```json
{
    "data": {
        "id": "4dcbf9a09e8718683e2d1cf6e1cd6cd5e2e3c6e8195026736cf78db383c9e1b2",
        "version": 0,
        "height": 2480073,
        "previous": "15898babf680b3fdb615564c05072ddaebf7c4b61353c6913101c82d0c59f002",
        "forged": {
            "reward": "1012500000",
            "donations": {
                "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": "50625000",
                "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": "50625000"
            },
            "fee": "0",
            "burnedFee": "0",
            "amount": "0",
            "total": "911250000"
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "acanthus",
            "publicKey": "0335c0fb2c7a020b8e0b503657867ac18b072fa14fc35790ea6bf8df66ec07631d"
        },
        "signature": "56d2729810bfb09d51d5aa388839c07ee630818ab76964ad180033f2beb3ec62f141f1239cff61306946881af17ac82191089e7b883411ade80dfb7bba6bfa3a",
        "confirmations": 17,
        "transactions": 0,
        "timestamp": {
            "epoch": 19851096,
            "unix": 1668341496,
            "human": "2022-11-13T12:11:36.000Z"
        }
    }
}
```

### List all transactions of a block

```typescript
const response = await client.api("blocks").transactions("647d851e2abc5fc556a6ed6400da4dc46334ace10b6983f73f24100cdd9e44ad"); // blockid

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 2,
        "pageCount": 1,
        "totalCount": 2,
        "next": null,
        "previous": null,
        "self": "/blocks/647d851e2abc5fc556a6ed6400da4dc46334ace10b6983f73f24100cdd9e44ad/transactions?transform=true&page=1&limit=100",
        "first": "/blocks/647d851e2abc5fc556a6ed6400da4dc46334ace10b6983f73f24100cdd9e44ad/transactions?transform=true&page=1&limit=100",
        "last": "/blocks/647d851e2abc5fc556a6ed6400da4dc46334ace10b6983f73f24100cdd9e44ad/transactions?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "b46bda685a75aa3add59544981f71f9a412e7f226cf066d4234888f0ff112ffb",
            "blockHeight": 2480086,
            "blockId": "647d851e2abc5fc556a6ed6400da4dc46334ace10b6983f73f24100cdd9e44ad",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "28603678772",
            "fee": "2000000",
            "burnedFee": "1800000",
            "sender": "SSzDcyrMJZAnSRjbGvQ2C1AFFHYfn519Ej",
            "senderPublicKey": "030af582f76cc890a616eb46c7553c9968ebd94d26f1411a479bab8d278d9e1999",
            "signature": "d92cad20823b0dbdc395019c563c85829059855696e204c6332c8f53a12d6841396cf0562ce192b1bb7de7bf985016752917dfefc0807b893c46a1a6ab738c39",
            "asset": {
                "transfers": [
                    {
                        "amount": "28603678772",
                        "recipientId": "SZzmvXs9jWEBRenPXqDSYMc7VyXSiX42Md"
                    }
                ]
            },
            "confirmations": 0,
            "nonce": "2690"
        },
        [...]
    ]
}
```

### Search last block

```typescript
const response = await client.api("blocks").last();

console.log(response.body);
```

```json
{
    "data": {
        "id": "9e4b5e234781cf933566b862289fd20e900eb6a602ae6e7064d634880dd4e675",
        "version": 0,
        "height": 2480138,
        "previous": "f8cf147a6132fb0081a8c255ba2b298cadca2805d6ee2f8393781757bcc9e786",
        "forged": {
            "reward": "1025000000",
            "donations": {
                "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": "51250000",
                "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": "51250000"
            },
            "fee": "0",
            "burnedFee": "0",
            "amount": "0",
            "total": "922500000"
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "fonk",
            "publicKey": "03f1cf7c43fcbdef9c27406da3449d867a3204d816fc898be1bd425db075e7b13d"
        },
        "signature": "2e82fa773e5cbe0e02eeccd3092e86770534ce2c38244e0b49e6dfe008aeae5dc25a0b6ffff90c5391b2e70ad6a25dc91050cf565f8c28d03c99ace888618c5d",
        "confirmations": 0,
        "transactions": 0,
        "timestamp": {
            "epoch": 19851616,
            "unix": 1668342016,
            "human": "2022-11-13T12:20:16.000Z"
        }
    }
}
```

### Search all blocks

```typescript
const response = await client.api("blocks").all({"height": 2000000});

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/blocks?height=2000000&transform=true&page=1&limit=100",
        "first": "/blocks?height=2000000&transform=true&page=1&limit=100",
        "last": "/blocks?height=2000000&transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "0ca3044010d8dc6eca4b957b6b0157824053ecddff1254c2de53f52d7a33f011",
            "version": 0,
            "height": 2000000,
            "previous": "15cb5489f99c1b58147f55751c752894b05b3a86f7621a21adfda110aa936774",
            "forged": {
                "reward": "762500000",
                "donations": {
                    "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": "38125000",
                    "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": "38125000"
                },
                "fee": "0",
                "burnedFee": "0",
                "amount": "0",
                "total": "686250000"
            },
            "payload": {
                "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                "length": 0
            },
            "generator": {
                "username": "goat",
                "publicKey": "037add8608b50bacce33964ba82278258c7a882099e096ad72aef5524abf992071"
            },
            "signature": "d74bf3308b081dbedc75bd75e7e644d8a2e2b94759c0aad2536a105b2d55888203a3e2e863d10be5da68fd1d6c912818ca9793853f5647e5a96d33c99b7842b7",
            "confirmations": 480129,
            "transactions": 0,
            "timestamp": {
                "epoch": 16009824,
                "unix": 1664500224,
                "human": "2022-09-30T01:10:24.000Z"
            }
        }
    ]
}
```

## Delegates

The client SDK can be used to query the <a href="https://api.solar.org/#/Delegates" target="_blank" rel="noopener noreferrer">delegate resource</a>.

A delegate is a regular wallet that has broadcast a registration transaction, acquired a sufficient number of votes, and has a Relay Node configured to forge new blocks through a `forger` module. At any time only 53 delegates are active. They are cost-efficient miners running the SXP network.

!!! info

    Voters are wallets which have broadcast a vote transaction on a delegate. A vote remains active until an un-vote transaction is sent (it does not have to be recast unless a wallet wishes to change from delegate). Voting for a delegate does not give the delegate access to the wallet nor does it lock the coins in it.

### List all delegates

```typescript
const response = await client.api("delegates").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 2,
        "totalCount": 124,
        "next": "/delegates?page=2&limit=100",
        "previous": null,
        "self": "/delegates?page=1&limit=100",
        "first": "/delegates?page=1&limit=100",
        "last": "/delegates?page=2&limit=100"
    },
    "data": [
        {
            "username": "lunar",
            "address": "SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq",
            "publicKey": "026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f",
            "votesReceived": {
                "percent": 0.14,
                "votes": "74554726485563",
                "voters": 102
            },
            "rank": 1,
            "isResigned": false,
            "blocks": {
                "produced": 46626,
                "missed": 0,
                "productivity": 100,
                "last": "495f9003f8f0c19d08624e26b6918fec254a5cdb4331af3055433ef30f875f93"
            },
            "forged": {
                "fees": "45570541865",
                "burnedFees": "41013485365",
                "rewards": "34939737500000",
                "donations": "1731708750000",
                "total": "33212585806500"
            },
            "version": "4.1.3"
        },
        [...]
    ]
}
```

### Retrieve a delegate

```typescript
const response = await client.api("delegates").get("nayiem"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "data": {
        "username": "nayiem",
        "address": "SXp4U1YmahTJGk7aXhvDBJpZmvjCybXMMi",
        "publicKey": "02b20555163f70fcc879a0e25e24689ab72edd716dedbc6e1e5b6876624ed8e151",
        "votesReceived": {
            "percent": 0,
            "votes": "0",
            "voters": 0
        },
        "isResigned": true,
        "resignationType": "permanent",
        "blocks": {
            "produced": 0
        },
        "forged": {
            "fees": "0",
            "burnedFees": "0",
            "rewards": "0",
            "donations": "0",
            "total": "0"
        }
    }
}
```

### List all blocks of a delegate

```typescript
const response = await client.api("delegates").blocks("SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 467,
        "totalCount": 46626,
        "next": "/delegates/SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq/blocks?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/delegates/SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq/blocks?transform=true&page=1&limit=100",
        "first": "/delegates/SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq/blocks?transform=true&page=1&limit=100",
        "last": "/delegates/SNxmEDRVi1JGY26BFVCCQtf5GmaNm6zBcq/blocks?transform=true&page=467&limit=100"
    },
    "data": [
        {
            "id": "495f9003f8f0c19d08624e26b6918fec254a5cdb4331af3055433ef30f875f93",
            "version": 0,
            "height": 2480144,
            "previous": "4c0782dc2fde006ed3acc0fd1ec36567e7be05d4ffd82b289710b7b29b6f9b13",
            "forged": {
                "reward": "675000000",
                "donations": {
                    "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": "33750000",
                    "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": "33750000"
                },
                "fee": "0",
                "burnedFee": "0",
                "amount": "0",
                "total": "607500000"
            },
            "payload": {
                "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                "length": 0
            },
            "generator": {
                "username": "lunar",
                "publicKey": "026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f"
            },
            "signature": "6f51089035099071d4f1b826c2bcfe3591953cfce5597a8e6057fff599e6bbbc5bd3209258e7cc6631f225c181ae1bfd30e7f59ba2f479ac0fc9bf46c111e4a1",
            "confirmations": 71,
            "transactions": 0,
            "timestamp": {
                "epoch": 19851664,
                "unix": 1668342064,
                "human": "2022-11-13T12:21:04.000Z"
            }
        },
        [...]
    ]
}
```

### List all voters of a delegate

```typescript
const response = await client.api("delegates").voters("026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 2,
        "totalCount": 102,
        "next": "/delegates/026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f/voters?page=2&limit=100",
        "previous": null,
        "self": "/delegates/026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f/voters?page=1&limit=100",
        "first": "/delegates/026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f/voters?page=1&limit=100",
        "last": "/delegates/026c46df329504f258372b80dc38f86f7a71590a7d20fb6fe1bbc0ad00a463ce6f/voters?page=2&limit=100"
    },
    "data": [
        {
            "address": "SQQZwtn5575rDVV5QiyUT7zWifxELtoQbu",
            "publicKey": "03a975fd63f5e73da0366c140a9b3080da54c25f179edce0881b36c7b74eaea80b",
            "balance": "31214109814495",
            "nonce": "16",
            "attributes": {},
            "votingFor": {
                "crypticmaniac": {
                    "percent": 40,
                    "votes": "12485643925798"
                },
                "lunar": {
                    "percent": 20,
                    "votes": "6242821962899"
                },
                "podushkin": {
                    "percent": 20,
                    "votes": "6242821962899"
                },
                "sevi": {
                    "percent": 20,
                    "votes": "6242821962899"
                }
            }
        },
        [...]
    ]
}
```

## Node

The SXP network consists of different anonymous nodes (servers), maintaining the public ledger, validating transactions and blocks and providing APIs. The <a href="https://api.solar.org/#/Node" target="_blank" rel="noopener noreferrer">node resource</a> allows for querying the health and configurations of the node used by the instantiated client.

### Retrieve the configuration

```typescript
const response = await client.api("node").configuration();

console.log(response.body);
```

```json
{
    "data": {
        "core": {
            "version": "4.1.3"
        },
        "nethash": "16db20c30c52d53638ca537ad0ed113408da3ae686e2c4bfa7e315d4347196dc",
        "slip44": 3333,
        "wif": 252,
        "token": "SXP",
        "symbol": "SXP",
        "explorer": "https://explorer.solar.org",
        "version": 63,
        "ports": {},
        "constants": {
            "height": 1812866,
            "activeDelegates": 53,
            "block": {
                "version": 0,
                "maxTransactions": 150,
                "maxPayload": 2097152
            },
            "blocksToRevokeDelegateResignation": 106,
            "blockTime": 8,
            "burn": {
                "feePercent": 90,
                "txAmount": 2000000
            },
            "epoch": "2022-03-28T18:00:00.000Z",
            "fees": {
                "staticFees": {
                    "burn": 0,
                    "delegateRegistration": 7500000000,
                    "delegateResignation": 0,
                    "htlcClaim": 0,
                    "htlcLock": 5000000,
                    "htlcRefund": 0,
                    "ipfs": 5000000,
                    "legacyTransfer": 5000000,
                    "legacyVote": 5000000,
                    "multiSignature": 5000000,
                    "secondSignature": 5000000,
                    "transfer": 50000000,
                    "vote": 9000000
                }
            },
            "legacyTransfer": true,
            "p2p": {
                "minimumVersions": [
                    ">=4.1.0"
                ]
            },
            "transfer": {
                "maximum": 256,
                "minimum": 1
            },
            "reward": 1000000000,
            "dynamicReward": {
                "enabled": true,
                "ranks": {
                    "1": 675000000,
                    "2": 687500000,
                    "3": 700000000,
                    "4": 712500000,
                    "5": 725000000,
                    "6": 737500000,
                    "7": 750000000,
                    "8": 762500000,
                    "9": 775000000,
                    "10": 787500000,
                    "11": 800000000,
                    "12": 812500000,
                    "13": 825000000,
                    "14": 837500000,
                    "15": 850000000,
                    "16": 862500000,
                    "17": 875000000,
                    "18": 887500000,
                    "19": 900000000,
                    "20": 912500000,
                    "21": 925000000,
                    "22": 937500000,
                    "23": 950000000,
                    "24": 962500000,
                    "25": 975000000,
                    "26": 987500000,
                    "27": 1000000000,
                    "28": 1012500000,
                    "29": 1025000000,
                    "30": 1037500000,
                    "31": 1050000000,
                    "32": 1062500000,
                    "33": 1075000000,
                    "34": 1087500000,
                    "35": 1100000000,
                    "36": 1112500000,
                    "37": 1125000000,
                    "38": 1137500000,
                    "39": 1150000000,
                    "40": 1162500000,
                    "41": 1175000000,
                    "42": 1187500000,
                    "43": 1200000000,
                    "44": 1212500000,
                    "45": 1225000000,
                    "46": 1237500000,
                    "47": 1250000000,
                    "48": 1262500000,
                    "49": 1275000000,
                    "50": 1287500000,
                    "51": 1300000000,
                    "52": 1312500000,
                    "53": 1325000000
                },
                "secondaryReward": 675000000
            },
            "bip340": true,
            "donations": {
                "Sgymbo4rg9aBeJJ2YmV12xdRY2xo6b94U9": {
                    "percent": 5,
                    "purpose": "development"
                },
                "Sdao2USyAz9B6RBgZeFyNDePuQAxfzZZHE": {
                    "percent": 5,
                    "purpose": "foundation"
                }
            }
        },
        "pool": {
            "dynamicFees": {
                "enabled": true,
                "addonBytes": {
                    "burn": 0,
                    "delegateRegistration": 663703,
                    "delegateResignation": 0,
                    "htlcClaim": 0,
                    "htlcLock": 82,
                    "htlcRefund": 0,
                    "ipfs": 98,
                    "legacyTransfer": 99,
                    "legacyVote": 98,
                    "multiSignature": 16,
                    "secondSignature": 99,
                    "transfer": 85,
                    "vote": 98
                },
                "minFeeBroadcast": 11299,
                "minFeePool": 11299
            },
            "maxTransactionsInPool": 15000,
            "maxTransactionsPerSender": 150,
            "maxTransactionsPerRequest": 40,
            "maxTransactionAge": 2700,
            "maxTransactionBytes": 2000000
        }
    }
}
```

### Retrieve the status

```typescript
const response = await client.api("node").status();

console.log(response.body);
```

```json
{
    "data": {
        "synced": true,
        "now": 2480258,
        "blocksCount": 0,
        "timestamp": 19852580
    }
}
```

### Retrieve the syncing status

```typescript
const response = await client.api("node").syncing();

console.log(response.body);
```

```json
{
    "data": {
        "syncing": false,
        "blocks": 0,
        "height": 2480261,
        "id": "f03b10a97afb7b8e8ca6f29f7ffc578b00e1eb474a14d2fcc567bd344cba8201"
    }
}
```

### Retrieve the fees

```typescript
const response = await client.api("node").fees(30);

console.log(response.body);
```

```json
{
    "meta": {
        "days": 30
    },
    "data": {
        "1": {
            "legacyTransfer": {
                "avg": "15687540",
                "burned": "18933292245",
                "max": "30000000",
                "min": "3099322",
                "sum": "21036991385"
            },
            "secondSignature": {
                "avg": "5000000",
                "burned": "27000000",
                "max": "5000000",
                "min": "5000000",
                "sum": "30000000"
            },
            "delegateRegistration": {
                "avg": "7500000000",
                "burned": "54000000000",
                "max": "7500000000",
                "min": "7500000000",
                "sum": "60000000000"
            },
            "transfer": {
                "avg": "3192918",
                "burned": "298946160247",
                "max": "300000000",
                "min": "1830438",
                "sum": "332162406166"
            },
            "delegateResignation": {
                "avg": "0",
                "burned": "0",
                "max": "0",
                "min": "0",
                "sum": "0"
            }
        },
        "2": {
            "burn": {
                "avg": "0",
                "burned": "0",
                "max": "0",
                "min": "0",
                "sum": "0"
            },
            "vote": {
                "avg": "2360822",
                "burned": "47294575833",
                "max": "90000000",
                "min": "1841737",
                "sum": "52549539121"
            }
        }
    }
}
```

## Peers

Each node is connected to a set of peers, which are Relay or Delegate Nodes as well. The <a href="https://tapi.solar.org/#/Node/get_peers" target="_blank" rel="noopener noreferrer">peers resource</a> provides access to all peers connected to our node.

!!! info

    Peers have made their Public API available for use; however for mission-critical queries and transaction posting you should use a node which is under your control.

### List all peers

```typescript
const response = await client.api("peers").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 2,
        "totalCount": 150,
        "next": "/peers?page=2&limit=100",
        "previous": null,
        "self": "/peers?page=1&limit=100",
        "first": "/peers?page=1&limit=100",
        "last": "/peers?page=2&limit=100"
    },
    "data": [
        {
            "ip": "135.181.76.96",
            "port": 6001,
            "ports": {
                "@solar-network/api": 6003,
                "@solar-network/webhooks": -1
            },
            "version": "4.1.3",
            "height": 2480274,
            "latency": 3,
            "plugins": {
                "@solar-network/api": {
                    "port": 6003,
                    "enabled": true,
                    "estimateTotalCount": false
                },
                "@solar-network/webhooks": {
                    "port": 6004,
                    "enabled": false
                }
            }
        },
        [...]
    ]
}
```

### Retrieve a peer

```typescript
const response = await client.api("peers").get("135.181.76.96");

console.log(response.body);
```

```json
{
    "data": {
        "ip": "135.181.76.96",
        "port": 6001,
        "ports": {
            "@solar-network/api": 6003,
            "@solar-network/webhooks": -1
        },
        "version": "4.1.3",
        "height": 2480280,
        "latency": 7,
        "plugins": {
            "@solar-network/api": {
                "port": 6003,
                "enabled": true,
                "estimateTotalCount": false
            },
            "@solar-network/webhooks": {
                "port": 6004,
                "enabled": false
            }
        }
    }
}
```

## Rounds

This service API grants access to the round resource. This can be used to access all round information for the network.

### List delegates for a round

```typescript
const response = await client.api("rounds").delegates(1000); // round number

console.log(response.body);
```

```json
{
    "data": [
        {
            "publicKey": "020019880bb7726f1cd306ead2783c2ce23598d1e7d12e1ca32cc661cee450de75",
            "votes": "30001385199"
        },
        {
            "publicKey": "02203c49a67519e8a7443e0f7dda64b0f0fe0828983c51a9277d0778051ed0d2c5",
            "votes": "30002418232"
        },
        [...]
    ]
}
```

## Transactions

The heart of any blockchain is formed by its transactions; state-altering payloads signed by a wallet. Most likely you will be querying for transactions most often, using the <a href="https://tapi.solar.org/#/Transactions" target="_blank" rel="noopener noreferrer">transaction resource</a>.

!!! info

    A transaction is the only object which may be posted by a non-delegate. It requires a signature from a wallet containing a sufficient amount of SXP.

### Create a transaction

```typescript
const response = await client.api("transactions").create([...]);

console.log(response.body);
```

```json
{
    "accept": [
        "69cfbf91c88b7f5ea75ee6d8f4d4e4b7889f2524999af5e828d7ac5ae360b0bf",
        "f79b7f640bf1b2142cbe62d5a54a47f0eba6aebe75d2f263d998926ed3be9697"
        ],
    "broadcast": ["69cfbf91c88b7f5ea75ee6d8f4d4e4b7889f2524999af5e828d7ac5ae360b0bf"],
    "excess": [],
    "invalid": [
        "2edf2be796863f5310a9a3c53c5080ac3f21868ebf4ed306a41133e6db92d1f1"
    ]
}
```

### Retrieve a transaction

```typescript
const response = await client.api("transactions").get("f79b7f640bf1b2142cbe62d5a54a47f0eba6aebe75d2f263d998926ed3be9697"); // transaction id

console.log(response.body);
```

```json
{
    "data": {
        "id": "f79b7f640bf1b2142cbe62d5a54a47f0eba6aebe75d2f263d998926ed3be9697",
        "blockHeight": 2480311,
        "blockId": "f9f8f7f4f876731da410db5c4617646240380b39f4c2d020d93d89a3b592c6e0",
        "version": 3,
        "type": 6,
        "typeGroup": 1,
        "amount": "2156188190",
        "fee": "2000000",
        "burnedFee": "1800000",
        "sender": "SVVBgFYCYDk2anBEqoarq4gqrpRpf1oYjn",
        "senderPublicKey": "02211d5f622df160e8462165d2b4992480d7bf6f7ecea40ba3c4c1d4e1b9a001b7",
        "signature": "9557bc67b153efbc6b4993ade677525402a665baf9650ce442ce218e250dafecc31ec91c91a40a70ff8a6bcbdb92b2a1d1f138cc42340999243516033107c604",
        "asset": {
            "transfers": [
                {
                    "amount": "2156188190",
                    "recipientId": "SPBsN8ujPjP2Gge8VfhG6X1uACYzki7ZWD"
                }
            ]
        },
        "confirmations": 11,
        "timestamp": {
            "epoch": 19853000,
            "unix": 1668343400,
            "human": "2022-11-13T12:43:20.000Z"
        },
        "nonce": "4258"
    }
}
```

### List all transactions

```typescript
const response = await client.api("transactions").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 5361,
        "totalCount": 536059,
        "next": "/transactions?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/transactions?transform=true&page=1&limit=100",
        "first": "/transactions?transform=true&page=1&limit=100",
        "last": "/transactions?transform=true&page=5361&limit=100"
    },
    "data": [
        {
            "id": "6b0befaa0844ed2208236819dc987ef52ccb4d890135e3d0af5c701159108389",
            "blockHeight": 2480319,
            "blockId": "6526bfa96fef39ac6961ebf14aec22197d74c8e25d092db5d4b3edf7c4ceb9ab",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "991556570",
            "fee": "2000000",
            "burnedFee": "1800000",
            "sender": "SZzmvXs9jWEBRenPXqDSYMc7VyXSiX42Md",
            "senderPublicKey": "029d4db19e14e07b0ef9c90e51e25ba78bf626aa54cc22a937469e4426ec0ad40c",
            "signature": "a2a6721000cc321c3b8308265461ac94c8a79a3a3b8ee90290c267bb3d839cd46a174c907b43038ded973674efdd2d8f0184026b4298fab57d1571e2ee74077e",
            "asset": {
                "transfers": [
                    {
                        "amount": "991556570",
                        "recipientId": "SSzDcyrMJZAnSRjbGvQ2C1AFFHYfn519Ej"
                    }
                ]
            },
            "confirmations": 7,
            "timestamp": {
                "epoch": 19853064,
                "unix": 1668343464,
                "human": "2022-11-13T12:44:24.000Z"
            },
            "nonce": "3192"
        },
        [...]
    ]
}
```

### List all unconfirmed transactions

```typescript
const response = await client.api("transactions").allUnconfirmed();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/transactions/unconfirmed?transform=true&page=1&limit=100",
        "first": "/transactions/unconfirmed?transform=true&page=1&limit=100",
        "last": "/transactions/unconfirmed?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "0b81d54e71daf12394cce82a1b9bd80cb7935e381e10092df02e72687d3facb5",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "29974365162",
            "fee": "2000000",
            "sender": "SVVBgFYCYDk2anBEqoarq4gqrpRpf1oYjn",
            "senderPublicKey": "02211d5f622df160e8462165d2b4992480d7bf6f7ecea40ba3c4c1d4e1b9a001b7",
            "signature": "dd278816cf7e96d1678cb294ae0d0c48c85c89b8bd90b497e32802455aed80a6e762c6d85a12ac93e15ffb75fc8667a99f516d877e7eb48130ce26b8bca607b5",
            "asset": {
                "transfers": [
                    {
                        "amount": "29974365162",
                        "recipientId": "SPBsN8ujPjP2Gge8VfhG6X1uACYzki7ZWD"
                    }
                ]
            },
            "confirmations": 0,
            "nonce": "4260"
        }
    ]
}
```

### Get unconfirmed transaction

```typescript
const response = await client.api("transactions").getUnconfirmed("0b81d54e71daf12394cce82a1b9bd80cb7935e381e10092df02e72687d3facb5"); // transaction id

console.log(response.body);
```

```json
{
    "data": {
        "headerType": 0,
        "version": 3,
        "network": 63,
        "typeGroup": 1,
        "type": 6,
        "nonce": "4260",
        "senderPublicKey": "02211d5f622df160e8462165d2b4992480d7bf6f7ecea40ba3c4c1d4e1b9a001b7",
        "senderId": "SVVBgFYCYDk2anBEqoarq4gqrpRpf1oYjn",
        "fee": "2000000",
        "asset": {
            "transfers": [
                {
                    "amount": "29974365162",
                    "recipientId": "SPBsN8ujPjP2Gge8VfhG6X1uACYzki7ZWD"
                }
            ]
        },
        "signature": "dd278816cf7e96d1678cb294ae0d0c48c85c89b8bd90b497e32802455aed80a6e762c6d85a12ac93e15ffb75fc8667a99f516d877e7eb48130ce26b8bca607b5",
        "id": "0b81d54e71daf12394cce82a1b9bd80cb7935e381e10092df02e72687d3facb5"
    }
}
```

### Search transactions

```typescript
const response = await client.api("transactions").all({"blockId": "65a8fdece83649c88d7e2232cd196ee2ca549c5f2892e4b227b6d7ded1ba9725"});

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/transactions?blockId=65a8fdece83649c88d7e2232cd196ee2ca549c5f2892e4b227b6d7ded1ba9725&transform=true&page=1&limit=100",
        "first": "/transactions?blockId=65a8fdece83649c88d7e2232cd196ee2ca549c5f2892e4b227b6d7ded1ba9725&transform=true&page=1&limit=100",
        "last": "/transactions?blockId=65a8fdece83649c88d7e2232cd196ee2ca549c5f2892e4b227b6d7ded1ba9725&transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "6e20eeba7681a5c922820e4abe2fbd2d9bed9442b999ff923fd4ae5ba32ee3c0",
            "blockHeight": 2480360,
            "blockId": "65a8fdece83649c88d7e2232cd196ee2ca549c5f2892e4b227b6d7ded1ba9725",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "36774476202",
            "fee": "2000000",
            "burnedFee": "1800000",
            "sender": "SdCJwNHakoE79NjqoBTVi7TZiY8PCZ7cqo",
            "senderPublicKey": "03601938294055b79bb2ba8f95e75646c13533985af95d0d387304508d235a278c",
            "signature": "b2ac3a388410cc0ffa2ffa5660d635d2d97d7b5bf855281dfe0f57a4f6425f3b992fcedb702c8e76a1c4d8894fc133d41e7aea6179599b9a18fff08353fedf6b",
            "asset": {
                "transfers": [
                    {
                        "amount": "36774476202",
                        "recipientId": "ShpGjppgiV83ZrwUZQgx6ZJEq2bEs7yncs"
                    }
                ]
            },
            "confirmations": 15,
            "timestamp": {
                "epoch": 19853392,
                "unix": 1668343792,
                "human": "2022-11-13T12:49:52.000Z"
            },
            "nonce": "444"
        }
    ]
}
```

### List transaction types

```typescript
const response = await client.api("transactions").types();

console.log(response.body);
```

```json
{
    "data": {
        "1": {
            "LegacyTransfer": 0,
            "SecondSignature": 1,
            "DelegateRegistration": 2,
            "Ipfs": 5,
            "Transfer": 6,
            "DelegateResignation": 7
        },
        "2": {
            "Burn": 0,
            "Vote": 2
        }
    }
}
```

## Votes

A <a href="https://tapi.solar.org/#/Votes" target="_blank" rel="noopener noreferrer">vote</a> is a transaction sub-type, where the `asset` field contains a `votes` object and the `transaction.type` is `2` and `transaction.typeGroup` is `2`.

### List all votes

```typescript
const response = await client.api("votes").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 1893,
        "totalCount": 189204,
        "next": "/votes?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/votes?transform=true&page=1&limit=100",
        "first": "/votes?transform=true&page=1&limit=100",
        "last": "/votes?transform=true&page=1893&limit=100"
    },
    "data": [
        {
            "id": "a0709cffb1cc3ddce4bc0f07ecd24ef263af48b999ef6a91c0634ee8eaf82ff9",
            "blockHeight": 2480355,
            "blockId": "4f7fc0d602a7a443884390c8a77a3ef343b1d90cb748e26fb577b780e6d4312b",
            "version": 3,
            "type": 2,
            "typeGroup": 2,
            "fee": "2632667",
            "burnedFee": "2369400",
            "sender": "SZnh2RJBrUSHY1duonnssUyvz27mjesNBA",
            "senderPublicKey": "032621096302e183c58e79e7b300c2b8c5ee0918c350eb1ed72bc4645120facb4e",
            "signature": "7adae78aa71313019eaafd0623928da91c413c2e48429c85cd918f5af2e885b72e1a6c1de329c258f9705f358eb168190c267d77754bef61272d6596cd210288",
            "asset": {
                "votes": {
                    "arbaro": 8,
                    "bfx": 8,
                    "dev51": 8,
                    "goat": 8,
                    "goose": 8,
                    "nybl": 8,
                    "thamar": 8,
                    "wevalidate": 8,
                    "aurelion_sol": 4.5,
                    "finca": 4.5,
                    "fnoufnou": 4.5,
                    "geops": 4.5,
                    "kaos": 4.5,
                    "kippers": 4.5,
                    "sigma": 4.5,
                    "st3v3n": 4.5
                }
            },
            "confirmations": 0,
            "nonce": "3411"
        },
        [...]
    ]
}
```

### Retrieve a vote

```typescript
const response = await client.api("votes").get("a0709cffb1cc3ddce4bc0f07ecd24ef263af48b999ef6a91c0634ee8eaf82ff9"); // transaction id

console.log(response.body);
```

```json
{
    "data": {
        "id": "a0709cffb1cc3ddce4bc0f07ecd24ef263af48b999ef6a91c0634ee8eaf82ff9",
        "blockHeight": 2480355,
        "blockId": "4f7fc0d602a7a443884390c8a77a3ef343b1d90cb748e26fb577b780e6d4312b",
        "version": 3,
        "type": 2,
        "typeGroup": 2,
        "fee": "2632667",
        "burnedFee": "2369400",
        "sender": "SZnh2RJBrUSHY1duonnssUyvz27mjesNBA",
        "senderPublicKey": "032621096302e183c58e79e7b300c2b8c5ee0918c350eb1ed72bc4645120facb4e",
        "signature": "7adae78aa71313019eaafd0623928da91c413c2e48429c85cd918f5af2e885b72e1a6c1de329c258f9705f358eb168190c267d77754bef61272d6596cd210288",
        "asset": {
            "votes": {
                "arbaro": 8,
                "bfx": 8,
                "dev51": 8,
                "goat": 8,
                "goose": 8,
                "nybl": 8,
                "thamar": 8,
                "wevalidate": 8,
                "aurelion_sol": 4.5,
                "finca": 4.5,
                "fnoufnou": 4.5,
                "geops": 4.5,
                "kaos": 4.5,
                "kippers": 4.5,
                "sigma": 4.5,
                "st3v3n": 4.5
            }
        },
        "confirmations": 0,
        "nonce": "3411"
    }
}
```

## Wallets

The <a href="https://tapi.solar.org/#/Wallets/get_wallets" target="_blank" rel="noopener noreferrer">wallet resource</a> provides access to:

* Wallets.
* Incoming and outgoing transactions per wallet.
* Each wallet's votes.

### Retrieve all wallets

```typescript
const response = await client.api("wallets").all();

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 138,
        "totalCount": 13723,
        "next": "/wallets?page=2&limit=100",
        "previous": null,
        "self": "/wallets?page=1&limit=100",
        "first": "/wallets?page=1&limit=100",
        "last": "/wallets?page=138&limit=100"
    },
    "data": [
        {
            "address": "SP77TpbBYC2nCpaCg3u1BBsYU7zqwqzGo7",
            "publicKey": "02699ab620eb6088f9e88d2c1fa1fb0ea8a179c210a46de2314817dd11d3aa16a1",
            "balance": "34109523703593098",
            "nonce": "4843",
            "attributes": {},
            "votingFor": {}
        },
        [...]
    ]
}
```

### Retrieve a wallet

```typescript
const response = await client.api("wallets").get("SaaHfAgt76QLSMy67tornXq7jE5SsTHEok"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "data": {
        "address": "SaaHfAgt76QLSMy67tornXq7jE5SsTHEok",
        "publicKey": "02d57cbaa907441974285e229d2cc191734e03e917921d880da683fe6051b9a58b",
        "balance": "10605726562967",
        "nonce": "41",
        "attributes": {
            "secondPublicKey": "02a19da5df3d54a26aac9c27a8320c6444ce0ea767c4f7813bdae8d5b85d7e96ee"
        },
        "votingFor": {
            "cactus1549": {
                "percent": 22,
                "votes": "2333259843853"
            },
            "nybl": {
                "percent": 19,
                "votes": "2015088046964"
            },
            "fun": {
                "percent": 18,
                "votes": "1909030781334"
            },
            "kimchi": {
                "percent": 18,
                "votes": "1909030781334"
            },
            "leitesv": {
                "percent": 18,
                "votes": "1909030781334"
            },
            "sl33p": {
                "percent": 5,
                "votes": "530286328148"
            }
        }
    }
}
```

### List all transactions of a wallet

```typescript
const response = await client.api("wallets").transactions("SaaHfAgt76QLSMy67tornXq7jE5SsTHEok"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 11,
        "totalCount": 1010,
        "next": "/wallets/SaaHfAgt76QLSMy67tornXq7jE5SsTHEok/transactions?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/wallets/SaaHfAgt76QLSMy67tornXq7jE5SsTHEok/transactions?transform=true&page=1&limit=100",
        "first": "/wallets/SaaHfAgt76QLSMy67tornXq7jE5SsTHEok/transactions?transform=true&page=1&limit=100",
        "last": "/wallets/SaaHfAgt76QLSMy67tornXq7jE5SsTHEok/transactions?transform=true&page=11&limit=100"
    },
    "data": [
        {
            "id": "5b994b62847a54db9878701fae6a63f48c3ac2e7ce0145584a109a6d6ba9a645",
            "blockHeight": 2478311,
            "blockId": "3af9808d7fa2599b86a77134c307afb337e9c781573ed014550a3590576d99ae",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "300000000000",
            "fee": "2500000",
            "burnedFee": "2250000",
            "sender": "SaaHfAgt76QLSMy67tornXq7jE5SsTHEok",
            "senderPublicKey": "02d57cbaa907441974285e229d2cc191734e03e917921d880da683fe6051b9a58b",
            "signature": "ea4928f565bdb832e11fdc0617f67ed6d607b7ea9f58e7cf67ff12335628c8195bf036ddb269a590cd65e1b77554cc8e58830920f8c0e05d5e66769a614e1a80",
            "signSignature": "a501bad74541f3d9f4de7847ed46fdf90b8924266ea58d4c1b662fd0d097da3edb30e17a997c4ceacad3206e0bcc9688fd7bf4501bb8dd010b544591a6289ddd",
            "asset": {
                "transfers": [
                    {
                        "amount": "300000000000",
                        "recipientId": "SXRBrruo4WebaGMRvHQri7mHbeRB6ixaSX"
                    }
                ]
            },
            "confirmations": 2783,
            "timestamp": {
                "epoch": 19836992,
                "unix": 1668327392,
                "human": "2022-11-13T08:16:32.000Z"
            },
            "nonce": "41"
        },
        [...]
    ]
}
```

### List all received transactions of a wallet

```typescript
const response = await client.api("wallets").transactionsReceived("Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 100,
        "pageCount": 4,
        "totalCount": 383,
        "next": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/received?transform=true&page=2&limit=100",
        "previous": null,
        "self": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/received?transform=true&page=1&limit=100",
        "first": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/received?transform=true&page=1&limit=100",
        "last": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/received?transform=true&page=4&limit=100"
    },
    "data": [
        {
            "id": "aa73a070e542a41432b64d4d52195b2ffcfb4fee804e83cefec4806f25919512",
            "blockHeight": 2481089,
            "blockId": "a79c17835923c0c43f0b92a2bffcf3c0264a336cd5e2c75b8135475d3d746b82",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "3215472537",
            "fee": "3000000",
            "burnedFee": "2700000",
            "sender": "SYW2LmsGiBbx7bMMjTovCMyzCHsjoPh4D1",
            "senderPublicKey": "03772f27de174ca9cde5133f52dfdbc3dc1b1322f1318841c78ea581b1c11d1791",
            "signature": "80f0686317c88c9ca2642cdcf89ee62eb2ef6e1e34e9f9bb67172688a00110d4b55168e7b889e270a8e69ad5d90d3ba3120ff36d0beedd3944841cc84fe9bdfe",
            "asset": {
                "transfers": [
                    {
                        "amount": "3215472537",
                        "recipientId": "Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe"
                    }
                ]
            },
            "confirmations": 21,
            "timestamp": {
                "epoch": 19859224,
                "unix": 1668349624,
                "human": "2022-11-13T14:27:04.000Z"
            },
            "nonce": "383"
        },
        [...]
    ]
}
```

### List all sent transactions of a wallet

```typescript
const response = await client.api("wallets").transactionsSent("Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 48,
        "pageCount": 1,
        "totalCount": 48,
        "next": null,
        "previous": null,
        "self": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/sent?transform=true&page=1&limit=100",
        "first": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/sent?transform=true&page=1&limit=100",
        "last": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/transactions/sent?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "866d7dbbf8b90d2fb19d2dd2096c99676cb87a8b39ef305fa50e19fbcdcfaaa6",
            "blockHeight": 2480771,
            "blockId": "5fecddcb42f664afaf3e998d1194811bc0282866fe6c570f59e05f4840c1b0d6",
            "version": 3,
            "type": 6,
            "typeGroup": 1,
            "amount": "17383129",
            "fee": "3000000",
            "burnedFee": "2700000",
            "sender": "Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe",
            "senderPublicKey": "028cb707a488c08d47ecc8a4f6d459abca405d293f922fb05b5504dd050738c0de",
            "signature": "734bd9cac93ae736ab5b82d7e53ae4e895e91b4a327456fd525a7987fd7765ffb449ef523cbc11901b58de65bcf13d21f6f01b16cba2b00f5832ed2e44f26cf5",
            "asset": {
                "transfers": [
                    {
                        "amount": "17383129",
                        "recipientId": "SYW2LmsGiBbx7bMMjTovCMyzCHsjoPh4D1"
                    }
                ]
            },
            "confirmations": 344,
            "timestamp": {
                "epoch": 19856680,
                "unix": 1668347080,
                "human": "2022-11-13T13:44:40.000Z"
            },
            "nonce": "48"
        },
        [...]
    ]
}
```

### List all votes of a wallet

```typescript
const response = await client.api("wallets").votes("Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe"); // username, address and publickey can be used

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/votes?transform=true&page=1&limit=100",
        "first": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/votes?transform=true&page=1&limit=100",
        "last": "/wallets/Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe/votes?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "a6e76f4236973d401e627761ebab09104ee02d2af43abe045ac59a16543a8087",
            "blockHeight": 2445947,
            "blockId": "543bfe21d1441a20ab7ec238441e1f2eb5fbee1c0b2018baaa61647be3883513",
            "version": 3,
            "type": 2,
            "typeGroup": 2,
            "fee": "2673218",
            "burnedFee": "2405896",
            "sender": "Sc6wHgx3VP3GN5gZznJesR8YSBQouhaKMe",
            "senderPublicKey": "028cb707a488c08d47ecc8a4f6d459abca405d293f922fb05b5504dd050738c0de",
            "signature": "fc363c3657aaf0cfebe3827b1f07d7bd0980bac21f7d3d3774579daef19efc57e1b7f0abc3937c403edb8bd2d6765277926b9880acff1009dd48ef053909e85c",
            "asset": {
                "votes": {
                    "runner": 100
                }
            },
            "confirmations": 35172,
            "timestamp": {
                "epoch": 19578048,
                "unix": 1668068448,
                "human": "2022-11-10T08:20:48.000Z"
            },
            "nonce": "2"
        },
        [...]
    ]
}
```

### List all top wallets

```typescript
const response = await client.api("wallets").top({page: 6, limit: 20}); // the query parameter is optional.

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 20,
        "pageCount": 687,
        "totalCount": 13723,
        "next": "/wallets/top?page=7&limit=20",
        "previous": "/wallets/top?page=5&limit=20",
        "self": "/wallets/top?page=6&limit=20",
        "first": "/wallets/top?page=1&limit=20",
        "last": "/wallets/top?page=687&limit=20"
    },
    "data": [
        {
            "address": "SXWGpnrW2hTsQYEUzVzdgNuBvxuM7LkpCj",
            "publicKey": "02ee9dc022f25c2ee4cf2964e70d7eb9a0972ba811e9ba7679fe36be5aaed206ad",
            "balance": "6990964193384",
            "nonce": "2",
            "attributes": {},
            "votingFor": {
                "goose": {
                    "percent": 70,
                    "votes": "4893674935369"
                },
                "kippers": {
                    "percent": 15,
                    "votes": "1048644629008"
                },
                "thamar": {
                    "percent": 15,
                    "votes": "1048644629007"
                }
            }
        },
        [...]
    ]
}
```

### Search all wallets

```typescript
const response = await client.api("wallets").all({"balance": {from: 30000000000000, to: 40000000000000}});

console.log(response.body);
```

```json
{
    "meta": {
        "totalCountIsEstimate": false,
        "count": 5,
        "pageCount": 1,
        "totalCount": 5,
        "next": null,
        "previous": null,
        "self": "/wallets?balance.from=30000000000000&balance.to=40000000000000&page=1&limit=100",
        "first": "/wallets?balance.from=30000000000000&balance.to=40000000000000&page=1&limit=100",
        "last": "/wallets?balance.from=30000000000000&balance.to=40000000000000&page=1&limit=100"
    },
    "data": [
        {
            "address": "SYcyjU1mqCW9Vwag186BGoAUnLxTY3oVKr",
            "publicKey": "03cea2dcf8d43557240bb0ead6629262e3bf58f72615dbadac607e85ad4e45c38b",
            "balance": "35900835000000",
            "nonce": "2785",
            "attributes": {},
            "votingFor": {}
        }
    ]
}
```
