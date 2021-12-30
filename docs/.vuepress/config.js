const config = {
  title: "Swipechain Documentation",
  description: "The central knowledge hub for all things Swipechain",
  plugins: ["tabs"],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "./red-corners.png"
      }
    ]
  ],
  themeConfig: {
    logo: "/red-corners.png",
    repo: "Swipechain/swipechain-docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    nav: [
      {
        text: "Home",
        link: "/"
      }
    ],
    sidebar: {
      "/faq/": require("./sidebars/faq"),
      "/introduction/": require("./sidebars/introduction"),
      "/tutorials/": require("./sidebars/tutorials"),
      // "/iot/": require("./sidebars/iot"),
      "/guidebook/": require("./sidebars/guidebook"),
      "/releases/": require("./sidebars/releases"),
      "/security/": require("./sidebars/security"),
      "/archive/": require("./sidebars/archive"),
      "/": require("./sidebars/main")
    }
  }
};

module.exports = config;
