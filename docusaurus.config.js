// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Platform V",
  tagline: "Platform V Documentation",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SberTech",
  projectName: "platformV-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  deploymentBranch: "master",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },

        blog: false,

        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        //uagcuas
      },
    ],
    [
      "docusaurus-lunr-search",
      {
        languages: ["en", "de"],
        indexBaseUrl: true,
      },
    ],
    // [
    //   "@cmfcmf/docusaurus-search-local",
    //   {
    //     indexDocs: true,
    //     indexBlog: false,
    //     language: ["en", "ru"],
    //     maxSearchResults: 8,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Preview image on sharing via direct link
      image: "img/docusaurus-social-card.jpg",

      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },

      navbar: {
        // hideOnScroll: true,

        logo: {
          alt: "Platform V Logo",
          src: "img/logotype.svg",
        },

        items: [
          {
            type: "doc",
            docId: "/category/style",
            position: "right",
            label: "Design System & UI Kit Docs",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
