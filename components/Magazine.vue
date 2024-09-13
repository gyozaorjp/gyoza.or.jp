<script setup lang="ts">
interface Note {
  key: string,
  eyecatch: string,
  publish_at: string,
  name: string,
  user: {
    name: string,
    urlname: string,
  }
}

interface Magazine {
  data: {
    section: {
      contents: Note[],
    };
  };
}

const magazineId = ref('m6c8cc8ac407b')
const { data:magazine } = await useLazyFetch<Magazine>('/api/note?page=1')
</script>

<template>
  <section class="max-w-7xl container mx-auto">
    <HeaderAun
      :left="'/img/common/ic_h_news_01.png'"
      :right="'/img/common/ic_h_news_02.png'"
      class="mt-4">
      <h2 class="font-serif font-bold text-5xl text-center">会員報</h2>
    </HeaderAun>

    <section v-if="magazine" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4">
      <MagazineArticle
        v-for="article in magazine.data.section.contents"
        :article="article"
        :magazineId="magazineId"></MagazineArticle>
    </section>
    <div v-else class="flex justify-center">
      <p class="text-center p-4">Loading...</p>
    </div>

    <div class="mt-8 px-4 flex justify-center">
      <a
        href="https://note.com/yaki_gyoza/m/m6c8cc8ac407b"
        target="_blank"
        class="w-full max-w-xl p-4 rounded-2xl sm:text-3xl text-center font-bold no-underline border border-solid border-orange-800 bg-gradient-to-r from-orange-100 to-orange-50 transition-opacity duration-500 opacity-80 hover:opacity-100">会員報一覧</a>
    </div>
  </section>
</template>