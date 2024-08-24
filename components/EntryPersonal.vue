<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const target = ref(null)
const isVisible = useElementVisibility(target)
</script>

<template>
  <article
    ref="target"
    class="w-full bg-orange-800 text-white p-6 rounded-xl flex flex-col justify-between gap-y-4 text-center shadow-2xl transition-transform duration-1000 scale-50"
    :class="{isVisible}">
    <p class="text-3xl font-bold">個人賛助会員</p>
    <p>年払か月払をお選び頂けます</p>
    <div>
      <p class="text-xl text-center">
        年払い <span class="font-mono ml-4">5,000円 / 1口</span><br />
        月払い<span class="font-mono ml-12">500円 / 1口</span>
      </p>
    </div>
    <p class="text-sm">※決済方法はクレジットカード決済のみ</p>
    <a
      href="https://share.hsforms.com/1g5PzUD4iTrCT5LnOfX1LNwd8bov"
      target="_blank"
      class="block w-full p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-2xl">
      個人賛助会員 ご入会申込み
    </a>
  </article>
</template>

<style scoped>
.isVisible {
  @apply scale-100;
}
</style>