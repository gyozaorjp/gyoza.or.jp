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
    <p class="text-xl sm:text-2xl">ご入会申込</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a
        href="https://buy.stripe.com/dR64gJcZO3ck7qo4gm"
        target="_blank"
        class="block w-full sm:w-1/2 p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-2xl">
        年払い
      </a>
      <a
        href="https://buy.stripe.com/cN2dRj2la3ckbGEbIP"
        target="_blank"
        class="block w-full sm:w-1/2 p-4 rounded-xl bg-white text-orange-800 text-center text-xl sm:text-2xl">
        月払い
      </a>
    </div>
  </article>
</template>

<style scoped>
.isVisible {
  @apply scale-100;
}
</style>