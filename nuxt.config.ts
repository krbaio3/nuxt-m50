// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/style.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    propsDestructure: true
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api',
      app_title: "M50 Dashboard",
      api_url: "http://localhost:3000/api/v1",
      segments: 'secuencia',
      auth_token_url: 'auth/token',
      otg_url: "http://otg.itlab.bk:8080/api",
    }
  }
})
