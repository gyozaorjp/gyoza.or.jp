<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <figure class="w-full">
    <div class="relative">
      <img :src="src" :alt="alt" class="w-full" />
      <a href="/how/onodera2023.pdf" download target="_blank" class="absolute inset-0" aria-label="Download PDF"></a>
    </div>
    <figcaption class="py-2">
      <slot />
    </figcaption>
  </figure>
</template>