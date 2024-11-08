import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Eando X',
  base: '/',
  description: 'Docs for Eando X',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },
    nav: [
      { text: 'Visit Eando X', link: 'https://www.eandox.com' },
      {
        text: 'Docs feedback',
        link: 'mailto:info@eandox.com?subject=I%20have%20some%20feedback%20on%20the%20docs',
      },
    ],
    footer: {
      copyright: 'Copyright © 2023-present Eando X',
    },
    siteTitle: false,
    logo: '../../images/logo.svg',
    sidebar: [
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          {
            text: 'What is Eando X?',
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
        text: 'Supplier',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Supplier overview',
            link: '/documentation/supplier/supplier-overview',
          },
          {
            text: 'Adding a supplier',
            link: '/documentation/supplier/adding-a-supplier',
          },
          {
            text: 'Inviting a supplier',
            link: '/documentation/supplier/inviting-a-supplier',
          },
          {
            text: 'Accessing supplier products',
            link: '/documentation/supplier/accessing-supplier-products',
          },
          {
            text: 'Requesting a product from a supplier',
            link: '/documentation/supplier/creating-a-product-request',
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
        text: 'EPD',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'EPD overview',
            link: '/documentation/epd/epd-overview',
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
            text: 'Manage team',
            link: '/documentation/settings/manage-team',
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
        ],
      }
    ],
  },
});
