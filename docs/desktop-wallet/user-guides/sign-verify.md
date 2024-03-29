---
title: How to Sign and Verify Messages?
---

# How to Sign and Verify Messages?

The wallet allows you to create and sign a message that other users will be able to verify as authentically yours.

Message signing and verifying is all done under the **Sign** tab of the wallet detail page.

## Signing a message

With a signed message, others can verify that a given message and signature combination originate from you.

![Input your security details and the message to sign, then click Sign](/desktop-wallet/assets/signmessage.png)

![Your signed message will appear under the Sign tab of the wallet detail page](/desktop-wallet/assets/signedmessages.png)

## Verifying a message

To verify a message that was signed by a different wallet, you need the wallet's public key, the original message, and the resulting signature.

!!! success

    The public key of a wallet is much like the address, except it doesn't follow the same format and is not shown by default in the Desktop Wallet. You can view your wallet's public key by clicking the key icon next to your wallet's address in the wallet detail page's header.

The SXP network will only know your public key once you have sent a transaction.

For demonstration purposes, the images below are shown from the perspective of a second wallet, assuming the necessary details to verify the message were provided to the verifying user.

![Enter the message to verify, the public key of the wallet which was used to sign the message and the resulting signature, then click Next](/desktop-wallet/assets/verifymessage.png)
