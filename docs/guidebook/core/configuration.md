---
title: "Configuration"
---

# Configuration

To operate a node in any Solar network, you need to provide configuration to it one way or another.

## Environment Configuration

Solar Core allows you to use a [.env](https://github.com/bevry/envfile) file to provide a configuration that is environment specific without having to touch the `~/.config/solar-core/{network}/plugins.js` file. The `.env` file needs to be stored at `~/.config/solar-core/{network}/.env`.

| Variable           | Plugin                               | Default    |
| :----------------- | :----------------------------------- | :--------- |
| CORE_DB_HOST       | @solar-network/core-database-postgres | localhost  |
| CORE_DB_PORT       | @solar-network/core-database-postgres | 5432       |
| CORE_DB_USERNAME   | @solar-network/core-database-postgres | solar        |
| CORE_DB_PASSWORD   | @solar-network/core-database-postgres | password   |
| CORE_DB_DATABASE   | @solar-network/core-database-postgres | solar_devnet |
| CORE_P2P_HOST      | @solar-network/core-p2p               | 0.0.0.0    |
| CORE_P2P_PORT      | @solar-network/core-p2p               | 4002       |
| CORE_API_HOST      | @solar-network/core-api               | 0.0.0.0    |
| CORE_API_PORT      | @solar-network/core-api               | 4003       |
| CORE_WEBHOOKS_HOST | @solar-network/core-webhooks          | 0.0.0.0    |
| CORE_WEBHOOKS_PORT | @solar-network/core-webhooks          | 4004       |
| CORE_JSON_RPC_HOST | @solar-network/core-json-rpc          | 0.0.0.0    |
| CORE_JSON_RPC_PORT | @solar-network/core-json-rpc          | 8080       |
