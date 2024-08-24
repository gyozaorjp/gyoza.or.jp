<script setup lang="ts">
const attrs = useAttrs()

useSeoMeta({
  title: attrs.title,
  description: attrs.description,
})
</script>

<template>
  <header class="relative w-full text-white py-20 bg-[url('/img/common/visual-main_bg@pc.png')] flex justify-center items-center">
    <h1 class="font-serif font-black text-2xl sm:text-3xl">{{ attrs.title }}</h1>
  </header>
  <article class="container mx-auto px-4 py-16 max-w-3xl">
    <slot />
  </article>
</template>

<style lang="postcss" scoped>
::v-deep(.contents) {
  @apply flex flex-col gap-y-4;

  h1,h2 {
    @apply font-bold text-xl mt-4;
  }
  h3 {
    @apply font-bold text-base mt-4 pb-1 border-b-2 border-solid border-white;
  }
  h4 {
    @apply font-bold text-base;
  }

  ul,ol {
    @apply list-outside ml-4 flex flex-col gap-y-2;
    ul,ol {
      @apply mt-2;
    }
  }
  ul {
    @apply list-disc;
    ul {
      @apply list-[circle];
    }
  }

  ol {
    @apply list-decimal;
  }
}
</style>