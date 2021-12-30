# Writing Documentation for Solar

On this page, you will find all the details necessary for writing compliant documentation for Solar.

![docs-banner](https://github.com/solar-network/docs/blob/master/banner.png?raw=true)

[[toc]]

## Style Guide

As Solar originates from an online community, different writing styles have been used in formal and community writings. It is important to have a uniform style across our documentation to avoid misunderstandings and provide consistency to developers.

Writing documentation is quite simple, often the last 10% of a project. Regardless the last 10% can consume 90% of the effort. Proper documentation requires fluency in English and a well thought out objective. Solar's documentation is written for the semi-knowledgeable. However, beginners should be able to follow most of the tutorials and learn from the docs. Well documented, average software is more usable than poorly documented, fantastic software.

### Language

Solar's official language is American English, which is used in nearly all writings. This conforms to most technical documentation and writings, as often programming languages adhere to American English as well.

### Keep in Mind

Use a clear, semi-formal tone in writing. There is no need to go as far as academic writing, but keep the following in mind:

- Long sentences without an objective are confusing. There is no need to use extra adjectives to increase sentence length or illustrate a concept. Remember that just as with code; documentation comes with a burden of maintenance.
- Reuse definitions. In fintech and blockchain, we often use words such as _blocks_, _transactions_, _crypto_. While writing documentation, the use of these definitions might seem repetitive; however, these are familiar concepts and leave little room for interpretation to the reader.
- Grammar is important. It reflects the professionalism of the entire project.
- Use proper punctuation, in tables, captions, and citations. Titles should use [title casing](https://grammar.yourdictionary.com/capitalization/rules-for-capitalization-in-titles.html).
- Avoid using abbreviations.

## Pending Projects
The Solar Blockchain Platform is continuously expanding with it's modular Core design and extensive range of peripherals accompanying it. At this stage of development, we feel it would now be the appropriate time to apply for the [Google Season of Docs program](https://developers.google.com/season-of-docs/).
This initiative will allow aspiring technical writers to hone their skills in the art of technical writing, as well as helping to evaluate and improve our documentation. You will be able to to work tightly with the Solar Team and our large technical community. Solar has always felt a huge amount of pride with our Open Source approach and we feel that participating in Open Source programs such as GSoD is not only important for Solar, but also for the wider Open Source community.

[Detailed information about the program can be found here](gsod.html).


## Code Snippets

In tutorials and descriptions, we often have code snippets present to illustrate SDK functionalities. If you provide a code snippet, showing how to use a function, ensure that the reader knows what has been omitted. Start a tutorial with the setup code, imports, and installations before the main body. Ensure the code uses correct namespaces. When documenting a library, use the library as if you were an end-user:

Do not use the following:

```go
client := New()
```

However, instead:

```go
package main

import "my/lib/name"

func main() {
  client := name.New()
}
```

In following snippets, the package and import declarations may be omitted. Avoid using `...` to indicate an omitted fragment; it should be apparent to the reader without such indicators.

If a code snippet is relevant in multiple languages, create tabs for all languages, even if you do not intend to write the code snippet in the other languages. This makes it very obvious to the reader and us that the documentation needs to be improved/updated. Tabs should be ordered as follows:

:::: tabs

::: tab javascript

Javascript is placed in the front, as it is widely used, and the primary language used in Solar.

:::

::: tab java

Java is often used by exchanges and institutions and remains one of our most widely used SDKs.

:::

::: tab .NET

Bittrex is built on top of the .NET stack, and just as with Java, C# is also used within companies.

:::

::: tab php

PHP is a conventional programming language. We also support two dedicated PHP frameworks.

:::

::: tab python

Python is an academic language. Solar aims to collaborate with Universities and researchers.

:::

::: tab golang

Go is the language of the distributed stack, and many blockchain developers are familiar with it.

:::

::: tab C++

The Bitcoin protocol was written using C++, need I say more?

:::

::: tab ruby

Ruby, powered by Rails, is a great tool for developing backends.

:::

::: tab swift

Apple's official language. Currently not used in the Solar mobile wallet.

:::

::: tab rust

Just a great language, if only I managed to compile my `tokio` server.

:::

::: tab elixir

Functional languages are gaining popularity and might model the blockchain state transitions quite well.s

:::

::::

A tab may contain a code snippet, but also language-specific explanations. Attempt to keep each tab the same size, to avoid screen jumps when the user switches between tabs.

When using a bash command, prepend the command with `$` only if the output is shown as well. The terminal output should be put inside a code block, not added as a screenshot. In general, text should remain text.

This example is correct:

```bash
$ echo output

output
```

This variant is acceptable too:

```bash
echo hello
```

However, this is incorrect:

```bash
$ echo hello
```

Most markdown linters will warn you of these common issues.

## Terminology

There are many terms commonly used when describing aspects of Solar and related technologies. To standardize how documentation is presented to the user and to remove differences across different texts, we have established the following rules for using Solar terminology.

### Commonly Used Technological Concepts and Project Names

Firstly, the term "Solar" refers to an entire umbrella of concepts and is mainly used as a prefix to describe projects it maintains or supports.

For example, the most basic form of this is writing "Solar"; this can be used interchangeably with "Solar".

> Writing documentation for Solar

> Writing documentation for the Solar

Both are acceptable.

A complete list of definitions is found in the [glossary](/glossary/).

For certain cases (docs, website, forum), it is acceptable to use the actual URL subdomain.domain.tld format if it's intuitive:

- _"Find all relevant information on the [docs.solar.network](https://docs.solar.network)"_
- _"Blog, Forums, Roadmap and more can be found at the [solar.network](https://solar.network) website"_
- _"I love the community over at the [forum.solar.network](https://forum.solar.network)"_

:::danger
When talking about Solar's native currency, you MUST refer to it as Solar - it is commonly used as the currency ticker on exchanges and within Solar projects like the Solar Desktop Wallet and Solar Explorer. The currency symbol for Solar is "Ѧ". It can be represented with the decimal Unicode 1126 or `\&#1126;` in HTML.
:::

Generic terms like "address", "wallet", "transaction", "delegate", "vote", "blockchain", "currency" SHOULD NOT be capitalized, alongside the three above terms which mainly refer to concepts and not necessarily rigid implementations.

The scopes of each category might change to include or exclude new or old concepts at any given time, due to the continually evolving Solar (Ecosystem) landscape.

Although it would be ideal, not all documents can afford only to mention Solar's projects and concepts.

We encourage you always to follow other projects' standards for writing about them when you mention them in a document:

> The Solar blockchain was created later than the Bitcoin blockchain

In addition, please refrain from capitalizing terms like "blockchain", as it would imply some unencouraged buzz-wordiness.

## Linking

An essential part of documenting for the open source Solar is to offer the reader an unintrusive option to go to another branch of resources and learn without breaking the underlying reading experience.

It is acceptable to link once to Solar or other technological projects mentioned in the document you write unless mentioned in succession within a list. Linking the first occurrence of a technical project mention is good practice.

Additionally, you are encouraged to provide a list of references at the end of your written document. This helps streamline the user's experience when wanting to read resources on the aforementioned projects without having to scroll back through the material.

### URLs

To provide an easy to access and clean reference to a website, especially when dealing with websites external to the Solar, the writer MUST include a link to the URL with an appropriate name rather than the plain, unclickable, URL.
:::danger
answers can be searched for on https://google.com
:::
:::tip
answers can be searched for on [Google](https://google.com)
answers can be searched for on [google.com](https://google.com)
:::

## Images

As an essential part of online documentation, images must be used with respect to licensing rights and other ethical considerations.

To unify the look and feel of the documentation, images or other branded content available and relevant to your document SHOULD be included.

If writing a document for an Solar project, like the Solar Mobile Wallet, you MUST use the official banner image for it (located on GitHub) at the start of the document.

When needing to use official Solar imagery, you may find suitable media assets at [solar.network/mediakit](https://solar.network/mediakit). Otherwise, you are encouraged to design your images, use external images with proper attribution in as references or outsource the graphical design task to someone else.

When writing technical guides; do not take screenshots of the console. Add the textual output from commands as code snippets, either using the `bash` tag or omitting the tag altogether. Screenshots are difficult to update, requiring the maintainers to go through the guide step-by-step.

## References

Here you can find an example list of references.

Please use this template for every document which has any reference at all:

<!-- Generated using https://www.tablesgenerator.com/markdown_tables. It looks bad in .md files, but good ones rendered. -->

| Project                         | Repository                                                                                       | Description                                                                                                              |
| :------------------------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| Solar Core                        | [https://github.com/solar-network/solar-core ](https://github.com/solar-network/solar-core)                    | The reference implementation of the Solar blockchain, also refered to as Solar v3                                            |
| Solar Node                        | [https://github.com/solar-network/solar-solar-node ](https://github.com/solar-network/solar-solar-node)            | Deprecated implementation of Solar v1                                                                                      |
| Solar Mobile Wallet               | [https://github.com/solar-network/solar-mobile-wallet ](https://github.com/solar-network/solar-mobile-wallet)  | Cross platform mobile wallet built using ionic.                                                                          |
| Solar Explorer                    | [https://github.com/solar-network/solar-explorer ](https://github.com/solar-network/solar-explorer)            | Official blockchain explorer, hosted at explorer.solar.network.                                                                 |
| Solar Desktop Wallet              | [https://github.com/solar-network/solar-desktop-wallet](https://github.com/solar-network/solar-desktop-wallet) | Cross platform desktop wallet.                                                                                           |
| AIPs, Solar Improvement Proposals | [https://github.com/solar-network/solar-aips](https://github.com/solar-network/solar-aips)                     | Proposals related to altering/upgrading Solar. AIP set standards for best practices, implementations and breaking changes. |
| Solar (LANG) Client               | [https://github.com/solar-network/solar-php-client](https://github.com/solar-network/solar-php-client)         | Each SDK has its own client repository, used for all API interactions.                                                   |
| Solar (LANG) Crypto               | [https://github.com/solar-network/solar-php-crypto ](https://github.com/solar-network/solar-php-crypto)        | As with the client SDKs, there are many crypto SDKs, providing signing and serialization functionalities.                |
| Solar Deployer                    | [https://github.com/solar-network/solar-solar-deployer](https://github.com/solar-network/solar-deployer)         | Deployment scripts based on Docker and Vagrant.                                                                          |
| Solar website                     | [https://solar.network](https://solar.network)                                                                 | The official website hosted at solar.network                                                                                    |
| Solar documentation               | [https://docs.solar.network ](https://docs.solar.network)                                                      | A complete set of technical documentation on Solar and blockchain.                                                         |
| Solar forum                       | [https://forum.solar.network ](https://forum.solar.network)                                                    | A self hosted forum.                                                                                                     |
| Solar mediakit                    | [https://solar.network/mediakit ](https://solar.network/mediakit)                                              | A collection of reusable media assets.                                                                                   |
| Solar blog                        | [https://blog.solar.network ](https://blog.solar.network)                                                      | One of the official channels of communication between the Solar team and the community.                                    |
