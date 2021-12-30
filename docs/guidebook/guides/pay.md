# Pay

This is the reference implementation for Solar Pay, a simple open-source library that provides merchants with the ability to readily accept Solar as a means of payment in online stores.

[[toc]]

## Installation

```bash
yarn add @solar-network/pay
```

## Usage With Browsers

::: warning
When using this module from a website that requires secure connections via HTTPS (SSL), you will need to specify peers that use HTTPS as browsers will not allow connections from HTTPS to HTTP (Peers). The default for Solar Core is to run the public API on HTTP connections without SSL.
:::

Below you can find two of our secure HTTPS (SSL) nodes. If you wish to use them call the below snippets before `gateway.start()`.

### Mainnet

```js
gateway.peers([
  {
    ip: "explorer.solar.network",
    port: 8443,
    protocol: "https"
  }
]);
```

### Devnet

```js
gateway.peers([
  {
    ip: "dexplorer.solar.network",
    port: 8443,
    protocol: "https"
  }
]);
```

## Example

```js
const SolarPay = require("@solar-network/pay");
const gateway = new SolarPay();

gateway
  .recipient("DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9")
  .amount(1)
  .vendorField("Hello World")
  .currency("USD")
  .coin("SXP")
  .network("devnet");

// The "started" event is emitted when Solar Pay loaded all seeds, peers
// and exchange rates to make sure we are requesting the correct amount.
gateway.on("started", data => {
  // Send the session data to your backend, render it to the UI, etc.
});

// The "completed" event is emitted when Solar Pay received the exact amount
// with the correct vendor field within the specified time frame.
gateway.on("completed", data => {
  // Send a confirmation email, redirect the user, etc.
});

// The "aborted" event is emitted when Solar Pay is unable to find any seeds,
// peers or exchange rates for the active network within a reasonable time frame.
gateway.on("aborted", data => {
  // Restart the session, refresh the page or flush the shopping cart, etc.
});

// The "error" event is emitted when Solar Pay encounters any errors like an
// invalid or malformed response to an HTTP request.
gateway.on("error", data => {
  // React to the error, note that errors are not always critical, etc.
});

// The "start" method will initialize the transaction listener.
await gateway.start();
```

## API

### Set the Recipient of the Transfer.

```js
.recipient('ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D')
```

### Set the Total Amount of the Transfer.

```js
.amount(1)
```

### Set the Vendor Field of the Transfer.

```js
.vendorField('Hello World')
```

### Set the Fiat Currency of the Transfer.

```js
.currency('USD')
```

### Set the Cryptocurrency of the Transfer.

```js
.coin('SXP')
```

### Set the Network of the Transfer.

```js
.network('devnet')
```

### Set the Seeds of the Network.

```js
.seeds('solar', [{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```

### Set the Peers of the Network.

```js
.peers([{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```

### Stop the Listener and Reset the Configuration.

```js
.reset()
```
