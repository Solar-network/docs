---
title: Testing - Transactions
---

# Transaction Testing

Transactions are an integral component of the Solar Core Framework and requires thorough testing of all transaction types to ensure that:

- **Transactions are sent successfully**
- **The correct detail of each transaction is reported within the Explorer.**
- **Balances are updated correctly in the Explorer.**
- **Alternatively, you can check the API to check that details of the transactions are correct. You can find an example of a Send transaction [here](https://texplorer.solar.org/transactions/a5174ebf8a7f5e7ad65449c531363de4066eea1dcde8c2e73f7a9093d4a8ab4b)**

## Prerequisites

Before testing transactions, you will be required to download a Core 3.0 compatible Desktop Wallet which can be found [here](/docs/core/testing/intro#desktop-wallet)

Guides for sending all transactions within the Desktop Wallet can be found [here](/docs/desktop-wallet/intro#transactions)

> ℹ️ **INFO** - Using a JSON Viewer browser extension such as [this](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) makes viewing API data in a browser much easier to read.

As you progress through this document, you are encouraged to test scenarios that you think of that we may have not detailed.

## Second Signature Registration Transaction

This transaction type enables a user to add an extra layer of security to their address by creating a second passphrase, using mnemonic code for generating deterministic keys via BIP-39 to produce an additional mnemonic. Once a second signature has been registered to a wallet, the owner of the wallet will then be required to input their primary and secondary passphrase when sending a transaction to the network.

- Before sending a Second Signature transaction, check the balances of the sender via the explorer or API
- Using the desktop wallet, send a Second Signature transaction.
- Once forged, check the balances of the sender and ensure that they are now updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct.
- Attempt to send another transaction and ensure that you are required to sign the transaction with a second signature.

## Delegate Registration

A user or organization can register their address to become a delegate and secure the network. Upon accumulating sufficient vote weight, the delegate will begin forging transactions and receiving block rewards. The delegate assigns a custom name to their address to differentiate it from other delegates.

- Before sending a Delegate Registration transaction, note the balances of the sender via the explorer or API
- Using the desktop wallet, send a Delegate Registration transaction.
- Once forged, check the balances of the sender and ensure that they are now updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct.
- Check that you can now search for your delegate by name in the Explorer.

## Vote Transactions

A key feature of the SXP DPoS model is that each address can vote for one delegate of their choosing to secure the network. A vote and unvote transaction type is therefore necessary to enable this functionality. Once an address votes for a delegate, funds can enter and leave the address as needed, and vote weight adjusts automatically. Voting does not send funds to the delegate’s SXP address in question - it only assigns vote weight

Holders of SXP vote through their wallets for delegates who secure the network, insert blocks into the ledger, and create new SXP. The top 53 vote earners are named elected forging delegates. Number of delegates is related to DPOS mechanism configuration.

- Before sending a vote transaction note the balances of the sender via the explorer or API.
- Select a delegate and note the amount of tSXP voting for them and the amount of wallets voting for them.
- Using the Desktop Wallet, send a Vote transaction to vote for your selected delegate.
- Once forged, check the balances of the sender and view the delegate you are voting for to ensure that the details are updated correctly.
- Search for the selected delegate and check that their amount of tSXP voting for them and the amount of wallets voting for them have been updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct.

> ℹ️ **INFO** - To vote for a new delegate when already voting, follow the same steps as outlined above and the user's vote will be updated.

### Cancel Vote

- Repeat the 'Vote' process but send a 'Cancel Vote' transaction instead. The user no longer be voting for a delegate.

## IPFS Transaction

This transaction type utilizes a special data field similar to the Memo to store Interplanetary File System data on the blockchain. This provides an easy way to timestamp and optionally encrypt and verify files. This implementation of the IPFS transaction type won’t allow storing data on the blockchain - for that, special IPFS nodes are needed.

- Before sending a transaction, note the balances of the sender and recipient via the explorer or API.
- Using the Desktop Wallet, store an IPFS hash on the blockchain with an IPFS Transaction.
- Once forged, check the balances of the sender and recipient and ensure that they are now updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct
- Attempt to store the same IPFS hash on the blockchain with the same wallet. This should fail.

## Transfer Transaction

A transfer allows one or multiple payments to be combined and broadcast to the network as a single transaction. This benefits the end user and delegates by lowering transaction fees per payment and reducing congestion. Solar Core allows up to 256 payments to be combined within a single transaction.

All Solar transactions contain a special data field of 255 bytes called the Memo (formerly known as the vendorfield), allowing raw data, code or plain text to be stored on the blockchain. The Memo is public and immutable.

- Before sending a transaction, note the balances of the sender and recipients via the explorer or API
- Using the desktop wallet, send a multipayment transaction to X amounts of recipients.
- Once forged, check the balances of the sender and recipients and ensure that they are now updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct.
- Repeat this process several times with and without utilizing the memo field.

## Delegate Resignation Transaction

A 'Delegate Resignation' transaction allows a delegate to resign temporarily or permanently. While resigned, their ability to receive votes is blocked and, if ranked in the top 53 Delegates, are removed from their forging position immediately.

A 'Permanent Resignation' is for delegates who wish to permanently retire their position as a delegate on the Solar Network. Once resigned permanently, a delegate cannot reinstate their candidacy, and their username will no longer be registrable.

A 'Temporary Resignation' is for delegates who wish to halt their delegacy for a short time without negatively impacting the network (e.g., missing blocks) and can be for a variety of reasons, from temporary node maintenance to personal/private matters. While resigned temporarily, the delegate must wait for at least 106 blocks (two rounds) before 'Revoking' their resignation.

> ℹ️ Only temporary resignations may be revoked.

- Before sending a Delegate Resignation transaction, check the balances of the sender via the explorer or API
- Using the desktop wallet, send a Delegate Resignation transaction.
- Once forged, check the balances of the sender and ensure that they are now updated correctly.
- Search for the Transaction ID via Explorer or API and ensure that all transaction details are displayed correctly.
- Search for the Block ID and ensure all details are correct.
- Check the wallet of your resigned delegate ensure that the 'resigned' flag is set to true.

| Resignation Type | Value | Description                                                                                                                                                 |
| ---------------- | :---: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temporary        |   0   | Resign only for a short time.<br/>Delegate will be temporarily blocked from receiving votes or forging.<br/>_(the default when no resign type is declared)_ |
| Permanent        |   1   | Irreversible. Delegate will no longer be allowed to receive votes or forge.                                                                                 |
| Revoke           |   2   | Reverses a temporary resignation.                                                                                                                           |

## Advanced Users

Advanced Users can follow the documentation provided [here](/docs/core/transactions/types/overview) on each transaction type to attempt send malformed data using tools outside of the Desktop Wallet and core-tx-tester.
