// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Curry or not Curry",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/mdc",
    "nuxt-headlessui",
  ],
  css: ["vue3-carousel/dist/carousel.css"],
});
