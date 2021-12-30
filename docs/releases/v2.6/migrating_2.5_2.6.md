# Migrating from v2.5 to v2.6

Upgrading from `v2.5` to `v2.6` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

## Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade Steps

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

**To update to v2.6 run the following command:**

```bash
swipechain update
```

### Step 1. Add `core-magistrate-transactions` Package

1. Open `~/.config/swipechain-core/mainnet/plugins.js`
2. Locate the `@swipechain/core-database-postgres` entry.
3. Add this package addition line before it (see below):

   ```js
   "@swipechain/core-magistrate-transactions": {}, // Add this line before it
   ```

4. Save the changes. Your configuration file should look like this:

   ```js
   module.exports = {
       "@swipechain/core-event-emitter": {},
       "@swipechain/core-logger-pino": {},
       "@swipechain/core-state": {},
       "@swipechain/core-magistrate-transactions": {},
       "@swipechain/core-database-postgres": {},
       ...
       ...
       ...
   }
   ```

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/Swipechain/swipechain-core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.
