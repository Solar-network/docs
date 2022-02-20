---
title: Security
---

# Introduction

The SwipeSwap tool is an entirely (arguable) decentralized module to facilitate the migration from BEP20/ERC20 to mainnet SXP.<br />
SwipeSwap focuses on several security features that are important to facilitate a migration on protocol level.


## Phase 1 - Sending tokens to SwipeSwap Contract (BSC/ETH)

In order to facilitate a successful migration, the Swipe (SXP) tokens on BEP20/ERC20 are meant to enter a contract and never leave the contract ever again.<br />
This is facilitated by a contract on BEP20 and ERC20. 

The process consists on 2 main functions.<br />
1. The first function "approve", which exists on the Swipe (SXP) token contract, this serves for the purpose of approving the SwipeSwap contract to move the Swipe tokens over the new SwipeSwap Contract.<br />
2. The second function "transferTokenToContract", this serves for the purpose of sending the tokens that were previously approved to SwipeSwap.<br />

Functions on the new contract.<br />
The function "transferTokenToContract" is only accepted if the following parameters are included.<br />
<br />
These parameters are:<br />

1. Address of Swipe token.<br />
2. Amount of tokens to be transferred.<br />
3. A valid SXP mainnet address to be entered in string format.<br />
<br />
<span style="color:red">If these parameters are missing, the transaction will fail.</span><br />

### Validation

#### New Wallet Address Validation

There are 3 validation controls for the SXP mainnet address that check for a 34 character address with the S prefix.<br />
1. Validation on the frontend for Metamask users that are using the official SwipeSwap tool.<br />
2. Validation on the backend program that sends the mainnet SXP to the new address.<br />
3. Validation by the forging nodes that accept or deny the transaction created by the backend tool.<br />

<span style="color:red">
There is no validation on contract level. This means that anyone interacting with the contract directly and entering a wrong address by accident will lose access to their SXP tokens on BEP20/ERC20 and SXP mainnet.<br />
There is no way to recover these tokens.
</span>

#### Notes

Other tokens can be sent to the SwipeSwap contract. <br />
These tokens can not be recovered and will not be accepted by the backend program that broadcasts the swap to the forging delegates.<br />
Due to the validation by the backend program and the validation from the forging delegates, trying to send "fake" SXP tokens with a correct SXP mainnet address will have no impact on the swap procedure.<br />

!!! danger annotate "Disclaimer! Read carefully!"

    Below links will direct you to the contracts on Binance Smart Chain and Ethereum mainnet.
    
    Warning! Do no interact with the contract directly unless you know what you are doing.
    Interacting with the contract directly or sending your tokens to the contract without attaching a mainnet address will result in losing your SXP tokens.

    1. [BEP20 Contract](https://bscscan.com/address/0x1f3049333439d4c24d2b0c0498abec168969f4ae#code)
    2. [ERC20 Contract](https://etherscan.io/address/0xe7fb9df8a342218cbed5ea08fe626955b847860a#code)

## Phase 2 - Backend Program Broadcasting Transaction

In the second phase, the backend program listens for new transactions on BEP20/ERC20 SwipeSwap contract.<br />
The backend program listens to transactions from a local full node and from trusted remote API's.<br />
<br />
If the transaction is fully confirmed, the backend program will run the following validations checks.<br /><br />

1. Check if the incoming transaction has already been processed on the backend tool and on the SXP blockchain<br />
2. Contract ID of the tokens that have been received on the SwipeSwap contract.<br />
3. Amount of tokens that have been transferred.<br />
4. Validation of the new SXP mainnet address.<br />
5. Check validations over 3 different BSC/ETH nodes. <br />
<br />

Once all validations are passed. The backend program will generate a transaction and broadcast it to mainnet to the address that was submitted in the contract.<br />
Within this transaction, the vendorField will contain additional details regarding the SwipeSwap transaction in the following format:<br />

!!! vendorField on mainnet transaction

    bsc:0x4f7ce4430909fef471f30c4d7c74156bc9df8887c3b0f7d0c50d2085dcada254

The prefix determines where the transaction originated from, either Binance Smart Chain or Ethereum.<br />
Adding this note to mainnet transactions will provide transparency to incoming swaps, but it's also for the forging nodes to run their own validations.<br />


#### Security Notices

The server that hosts the backend program has several security features in case of failures such as server hacks, server reboot, ddos attacks, DC issues or server maintenance.<br />
<br />

Swaps can only occur from a specific master address. The forging nodes will only process transactions from this wallet if the data in the vendorField matches with the response from the API's.<br />
Meaning that any other transactions sent from this wallet with a wrong address, wrong transaction ID or no vendorField at all, will be denied by the forging nodes.<br />
This also means that in case the private keys of this master address are leaked in the public or somehow obtained by a hacker, there is no way to move funds out of this wallet without matching data from SwipeSwap.<br />
Duplicated transactions are denied by the network, even if new transactions contains data that are valid on the SwipeSwap contract.<br />


