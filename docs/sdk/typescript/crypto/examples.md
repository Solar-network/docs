
# Examples

## Initialisation

```typescript
import { Identities } from "@solar-network/crypto";

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
import { Transactions, Managers, Utils } from "@solar-network/crypto";

const transaction = Transactions.BuilderFactory.transfer()
        .nonce(senderNonce.toFixed())
        .fee("30000000")
        .addTransfer("Address of Recipient 1", "100000000")
        .addTransfer("Address of Recipient 2", "100000000")
        .memo("Hello World") // Memo is optional
        .sign("this is a top secret passphrase");

```

### Serialise

> Serialisation of a transaction object ensures it is compact and properly formatted to be incorporated in the SXP blockchain. If you are using the crypto SDK in combination with the public API SDK, you should not need to serialise manually.

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";

const transaction = Transactions.BuilderFactory.transfer()
    .nonce(senderNonce.toFixed())
    .memo("This is an example memo")
    .addTransfer("Address of Recipient Wallet 1", "100000000")
    .addTransfer("Address of Recipient Wallet 2", "100000000")
    .addTransfer("Address of Recipient Wallet 3", "100000000")
    .sign("this is a top secret passphrase")
    .build();

const serialised = Transactions.Serialiser.serialise(transaction).toString("hex");

>>> string
```

### Deserialise

> A serialised transaction may be deserialised for inspection purposes. The public API does not return serialised transactions, so you should only need to deserialise in exceptional circumstances.

```typescript
import { Transactions, Managers, Utils } from "@solar-network/crypto";
const deserialised = Transactions.Deserialiser.deserialise(serialised);

>>> ITransaction
```

## Message

The crypto SDK not only supports transactions but can also work with other arbitrary data (expressed as strings).

### Sign

> Signing a string works much like signing a transaction: in most implementations, the message is hashed, and the resulting hash is signed using the `private key` or `passphrase`.

```typescript
import { Crypto, Identities } from "@solar-network/crypto";

const keys = Identities.Keys.fromPassphrase("This is a secret passphrase");

const message = "Arbitrary entry of data";
const hash = Crypto.HashAlgorithms.sha256(message);
const signature = Crypto.Hash.signSchnorrBip340(hash, keys);

const signed = {
  message,
  hash,
  signature
};

>>> IMessage
```

### Verify

> A message's signature can easily be verified by hash, without the private key that signed the message, by using the `verify` method.

```typescript
import { Crypto, Identities } from "@solar-network/crypto";

const publicKey = Identities.PublicKey.fromPassphrase("This is a secret passphrase");

const isVerified = Crypto.Hash.verifySchnorrBip340(
    signed.hash,
    signed.signature,
    publicKey
  );

>>> boolean
```

## Identities

> The identities class allows for the creation and inspection of keyPairs from `passphrases`. Here you find vital functions when creating transactions and managing wallets.

### Derive the address from a passphrase

```typescript
import { Identities } from "@solar-network/crypto";
Identities.Address.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Derive the address from a public key

```typescript
import { Identities } from "@solar-network/crypto";
Identities.Address.fromPublicKey(
  "validPublicKey"
);

>>> string
```

### Derive the address from a wif

```typescript
import { Identities } from "@solar-network/crypto";
Identities.Address.fromWIF(
  "validWif"
);

>>> string
```

### Validate an address

```typescript
import { Identities } from "@solar-network/crypto";
Identities.Address.validate("validAddress");

>>> boolean
```

## PrivateKey

> As the name implies, privateKeys and passphrases are to remain private. Never store these unencrypted and minimise access to these secrets

### Derive the privateKey from a passphrase

```typescript
import { Identities } from "@solar-network/crypto";
Identities.PrivateKey.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Derive the private key from a WIF

```typescript
import { Identities } from "@solar-network/crypto";
Identities.PrivateKey.fromWIF(
  "validWif"
);

>>> string
```

## PublicKey

> Public Keys may be freely shared, and are included in transaction objects to validate the authenticity.

### Derive the publicKey from a passphrase

```typescript
import { Identities } from "@solar-network/crypto";
Identities.PublicKey.fromPassphrase("this is a top secret passphrase");

>>> string
```

### Validate a publicKey

```typescript
import { Identities } from "@solar-network/crypto";
Identities.PublicKey.verify(
  "validPublicKey"
);

>>> boolean
```

## WIF

> The WIF should remain secret, just like your `passphrase` and `private key`.

### Derive the WIF from a passphrase

```typescript
import { Identities } from "@solar-network/crypto";
Identities.WIF.fromPassphrase("this is a top secret passphrase");

>>> string
```
