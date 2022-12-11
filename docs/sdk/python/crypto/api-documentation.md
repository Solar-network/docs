---
title: API Documentation
---

# API Documentation

## crypto.configuration.fee

### `get_fee()`

```python
def get_fee(transaction_type, type_group):
```

Get a fee for a given transaction type

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | transaction_type | Yes | Transaction type for which we wish to get a fee |
| int | type_group | Yes | transaction type group (TRANSACTION_TYPE_GROUP(Enum)) |

#### Return value

`<class 'int'>`

### `set_fee()`

```python
def set_fee(transaction_type, type_group, value):
```

Set a fee

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | transaction_type | Yes | Transaction type for which we wish to set a fee |
| int | type_group | Yes | transaction type group (TRANSACTION_TYPE_GROUP(Enum)) |
| int | value | Yes | Fee for a given transaction type |

#### Return value

`<class 'NoneType'>`

## crypto.configuration.network

### `set_network()`

```python
def set_network(network_object):
```

Set what network you want to use in the crypto library

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Network | network_object | Yes | Testnet, Mainnet |

#### Return value

`<class 'NoneType'>`

### `get_network()`

```python
def get_network():
```

Get settings for a selected network, default network is Testnet

#### Return value

`<class 'dict'>`

### `set_custom_network()`

```python
def set_custom_network(epoch, version, wif):
```

Set custom network

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| datetime | epoch | Yes | Network epoch time |
| int | version | Yes | Network version |
| int | wif | Yes | Network WIF |

#### Return value

`<class 'NoneType'>`

### `get_network_version()`

```python
def get_network_version():
```

Get currently set network version

#### Return value

`<class 'Network'>`

## crypto.identity.address

### `address_from_public_key()`

```python
def address_from_public_key(public_key, network_version=None):
```

Get an address from a public key

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | public_key | Yes | Public key |
| int | network_version | No | Version of the network |

#### Return value

`<class 'str'>`

### `address_from_private_key()`

```python
def address_from_private_key(private_key, network_version=None):
```

Get an address from private key

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | private_key | Yes | Private key |
| int | network_version | No | Version of the network |

#### Return value

`<class 'str'>`

### `address_from_passphrase()`

```python
def address_from_passphrase(passphrase, network_version=None):
```

Get an address from passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |
| int | network_version | No | Version of the network |

#### Return value

`<class 'str'>`

### `validate_address()`

```python
def validate_address(address, network_version=None):
```

Validate a given address

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | address | Yes | Address to validate |
| int | network_version | No | Version of the network |

#### Return value

`<class 'bool'>`

## crypto.identity.private_key.PrivateKey

### `__init__()`

```python
def __init__(self, private_key):
```

Create a new PrivateKey instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | private_key | Yes | Hex private key |

#### Return value

`<class 'solar_crypto.identity.private_key.PrivateKey'>`

### `sign()`

```python
def sign(self, message, nonce=None):
```

Sign a message with this private key object

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | message | Yes | Bytes data you want to sign |
| int | nonce | No | Deterministic nonce |

#### Return value

`<class 'str'>`

### `to_hex()`

```python
def to_hex(self):
```

Returns a private key in hex format

#### Return value

`<class 'str'>`

### `from_passphrase()`

```python
def from_passphrase(cls, passphrase):
```

Create PrivateKey object from a given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |

#### Return value

`<class 'PrivateKey'>`

### `from_hex()`

```python
def from_hex(cls, private_key):
```

Create PrivateKey object from a given hex private key

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | private_key | Yes | Private key |

#### Return value

`<class 'PrivateKey'>`

## crypto.identity.public_key.PublicKey

### `to_hex()`

```python
def to_hex(self):
```

Returns a public key in hex format

#### Return value

`<class 'str'>`

### `from_passphrase()`

```python
def from_passphrase(cls, passphrase):
```

Create PublicKey object from a given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |

#### Return value

`<class 'PublicKey'>`

### `from_hex()`

```python
def from_hex(cls, public_key):
```

Create PublicKey object from a given hex private key

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | public_key | Yes | Public key |

#### Return value

`<class 'PublicKey'>`

## crypto.identity.wif

### `wif_from_passphrase()`

```python
def wif_from_passphrase(passphrase, network_wif=None):
```

Get wif from passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |
| int | network_wif | No | Network WIF |

#### Return value

`<class 'str'>`

## crypto.transactions.builder.base.BaseTransactionBuilder

### `to_dict()`

```python
def to_dict(self):
```

Convert the transaction to its dictionary representation.

#### Return value

`<class 'dict'>`

### `to_json()`

```python
def to_json(self):
```

Convert the transaction to its JSON representation

#### Return value

`<class 'dict'>`

### `sign()`

```python
def sign(self, passphrase):
```

Sign the transaction using the given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase associated with the account sending this transaction |

#### Return value

`<class 'NoneType'>`

### `second_sign()`

```python
def second_sign(self, passphrase):
```

Sign the transaction using the given second passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Second passphrase associated with the account sending this transaction |

#### Return value

`<class 'NoneType'>`

### `multi_sign()`

```python
def multi_sign(self, passphrase, index):
```

Sign the transaction using the given passphrase. A signature will be generated inside the signatures array of the transaction at the specified index.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase associated with the account sending this transaction |
| int | index | Yes | Index of the signature for the signatures array. Starts at 0. |

#### Return value

`<class 'NoneType'>`

### `verify()`

```python
def verify(self):
```

Verify the transaction validity

#### Return value

`<class 'bool'>`

### `verify_multisig()`

```python
def verify_multisig(self):
```

Verify the multisignature transaction validity

#### Return value

`<class 'bool'>`

### `set_nonce()`

```python
def set_nonce(self, nonce):
```

Set the nonce of the transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | nonce | Yes | Sequential Nonce of the transaction |

#### Return value

`<class 'NoneType'>`

### `set_fee()`

```python
def set_fee(self, fee: int):
```

Set a fee

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | fee | Yes | Transaction fee |

#### Return value

`<class 'NoneType'>`

### `set_amount()`

```python
def set_amount(self, amount):
```

Set the amount of the transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | amount | Yes | Amount of the transaction |

#### Return value

`<class 'NoneType'>`

### `set_sender_public_key()`

```python
def set_sender_public_key(self, public_key):
```

Set the Public Key of the transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | public_key | Yes | Public key of the transaction |

#### Return value

`<class 'NoneType'>`

### `set_expiration()`

```python
def set_expiration(self, expiration):
```

Set the block-height or time when the transaction should expire.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int, HTLC_LOCK_EXPIRATION_TYPE | expiration | Yes | Expiration of the transaction |

#### Return value

`<class 'NoneType'>`

### `set_type_group()`

```python
def set_type_group(self, type_group):
```

Set the type group of the transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int, TRANSACTION_TYPE_GROUP | type_group | Yes | Type group of the transaction |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.burn.Burn

### `__init__()`

```python
def __init__(self, amount):
```

Create a new Burn transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | amount | Yes | Burn amount |

#### Return value

`<class 'solar_crypto.transactions.builder.burn.Burn'>`

## crypto.transactions.builder.delegate_registration.DelegateRegistration

### `__init__()`

```python
def __init__(self, username, fee=None):
```

Create a new DelegateRegistration transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | username | Yes | Delegate username |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.delegate_registration.DelegateRegistration'>`

### `sign()`

```python
def sign(self, passphrase):
```

Sign the transaction using the given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.delegate_resignation.DelegateResignation

### `__init__()`

```python
def __init__(self, fee=None):
```

Create a new DelegateResignation transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.delegate_resignation.DelegateResignation'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

## crypto.transactions.builder.htlc_claim.HtlcClaim

### `__init__()`

```python
def __init__(self, lock_transaction_id, unlock_secret, hash_type: HashingType = HashingType.SHA256, fee=None):
```

Create a new HtlcClaim transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | lock_transaction_id | Yes | HTLC Lock transaction id |
| str | unlock_secret | Yes | Transaction secret hash |
| HashingType | hash_type | No | Hashing algorithm |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.htlc_claim.HtlcClaim'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

## crypto.transactions.builder.htlc_lock.HtlcLock

### `__init__()`

```python
def __init__(self, recipient_id, amount, secret_hash, expiration_type, expiration_value, memo=None, fee=None):
```

Create a new HtlcLock transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | recipient_id | Yes | Transaction recipient |
| int | amount | Yes | Transaction amount |
| str | secret_hash | Yes | Transaction secret hash. The same hash must be used in the corresponding "claim" transaction |
| int | expiration_type | Yes | Transaction expiration type. Either block height or network epoch timestamp based |
| int | expiration_value | Yes | Transaction expiration value. The block-height or time when the transaction should expire |
| str | memo | Yes | Transaction memo|
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.htlc_lock.HtlcLock'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

## crypto.transactions.builder.htlc_refund.HtlcRefund

### `__init__()`

```python
def __init__(self, lock_transaction_id, fee=None):
```

Create a new HtlcRefund transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | lock_transaction_id | Yes | HTLC Lock transaction id |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.htlc_refund.HtlcRefund'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

## crypto.transactions.builder.ipfs.IPFS

### `__init__()`

```python
def __init__(self, ipfs_cid=None, fee=None):
```

Create a new IPFS transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | ipfs_cid | No | Content identifier |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.ipfs.IPFS'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

### `set_ipfs_cid()`

```python
set_ipfs_cid(self, cid: str):
```

Set the content identifier of the Transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | cid | Yes | Content identifier |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.transfer.Transfer

### `__init__()`

```python
def __init__(self, memo=None, fee=None):
```

Create a new Transfer transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | memo | No | Transaction memo |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.transfer.Transfer'>`

### `get_type_group()`

```python
def get_type_group(self):
```

Get the type group of the Transaction.

#### Return value

`<class 'int'>`

### `add_transfer()`

```python
def add_transfer(self, amount, recipient_id):
```

Add a transfer to the Transfers array of a Transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | amount | Yes | Transaction amount |
| string | recipient_id | Yes | Transaction recipient |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.multi_signature_registration.MultiSignatureRegistration

### `__init__()`

```python
def __init__(self, fee=None):
```

Create a new MultiSignatureRegistration transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.multi_signature_registration.MultiSignatureRegistration'>`

### `set_min()`

```python
def set_min(self, minimum_participants):
```

Set the minimum amount of participants of a Transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | minimum_participants | Yes | Transaction minimum participants |

#### Return value

`<class 'NoneType'>`

### `set_public_keys()`

```python
def set_public_keys(self, public_keys):
```

Set the public keys of a Transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| list | public_keys | Yes | Transaction public keys participants |

#### Return value

`<class 'NoneType'>`

### `add_participant()`

```python
def add_participant(self, public_key):
```

Add a participant with his public key to the Transaction.

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | public_key | Yes | Participant public key |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.second_signature_registration.SecondSignatureRegistration

### `__init__()`

```python
def __init__(self, second_passphrase, fee=None):
```

Create a new SecondSignatureRegistration transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | second_passphrase | No | Second passphrase |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.second_signature_registration.SecondSignatureRegistration'>`

## crypto.transactions.builder.legacy_transfer.LegacyTransfer

### `__init__()`

```python
def __init__(self, recipientId, amount, memo=None, fee=None):
```

Create a new Legacy Transfer transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | recipientId | Yes | Recipient identifier |
| int | amount | Yes | Transaction amount |
| str | memo | No | Transaction memo |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.legacy_transfer.LegacyTransfer'>`

## crypto.transactions.builder.legacy_vote.LegacyVote

### `__init__()`

```python
def __init__(self, vote=None, fee=None):
```

Create a new Legacy Vote transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | vote | No | Delegate address to vote for |
| int | fee | No | Transaction fee |

#### Return value

`<class 'solar_crypto.transactions.builder.legacy_vote.LegacyVote'>`

### `set_votes()`

```python
def set_votes(self, votes: typing.List[str]):
```

Set legacy votes/cancel vote

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| List[str] | votes | Yes | list of votes |

#### Return value

`<class 'NoneType'>`

### `sign()`

```python
def sign(self, passphrase):
```

Sign the transaction using the given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | passphrase | Yes | Passphrase |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.builder.vote.Vote

### `__init__()`

```python
def __init__(self):
```

Create a new Vote transaction instance

#### Return value

`<class 'solar_crypto.transactions.builder.vote.Vote'>`

### `set_votes()`

```python
def set_votes(self, votes: typing.Union[typing.List[str], typing.Dict[str, typing.Union[int, float, Decimal]]] = dict):
```

Set votes

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| votes | votes | Yes | list of votes |

#### Return value

`<class 'NoneType'>`

## crypto.transactions.deserialisers.base.BaseDeserialiser

### `__init__()`

```python
def __init__(self, serialised, asset_offset, transaction):
```

Create a new deserialiser instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| ??? | serialised | Yes | Serialised |
| ??? | asset_offset | Yes | Offset |
| ??? | transaction | Yes | Transaction |

#### Return value

`<class 'solar_crypto.transactions.deserialisers.base.BaseDeserialiser'>`

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of transaction data

#### Return value

`NotImplementedError`

## crypto.transactions.deserialisers.burn.BurnDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "burn" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.delegate_registration.DelegateRegistrationDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "delegate registration" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.delegate_resignation.DelegateResignationDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "delegate resignation" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.htlc_claim.HtlcClaimDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "HTLC Claim" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.htlc_lock.HtlcLockDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "HTLC Lock" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.htlc_refund.HtlcRefundDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "HTLC refund" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.ipfs.IPFSDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "IPFS" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.transfer.TransferDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "transfer" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.multi_signature_registration.MultiSignatureRegistrationDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "multi signature registration" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.second_signature_registration.SecondSignatureRegistrationDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "second signature" data.

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.legacy_transfer.LegacyTransferDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "legacy transfer" data

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.legacy_vote.LegacyVoteDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "legacy vote" data.

#### Return value

`<class 'dict'>`

## crypto.transactions.deserialisers.vote.VoteDeserialiser

### `deserialise()`

```python
def deserialise(self):
```

Handle the deserialisation of "vote" data.

#### Return value

`<class 'dict'>`

## crypto.transactions.serialisers.base.BaseSerialiser

### `__init__()`

```python
def __init__(self, transaction, byte_data=bytes()):
```

Create a new serialiser instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| Transaction | transaction | Yes | Transaction |
| bytes | byte_data | No | ... |

#### Return value

`<class 'solar_crypto.transactions.serialisers.base.BaseSerialiser'>`

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of transaction data

#### Return value

`NotImplementedError`

## crypto.transactions.serialisers.burn.BurnSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "burn" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.delegate_registration.DelegateRegistrationSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "delegate registration" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.delegate_resignationDelegateResignationSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "delegate resignation" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.htlc_claim.HtlcClaimSerialiser

### `serialise()`

```python
def serialise(self):
```

Handle the serialisation of "HTLC Claim" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.htlc_lock.HtlcLockSerialiser

### `serialise()`

```python
def serialise(self):
```

Handle the serialisation of "HTLC Lock" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.htlc_refund.HtlcRefundSerialiser

### `serialise()`

```python
def serialise(self):
```

Handle the serialisation of "HTLC Refund" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.ipfs.IPFSSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "ipfs" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.transfer.TransferSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "transfer" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.multi_signature_registration.MultiSignatureSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "multi signature" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.second_signature_registration.SecondSignatureRegistrationSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "second signature" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.legacy_transfer.LegacyTransferSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "legacy transfer" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.legacy_vote.LegacyVoteSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "legacy vote" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.serialisers.vote.VoteSerialiser

### `serialise`

```python
def serialise(self):
```

Handle the serialisation of "vote" data

#### Return value

`<class 'bytes'>`

## crypto.transactions.deserialiser.Deserialiser

### `__init__`

```python
def __init__(self, serialised):
```

Create a new deserialiser instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | serialised | Yes | Serialised |

#### Return value

`<class 'solar_crypto.transactions.deserialiser.Deserialiser'>`

### `deserialise`

```python
def deserialise(self):
```

Perform deserialisation

#### Return value

`<class 'solar_crypto.transactions.transaction.Transaction'>`

### `_handle_transaction_type`

```python
def _handle_transaction_type(self, asset_offset, transaction):
```

Handle the deserialisation of transaction data

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| int | asset_offset | Yes | Offset |
| transaction.Transaction | transaction | Yes | Transaction |

#### Return value

`<class 'solar_crypto.transactions.transaction.Transaction'>`

## crypto.transactions.serialiser.Serialiser

### `__init__`

```python
def __init__(self, transaction):
```

Create a new serialiser instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| transaction.Transaction | transaction | Yes | Transaction |

#### Return value

`<class 'solar_crypto.transactions.serialiser.Serialiser'>`

### `serialise`

```python
def serialise(self, skip_signature=True, skip_second_signature=True, skip_multi_signature=True, raw=False):
```

Perform serialisation

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bool | skip_signature | No | Should we skip the serialisation of the signature |
| bool | skip_second_signature | No | Should we skip the serialisation of the second signature |
| bool | skip_multi_signature | No | Should we skip the serialisation of multiple signatures |
| bool | raw | No | Raw output |

#### Return value

`<class 'str'>`

### `_handle_transaction_type`

```python
def _handle_transaction_type(self, bytes_data):
```

Handle the serialisation of transaction data

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | bytes_data | Yes | ... |

#### Return value

`<class 'bytes'>`

### `_handle_signature`

```python
def _handle_signature(self, bytes_data, skip_signature, skip_second_signature, skip_multi_signature):
```

Handle the serialisation of "signatures" data

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | bytes_data | Yes | ... |
| bool | skip_signature | Yes | Should we skip the serialisation of the signature |
| bool | skip_second_signature | Yes | Should we skip the serialisation of the second signature |
| bool | skip_multi_signature | Yes | Should we skip the serialisation of multiple signatures |

#### Return value

`<class 'bytes'>`

## crypto.transactions.transaction.Transaction

### `__init__`

```python
def __init__(self, *args, **kwargs):
```

Create a new transaction instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| any | \*args | No | ... |
| any | \*\*kwargs | No | ... |

#### Return value

`<class 'solar_crypto.transactions.transaction.Transaction'>`

### `get_id`

```python
def get_id(self):
```

Convert the byte representation to a unique identifier

#### Return value

`<class 'str'>`

### `to_dict`

```python
def to_dict(self):
```

Convert the transaction to its dictionary representation.

#### Return value

`<class 'dict'>`

### `to_json`

```python
def to_json(self):
```

Convert the transaction to its JSON representation

#### Return value

`<class 'dict'>`

### `to_bytes`

```python
def to_bytes(self, skip_signature=True, skip_second_signature=True, skip_multi_signature=True):
```

Convert the transaction to its byte representation

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bool | skip_signature | Yes | Skip first signature |
| bool | skip_second_signature | Yes | Skip second signature |
| bool | skip_multi_signature | Yes | Skip multi signatures |

#### Return value

`<class 'bytes'>`

### `parse_signatures`

```python
def parse_signatures(self, serialised, start_offset):
```

Parse the signature, second signature and multi signatures

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | serialised | Yes | Serialised |
| int | start_offset | Yes | Offset |

#### Return value

`<class 'NoneType'>`

### `serialise`

```python
def serialise(self, skip_signature=True, skip_second_signature=True, skip_multi_signature=True):
```

Perform serialisation

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bool | skip_signature | Yes | Skip first signature |
| bool | skip_second_signature | Yes | Skip second signature |
| bool | skip_multi_signature | Yes | Skip multi signatures |

#### Return value

`<class 'str'>`

### `deserialise`

```python
def deserialise(self, serialised):
```

Perform deserialisation

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | serialised | Yes | Serialised |

#### Return value

`<class 'str'>`

### `verify`

```python
def verify(self):
```

Verify the transaction. Method will raise an exception if invalid, if it's valid it will returns True

#### Return value

`<class 'bool'>`

### `verify_secondsig`

```python
def verify_secondsig(self, secondPublicKey):
```

Verify the second signature. Method will raise an exception if invalid, if it's valid it will returns True

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | secondPublicKey | Yes | Second public key |

#### Return value

`<class 'bool'>`

### `verify_signatures`

```python
def verify_signatures(self, multi_signature_asset):
```

Verify the multisignatures transaction. Method will raise an exception if invalid, it will returns True

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| dict | multi_signature_asset | Yes | Multisignature asset |

#### Return value

`<class 'bool'>`

### `_handle_transaction_type`

```python
def _handle_transaction_type(self, bytes_data):
```

Handle each transaction type differently

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | bytes_data | Yes | Input the bytes data to which you want to append new bytes |

#### Return value

`<class 'bytes'>`

### `_handle_signature`

```python
def _handle_signature(self, bytes_data, skip_signature, skip_second_signature, skip_multi_signature):
```

Handle the serialisation of "signatures" data

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | bytes_data | Yes | Input the bytes data to which you want to append new bytes from signature |
| bool | skip_signature | Yes | Skip first signature |
| bool | skip_second_signature | Yes | Skip second signature |
| bool | skip_multi_signature | Yes | Skip multi signatures |

#### Return value

`<class 'bytes'>`

## crypto.utils.crypto

### `sign_schnorr`

```python
def sign_schnorr(msg: bytes, private_key: PrivateKey, nonce: int = None) -> str:
```

Signs a message using Schnorr BIP340 and returns a hex string of the signature

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | msg | Yes | Message to be signed |
| PrivateKey | private_key | Yes | Private key object |
| int | nonce | No | Deterministic nonce |


#### Return value

`<class 'str'>`

### `sign_schnorr_legacy`

```python
def sign_schnorr_legacy(msg: bytes, private_key: PrivateKey) -> str:
```

Signs a message using Legacy Schnorr and returns a hex string of the signature

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | msg | Yes | Message to be signed |
| PrivateKey | private_key | Yes | Private key object |
| int | nonce | No | Deterministic nonce |


#### Return value

`<class 'str'>`

### `verify_schnorr`

```python
def verify_schnorr(msg: bytes, public_key: str, signature: str) -> bool:
```

Verifies a message using Schnorr BIP340

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | msg | Yes | Message to be verified |
| str | public_key | Yes | Public key |
| str | signature | Yes | Signature |


#### Return value

`<class 'bool'>`

### `verify_schnorr_legacy`

```python
def verify_schnorr_legacy(msg: bytes, public_key: str, signature: str) -> bool:
```

Verifies a message using Legacy Schnorr

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| bytes | msg | Yes | Message to be verified |
| str | public_key | Yes | Public key |
| str | signature | Yes | Signature |


#### Return value

`<class 'bool'>`

## crypto.utils.message.Message

### `__init__`

```python
def __init__(self, **kwargs):
```

Create a new message instance

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| any | \*\*kwargs | No | ... |


#### Return value

`<class 'solar_crypto.utils.message.Message'>`

### `sign`

```python
def sign(cls, message, passphrase):
```

Sign a message using the given passphrase

#### Parameters

| Type | Name | Required | Description |
| :--- | :--- | :--- | :--- |
| str | message | Yes | Message |
| str | passphrase | Yes | Passphrase |

#### Return value

`<class 'solar_crypto.utils.message.Message'>`

### `verify`

```python
def verify(self):
```

Verify the message contents

#### Return value

`<class 'bool'>`

### `to_dict`

```python
def to_dict(self):
```

Convert the message to its dictionary representation

#### Return value

`<class 'dict'>`

### `to_json`

```python
def to_json(self):
```

Convert the message to its JSON representation

#### Return value

`<class 'dict'>`

## crypto.utils.slot

### `get_time`

```python
def get_time():
```

Get the time diff between now and network start

#### Return value

`<class 'int'>`

### `get_epoch`

```python
def get_epoch():
```

Get the network start epoch

#### Return value

`<class 'datetime'>`
