<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const target = ref(null)
const isVisible = useElementVisibility(target)

const props = defineProps({
  left: {
    type: String,
    required: true,
  },
  right: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header ref="target" class="flex justify-center items-center gap-8">
    <img :src="left" class="h-20 sm:h-28 translate-x-full transition-transform duration-1000" :class="{isVisible}" alt="">
    <slot />
    <img :src="right" class="h-20 sm:h-28 -translate-x-full transition-transform duration-1000" :class="{isVisible}" alt="">
  </header>
</template>

<style lang="postcss" scoped>
.isVisible {
  @apply translate-x-0;
}
</style>