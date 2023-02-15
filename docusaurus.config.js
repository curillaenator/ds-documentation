/* eslint-disable @typescript-eslint/no-var-requires */

// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Platform V',
  tagline: 'Platform V Documentation',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://curillaenator.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: '/ds-documentation/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'curillaenator',
  projectName: 'ds-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: '1.1.0',
          //     path: '1.1.0',
          //   },
          // },
          breadcrumbs: false,
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-sass',
      {
        // sass-plugin opts
      },
    ],
    [
      'docusaurus-lunr-search',
      {
        languages: ['ru'],
        indexBaseUrl: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Preview image on sharing via direct link
      image: 'img/social-card.jpg',

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        // hideOnScroll: true,

        logo: {
          alt: 'Platform V Logo',
          src: 'img/logotype.svg',
        },

        items: [
          {
            type: 'doc',
            docId: '/category/style',
            position: 'right',
            label: 'Design System & UI Kit Docs',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          // },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
