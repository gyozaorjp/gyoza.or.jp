<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    { property: 'og:url', content: 'https://www.gyoza.or.jp' + route.path },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
