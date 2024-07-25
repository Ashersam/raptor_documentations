import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raptor',
  tagline: 'Documentation for Web Back Office',
  favicon: 'img/logo_webbo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'https://github.com/Ashersam',
  projectName: 'raptor_documentations',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Ashersam/raptor_documentations/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Ashersam/raptor_documentations/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'webboapi',
        path: 'webboapi', // Path where your api.md is located
        routeBasePath: 'webboapi',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Raptor Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_webbo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Webbo-UI',
        },
        {
          to: 'webboapi/webbo-api/api', // Direct path to the markdown file
          label: 'API',
          sidebarId: 'webboapiSidebar',
          position: 'left',
        },
        {to: '/blog', label: 'Raptor Fingers', position: 'left'},
        {
          href: 'https://github.com/Ashersam/raptor_documentations',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ashersam/raptor_documentations',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Raptor Docs, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
