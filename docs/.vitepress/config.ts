import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'EandoX',
  base: '/',
  description: 'Docs for EandoX',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Search the docs',
            buttonAriaLabel: 'Search the docs',
          },
        },
      },
    },
    nav: [
      { text: 'Visit eandox.com', link: 'https://www.eandox.com' },
      {
        text: 'Docs feedback',
        link: 'mailto:info@eandox.com?subject=I%20have%20some%20feedback%20on%20the%20docs',
      },
    ],
    footer: {
      copyright: 'Copyright © 2023-present EandoX',
    },
    siteTitle: false,
    logo: '/logo.svg',
    sidebar: [
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          {
            text: 'What is EandoX?',
            link: '/documentation/getting-started/introduction',
          },
          {
            text: 'Workflow overview',
            link: '/documentation/getting-started/workflow-overview',
          },
          {
            text: 'Supplier quickstart',
            link: '/documentation/getting-started/supplier-quickstart',
          },
        ],
      },
      {
        text: 'AI Co-Pilot',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Co-Pilot overview',
            link: '/documentation/ai/eandox-co-pilot',
          },
        ],
      },
      {
        text: 'Product',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Product overview',
            link: '/documentation/product/product-overview',
          },
          {
            text: 'Creating a product',
            link: '/documentation/product/creating-a-product',
          },
          // {
          //   text: 'Product impact',
          //   link: '/documentation/product/product-impact',
          // },
          // {
          //   text: 'Improving data quality',
          //   link: '/documentation/product/improving-product-data-quality',
          // },
          {
            text: 'Requesting a product from a supplier',
            link: '/documentation/product/requesting-a-product',
          },
          {
            text: 'Sharing a product',
            link: '/documentation/product/sharing-a-product',
          },
          {
            text: 'Import from Excel',
            link: '/documentation/product/product-excel-import',
          },
          {
            text: 'Export to Excel',
            link: '/documentation/product/product-excel-export',
          },
        ],
      },
      {
        text: 'Component',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Component overview',
            link: '/documentation/component/component-overview',
          },
          {
            text: 'Creating a component',
            link: '/documentation/component/creating-a-component',
          },
          {
            text: 'Requesting a component from a supplier',
            link: '/documentation/component/requesting-a-component',
          },
        ],
      },
      {
        text: 'Transport',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Transport overview',
            link: '/documentation/transport/transport-overview',
          },
          {
            text: 'Creating a transport',
            link: '/documentation/transport/creating-a-transport',
          },
        ],
      },
      {
        text: 'Factory',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Factory overview',
            link: '/documentation/factory/factory-overview',
          },
          {
            text: 'Creating a factory',
            link: '/documentation/factory/creating-a-factory',
          },
          // {
          //   text: 'Improving data quality',
          //   link: '/documentation/factory/improving-factory-data-quality',
          // },
        ],
      },
      {
        text: 'Packaging',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Packaging overview',
            link: '/documentation/packaging/packaging-overview',
          },
          {
            text: 'Creating a packaging',
            link: '/documentation/packaging/creating-a-packaging',
          },
          // {
          //   text: 'Improving packaging data quality',
          //   link: '/documentation/packaging/improving-packaging-data-quality',
          // },
        ],
      },
      {
        text: 'The library',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Library overview',
            link: '/documentation/library/library-overview',
          },
          {
            text: 'Accessing supplier products',
            link: '/documentation/library/accessing-supplier-products',
          },
          {
            text: 'Managing supplier products',
            link: '/documentation/library/managing-supplier-products',
          },
          {
            text: 'Requesting a product from a supplier',
            link: '/documentation/library/requesting-a-supplier-product',
          },
          {
            text: 'Managing suppliers',
            link: '/documentation/library/managing-suppliers',
          },
          {
            text: 'Inviting a supplier',
            link: '/documentation/library/inviting-a-supplier',
          },
        ],
      },
      {
        text: 'EPD',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'EPD overview',
            link: '/documentation/epd/epd-overview',
          },
          {
            text: 'What is an EPD?',
            link: '/documentation/epd/what-is-an-epd',
          },
          {
            text: 'Creating an EPD',
            link: '/documentation/epd/creating-an-epd',
          },
          // {
          //   text: 'Publishing an EPD',
          //   link: '/documentation/epd/publishing-an-epd',
          // },
        ],
      },
      {
        text: 'Settings',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Manage company',
            link: '/documentation/settings/manage-company',
          },
          {
            text: 'Custom fields',
            link: '/documentation/settings/custom-fields',
          },
        ],
      },
      {
        text: 'Data',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Impact graphs',
            link: '/documentation/data/impact-graphs',
          },
          {
            text: 'Comparing entities',
            link: '/documentation/data/comparing-entities',
          },
          {
            text: 'Comments',
            link: '/documentation/data/comments',
          },
          // {
          //   text: 'Data quality',
          //   link: '/documentation/data/data-quality',
          // },
        ],
      },
      {
        text: 'Guides',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Creating your first product',
            link: '/documentation/guides/creating-your-first-product',
          },
          {
            text: 'Improving your first product',
            link: '/documentation/guides/improving-your-first-product',
          },
        ],
      },
      {
        text: 'Understanding LCA',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Overview',
            link: '/documentation/understanding-lca/lca-overview',
          },
          {
            text: 'Packaging data',
            link: '/documentation/understanding-lca/packaging-data',
          },
          {
            text: 'Transportation data',
            link: '/documentation/understanding-lca/transportation-data',
          },
        ],
      },
      {
        text: 'Product Updates',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'July 2025',
            link: '/documentation/product-updates/july-2025',
          },
        ],
      },
    ],
  },
});
