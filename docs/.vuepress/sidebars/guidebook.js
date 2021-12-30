module.exports = [
  ['/', 'Back to Table of Contents'],
  ['/guidebook/', 'Guidebook Home'],
  {
    title: 'Getting Started',
    collapsable: true,
    children: [
      '/guidebook/developer/setup-dev-environment.md',
      '/guidebook/developer/monitor-blockchain.md',
      '/guidebook/developer/send-transaction.md',
      '/guidebook/developer/tester-cli-transaction.md'
    ]
  },
  {
    title: 'Core',
    collapsable: true,
    children: [
      '/guidebook/core/',
      '/guidebook/core/node-lifecycle',
      '/guidebook/core/transaction-lifecycle',
      '/guidebook/core/cli',
      '/guidebook/core/configuration',
      '/guidebook/core/development',
      '/guidebook/core/docker',
      '/guidebook/core/events',
      '/guidebook/core/logging',
      '/guidebook/core/testing',
      '/guidebook/core/webhooks',
      '/guidebook/core/data-models',
      '/guidebook/core/source-code'
    ]
  },
  {
    title: 'Other Products',
    collapsable: true,
    children: [
      '/guidebook/guides/',
      '/guidebook/guides/mobile',
      '/guidebook/guides/desktop',
      '/guidebook/guides/explorer',
      '/guidebook/guides/pay'
    ]
  },
  {
    title: 'Contribution Guidelines',
    collapsable: true,
    children: [
      '/guidebook/contribution-guidelines/',
      '/guidebook/contribution-guidelines/clean-code-and-tests',
      '/guidebook/contribution-guidelines/contributing',
      '/guidebook/contribution-guidelines/writing-documentation',
      '/guidebook/contribution-guidelines/gsod',
      '/guidebook/contribution-guidelines/git-branch-guidelines',
      '/guidebook/contribution-guidelines/git-commit-guidelines',
      '/guidebook/contribution-guidelines/project-structuring',
      '/guidebook/contribution-guidelines/repository-management'
    ]
  },
  {
    title: 'Release Guidelines',
    collapsable: true,
    children: [
      '/guidebook/release-guidelines/',
      '/guidebook/release-guidelines/releases-and-versioning',
      '/guidebook/release-guidelines/going-live'
    ]
  }
]
