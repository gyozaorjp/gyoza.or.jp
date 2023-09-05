<script setup lang="ts">
const title = ref('お問い合わせありがとうございます。')
useHead({
  title,
  meta: [
    { property: 'og:title', content: title },
  ],
})
</script>

<template>
  <NuxtLayout>
  <article class="pt-12">
    <header class="hero relative w-full text-white" style="background-image: url(/img/common/visual-main_bg@pc.png)">
      <h1 class="py-20 text-2xl sm:text-3xl">{{ title }}</h1>
    </header>

    <section class="mt-10 container max-w-xl mx-auto p-4">

      <section class="mt-8 flex flex-col gap-y-4 p-4 bg-white text-sm">
        <h2 class="text-xl">一般社団法人焼き餃子協会へお問い合わせ送信完了</h2>
        <p>
          数日以内にご連絡がない場合は、お手数ですが 焼き餃子協会 小野寺 chikara@gyoza,or.jp までご連絡ください。
        </p>
        <p>
          （営業関連のお問い合わせはお返事をしないことがございます）
        </p>
      </section>

    </section>

  </article>
  </NuxtLayout>
</template>

<style scoped lang="postcss">
</style>