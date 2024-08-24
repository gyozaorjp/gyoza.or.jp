<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const url = ref(runtimeConfig.public.SITE_URL + route.fullPath)

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
})

const text = computed(() => {
  const sitename = '一般社団法人焼き餃子協会'
  if (!props.title) return sitename
  return `${props.title} | ${sitename}`
})

const { copy, copied, isSupported } = useClipboard()

const copyurl = () => {
  copy(url.value)
}
</script>

<template>
  <section class="bg-slate-100 shadow-inner">
    <div class="container mx-auto px-4 sm:px-0 py-1 flex justify-center items-center gap-x-6">
      <p class="text-slate-500">Share</p>

        <a
          :href="`https://x.com/intent/tweet?url=${encodeURI(url)}&text=${encodeURIComponent(text)}&via=YakiGyozaJapan`"
          target="_blank"
          class="iconset">
          <Icon name="bi:twitter-x" class="h-6 w-6 text-black" />
          <span class="name">X</span>
        </a>

        <a
          :href="`https://www.facebook.com/share.php?u=${encodeURI(url)}`"
          target="_blank"
          class="iconset">
          <Icon name="bi:facebook" class="h-6 w-6 text-black" />
          <span class="name">facebook</span>
        </a>

        <a
          :href="`https://www.threads.net/intent/post?url=${encodeURI(url)}&text=${encodeURIComponent(text)}`"
          target="_blank"
          class="iconset">
          <Icon name="bi:threads" class="h-6 w-6 text-black" />
          <span class="name">Threads</span>
        </a>

        <a
          @click="copyurl"
          class="cursor-pointer iconset">
          <Icon name="bi:copy" class="h-6 w-6 text-black" />
          <span class="name" v-if="copied">URLをコピーしました</span>
          <span class="name" v-else>Copy URL</span>
        </a>
    </div>
  </section>
</template>

<style scoped>
.iconset {
  @apply p-2 flex items-center border border-solid border-slate-100;
}
.iconset:hover {
  @apply bg-white border-orange-200;
}
.iconset .name {
  @apply hidden px-4 text-xs;
}
.iconset:hover .name {
  @apply inline-block;
}
</style>