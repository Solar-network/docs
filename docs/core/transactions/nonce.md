---
title: Understanding the Nonce
---

# Understanding the Transaction Nonce

Wallets utilise a sequential nonce to protect against <a href="https://wikipedia.org/wiki/Double-spending" target="_blank" rel="noopener noreferrer">double-spending</a>, long-range attacks, key-leakage as a result of signature reuse, and <a href="https://wikipedia.org/wiki/Side-channel_attack" target="_blank" rel="noopener noreferrer">side-channel attacks</a> associated with random nonces. This wallet nonce increments with each outgoing transaction, ensuring every transaction and its associated signature are always unique.

<div class="admonition abstract">
    <p class="admonition-title">Quick Facts</p>
    <p>
      <ul>
        <li>A wallet's first transaction <b>must</b> have a nonce of <b>1</b></li>
        <li>The nonce <b>must</b> increment for every new transaction</li>
        <li>The nonce must <b>not</b> be reused</li>
        <li>
          A nonce must <b>not</b> be skipped
            <ul><li><i>a transaction with a nonce of <u>5</u> originating from a wallet with a nonce of <u>4</u> will be rejected</i></li></ul>
        </li>
      </ul>
    </p>
</div>

## _"How do I find a wallet's nonce?"_

You can find a wallet's current nonce by utilising the Public API's <a href="https://api.solar.org/#/Wallets/get_wallets__identifier_" target="_blank" rel="noopener noreferrer">wallet</a> endpoint. This endpoint returns the details of a given wallet, including its nonce.

```javascript
{
    "data": {
        "address": "D8rr7B1d6TL6pf14LgMz4sKp1VBMs6YUYD",
        "publicKey": "03df6cd794a7d404db4f1b25816d8976d0e72c5177d17ac9b19a92703b62cdbbbc",
        "nonce": "123",  // <- The wallet's nonce value
        "balance": "7919999400",
        "attributes": {
            ...
            ...
            ...
        },
        "lockedBalance": "0",
        "isDelegate": false,
        "isResigned": false
    }
}
```

## _"How do I determine the nonce of a new transaction?"_

When creating a new transaction, find the wallet's current nonce and increment it by **1**.

<div class="admonition abstract">
    <p class="admonition-title">Quick Facts</p>
    <p>
      <ul>
        <li>If the wallet has a nonce of <i>'123'</i>, the next transaction should have a nonce of <i>'124'</i></li>
        <li>A wallet's updated nonce value will only be reflected via API <i>after</i> a transaction has been forged</li>
      </ul>
    </p>
</div>

## _"Can I send multiple transactions?"_

You should track the wallet's nonce locally if you wish to send multiple transactions in a short period.

For example, let's say you have a wallet with the nonce value of '123' and want to send three new transactions for inclusion in the next block. These transactions will require the nonce values '124', '125' and '126' and should be set respectively during each transaction's creation. After the block is forged, the API will report the wallet's current nonce as '126'.
