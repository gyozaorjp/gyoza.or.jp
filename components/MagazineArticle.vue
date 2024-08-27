<script setup lang="ts">
import { useElementVisibility, useElementHover } from '@vueuse/core'
const target = ref(null)
const isVisible:boolean = useElementVisibility(target)
const isHovered:boolean = useElementHover(target)

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  magazineId: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <article
    ref="target"
    class="relative w-full flex flex-col justify-between transition-opacity duration-500">
    <div class="w-full overflow-hidden">
      <img :src="article.eyecatch" alt="" class="transition duration-1000 scale-125" :class="{isVisible, isHovered}" />
    </div>
    <div class="grow py-2 flex flex-col justify-between">
      <p class="text-sm font-thin">{{ $dayjs(article.publish_at).format('YYYY/MM/DD') }}</p>
      <p class="text-base py-2">{{ article.name }}</p>
      <p class="text-right text-sm font-thin">{{ article.user.name }}</p>
    </div>
    <a
      :href="`https://note.com/${article.user.urlname}/n/${article.key}?magazine_key=${magazineId}`"
      target="_blank"
      class="absolute inset-0"
      :aria-label="article.name"></a>
  </article>
</template>

<style lang="postcss" scoped>
.isVisible {
  @apply scale-100;
}
.isHovered {
  @apply scale-125;
}
</style>