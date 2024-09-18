<script setup lang="ts">
const { data } = await useFetch('/api/microcms/news', {
  lazy: true,
  server: false,
})

const news = computed(() => data.value?.contents ?? [])
</script>

<template>
  <section v-if="news.length" class="w-full py-4 background">
    <div class="relative container mx-auto p-4 flex flex-col items-center">
      <h1 class="font-serif text-xl text-orange-50">News</h1>
      <UCarousel
        :items="news"
        :ui="{
          item: 'basis-full',
          indicators: {
            wrapper: 'relative bottom-0 mt-4'
          },
        }"
        indicators
        class="mt-4 px-8">
        <template #default="{ item }">
          <div class="max-w-xl mx-auto">
            <p class="text-white text-lg">{{ item.title }}</p>
            <div
              class="body flex flex-col gap-y-2 text-xs text-white"
              v-html="item.body"></div>
          </div>
        </template>
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>
.background {
  @apply bg-cover bg-center bg-no-repeat bg-[url('/img/top/visual-top_bg@sp.png')];
}


.body :deep(a) {
  @apply text-white;
}
</style>