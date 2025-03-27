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
    <div class="flex flex-col sm:flex-row gap-4 text-xl sm:text-lg text-orange-800 text-center">
      <a
        href="https://buy.stripe.com/dR64gJcZO3ck7qo4gm"
        target="_blank"
        class="block w-full sm:w-1/2 p-4 rounded-xl bg-white hover:scale-105 transition-transform duration-300">
        <span class="font-mono">5,000円</span> /年会費
      </a>
      <a
        href="https://buy.stripe.com/cN2dRj2la3ckbGEbIP"
        target="_blank"
        class="block w-full sm:w-1/2 p-4 rounded-xl bg-white hover:scale-105 transition-transform duration-300">
        <span class="font-mono">500円</span> /月会費
      </a>
    </div>
    <p class="text-sm">クレジットカード決済のみ</p>
  </article>
</template>

<style scoped>
.isVisible {
  @apply scale-100;
}
</style>