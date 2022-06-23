const { description } = require("../../package");
const { defineConfig } = require("vuepress/config");

module.exports = defineConfig({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Utility Challenges",
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
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/tyankatsu0105/utility-challenges/main/logo.png",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/tyankatsu0105/utility-challenges",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",
    lastUpdated: true,
    nav: [
      {
        text: "Questions",
        link: "/questions/",
      },
    ],
    sidebar: {
      "/questions/": [
        {
          title: "Questions",
          collapsable: false,
          path: "/questions",
          children: [
            {
              title: "typescript",
              collapsable: false,
              children: [
                {
                  title: "compose",
                  collapsable: false,
                  path: "/questions/typescript/compose",
                },
                {
                  title: "pipe",
                  collapsable: false,
                  path: "/questions/typescript/pipe",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
});
