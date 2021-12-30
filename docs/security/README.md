# Security Vulnerabilities

Producing software inherently comes with risks. All software, especially new releases and substantial code re-writes, have a higher probability of producing bugs during production and initial release. To combat this, the Swipechain team has introduced modern testing methods, higher test coverage, a custom developed e2e testing framework and increased the availability for testing on our Development Network before the releases. Despite all of that, no one can catch every potential issue.

## How Swipechain Handles Security Vulnerabilities

Instead of shying away from exposing security vulnerabilities, Swipechain encourages academics, researchers, hobbyists and community members to find and disclose critical errors and bugs.

As an open-source, distributed network, we need to handle updates and critical errors more carefully than a traditional tech company:

- We cannot push breaking changes, as they will lead to a forked blockchain. Swipechain V2 provides the much needed technical freedom to upgrade and improve the network rapidly, but blockchain technology is relatively new, and every action may have a dire consequence.
- We must ensure all stakeholders remain secure and whole. This means we communicate with exchanges and brokerages all over the world, ranging from the US, Europe, and Asia. Our protocol must remain compatible with hardware wallets, such as [Ledger](https://www.ledger.com), and proprietary software used by Delegates and digital asset custodians.
- The Swipechain network is not run by the Swipechain Foundation, but by its 51 public Delegates. The team and the delegates remain in close contact through different channels, however scheduling an upgrade means we must cross (1) language barriers, (2) timezones, (3) different opinions on the validity of the update.

Due to these reasons, we cannot simply put a deadline on the public disclosure of a vulnerability. Some may be fixed in a few hours to days; others must be researched for months before being published.

## Reporting

Do not contact any individual Swipechain team member, Delegate or community member if you suspect you have found a vulnerability. Contact us at [security@swipechain.org](mailto:security@swipechain.org) and include:

1. An in-depth explanation of the vulnerability.
2. A guide to reproduce the hack.

**OPTIONAL**

3. A proposed patch to fix the issue. (allows for a 50% bonus)

## Useful Links

1. [bounty.swipechain.org](https://bounty.swipechain.org)
