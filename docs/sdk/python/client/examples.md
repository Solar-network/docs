---
title: Examples
---

# Examples

## Initialization

```python
from client import SolarClient

client = SolarClient('https://node.ip.address:port/api')
```

## Blocks

This service API grants access to the <a href="https://api.solar.org/#/Blocks" target="_blank" rel="noopener noreferrer">blocks resource</a>. A block is a signed set of transactions created by a delegate and permanently committed to the SXP blockchain.

> It is not possible to `POST` a block through the public API. Relay Nodes accept only blocks posted by a delegate at the correct time through the internal API.

### List all blocks

```python
blocks = client.blocks.all()

# With parameters
blocks = client.blocks.all(page=5, limit=10, {"orderBy": "height"})

# Available extra_parameters :
# orderBy, ...

print(blocks)

>>> {'meta': {'count': 10, ... }}
```

### Retrieve a block

```python
block = client.blocks.get('validBlockId')

print(block)

>>> {'data': {'id': 'validBlockId' ... }}
```

### List all transactions of a block

```python
block_transactions = client.blocks.transactions('validBlockId')

# With parameters
block_transactions = client.blocks.transactions('validBlockId', page=5, limit=10)

print(block_transactions)

>>> {'meta': {'count': 10, ... }}
```

### Search all blocks

```python
searched_blocks = client.blocks.search({"generatorPublicKey": "validPublicKey"})

# With parameters
searched_blocks = client.blocks.search({"generatorPublicKey": "validPublicKey"}, page=5, limit=10)

# Available keys :
# generatorPublicKey, ...

print(searched_blocks)

>>> {'meta': {'count': 100, ... }}
```

## Delegates

The client SDK can be used to query the <a href="https://api.solar.org/#/Delegates" target="_blank" rel="noopener noreferrer">delegate resource</a>.

A delegate is a regular wallet that has broadcast a registration transaction, acquired a sufficient number of votes, and has a Relay Node configured to forge new blocks through a `forger` module. At any time only 51 delegates are active. They are cost-efficient miners running the SXP network.

> Voters are wallets which have broadcast a vote transaction on a delegate. A vote remains active until an un-vote transaction is sent (it does not have to be recast unless a wallet wishes to change from delegate). Voting for a delegate does not give the delegate access to the wallet nor does it lock the coins in it.

### List all delegates

```python
delegates = client.delegates.all()

# With parameters
delegates = client.delegates.all(page=5, limit=20, {"orderBy": "production")

# Available extra_parameters :
# orderBy, ...

print(delegates)

>>> {'meta': {'count': 20, ... }}
```

### Retrieve a delegate

```python
delegate = client.delegates.get("delegateName")

print(delegate)

>>> {'data': {'username': 'delegateName', ... }}
```

### Search delegates

```python
searched_delegates = client.delegates.search("delegateName")

# With parameters
searched_delegates = client.delegates.search("delegateName", page=1, limit=5)

print(searched_delegates)

>>> {'meta': {'count': 1, ... }}
```

### List all blocks of a delegate

```python
delegate_blocks = client.delegates.blocks("delegateName")

# With parameters
delegate_blocks = client.delegates.blocks("delegateName", page=1, limit=20)

print(delegate_blocks)

>>> {'meta': {'count': 20, ... }}
```

### List all voters of a delegate

```python
delegate_voters = client.delegates.voters("delegateName")

# With parameters
delegate_voters = client.delegates.voters("delegateName", page=1, limit=10)

print(delegate_voters)

>>> {'meta': {'count': 10, ... }}
```

## Node

The SXP network consists of different anonymous nodes (servers), maintaining the public ledger, validating transactions and blocks and providing APIs. The <a href="https://api.solar.org/#/Node" target="_blank" rel="noopener noreferrer">node resource</a> allows for querying the health and configurations of the node used by the instantiated client.

### Retrieve the configuration

```python
configuration = client.node.configuration()

print(configuration)

>>> {'data': {'nethash': '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988', ... }}
```

### Retrieve the status

```python
status = client.node.status()

print(status)

>>> {'data': {'synced': True, 'now': 6897158, 'blocksCount': -1}}
```

### Retrieve the syncing status

```python
syncing_status = client.node.syncing()

print(syncing_status)

>>> {'data': {'syncing': False, 'blocks': -1, 'height': 6897160, 'id': '12905037940821862953'}}
```

### Retrieve the node fees

```python
fees = client.node.fees()

print(fees)

>>> {"meta":{"days":7, ...}}
```

## Peers

Each node is connected to a set of peers, which are Relay or Delegate Nodes as well. The <a href="https://api.solar.org/#/Node/get_peers" target="_blank" rel="noopener noreferrer">peers resource</a> provides access to all peers connected to our node.

> Peers have made their Public API available for use; however for mission-critical queries and transaction posting you should use a node which is under your control. We provide a guide to setting up a Relay Node [here](/core/installation/intro).

### List all peers

```python
peers = client.peers.all()

# With parameters
peers = client.peers.all(os="", status="", port=6002, version="", orderBy="latency", page=1, limit=10)

print(peers)

>>> {'meta': {'count': 10, ... }}
```

### Retrieve a peer

```python
peer = client.peers.get("peerIpAddress")

print(peer)

>>> {'data': {'count': 20, ... }} # Need to changes
```

## Transactions

The heart of any blockchain is formed by its transactions; state-altering payloads signed by a wallet. Most likely you will be querying for transactions most often, using the <a href="https://api.solar.org/#/Transactions" target="_blank" rel="noopener noreferrer">transaction resource</a>.

> A transaction is the only object which may be posted by a non-delegate. It requires a signature from a wallet containing a sufficient amount of SXP.

### Create a transaction

```python
transaction = client.transactions.create([signed_transaction])

print(transaction)

>>> <class 'dict'> # Need to update
```

### Retrieve a transaction

```python
transaction = client.transactions.get("validTransactionId")

print(transaction)

>>> <class 'dict'> # Need to update
```

### List all transactions

```python
transactions = client.transactions.all()

# With parameters
transactions = client.transactions.all(page=1, limit=10, {"orderBy": "amount"})

# Available extra_parameters :
# orderBy, ...

>>> {'meta': {'count': 10, ... }}
```

### List all unconfirmed transactions

```python
unconfirmed_transactions = client.transactions.all_unconfirmed()

# With parameters
unconfirmed_transactions = client.transactions.all_unconfirmed(page=1, limit=10, {"orderBy": "amount"})

# Available extra_parameters :
# orderBy, ...

print(unconfirmed_transactions)

>>> {'meta': {'count': 10, ... }}
```

### Get unconfirmed transaction

```python
unconfirmed_transaction = client.transactions.get_unconfirmed("validTransactionId")

print(unconfirmed_transaction)

>>> <class 'dict'> # Need to update
```

### Search transactions

```python
transactions = client.transactions.search({"senderId": "validPublicKey"})
transactions = client.transactions.search({"senderId": "validPublicKey"}, page=1, limit=10)

# Available keys :
# senderId, ...

print(transactions)

>>> {'meta': {'count': 10, ... }}
```

### List transaction types

```python
types = client.transactions.types()

print(types)

>>> {"data":{...}}
```

### List transaction fees (non-dynamic)

```python
fees = client.transactions.fees()

>>> {"data":{...}}
```

## Votes

A <a href="https://api.solar.org/#/Votes" target="_blank" rel="noopener noreferrer">vote</a> is a transaction sub-type, where the `asset` field contains a `votes` object and the `transaction.type` is `3`.

### List all votes

```python
votes = client.votes.all()

# With parameters
votes = client.votes.all(page=1, limit=10)

print(votes)

>>> {'meta': {'count': 10, ... }}
```

### Retrieve a vote

```python
vote = client.votes.get('validVoteId')

print(vote)

>>> {'data': {...}}
```

## Wallets

The <a href="https://api.solar.org/#/Wallets" target="_blank" rel="noopener noreferrer">wallet resource</a> provides access to:

* Wallets.
* Incoming and outgoing transactions per wallet.
* Each wallet's votes.

### Retrieve all wallets

```python
wallets = client.wallets.all()

# With parameters
wallets = client.wallets.all(page=1, limit=10)

print(wallets)

>>> {'meta': {'count': 10, ... }}
```

### Retrieve a wallet

```python
wallet = client.wallets.get('validWalletId')

print(wallet)

>>> {'data': {'id': 'validWalletId' ... }}
```

### List all transactions of a wallet

```python
wallet_transactions = client.wallets.transactions('validWalletId')
wallet_transactions = client.wallets.transactions('validWalletId', page=1, limit=10, {"orderBy": "amount"})

# Available extra_parameters :
# orderBy, ...

print(wallet_transactions)

>>> {'meta': {'count': 10, ... }}
```

### List all received transactions of a wallet

```python
received_transactions = client.wallets.transactions_received('validWalletId')

# With parameters
received_transactions = client.wallets.transactions_received('validWalletId', page=1, limit=10, {"orderBy": "amount"})

# Available extra_parameters :
# orderBy, ...

print(received_transactions)

>>> {'meta': {'count': 10, ... }}
```

### List all sent transactions of a wallet

```python
sent_transactions = client.wallets.transactions_sent('validWalletId')

# With parameters
sent_transactions = client.wallets.transactions_sent('validWalletId', page=1, limit=10, {"orderBy": "amount"})

# Available extra_parameters :
# orderBy, ...

print(sent_transactions)

>>> {'meta': {'count': 10, ... }}
```

### List all votes of a wallet

```python
wallet_votes = client.wallets.votes('validWalletId')

# With parameters
wallet_votes = client.wallets.votes('validWalletId', page=1, limit=10)

print(wallet_votes)

>>> {'meta': {'count': 10, ... }}
```

### List all top wallets

```python
top_wallets = client.wallets.top()

# With parameters
top_wallets = client.wallets.top(page=1, limit=10)

print(top_wallets)

>>> {'meta': {'count': 10, ... }}
```

### Search all wallets

```python
wallets = client.wallets.search({"publicKey": "validPublicKey"})

# With parameters
wallets = client.wallets.search({"publicKey": "validPublicKey"}, page=1, limit=10)

# Available keys :
# publicKey, ...

print(wallets)

>>> {'meta': {'count': 10, ... }}
```
