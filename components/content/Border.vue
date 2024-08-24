<script setup>
defineProps([
  'bordercolor',
])
</script>

<template>
  <section class="border-8 border-solid p-4 text-lg flex flex-col gap-y-2" :class="[bordercolor]">
    <slot />
  </section>
</template>