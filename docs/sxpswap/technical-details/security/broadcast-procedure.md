---
title: Broadcast Procedure
---



## Phase 2 - Backend Program Broadcasting Transaction

In the second phase, the backend program listens for new transactions on BEP20/ERC20 SXPSwap contract.<br />
The backend program listens to transactions from a local full node and from trusted remote API's.<br />
<br />
If the transaction is fully confirmed, the backend program will run the following validations checks.<br /><br />

1. Check if the incoming transaction has already been processed on the backend tool and on the SXP blockchain<br />
2. Contract ID of the tokens that have been received on the SXPSwap contract.<br />
3. Amount of tokens that have been transferred.<br />
4. Validation of the new SXP mainnet address.<br />
5. Check validations over 3 different BSC/ETH nodes. <br />
<br />

Once all validations are passed. The backend program will generate a transaction and broadcast it to mainnet to the address that was submitted in the contract.<br />
Within this transaction, the memo will contain additional details regarding the SXPSwap transaction in the following format:<br />

!!! memo on mainnet transaction

    bsc:0x4f7ce4430909fef471f30c4d7c74156bc9df8887c3b0f7d0c50d2085dcada254

The prefix determines where the transaction originated from, either Binance Smart Chain or Ethereum.<br />
Adding this note to mainnet transactions will provide transparency to incoming swaps, but it's also for the forging nodes to run their own validations.<br />


#### Security Notices

The server that hosts the backend program has several security features in case of failures such as server hacks, server reboot, ddos attacks, DC issues or server maintenance.<br />
<br />

Swaps can only occur from a specific master address. The forging nodes will only process transactions from this wallet if the data in the memo matches with the response from the API's.<br />
Meaning that any other transactions sent from this wallet with a wrong address, wrong transaction ID or no memo at all, will be denied by the forging nodes.<br />
This also means that in case the private keys of this master address are leaked in the public or somehow obtained by a hacker, there is no way to move funds out of this wallet without matching data from SXPSwap.<br />
Even if it does contain matched data. Duplicate transactions with the same transaction ID are denied by the network.


