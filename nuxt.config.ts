import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: '一般社団法人焼き餃子協会',
      NOTE_API: process.env.NOTE_API,
    }
  },
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'gyoza',
        'lang': 'ja',
        'class': 'scroll-smooth',
      },
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
