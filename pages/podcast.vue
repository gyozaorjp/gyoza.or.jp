<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import Parser from 'rss-parser'
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


const { data, error, refresh } = await useAsyncData(
  'podcast',
  () => $fetch('/api/podcast')
)
const parser = new Parser()
const podcast = await parser.parseString(data.value)
</script>

<template>
  <PageHeader>Podcast 聴く餃子</PageHeader>
  <main class="relative container max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-y-8">
    <header class="bg-white p-4 rounded-xl border border-solid flex flex-col gap-y-4">
      <p>「聴く餃子」は、焼き餃子文化への愛を語る番組です。日本で進化した焼き餃子文化の魅力を、焼き餃子協会 代表理事・ぎょうざジョッキーの小野寺力が毎週火曜日にお送りしています。</p>
      <p class="text-sm">※「聴く餃子」は<a href="https://amzn.to/3VK4yvg" target="_blank">パラダイス山元師匠のエッセイ集「読む餃子」</a>からのインスパイアです。</p>
      <a href="#podcastform" class="mt-4 w-full max-w-lg mx-auto text-center text-white no-underline bg-orange-500 p-4 rounded-xl">
        聴く餃子 ご意見・ご感想フォーム
      </a>
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
          class="platformLogo"
          aria-label="Youtube Music">
          <img src="/podcast/YoutubeMusic.png" alt="Youtube Music" class="logo" />
        </a>

        <a
          href="https://music.amazon.co.jp/podcasts/31e4ebdd-538b-4146-9294-aa82b05e05f6/"
          target="_blank"
          class="platformLogo"
          aria-label="Amazon Music">
          <img src="/podcast/AmazonMusic.png" alt="Amazon Music" class="logo" />
        </a>

        <a
          href="https://listen.style/p/gyoza"
          target="_blank"
          class="platformLogo"
          aria-label="LISTEN">
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

    <section v-if="podcast && podcast.items.length > 0" class="mt-4 p-4 w-full flex flex-col gap-y-2 bg-slate-50">
      <h1 class="font-bold text-xl py-2">Podcast 聴く餃子 配信リスト</h1>
      <div v-for="ep in podcast.items" class="flex flex-col sm:flex-row justify-between items-center gap-x-4">
        <p class="font-thin font-mono text-xs self-start">{{ $dayjs(ep.pubDate).format('YYYY/MM/DD') }}</p>
        <p class="text-sm self-end w-full">
          <a :href="ep.link" target="_blank">{{ ep.title }}</a>
        </p>
      </div>
    </section>

    <HubspotForm id="podcastform" :formId="'28fd65cf-368d-41c4-b964-e8490da2cf7c'" class="mt-8 bg-slate-50 rounded-3xl">
      <template v-slot:header>
        <h1 class="font-bold text-3xl py-2 text-center">聴く餃子 ご意見・ご感想フォーム</h1>
        <p class="text-sm text-center">ご感想、ご意見、ご要望などいただけると、大変励みになります！</p>
      </template>
    </HubspotForm>
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