// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 5062,
  },
  devtools: { enabled: true },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
})
