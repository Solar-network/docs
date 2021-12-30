module.exports = [
    ['/', 'Back to Table of Contents'],
    ['/introduction/', 'From Blockchain to Solar'],
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
        title: 'Solar',
        collapsable: false,
        children: [
            ['/introduction/solar/', 'Intro to Solar'],
            '/introduction/solar/solar-network-topology',
            '/introduction/solar/understanding-transactions-and-block-propagation',
            '/introduction/solar/what-is-an-solar-address',
            // '/introduction/solar/interoperability-and-solar',
            // '/introduction/solar/how-does-solar-smartbridge-work',
            '/introduction/solar/what-is-delegated-proof-of-stake'
        ]
    }
]