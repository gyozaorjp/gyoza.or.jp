<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const target = ref(null)
const isVisible = useElementVisibility(target)
</script>

<template>
  <section ref="target" class="background-base p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 flex justify-center">
    <div
      class="background-card p-8 flex flex-col justify-center items-center gap-y-8 shadow-2xl"
      :class="{isVisible}">
      <img src="/img/top/visual-top_h@pc.png" alt="" class="w-36 sm:w-40 md:w-48" />
      <p class="text-center text-sm sm:text-xl leading-relaxed text-white font-thin">
        焼き餃子協会は、美味しい餃子を<br />作る人と、美味しく焼く人、美味しく<br />食べる人をつなげる団体です。
      </p>
      <div class="w-full flex flex-col items-center gap-4 text-lg text-center font-bold">
        <a role="button" href="#about" class="btn">
          焼き餃子協会について
        </a>
        <a role="button" href="#entry" class="btn">
          入会案内
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.background-base {
  @apply bg-cover bg-center bg-no-repeat bg-[url('/img/top/visual-top_img@pc.jpg')];
}
.background-card {
  @apply bg-contain bg-center bg-repeat-y bg-[url('/img/top/visual-top_bg@sp.png')];
  @apply transition duration-1000 -translate-y-full opacity-0;
}
.background-card.isVisible {
  @apply translate-y-0 opacity-100;
}

.btn {
  @apply block w-full p-4 rounded-xl transition-all duration-1000 bg-gradient-to-r from-red-700 to-red-800 hover:to-red-600 text-white no-underline;
  @apply shadow-none hover:shadow-xl;
}
</style>