---
title: Complementary Examples
---

# Complementary Examples

## Prerequisites

Before we get started we need to make sure that all of the required dependencies are installed. These dependencies are the Solar Crypto SDK and Solar Client SDK. You can head on over to their documentations to read more about them but for now we are only concerned with installing them to get up and running.

Open your project and execute the following commands to install both SDKs. Make sure that those complete without any errors. If you encounter any errors, please open an issue with as much information as you can provide so that our developers can have a look and get to the bottom of the issue.

```bash
sudo apt update && sudo apt install python3-pip python3-dev python3-venv
cd <PROJECT_DIR>
python3 -m venv .venv
. ./venv/bin/activate
pip3 install wheel
pip3 install git+https://github.com/Solar-network/python-client.git@master#egg=solar-client --upgrade
pip3 install solar-crypto --upgrade
```

## Creating and Broadcasting a Transfer

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.transfer import Transfer

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = Transfer()

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.add_payment(1, 'RECIPIENT_WALLET_ADDRESS_1')
transaction.add_payment(2, 'RECIPIENT_WALLET_ADDRESS_2')
#transaction.set_version(3)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

<x-alert type="info">
The transaction memo (aka VendorField or SmartBridge) is optional and limited to a length of 255 characters. It can be a good idea to add a vendor field to your transactions if you want to be able to easily track them in the future.<br>
Rest of the examples assume V3 transactions as default. You must set the version explicity using `transaction.set_version(int)` otherwise.
</x-alert>

## Creating and Broadcasting a Legacy Transfer

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.legacy_transfer import LegacyTransfer

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = LegacyTransfer(
    recipientId='RECIPIENT_WALLET_ADDRESS',
    amount=200000000,
    memo="Hello World"
)
transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a Second Signature

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.second_signature_registration import SecondSignatureRegistration

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = SecondSignatureRegistration('this is a top secret second passphrase')

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a Delegate Registration

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.delegate_registration import DelegateRegistration

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = DelegateRegistration('johndoe')

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a Delegate Resignation

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.delegate_resignation import DelegateResignation

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = DelegateResignation()

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

<x-alert type="info">
A delegate resignation has to be sent from the delegate wallet itself to verify its identity.
</x-alert>

## Creating and Broadcasting a Vote (Solar Version >= 3.4.0)

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.vote import Vote

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = Vote(
transaction.set_votes({"asterix": 34.9, "obelix": 35.1, "getafix": 30.0}) # must tot up to 100.00
transaction.set_votes(["+asterix", "-obelix", "+getafix"]) # will ignore obelix and distribute the wallet to asterix & getafix 50:50
transaction.set_votes(["-obelix"]) # will ignore obelix and unvote from all
transaction.set_votes({}) #unvote
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a Legacy Vote (Solar Version >= 3.3.0 & < 3.4.0)

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.legacy_vote import LegacyVote

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = LegacyVote()
transaction.set_votes(["-obelix"])  # unvote
transaction.set_votes(["+asterix"]) # vote
transaction.set_votes(["-obelix", "+asterix"]) # switch vote
transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a Multi Signature

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.multi_signature_registration import MultiSignatureRegistration

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = MultiSignatureRegistration()
transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.set_sender_public_key('SENDER_WALLET_PUBLIC_KEY')
transaction.set_min(2)
transaction.set_public_keys([
    'participant_1_pk',
    'participant_2_pk'
])
transaction.add_participant(
    'participant_3_pk'
)
transaction.multi_sign('participant_1_passphrase', 0)
transaction.multi_sign('participant_2_passphrase', 1)
transaction.multi_sign('participant_3_passphrase', 2)

transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a IPFS

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.ipfs import IPFS

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = IPFS('QmYSK2JyM3RyDyB52caZCTKFR3HKniEcMnNJYdk8DQ6KKB')

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a HTLC Lock

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP, HTLC_LOCK_EXPIRATION_TYPE
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.htlc_lock import HtlcLock
from solar_crypto.utils.slot import get_time
from hashlib import sha256

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Secret hash is sha256 of the sha256 hash of the original message
secret = "super secret code that must be unique and entirely random"
secret_code = sha256(secret.encode()).digest()
secret_hash = sha256(secret_code).hexdigest()

# Expiration value must be > lastBlock.data.timestamp + blocktime * activeDelegates
expire_in = 600 # set to expire in 10 min.

# Step 2: Create the transaction
transaction = HtlcLock(
    recipient_id='RECIPIENT_WALLET_ADDRESS',
    amount=200000000,
    secret_hash=secret_hash,
    expiration_type=HTLC_LOCK_EXPIRATION_TYPE.EPOCH_TIMESTAMP.value,
    expiration_value=get_time() + expire_in
)

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

## Creating and Broadcasting a HTLC Claim

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP, HashingType
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.htlc_claim import HtlcClaim
import hashlib

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Unlock secret is the sha256 hash of the original message
secret = "super secret code that must be unique and entirely random"
unlock_secret = hashlib.sha256(secret.encode('utf-8')).hexdigest()

# Step 2: Create the transaction
transaction = HtlcClaim('LOCK_TRANSACTION_ID', unlock_secret, HashingType.SHA256)

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```

<x-alert type="info">
The **unlockSecret** has to be a SHA256 hash of the plain text secret that you shared with the person that is allowed to claim the transaction.
</x-alert>

## Creating and Broadcasting a HTLC Refund

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.constants import TRANSACTION_TYPE_GROUP
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.htlc_refund import HtlcRefund

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://sxp.testnet.sh/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = HtlcRefund(
    lock_transaction_id='LOCK_TRANSACTION_ID'
)

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.sign('this is a top secret passphrase')

# Step 3: Broadcast the transaction
try:
    broadcastResponse = client.transactions.create([transaction.to_dict()])
except SolarHTTPException as exception:
    print(exception.response.json())

# Step 4: Log the response
print(broadcastResponse)
```
