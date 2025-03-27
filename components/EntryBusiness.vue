<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const target = ref(null)
const isVisible = useElementVisibility(target)
</script>

<template>
  <article
    ref="target"
    class="w-full bg-orange-800 text-white p-6 rounded-xl flex flex-col justify-between items-center gap-y-4 text-center shadow-2xl transition-transform duration-1000 scale-50"
    :class="{isVisible}">
    <p class="text-3xl font-bold">法人賛助会員</p>
    <NuxtLink
      to="/form/biz"
      class="block w-full p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-lg hover:scale-105 transition-transform duration-300">
      <span class="font-mono">60,000円</span> / 年会費
    </NuxtLink>
    <p class="text-sm">銀行振込 / クレジットカード決済</p>
  </article>
</template>

<style scoped>
.isVisible {
  @apply scale-100;
}
</style>