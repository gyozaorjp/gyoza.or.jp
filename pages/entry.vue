<script setup lang="ts">
const key = 'entry'
const { data } = await useAsyncData(key, () => queryContent(key).findOne())
</script>

<template>
  <ContentRenderer :value="data">
    <NuxtLayout name="markdown" :title="data.title" :description="data.description">
      <ContentRendererMarkdown :value="data" class="contents" />
    </NuxtLayout>
  </ContentRenderer>

  <HomeEntry></HomeEntry>
  <AppContact v-if="data.contact"></AppContact>
</template>
