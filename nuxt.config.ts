import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: '一般社団法人焼き餃子協会',
      NOTE_API: process.env.NOTE_API,
      HUBSPOT: {
        REGION: process.env.HUBSPOT_REGION,
        PORTALID: process.env.HUBSPOT_PORTALID,
        FORM: {
          CONTACT: process.env.HUBSPOT_FORM_CONTACT,
        },
      },
      gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID
      },
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
    '@nuxt/content',
  ],

})
