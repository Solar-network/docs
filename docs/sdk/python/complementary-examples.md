---
title: Complementary Examples
---

# Complementary Examples

## Prerequisites

Before we get started we need to make sure that all of the required dependencies are installed. These dependencies are the Solar Crypto SDK and Solar Client SDK. You can head on over to their documentations to read more about them but for now we are only concerned with installing them to get up and running.

Open your project and execute the following commands to install both SDKs. Make sure that those complete without any errors. If you encounter any errors, please open an issue with as much information as you can provide so that our developers can have a look and get to the bottom of the issue.

<!--email_off-->
```bash
sudo apt update && sudo apt install python3-pip python3-dev python3-venv
cd <PROJECT_DIR>
python3 -m venv .venv
. ./venv/bin/activate
pip3 install wheel
pip3 install git+https://github.com/Solar-network/python-client.git@master#egg=solar-client --upgrade
pip3 install solar-crypto --upgrade
```
<!--/email_off-->

## Creating and broadcasting a transfer transaction

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
client = SolarClient('https://tapi.solar.org/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = Transfer()

transaction.set_type_group(TRANSACTION_TYPE_GROUP.CORE)
transaction.set_nonce(nonce)
transaction.add_transfer(1, 'RECIPIENT_WALLET_ADDRESS_1')
transaction.add_transfer(2, 'RECIPIENT_WALLET_ADDRESS_2')
transaction.set_memo("Hello World")
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

!!! info

    The transaction memo is optional and limited to a length of 255 characters. It can be a good idea to add memo to your transactions if you want to be able to easily track them in the future.

    Rest of the examples assume V3 transactions as default. You must set the version explicitly using `transaction.set_version(int)` otherwise.

## Creating and broadcasting a legacy transfer transaction

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
client = SolarClient('https://tapi.solar.org/api')

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

## Creating and broadcasting a second signature transaction

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
client = SolarClient('https://tapi.solar.org/api')

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

## Creating and broadcasting a delegate registration transaction

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
client = SolarClient('https://tapi.solar.org/api')

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

## Creating and broadcasting a delegate resignation transaction

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
client = SolarClient('https://tapi.solar.org/api')

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

!!! info

    A delegate resignation has to be sent from the delegate wallet itself to verify its identity.

## Creating and broadcasting a vote (Solar version >= 4.0.0)

```python
from solar_client import SolarClient
from solar_client.exceptions import SolarHTTPException
from solar_crypto.configuration.network import set_network
from solar_crypto.networks.testnet import Testnet
from solar_crypto.transactions.builder.vote import Vote

# Set your network
set_network(Testnet)

# Configure our API client
client = SolarClient('https://tapi.solar.org/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = Vote()
transaction.set_votes({"asterix": 34.9, "obelix": 35.1, "getafix": 30.0}) # must tot up to 100.00
transaction.set_votes(["+asterix", "-obelix", "+getafix"]) # will ignore obelix and distribute the wallet to asterix & getafix 50:50
transaction.set_votes(["-obelix"]) # will ignore obelix and cancel vote
transaction.set_votes({}) #cancel vote
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

## Creating and broadcasting a legacy vote (Solar version >= 3.3.0 & < 4.0.0)

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
client = SolarClient('https://tapi.solar.org/api')

# Step 1: Retrieve the incremental nonce of the sender wallet
senderWallet = client.wallets.get('SENDER_WALLET_ADDRESS')
nonce = int(senderWallet['data']['nonce']) + 1

# Step 2: Create the transaction
transaction = LegacyVote()
transaction.set_votes(["-obelix"])  # cancel vote
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
``

## Creating and broadcasting an IPFS transaction

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
client = SolarClient('https://tapi.solar.org/api')

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
