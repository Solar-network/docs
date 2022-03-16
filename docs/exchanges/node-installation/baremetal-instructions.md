---
title: Relay node installation instructions (Bare Metal or VM)
---

# BareMetal or VM Install

## Installation Using the Official `Installation Script`

On a fresh Ubuntu installation, follow these commands.

### 1. Update and Upgrade

Always ensure your server has the latest set of updates, due to performance and security considerations.

```bash
sudo apt-get update && sudo apt-get upgrade
```

### 2. Add a New User

It is best to create a specific SXP-related user, which can later own the required databases as well. The user does not require sudo rights.

```bash
# add 'solar' user
sudo adduser solar
```

### 3. Switch to the New User

Switch to the new user account and go to the base directory.

```bash
# change to solar user and solar directory
su -l solar
```

### 4. Install Dependencies and Solar Core

We will use Solar installer script that will install all of the necessary dependencies, Solar Core onto your server and publish configuration files for it. To install essentials run this command.

1. Download and run install-script
```bash
curl -o install.sh https://raw.githubusercontent.com/solar-network/core/develop/install.sh
bash install.sh
```

Process might take a while, don't interrupt it and wait for it to finish.

### 5. Selecting Solar Core Network

Once installation of dependencies and Solar Core is finished you will need to select on which network you wish to operate. 
This can be achieved by pressing `up` or `down` arrow keys and confirming selection with `enter`.

After you made your selection you will need to confirm by pressing `y` and confirm with `enter`.


### 6. Starting Solar Relay Process

To start Solar relay process and with it synchronization process with Solar blockchain we need to start relay process with our integrated CLI:

```bash
solar relay:start
```

If the process has started you will get a message:

```bash
Starting solar-relay... done
```

### 7. Checking to See if Everything Is Working

Now we want to see if the Solar relay process has started the synchronization process you can do that by running one of these two commands

```bash
solar relay:log
```

or

```bash
pm2 logs
```

If the process has started you will see a lot of messages like this (with actual data)

```bash
[YYYY-DD-MM hh:mm:ss][DEBUG]: Delegate <delegate name> (<public key>) allowed to forge block <#> 👍
```

> Synchronization of the blockchain can take upwards of 10 hours so let it run, once its synchronized `allowed to forge block` messages will only pop-up every 8 seconds. A single round consists of 53 delegates each forging a single block.
>
> Ensure you properly restart the node process when editing your `.env` file. Use the `--update-env` flag, for example:
>
> ```bash
> pm2 restart all --update-env
> ```

## Next Steps

> Please note that API will be available when the node has synced with the network, which can take up to 15 hours depending on your network speed.

Now that the relay node has been configured, you should head over to the JSON-RPC Getting Started

<livewire:page-reference path="/docs/exchanges/json-rpc/getting-started" />

 or look at relevant [Public API endpoints](/docs/api) related to blockchain functionality to manage your wallets and transactions.

## Notes

Please read the documentation pages for all of our [SXP SDK clients and cryptography libraries](/docs/sdk/) (offered in many programming languages).

Also, read the [API documentation.](/docs/api)
