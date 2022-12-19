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
      <Footer class="mt-20 footer p-10 bg-base-200 text-base-content"></Footer>
    </NuxtLayout>
  </div>
</template>
