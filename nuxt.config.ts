// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      SITE_URL: 'http://www.gyoza.or.jp/'
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    // https://nuxt.com/modules/icon
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-gtag',
    'nuxt3-meta-pixel',
  ],

  // https://nuxt.com/modules/tailwindcss
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: false,
  },

  // https://nuxt.com/modules/google-fonts
  googleFonts: {
    families: {
      'Noto+Sans+JP': {
        wght: [
          100, // thin
          400, // normal
          700, // bold
          900, // black
        ],
      },
      'Noto+Sans+Mono': {
        wght: [
          400, // normal
        ]
      },
      'Noto+Serif+JP': {
        wght: [
          400, // normal
          900, // black
        ],
      },
    },
    display: 'swap',
  },

  // https://nuxt.com/modules/seo
  site: {
    name: '一般社団法人焼き餃子協会',
    description: '',
    defaultLocale: 'ja',
    trailingSlash: false,
  },
  ogImage: { enabled: false },

  // https://content.nuxt.com/
  content: {
    contentHead: false,
    markdown: {
      anchorLinks: false,
    },
  },

  // https://nuxt.com/modules/dayjs
  dayjs: {
    locales: ['ja'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'ja',
    defaultTimezone: 'Asia/Tokyo',
  },
  
  // https://nuxt.com/modules/gtag
  gtag: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
  },
  
  // https://nuxt.com/modules/nuxt-meta-pixel
  facebook: {
    track: 'PageView',
    pixelId: process.env.META_PIXEL,
    autoPageView: true,
    disabled: false
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/about',
        '/antisocialist',
        '/entry',
        '/how',
        '/membership',
        '/podcast',
        '/privacy',
        '/statute',
        '/supermarket',
        '/transactionlaw',
      ],
    }
  },
})