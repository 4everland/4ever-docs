const { description } = require("../../package");
const fs = require("fs");
let apiFilesList = [];
const apiFiles = fs.readdirSync("./src/cli/cli");
apiFiles.forEach(function (item, index) {
  if (item != "README.md") {
    item.split(".");
    apiFilesList.push("./cli/" + item.split(".")[0]);
  }
});

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "4EVERLAND",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "4everland/4ever-docs",
    docsBranch: "main",
    editLinks: true,
    docsDir: "src",
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true,
    nav: [
      {
        text: "Hosting",
        link: "/hosting/",
      },
      {
        text: "Hosting Cli",
        link: "/cli/",
      },
      // {
      //   text: 'Github',
      //   link: 'https://github.com/4everland/4ever-docs',
      // },
      {
        text: "Bucket",
        link: "/bucket/",
      },
      {
        text: "Bucket API",
        link: "/bucket-api/",
      },
    ],
    sidebar: {
      "/hosting/": [
        {
          title: "Hosting",
          collapsable: false,
          children: [
            "",
            "github",
            "quick-start",
            "build",
            "settings",
            "domain",
          ],
        },
      ],
      "/cli/": [
        {
          title: "CLI",
          collapsable: false,
          children: [""],
        },
        {
          title: "API Reference",
          collapsable: false,
          children: [
            "./restApi",
            ...apiFilesList,
            "./ErrorMessage/ErrorMessage",
          ],
        },
      ],
      "/bucket/": [
        {
          title: "Bucket",
          collapsable: false,
          children: ["", "login", "detail", "domain"],
        },
      ],
      "/bucket-api/": [
        {
          title: "Bucket API",
          collapsable: false,
          children: ["", "./example-go", "./example-js"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
