<script setup>
defineProps([
  'bgcolor',
])
</script>

<template>
  <section class="p-4 flex flex-col gap-y-2" :class="[bgcolor]">
    <slot />
  </section>
</template>