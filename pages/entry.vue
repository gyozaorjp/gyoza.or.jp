<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <header class="hero relative w-full text-white" style="background-image: url(/img/common/visual-main_bg@pc.png)">
        <h1 class="py-20 text-2xl sm:text-3xl">{{ doc.title }}</h1>
      </header>
      <section class="mt-10 container max-w-xl mx-auto p-4">
        <ContentRenderer :value="doc" />
      </section>
    </ContentDoc>
  </main>
</template>

<style scoped lang="postcss">
:deep() h1 {
  @apply text-xl mt-8;
}

:deep() h2 {
  @apply mt-4 mb-2 font-black;
}

:deep() ul {
  @apply list-disc ml-6;
}

:deep() ol {
  @apply list-decimal ml-6;
}

</style>