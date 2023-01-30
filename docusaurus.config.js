// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
  projectName: "xyz-documentation", // Usually your repo name.

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
          // link на репозиторий
          // editUrl: "https://github.com/facebook/docusaurus",
        },

        blog: false,

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        indexBlog: false,
        language: ["en", "ru"],
        maxSearchResults: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Preview image on sharing
      image: "img/docusaurus-social-card.jpg",

      docs: {
        sidebar: {
          // hideable: true,
          // autoCollapseCategories: true,
        },
      },

      navbar: {
        // title: "Platform V",
        // hideOnScroll: true,
        logo: {
          alt: "Platform V Logo",
          src: "img/logotype.svg",
        },
        // items: [
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Components",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
