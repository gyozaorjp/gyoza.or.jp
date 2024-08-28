<template>
  <section>
    <HeaderAun
      :left="'/img/common/ic_h_project_01.png'"
      :right="'/img/common/ic_h_project_02.png'"
      class="mt-4">
      <h2 class="font-serif font-bold text-3xl sm:text-5xl text-center">コンテンツ</h2>
    </HeaderAun>

    <div class="container mx-auto flex flex-col sm:flex-row justify-center gap-4">
      <article class="contents-card relative flex flex-col justify-between items-center gap-y-4 p-4">
          <h1 class="text-xl">小野寺力式<br />餃子の焼き方</h1>
          <img src="/how/onodera2023.jpg" class="w-full drop-shadow-xl" />
          <p class="text-sm text-slate-700">誰でも簡単にキレイに美味しく焼ける方法をご紹介しています。</p>
          <NuxtLink to="/how" title="餃子の焼き方" class="absolute inset-0"></NuxtLink>
      </article>

      <article class="contents-card relative flex flex-col justify-between items-center gap-y-4 p-4">
        <h1 class="text-xl">Podcast<br />聴く餃子</h1>
        <div class="grow flex items-center">
          <img src="/podcast/cover.jpg" class="w-full drop-shadow-xl" />
        </div>
        <p class="text-sm text-slate-700">焼き餃子文化への愛を語る音声番組です。毎週火曜日に配信。</p>
        <NuxtLink to="/podcast" class="absolute inset-0"></NuxtLink>
      </article>

      <article class="contents-card relative flex flex-col justify-between items-center gap-y-4 p-4">
        <p class="text-xl">焼き餃子協会<br />公式グッズ販売</p>
        <div class="grow flex items-center">
          <img src="/img/top/tshirts-yellow.png" class="w-full drop-shadow-xl" />
        </div>
        <p class="text-sm text-slate-700">Tシャツやエプロン、アクスタなど各種雑貨を販売中。</p>
        <NuxtLink to="https://shop.gyoza.or.jp/" target="_blank" class="absolute inset-0"></NuxtLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.contents-card {
  @apply w-full sm:w-1/3 p-4 bg-gradient-to-br from-orange-500 to-orange-300 text-white;
  @apply transition duration-1000 opacity-100 hover:opacity-90;
}
</style>