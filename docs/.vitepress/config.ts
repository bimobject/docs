import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EandoX",
  base: '/',
  description: "Docs for Eando X",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Vissit Eando X", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    siteTitle: false,
    //logo: '/logo_green.svg',
    sidebar: [
          {
            text: 'Get started',
            //collapsible: true,
            collapsed: true,
            items: [
              { text: "Get started as supplier", link: "/documentation/getStarted/getStarted_as_supplier/" },
              { text: "Create account", link: "/documentation/getStarted/create_account/" },
              { text: "Create account", link: "/documentation/getStarted/getStarted_as_supplier/" },
            ],
          },
          {
            text: 'Products',
            //collapsible: true,
            collapsed: true,
            items: [
              { text: "Responding to Customer Requests", link: "/documentation/Products/product_request/" },
              { text: "Create products", link: "/documentation/Products/createNewproduct/" },
              { text: "Export to excel", link: "/api-examples" },
              { text: "import from excel", link: "/api-examples" },
            ]
          },
          {
            text: 'Componants',
            //collapsible: true,
            collapsed: true,
            items: [
              { text: "Create componants", link: "/documentation/getStarted/" },
            ]
          }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
