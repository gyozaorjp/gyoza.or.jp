<script setup lang="ts">
const route = useRoute()
const key = route.path
const { data } = await useAsyncData(key, () => queryContent(key).findOne())

if (!data.value) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<template>
  <ContentRenderer :value="data">
    <NuxtLayout name="markdown" :title="data.title" :description="data.description">
      <ContentRendererMarkdown :value="data" class="contents" />
    </NuxtLayout>
  </ContentRenderer>

  <HomeEntry v-if="key==='/entry'"></HomeEntry>

  <AppShare class="mt-8" :title="data.title"></AppShare>

  <LazyAppContact id="contact" v-if="data.contact"></LazyAppContact>
</template>