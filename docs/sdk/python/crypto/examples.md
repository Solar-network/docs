---
title: Examples
---

# Examples

## Initialisation

```python
from solar_crypto.transactions.builder.transfer import Transfer
```

The transaction object used for this section:

```python
tx = {
    'amount': int,
    'asset': dict,
    'fee': int,
    'id': str,
    'network': int,
    'recipientId': str,
    'secondSignature': str,
    'senderPublicKey': str,
    'signature': str,
    'signatures': list,
    'signSignature': str,
    'nonce': int,
    'type': int,
    'typeGroup': int,
    'memo': str,
    'version': int,
    'lockTransactionId': str,
    'lockSecret': str,
    'expiration': int,
}

```

## Transactions

A transaction is an object specifying the transfer of funds from the sender's wallet to the recipient's. Each transaction must be signed by the sender's private key to prove authenticity and origin. After broadcasting through the [client SDK](https://github.com/Solar-network/python-client/blob/master/README.md), a transaction is permanently incorporated in the blockchain by a Delegate Node.

### Sign

The crypto SDK can sign a transaction using your private key or passphrase (from which the private key is generated). Ensure you are familiar with [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) before using the crypto SDKs.

For serialising and deserialising, we must require the Transaction model:

```python
from solar_crypto.transactions.transaction import Transaction

# Serialising
transaction = Transaction(**tx)
transaction.serialise()

# Deserialising
transaction = Transaction()
transaction.deserialise(**tx['serialised'])
```

Using the Transaction builder class.

```python
transaction = Transfer(recipientId=str, amount=int)
transaction.sign('seedPass')
```

### Serialise

> Serialisation of a transaction object ensures it is compact and properly formatted to be incorporated in the SXP blockchain. If you are using the crypto SDK in combination with the public API SDK, you should not need to serialise manually.

```python
from solar_crypto.transactions.serialiser import Serialiser

serialised_transaction = Serialiser(tx).serialise()

>>> <class 'str'>
```

### Deserialise

> A serialised transaction may be deserialised for inspection purposes. The public API does not return serialised transactions, so you should only need to deserialise in exceptional circumstances.

```python
from solar_crypto.transactions.deserialiser import Deserialiser

transaction_data = Deserialiser(serialised_data).deserialise()

>>> <class 'solar_crypto.transactions.transaction.Transaction'>
```

## Message

The crypto SDK not only supports transactions but can also work with other arbitrary data (expressed as strings).

### Sign

> Signing a string works much like signing a transaction: in most implementations, the message is hashed, and the resulting hash is signed using the `private key` or `passphrase`.

```python
from solar_crypto.utils.message import Message

message = Message.sign(string, 'validSeedPass')

>>> <class 'solar_crypto.utils.message.Message'>
```

### Verify

> A message's signature can easily be verified by hash, without the private key that signed the message, by using the `verify` method.

```python
from solar_crypto.utils.message import Message

message = Message(
    message=str,
    signature=str,
    publicKey=str
)

message.verify()

>>> <class 'bool'>
```

## Identities

> The identities class allows for the creation and inspection of keyPairs from `passphrases`. Here you find vital functions when creating transactions and managing wallets.

### Derive the address from a passphrase

```python
from solar_crypto.identity.address import address_from_passphrase

address_from_passphrase('validSeedPass')

>>> <class 'str'>
```

### Derive the address from a public key

```python
from solar_crypto.identity.address import address_from_public_key

address_from_public_key('validPublicKey')

>>> <class 'str'>
```

### Derive the address from a private key

```python
from solar_crypto.identity.address import address_from_private_key

address_from_private_key('validPrivateKey')

>>> <class 'str'>
```

### Validate an address

```python
from solar_crypto.identity.address import validate_address

validate_address('validAddress')

>>> <class 'bool'>
```

## Private Key

> As the name implies, private keys and passphrases are to remain private. Never store these unencrypted and minimise access to these secrets

### Derive the private key from a passphrase

```python
from solar_crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_passphrase('validSeedPass').to_hex()

>>> <class 'str'>
```

### Derive the private key instance object from a hexadecimal encoded string

```python
from solar_crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_hex(str)

>>> <class 'solar_crypto.identity.private_key.PrivateKey'>
```

### Derive the private key from a wif

```python
This function has not been implemented in this client library.
```

## Public Key

> Public Keys may be freely shared, and are included in transaction objects to validate the authenticity.

### Derive the public key from a passphrase

```python
from solar_crypto.identity.public_key import PublicKey

public_key = PublicKey.from_passphrase('this is a top secret passphrase')

>>> <class 'str'>
```

### Derive the public key instance object from a hexadecimal encoded string

```python
from solar_crypto.identity.public_key import PublicKey

public_key = PublicKey.from_hex(str)

>>> <class 'solar_crypto.identity.public_key.PublicKey'>
```

### Validate a public key

```python
This function has not been implemented in this client library.
```

## WIF

> The WIF should remain secret, just like your `passphrase` and `private key`.

### Derive the wif from a passphrase

```python
from solar_crypto.identity.wif import wif_from_passphrase

wif = wif_from_passphrase('validSeedPass')

>>> <class 'str'>
```
