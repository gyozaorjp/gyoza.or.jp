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

const menuExpand = ref(false)
</script>

<template>
  <header class="fixed w-full z-50">
    <div class="relative bg-orange-800 shadow-xl z-10">
      <div class="relative h-16 container mx-auto px-4 flex justify-center items-center">
        <a href="/">
          <img src="/img/common/logo-white.png" alt="一般社団法人焼き餃子協会" class="h-12" />
        </a>
        <button @click="menuExpand=!menuExpand" class="absolute right-4 inset-y-0">
          <Icon v-if="menuExpand" name="material-symbols:top-panel-close" class="w-8 h-8 text-white" />
          <Icon v-else name="material-symbols:menu" class="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
    <nav
      class="absolute top-0 w-full bg-slate-50/90 backdrop-blur pt-16 pb-4 z-0 transition duration-1000"
      :class="[menuExpand?'translate-y-0':'-translate-y-full']"
      @click="menuExpand=!menuExpand">
      <Sitemap></Sitemap>
    </nav>
  </header>
  <article class="pt-16">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </article>
  <AppFooter></AppFooter>
</template>

