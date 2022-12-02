---
title: Contract Procedure
---



## Phase 1 - Sending tokens to SXPSwap Contract (BSC/ETH)

In order to facilitate a successful migration, the Swipe (SXP) tokens on BEP20/ERC20 are meant to enter a contract and never leave the contract ever again.<br />
This is facilitated by a contract on BEP20 and ERC20. 

The process consists on 2 main functions.<br />
1. The first function "approve", which exists on the Swipe (SXP) token contract, this serves for the purpose of approving the SXPSwap contract to move the Swipe tokens over the new SXPSwap Contract.<br />
2. The second function "transferTokenToContract", this serves for the purpose of sending the tokens that were previously approved to SXPSwap.<br />

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

#### New wallet address validation

There are 4 validation controls for the SXP mainnet address that check for a 34 character address with the S prefix.<br />
1. Validation on the frontend for Metamask users that are using the official SXPSwap tool.<br />
2. Validation on the smart contract to only allow addresses with a certain prefix. <br />
3. Validation on the backend program that sends the mainnet SXP to the new address.<br />
4. Validation by the forging nodes that accept or deny the transaction created by the backend tool.<br />

<span style="color:red">
Interacting with the contract directly and entering a wrong address by accident or on purpose will result in loss of funds.<br />
There is no way to recover the tokens from a contract and sending new SXP tokens on mainnet is impossible without a valid transaction on the contract side.
</span>

#### Notes

Other tokens can be sent to the SXPSwap contract. <br />
These tokens can not be recovered and will not be accepted by the backend program that broadcasts the swap to the forging delegates.<br />
Due to the validation by the backend program and the validation from the forging delegates, trying to send "fake" SXP tokens with a correct SXP mainnet address will have no impact on the swap procedure.<br />

!!! danger annotate "Disclaimer! Read carefully!"

    Below links will direct you to the contracts on Binance Smart Chain and Ethereum.
    
    Warning! Do no interact with the contract directly unless you know what you are doing.
    Interacting with the contract directly or sending your tokens to the contract without attaching a correct mainnet address will result in losing your SXP tokens.

    ### Mainnet

    1. [BEP20 Token Contract](https://bscscan.com/address/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A#code)
    2. [ERC20 Token Contract](https://etherscan.io/address/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9#code)
    3. [BEP20 Swap Contract](https://bscscan.com/address/0x44cf30ea4e58818bfae4b8499be409cd4fdd5a20#code)
    4. [ERC20 Swap Contract](https://etherscan.io/address/0x71f7505a78fd1e044ebf38ab6876700a907fc53a#code)

    Additionally, exchanges are also able to use the Metamask version of the swap.
    For testnet, this is available under https://swap.testnet.sh
    For mainnet under https://swap.solar.org 
    Contact us if you wish to receive SXP testnet tokens on BSC Testnet or Ethereum Kovan.


