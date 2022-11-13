---
title: Getting Started
---

## NodeJS installation

NodeJS can be downloaded here: <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">nodejs.org/en/download</a>

Alternatively you can install NodeJS through your operating system <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noopener noreferrer">packager manager</a>.

An excellent way to manage your NodeJS installation and be able to work with multiple version is to go through <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">NVM</a>.

## Yarn

> Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

### Install Yarn

Instructions on how to install Yarn can be found here: <a href="https://yarnpkg.com/en/docs/install" target="_blank" rel="noopener noreferrer">yarnpkg.com/en/docs/install</a>

### Install package with Yarn

```bash
yarn add @solar-network/crypto
```

## Development

1. Crypto package is part of our Solar Core repository. Fork the package: <a href="https://github.com/Solar-network/core/fork" target="_blank" rel="noopener noreferrer">github.com/Solar-network/core/fork</a>

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/core
```

<!-- markdownlint-disable MD029 -->
3. Next, move into the fresh cloned directory.
<!-- markdownlint-enable MD029 -->

```bash
cd core
```

<!-- markdownlint-disable MD029 -->
4. Proceed to install the dependencies.
<!-- markdownlint-enable MD029 -->

```bash
yarn install
```

<!-- markdownlint-disable MD029 -->
5. Dependencies are now installed.
<!-- markdownlint-enable MD029 -->

```bash
yarn test
```

<div class="admonition tip">
    <p class="admonition-title">Solar Crypto is located in <code>core/packages/crypto</code></p>
</div>
