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
        lang: 'ja',
        class: 'scroll-smooth',
      },
      charset: 'utf-8',
      title: '一般社団法人 焼き餃子協会',
      titleTemplate: '%s - 一般社団法人焼き餃子協会',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: '一般社団法人焼き餃子協会' },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: 'https://www.gyoza.or.jp' },
        { property: 'og:title', content: '一般社団法人焼き餃子協会' },
        { property: 'og:image', content: 'https://www.gyoza.or.jp/ogp.png' },
        { property: 'fb:app_id', content: '1917857498322261' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  content: {
    documentDriven: true,
  }

})
