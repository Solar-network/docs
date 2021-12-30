---
title: "Error Tracker - Raygun"
---

# Error Tracker - Raygun

::: tip
You can find the source code of this package at [packages/core-error-tracker-raygun](https://github.com/solar-network/solar-core/tree/develop/packages/core-error-tracker-raygun).
:::

## Installation

```bash
yarn add @solar-network/core-error-tracker-raygun
```

## Configuration

> Check https://raygun.com/raygun-providers/node-js for more options and details.

```js
export const defaults = {
  apiKey: process.env.CORE_ERROR_TRACKER_RAYGUN_API_KEY
};
```
