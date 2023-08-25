// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'lllllms', 
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' }
      ]
    }
  },
  runtimeConfig: {
    modelPath: '',
  }
})
