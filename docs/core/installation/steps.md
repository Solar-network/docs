---
title: Installation Steps
---

# Installation Steps

A step-by-step guide on how to prepare a fully-functional environment using the install script.

## Getting started

The instructions on this page will guide you through creating a new user account with the correct privileges, installing and configuring Solar Core, then starting a relay instance and logging the output using the installation script.

Directly below is a quick summary of these install commands:

```bash
sudo adduser solar
sudo usermod -a -G sudo solar
su -l solar

wget -O install.sh https://raw.githubusercontent.com/solar-network/core/main/install.sh
bash install.sh

solar relay:start

pm2 logs
```

## Step-by-step installation via the install script

If you are planning to setup a new server you can execute the following steps.

### Step 1: Create a new account

Create a new dedicated user account to manage SXP-related software.

We’ll illustrate this command as **`sudo adduser solar`** to create a user by the name of **‘solar’**, but you can chose something else, if preferred.

On your server, type the following into the command line:

```bash
sudo adduser solar
```

You'll be asked to create and confirm a new user password, and be prompted to enter the user’s full name and some other information. (_Feel free to leave them blank by pressing ‘enter’, they are all optional fields._)

When prompted to confirm, type ‘Y’ and press ‘enter’ to finish.

```bash
Adding user 'solar' ...
Adding new group 'solar' (1000) ...
Adding new user 'solar' (1000) with group 'solar' ...
Creating home directory '/home/solar' ...
Copying files from '/etc/skel' ...
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for solar
Enter the new value, or press ENTER for the default
    Full Name []:
    Room Number []:
    Work Phone []:
    Home Phone []:
    Other []:
Is the information correct? [Y/n] Y
```

---

### Step 2: Grant sudo privileges

Next, we need to make sure that our user account has all of the necessary privileges to run Solar Core properly. This will give our user account `sudo` privileges.

Type or copy-paste the following command into your terminal:

```bash
sudo usermod -a -G sudo solar
```

!!! info

    In this example we use **'solar'** for the name of the new user account, but you should use whatever username was set in the previous steps above.

### Step 3: Login as the new user

We now should switch to the user account created above, this will also land us in the user's base directory (`~/`).

Type or copy-paste the following command into your terminal:

```bash
su -l solar
```

---

### Step 4: Run the installation script

Here, we will use the `install.sh` script. This installs Solar Core and all of its dependencies onto your server, then publishes the configuration files for it.

Run the install script by copying and pasting this one line command into your terminal:

```bash
wget -O install.sh https://raw.githubusercontent.com/solar-network/core/main/install.sh
bash install.sh
```

```bash
███████╗ ██████╗ ██╗      █████╗ ██████╗      ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██║     ██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
███████╗██║   ██║██║     ███████║██████╔╝    ██║     ██║   ██║██████╔╝█████╗
╚════██║██║   ██║██║     ██╔══██║██╔══██╗    ██║     ██║   ██║██╔══██╗██╔══╝
███████║╚██████╔╝███████╗██║  ██║██║  ██║    ╚██████╗╚██████╔╝██║  ██║███████╗
╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

Thanks for choosing to install Solar Core! Preparing the setup procedure...
```

### Step 5: Select the Core network

Once the installation of dependencies and Solar Core is finished you will need to select which network you wish to operate on. This can be achieved by pressing the `up` or `down` arrow keys and confirming your selection by pressing `enter`.

`Mainnet` is the public network, `Testnet` is the development network for testing.

```bash
? Which network do you want to connect to? › - Use arrow-keys. Return to submit.
❯   Mainnet
    Testnet
```

After you have made your selection, you will need to confirm by pressing `y` and confirm again with `enter`

```bash
✔ Which network do you want to connect to? › Mainnet
? Are you sure? › (y/N)
```

The installation process will then proceed.

```bash
Installing Solar Core for mainnet. This process may take a few minutes

  ⠦ Downloading operating system dependencies
  › Installing operating system dependencies
  › Downloading Core 4.1.3
  › Downloading Core dependencies
  › Installing Core dependencies
  › Building Core 4.1.3
  › Saving configuration
  › Adding plugins
  › Setting up database
```

!!! warning "The install process might take a while, don’t interrupt it, wait for it to finish."

At this point, Solar Core has been successfully installed with its configuration options properly published.

```bash
Installing Solar Core for mainnet. This process may take a few minutes

  ✔ Downloading operating system dependencies
  ✔ Installing operating system dependencies
  ✔ Downloading Core 4.1.3
  ✔ Downloading Core dependencies
  ✔ Installing Core dependencies
  ✔ Building Core 4.1.3
  ✔ Saving configuration
  ✔ Adding plugins
  ✔ Setting up database

Solar Core has been successfully installed! To get started, type solar
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
```

## Success

!!! success "Your installation is all set! 🎉"

That’s it, you may now start your relay and view its logs using the following command:

```bash
solar relay:start && pm2 logs
```

```bash
✔ Starting solar-relay
...
1|solar-relay  | [2022-11-06 22:36:49.742] INFO: Connecting to database: solar_mainnet
1|solar-relay  | [2022-11-06 22:36:49.803] DEBUG: Database migration: Creating rounds table
1|solar-relay  | [2022-11-06 22:36:49.809] DEBUG: Database migration: Creating blocks table
1|solar-relay  | [2022-11-06 22:36:49.816] DEBUG: Database migration: Creating transactions table
1|solar-relay  | [2022-11-06 22:36:49.821] DEBUG: Database migration: Adding block_id index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.823] DEBUG: Database migration: Adding generator_public_key index to blocks table
1|solar-relay  | [2022-11-06 22:36:49.825] DEBUG: Database migration: Adding timestamp index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.827] DEBUG: Database migration: Adding sender_public_key index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.829] DEBUG: Database migration: Adding recipient_id index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.832] DEBUG: Database migration: Adding block_id constraint to transactions table
1|solar-relay  | [2022-11-06 22:36:49.834] DEBUG: Database migration: Dropping id from rounds table
1|solar-relay  | [2022-11-06 22:36:49.836] DEBUG: Database migration: Adding chained_blocks constraint to blocks table
1|solar-relay  | [2022-11-06 22:36:49.838] DEBUG: Database migration: Adding type_group to transactions table
1|solar-relay  | [2022-11-06 22:36:49.839] DEBUG: Database migration: Adding nonce to transactions table
1|solar-relay  | [2022-11-06 22:36:49.843] DEBUG: Database migration: Adding nonce trigger to transactions table
1|solar-relay  | [2022-11-06 22:36:49.845] DEBUG: Database migration: Adding asset to transactions table
1|solar-relay  | [2022-11-06 22:36:49.846] DEBUG: Database migration: Renaming and converting vendor_field_hex to vendor_field in transactions table
1|solar-relay  | [2022-11-06 22:36:49.851] DEBUG: Database migration: Adding type index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.853] DEBUG: Database migration: Adding type_group index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.855] DEBUG: Database migration: Adding indexes to blocks and transactions tables
1|solar-relay  | [2022-11-06 22:36:49.880] DEBUG: Database migration: Adding block_height to transactions table
1|solar-relay  | [2022-11-06 22:36:49.885] DEBUG: Database migration: Creating wallets table
1|solar-relay  | [2022-11-06 22:36:49.889] DEBUG: Database migration: Adding payments asset index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.890] DEBUG: Database migration: Configuring autovacuum on all tables
1|solar-relay  | [2022-11-06 22:36:49.891] DEBUG: Database migration: Adding generator_public_key index to blocks table
1|solar-relay  | [2022-11-06 22:36:49.893] DEBUG: Database migration: Adding burned_fee to blocks and transactions tables
1|solar-relay  | [2022-11-06 22:36:49.898] DEBUG: Database migration: Adding dev_fund to blocks table
1|solar-relay  | [2022-11-06 22:36:49.901] DEBUG: Database migration: Disabling fastupdate on indexes in transactions table
1|solar-relay  | [2022-11-06 22:36:49.902] DEBUG: Database migration: Renaming serialized to serialised in transactions table
1|solar-relay  | [2022-11-06 22:36:49.903] DEBUG: Database migration: Renaming payments asset to transfers in transactions table
1|solar-relay  | [2022-11-06 22:36:49.905] DEBUG: Database migration: Setting empty recipient_id to null in transactions table
1|solar-relay  | [2022-11-06 22:36:49.906] DEBUG: Database migration: Setting zero amount to null in transactions table
1|solar-relay  | [2022-11-06 22:36:49.907] DEBUG: Database migration: Renaming vendor_field to memo in transactions table
1|solar-relay  | [2022-11-06 22:36:49.908] DEBUG: Database migration: Adding username to blocks table
1|solar-relay  | [2022-11-06 22:36:49.911] DEBUG: Database migration: Creating missed_blocks table
1|solar-relay  | [2022-11-06 22:36:49.913] DEBUG: Database migration: Adding sender_id to transactions table
1|solar-relay  | [2022-11-06 22:36:49.915] DEBUG: Database migration: Adding id index with operator class to blocks table
1|solar-relay  | [2022-11-06 22:36:49.917] DEBUG: Database migration: Adding id index with operator class to transactions table
1|solar-relay  | [2022-11-06 22:36:49.918] DEBUG: Database migration: Renaming dev_fund to donations in blocks table
1|solar-relay  | [2022-11-06 22:36:49.921] DEBUG: Database migration: Adding timestamp, username index to blocks table
1|solar-relay  | [2022-11-06 22:36:49.923] DEBUG: Database migration: Adding type, type_group index to transactions table
1|solar-relay  | [2022-11-06 22:36:49.926] DEBUG: Updating database configuration 📚
1|solar-relay  | [2022-11-06 22:36:49.928] DEBUG: Connection established
1|solar-relay  | [2022-11-06 22:36:49.938] INFO: Loaded SXP Swap Plugin
1|solar-relay  | [2022-11-06 22:36:50.192] WARNING: No block found in database 😯
1|solar-relay  | [2022-11-06 22:36:50.236] NOTICE: Milestone change
1|solar-relay  | [2022-11-06 22:36:50.303] INFO: P2P Server started at http://suitable-wagtail:6001
1|solar-relay  | [2022-11-06 22:36:50.304] INFO: Starting Blockchain Manager ⛓️
1|solar-relay  | [2022-11-06 22:36:50.309] DEBUG: event 'START': "uninitialised" -> "initialise" -> actions: [initialise]
1|solar-relay  | [2022-11-06 22:36:50.313] INFO: Last block in database: 1
1|solar-relay  | [2022-11-06 22:36:50.314] INFO: No saved states exist so a fresh state will now be generated ‼️
1|solar-relay  | [2022-11-06 22:36:50.314] INFO: Verifying database integrity ⏳
1|solar-relay  | [2022-11-06 22:36:50.345] INFO: Verified database integrity 😸
1|solar-relay  | [2022-11-06 22:36:50.350] INFO: State Generation - Step 1 of 16: LegacyTransfer
1|solar-relay  | [2022-11-06 22:36:50.359] INFO: State Generation - Step 2 of 16: SecondSignature
1|solar-relay  | [2022-11-06 22:36:50.361] INFO: State Generation - Step 3 of 16: DelegateRegistration
1|solar-relay  | [2022-11-06 22:36:50.374] INFO: State Generation - Step 4 of 16: LegacyVote
1|solar-relay  | [2022-11-06 22:36:50.384] INFO: State Generation - Step 5 of 16: MultiSignature
1|solar-relay  | [2022-11-06 22:36:50.391] INFO: State Generation - Step 6 of 16: Ipfs
1|solar-relay  | [2022-11-06 22:36:50.393] INFO: State Generation - Step 7 of 16: Transfer
1|solar-relay  | [2022-11-06 22:36:50.396] INFO: State Generation - Step 8 of 16: DelegateResignation
1|solar-relay  | [2022-11-06 22:36:50.397] INFO: State Generation - Step 9 of 16: HtlcLock
1|solar-relay  | [2022-11-06 22:36:50.401] INFO: State Generation - Step 10 of 16: HtlcClaim
1|solar-relay  | [2022-11-06 22:36:50.404] INFO: State Generation - Step 11 of 16: HtlcRefund
1|solar-relay  | [2022-11-06 22:36:50.407] INFO: State Generation - Step 12 of 16: Burn
1|solar-relay  | [2022-11-06 22:36:50.409] INFO: State Generation - Step 13 of 16: Vote
1|solar-relay  | [2022-11-06 22:36:50.410] INFO: State Generation - Step 14 of 16: Fees & Nonces
1|solar-relay  | [2022-11-06 22:36:50.412] INFO: State Generation - Step 15 of 16: Block Rewards
1|solar-relay  | [2022-11-06 22:36:50.414] INFO: State Generation - Step 16 of 16: Vote Balances & Delegate Ranking
1|solar-relay  | [2022-11-06 22:36:50.418] INFO: Number of registered delegates: 53
1|solar-relay  | [2022-11-06 22:36:50.420] INFO: Calculating productivity data 🧮
1|solar-relay  | [2022-11-06 22:36:50.440] DEBUG: Loaded 53 active delegates
1|solar-relay  | [2022-11-06 22:36:50.446] INFO: Starting Round 1 🕊️
1|solar-relay  | [2022-11-06 22:36:50.448] DEBUG: Loaded 53 active delegates
1|solar-relay  | [2022-11-06 22:36:50.449] INFO: Saving round 1
1|solar-relay  | [2022-11-06 22:36:50.655] INFO: Your network connectivity has been verified by 8.8.4.4 ✅
...
1|solar-re | [2022-11-06 22:40:46.370] DEBUG: Delegate bfx is allowed to forge block 76,805 👍
1|solar-re | [2022-11-06 22:40:46.371] DEBUG: Delegate sxp is allowed to forge block 76,807 👍
1|solar-re | [2022-11-06 22:40:46.372] DEBUG: Delegate sl33p is allowed to forge block 76,809 👍
1|solar-re | [2022-11-06 22:40:46.373] DEBUG: Delegate advin is allowed to forge block 76,816 👍
1|solar-re | [2022-11-06 22:40:46.383] DEBUG: Delegate cactus1549 is allowed to forge block 76,819 👍
...
```

!!! info

    Synchronisation of the blockchain can take some time.

    Once synchronised, the `allowed to forge block ...` messages will be logged every ~8 seconds — as opposed to the millisecond intervals shown during sync.

    A single round consists of 53 delegates, each forging a single block.
