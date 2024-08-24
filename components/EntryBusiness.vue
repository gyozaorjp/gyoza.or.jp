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
    <p class="text-xl text-center">年会費 <span class="font-mono ml-4">60,000円 / 1口</span></p>
    <p class="text-sm">※決済方法は銀行振込かクレジットカード決済</p>
    <a
      href="https://share.hsforms.com/1g5PzUD4iTrCT5LnOfX1LNwd8bov"
      target="_blank"
      class="block w-full p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-2xl">
      法人賛助会員 ご入会申込み
    </a>
  </article>
</template>

<style scoped>
.isVisible {
  @apply scale-100;
}
</style>