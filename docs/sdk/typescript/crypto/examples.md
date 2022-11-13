
# Examples

## Initialisation

```typescript
const { Identities } = require("@solar-network/crypto");

// Throughout this document, the keys object used is:
const keys = Identities.Keys.fromPassphrase("this is a top secret passphrase");

// Throughout this document, the recipientId variable used is:
const recipientId = Identities.Address.fromPassphrase("this is a top secret passphrase");

// Throughout this document, the senderPublicKey variable used is:
const senderPublicKey = Identities.PublicKey.fromPassphrase("this is a top secret passphrase");
```

## Transactions

A transaction is an object specifying the transfer of funds from the sender's wallet to the recipient's. Each transaction must be signed by the sender's private key to prove authenticity and origin. After broadcasting through the [client SDK](/sdk/typescript/client/api-documentation), a transaction is permanently incorporated in the blockchain by a Delegate Node.

### Sign

The crypto SDK can sign a transaction using your private key or passphrase (from which the private key is generated). Ensure you are familiar with [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) before using the crypto SDKs.

```typescript
const { Transactions } = require("@solar-network/crypto");

const transaction = {
  type: 0,
  amount: 1000,
  fee: 2000,
  recipientId,
  timestamp: 121212,
  asset: {},
  senderPublicKey
};

Transactions.Signer.sign(transaction, keys);

>>> string
```

### Serialise

> Serialisation of a transaction object ensures it is compact and properly formatted to be incorporated in the SXP blockchain. If you are using the crypto SDK in combination with the public API SDK, you should not need to serialise manually.

```typescript
const { Transactions } = require("@solar-network/crypto");

const transaction = Transactions.BuilderFactory.transfer()
    .nonce(senderNonce.toFixed())
    .memo("This is an example memo")
    .addTransfer("Address of Recipient Wallet 1", 1 * 1e8)
    .addTransfer("Address of Recipient Wallet 2", 1 * 1e8)
    .addTransfer("Address of Recipient Wallet 3", 1 * 1e8)
    .sign("this is a top secret passphrase");

const serialised = Transactions.Serialiser.serialise(transaction).toString("hex");

>>> string
```

### Deserialise

> A serialised transaction may be deserialised for inspection purposes. The public API does not return serialised transactions, so you should only need to deserialise in exceptional circumstances.

```typescript
const { Transactions } = require("@solar-network/crypto");
const deserialised = Transactions.deserialiser.deserialise(serialised);

>>> ITransaction
```

## Message

The crypto SDK not only supports transactions but can also work with other arbitrary data (expressed as strings).

### Sign

> Signing a string works much like signing a transaction: in most implementations, the message is hashed, and the resulting hash is signed using the `private key` or `passphrase`.

#### ECDSA

```typescript
const { Crypto } = require("@solar-network/crypto");

const message = "Arbitrary entry of data";
const hash = Crypto.HashAlgorithms.sha256(message);
const signature = Crypto.Hash.signECDSA(hash, keys);

const signed = {
  message,
  hash,
  signature
};

>>> IMessage
```

#### Schnorr

```typescript
const { Crypto } = require("@solar-network/crypto");

const message = "Arbitrary entry of data";
const hash = Crypto.HashAlgorithms.sha256(message);
const signature = Crypto.Hash.signSchnorr(hash, keys);

const signed = {
  message,
  hash,
  signature
};

>>> IMessage
```

### Verify

> A message's signature can easily be verified by hash, without the private key that signed the message, by using the `verify` method.

#### ECDSA

```typescript
Crypto.Hash.verifyECDSA(
  signed.hash,
  signed.signature,
  "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b"
);

>>> boolean
```

#### Schnorr

```typescript
Crypto.Hash.verifySchnorr(
  signed.hash,
  signed.signature,
  "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b"
);

>>> boolean
```

## Identities

> The identities class allows for the creation and inspection of keyPairs from `passphrases`. Here you find vital functions when creating transactions and managing wallets.

### Derive the Address from a Passphrase

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.Address.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Derive the Address from a Public Key

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.Address.fromPublicKey(
  "validPublicKey"
);

>>> string
```

### Derive the Address from a Private Key

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.Address.fromPrivateKey(
  "validPrivateKey"
);

>>> string
```

### Derive the Address from a WIF

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.Address.fromWIF(
  "validWif"
);

>>> string
```

### Validate an Address

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.Address.validate("validAddress");

>>> boolean
```

## Private Key

> As the name implies, private keys and passphrases are to remain private. Never store these unencrypted and minimise access to these secrets

### Derive the Private Key from a Passphrase

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.PrivateKey.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Derive the Private Key Instance Object from a Hexadecimal Encoded String

```typescript
This function has not been implemented in this client library.
```

### Derive the Private Key from a WIF

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.PrivateKey.fromWIF(
  "validWif"
);

>>> string
```

## Public Key

> Public Keys may be freely shared, and are included in transaction objects to validate the authenticity.

### Derive the Public Key from a Passphrase

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.PublicKey.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Derive the Public Key Instance Object from a Hexadecimal Encoded String

```typescript
This function has not been implemented in this client library.
```

### Validate a Public Key

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.PublicKey.validate(
  "validPublicKey"
);

>>> boolean
```

## WIF

> The WIF should remain secret, just like your `passphrase` and `private key`.

### Derive the WIF from a Passphrase

```typescript
const { Identities } = require("@solar-network/crypto");
Identities.WIF.fromPassphrase("this is a top secret passphrase");

>>> string
```
