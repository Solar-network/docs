module.exports = [
  ['/', 'Back to Table of Contents'],
  ['/introduction/', 'From Blockchain to Swipechain'],
  {
    title: 'Blockchain introduction',
    collapsable: false,
    children: [
      ['/introduction/blockchain/', 'Intro to Blockchain'],
      '/introduction/blockchain/what-is-blockchain',
      '/introduction/blockchain/how-secure-is-blockchain',
      '/introduction/blockchain/why-do-blockchains-exist',
      '/introduction/blockchain/when-do-you-need-blockchain',
      '/introduction/blockchain/anonymous-vs-untraceable',
      '/introduction/blockchain/understanding-consensus-models'
    ]
  },
  {
    title: 'Swipechain',
    collapsable: false,
    children: [
      ['/introduction/swipechain/', 'Intro to Swipechain'],
      '/introduction/swipechain/swipechain-network-topology',
      '/introduction/swipechain/understanding-transactions-and-block-propagation',
      '/introduction/swipechain/what-is-an-swipechain-address',
      // '/introduction/swipechain/interoperability-and-swipechain',
      // '/introduction/swipechain/how-does-swipechain-smartbridge-work',
      '/introduction/swipechain/what-is-delegated-proof-of-stake'
    ]
  }
]
