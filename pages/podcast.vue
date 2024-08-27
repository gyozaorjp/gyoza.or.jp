<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const runtimeConfig = useRuntimeConfig();

const { copy, copied, isSupported } = useClipboard()

const copyurl = () => {
  copy('https://anchor.fm/s/d44ad830/podcast/rss')
}

useSeoMeta({
  title: 'Podcast 聴く餃子',
  ogImage: runtimeConfig.public.SITE_URL + '/podcats/ogp.png',
  twitterImage: runtimeConfig.public.SITE_URL + '/podcats/ogp.png',
})

useHead({
  link: [
    {
      type: 'application/rss+xml',
      rel: 'alternate',
      title: '聴く餃子🥟',
      href: 'https://anchor.fm/d44ad830/podcast/rss',
    }
  ]
})

</script>

<template>
  <PageHeader>Podcast 聴く餃子</PageHeader>
  <main class="container max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-y-8">
    <header class="bg-white p-4 rounded-xl border border-solid flex flex-col gap-y-4">
      <p>「聴く餃子」は、焼き餃子文化への愛を語る番組です。日本で進化した焼き餃子文化の魅力を、焼き餃子協会 代表理事・ぎょうざジョッキーの小野寺力が毎週火曜日にお送りしています。</p>
      <p class="text-sm">※「聴く餃子」は<a href="https://amzn.to/3VK4yvg" target="_blank">パラダイス山元師匠のエッセイ集「読む餃子」</a>からのインスパイアです。</p>
    </header>

    <section class="w-full flex flex-col items-center hover:opacity-90 transition-opacity duration-1000">
      <h1 class="font-bold text-3xl py-2">
        <a href="https://open.spotify.com/show/5UinPzH21AWnJUXKMcRivC" target="_blank">Spotify</a>
      </h1>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/show/5UinPzH21AWnJUXKMcRivC?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </section>

    <section class="w-full flex flex-col items-center hover:opacity-80 transition-opacity duration-1000">
      <h1 class="font-bold text-3xl py-2">
        <a href="https://podcasts.apple.com/jp/podcast/id1659340873" target="_blank">Apple Podcast</a>
      </h1>
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameborder="0"
        height="450"
        style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/jp/podcast/%E8%81%B4%E3%81%8F%E9%A4%83%E5%AD%90/id1659340873"></iframe>
    </section>

    <section class="flex flex-col items-center gap-y-4">
      <p class="font-bold text-xl py-2">その他の配信プラットフォーム</p>
      <div class="flex justify-center items-center gap-4">
        <a
          href="https://music.youtube.com/playlist?list=PLy65Z8NNuSvibQmyfHpNoni1vL_hU9avj"
          target="_blank"
          class="platformLogo">
          <img src="/podcast/YoutubeMusic.png" alt="Youtube Music" class="logo" />
        </a>

        <a
          href="https://music.amazon.co.jp/podcasts/31e4ebdd-538b-4146-9294-aa82b05e05f6/"
          target="_blank"
          class="platformLogo">
          <img src="/podcast/AmazonMusic.png" alt="Amazon Music" class="logo" />
        </a>

        <a
          href="https://listen.style/p/gyoza"
          target="_blank"
          class="platformLogo">
          <img src="/podcast/Listen.png" alt="LISTEN" class="logo" />
        </a>

      </div>

      <div
        class="mt-8 bg-slate-50 w-64 p-4 cursor-pointer flex justify-center items-center gap-2 hover:opacity-80"
        @click="copyurl">
        <Icon name="bi:rss" class="text-black w-8 h-8" />
        <p v-if="copied" class="font-thin text-sm">RSSをコピーしました</p>
        <p v-else class="font-thin text-sm">RSSをコピー</p>
      </div>
    </section>

    <HubspotForm :formId="'28fd65cf-368d-41c4-b964-e8490da2cf7c'" class="mt-8 bg-slate-50 rounded-3xl"></HubspotForm>
  </main>
  <AppShare class="mt-8"></AppShare>
</template>

<style lang="postcss" scoped>
.platformLogo {
  @apply flex justify-center items-center p-4 bg-white rounded-3xl;
  @apply shadow-xl hover:shadow-2xl transition duration-1000;

  .logo {
    @apply scale-100 transition duration-1000;
  }
}
.platformLogo:hover .logo {
  @apply scale-110;
}
</style>