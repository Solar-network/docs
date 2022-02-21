---
title: Mainnet Procedure
---

## Phase 3 - Processing the Swaps

Phase 3 relates to transactions from the Swap Master Address to the new SXP mainnet address.<br />
<br />
All nodes on mainnet are equipped with a plugin that validates and processes transactions sent by the Swap Master Address.<br />

!!! vendorField on mainnet transaction

    Swaps can only occur from a specific master address. The forging nodes will only process transactions from this wallet if the data in the vendorField matches with the response from the API's.
    Meaning that any other transactions sent from this wallet with a wrong address, wrong transaction ID or no vendorField at all, will be denied by the forging nodes.
    This also means that in case the private keys of this master address are leaked in the public or somehow obtained by a hacker, there is no way to move funds out of this wallet without matching data from SXPSwap.
    Even if it does contain matched data. Duplicate transactions with the same transaction ID are denied by the network.

The plugins on the forging, relay and seed nodes are equiped with plugins that request data from several API's to verify transactions that are sent from the Swap Master Address.<br />
Nodes can choose to use the default remote API or use a local full node to request data from the BSC or ETH chain.<br />

The node validates the following data to either accept or deny the transaction.<br />
1. Transaction ID with a minimum amount of confirmations.<br />
2. Match the new wallet address with the wallet address provided in the contract.<br />
3. Match the amount that is being sent to the new wallet with the amount that was transferred to the contract.<br />
4. Validate if the SXPSwap contract has the right contract ID for SXP.<br />
5. Verify that the transaction hasn't been executed earlier.<br />

All nodes including forging nodes, relays, and seed peers will have to validate this transaction in order to accept the block.<br />
Nodes that have latency issues, bad or manipulated API or wrong data will fork from the network and from the seed peers.