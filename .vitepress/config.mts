import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja",
  title: "bootcamp23summer",
  description: "bookmark for bootcamp23summer",
  head: [
    ["link", { rel: "icon", href: "/aiitBootcamp2023Summer.svg" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "ja" }],
    ["meta", { name: "og:site_name", content: "bootcamp23summer" }],
  ],

  themeConfig: {
    logo: { src: "/aiitBootcamp2023Summer.svg", width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "しおり", link: "/bookmark" },
    ],

    sidebar: [
      {
        text: "目次",
        items: [
          { text: "しおり", link: "/bookmark" },
          { text: "企画", link: "/events" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AIIT-bootcamp/bookmark" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Jabelic",
    },
  },
});
