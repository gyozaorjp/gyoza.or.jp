<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <header class="hero relative w-full text-white py-20" style="background-image: url(/img/common/visual-main_bg@pc.png)">
        <h1 class="py-20 text-2xl sm:text-3xl">{{ doc.title }}</h1>
      </header>
      <section class="container max-w-xl mx-auto p-4">
        <ContentRenderer :value="doc" />
      </section>
    </ContentDoc>
  </article>
</template>

<style scoped lang="postcss">
:deep() h1 {
  @apply text-2xl py-4 mt-8;
}

:deep() h2 {
  @apply py-3 mt-3 text-lg font-black;
}

:deep() h3 {
  @apply py-3 mt-3 font-black;
}

:deep() p {
  @apply my-3;
}

:deep() ul {
  @apply list-disc ml-6;
}

:deep() ol {
  @apply list-decimal ml-6;
}

:deep() li {
  @apply py-1;
}

:deep() a[href^="http"],
:deep() a[href^="/"] {
  @apply underline underline-offset-4 decoration-dashed decoration-1;
}



</style>