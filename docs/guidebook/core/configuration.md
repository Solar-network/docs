---
title: "Configuration"
---

# Configuration

To operate a node in any Swipechain network, you need to provide configuration to it one way or another.

## Environment Configuration

Swipechain Core allows you to use a [.env](https://github.com/bevry/envfile) file to provide a configuration that is environment specific without having to touch the `~/.config/swipechain-core/{network}/plugins.js` file. The `.env` file needs to be stored at `~/.config/swipechain-core/{network}/.env`.

| Variable           | Plugin                               | Default    |
| :----------------- | :----------------------------------- | :--------- |
| CORE_DB_HOST       | @swipechain/core-database-postgres | localhost  |
| CORE_DB_PORT       | @swipechain/core-database-postgres | 5432       |
| CORE_DB_USERNAME   | @swipechain/core-database-postgres | swipechain        |
| CORE_DB_PASSWORD   | @swipechain/core-database-postgres | password   |
| CORE_DB_DATABASE   | @swipechain/core-database-postgres | swipechain_devnet |
| CORE_P2P_HOST      | @swipechain/core-p2p               | 0.0.0.0    |
| CORE_P2P_PORT      | @swipechain/core-p2p               | 4002       |
| CORE_API_HOST      | @swipechain/core-api               | 0.0.0.0    |
| CORE_API_PORT      | @swipechain/core-api               | 4003       |
| CORE_WEBHOOKS_HOST | @swipechain/core-webhooks          | 0.0.0.0    |
| CORE_WEBHOOKS_PORT | @swipechain/core-webhooks          | 4004       |
| CORE_JSON_RPC_HOST | @swipechain/core-json-rpc          | 0.0.0.0    |
| CORE_JSON_RPC_PORT | @swipechain/core-json-rpc          | 8080       |
