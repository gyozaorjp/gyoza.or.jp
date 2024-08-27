<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const path = route.fullPath

useSeoMeta({
  title:   '一般社団法人焼き餃子協会',
  ogTitle: '一般社団法人焼き餃子協会',
  description:   '焼き餃子協会は、美味しい餃子を作る人と、美味しく焼く人、美味しく食べる人をつなげる団体です。',
  ogDescription: '焼き餃子協会は、美味しい餃子を作る人と、美味しく焼く人、美味しく食べる人をつなげる団体です。',
  ogImage: `${runtimeConfig.public.SITE_URL}/ogp.png`,
  ogSiteName: '一般社団法人焼き餃子協会',
  ogUrl: runtimeConfig.public.SITE_URL + path,
  ogType: 'website',
  ogLocale: 'ja_JP',
  twitterCard: 'summary_large_image',
  twitterSite: '@YakiGyozaJapan',
  twitterImage: `${runtimeConfig.public.SITE_URL}/ogp.png`,
})
</script>

<template>
  <AppHeader class="fixed"></AppHeader>
  <article class="pt-16">
    <NuxtPage />
  </article>
  <AppFooter></AppFooter>
</template>
