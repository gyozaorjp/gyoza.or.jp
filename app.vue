<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - ${config.public.title}` : config.public.title
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
