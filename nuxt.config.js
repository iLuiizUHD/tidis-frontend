export default {
  ssr: false,

  target: "static",

  head: {
    title: "Tidis",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The cleanest way of making your links short!",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:url",
        content: "https://tidis.net/",
      },
      {
        property: "twitter:title",
        content: "Tidis",
      },
      {
        property: "twitter:description",
        content: "The cleanest way of making your links short!",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://tidis.net/",
      },
      {
        property: "og:title",
        content: "Tidis",
      },
      {
        property: "og:description",
        content: "The cleanest way of making your links short!",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "android-chrome",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        type: "image/png",
        sizes: "512x512",
        href: "/android-chrome-512x512.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  },

  server: {
    port: 8000, // default: 3000
  },

  css: ["~/assets/scss/global"],

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseUrl: "https://api.tidis.net/v1/",
    timeout: 2500,
  },

  build: {},
};
