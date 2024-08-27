<template>
  <div class="container mx-auto p-4 flex flex-col sm:flex-row justify-center gap-x-16 gap-y-4">
    <section>
      <p class="font-thin text-2xl py-2">協会概要</p>
      <ul class="mt-2 flex flex-col gap-y-1">
        <li>
          <NuxtLink to="/about" aria-label="焼き餃子協会について">焼き餃子協会について</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/entry" aria-label="入会ご案内">入会ご案内</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/transactionlaw" aria-label="特定商取引法に基づく表示">特定商取引法に基づく表示</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/antisocialist" aria-label="反社会的勢力に対する基本方針">反社会的勢力に対する基本方針</NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      <p class="font-thin text-2xl py-2">Links</p>
      <ul class="mt-2 flex flex-col gap-y-1">
        <li>
          <NuxtLink to="/how" aria-label="小野寺式 餃子の焼き方">小野寺式 餃子の焼き方</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/podcast" aria-label="Podcast 聴く餃子">Podcast 聴く餃子</NuxtLink>
        </li>
        <li>
          <a href="https://shop.gyoza.or.jp/" target="_blank" aria-label="焼き餃子協会 公式グッズ販売">焼き餃子協会 公式グッズ販売</a>
        </li>
        <li>
          <NuxtLink to="/supermarket" aria-label="焼き餃子協会セレクト餃子 展開店舗">焼き餃子協会セレクト餃子 展開店舗</NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      <p class="font-thin text-2xl py-2">Contact</p>
      <ul class="mt-2 flex flex-col gap-y-1">
        <li>
          <a href="https://share.hsforms.com/1gPwfyg1lRKePmkYJrluR2gd8bov" target="_blank" aria-label="フォームでのお問い合わせ">フォームでのお問い合わせ</a>
        </li>
        <li>
          <a href="tel:03-4446-6137" target="_blank" aria-label="電話でのお問い合わせ">電話でのお問い合わせ</a>
        </li>
      </ul>
    </section>
  </div>
  <div class="mt-4 flex justify-center items-center gap-x-4">
    <a href="https://x.com/YakiGyozaJapan" target="_blank" class="btn-icon" aria-label="X">
      <Icon name="prime:twitter" class="w-2/3 h-2/3" />
    </a>
    <a href="https://www.facebook.com/yaki.gyoza.japan/" target="_blank" class="btn-icon" aria-label="facebook">
      <Icon name="prime:facebook" class="w-full h-full" />
    </a>
    <a href="https://www.instagram.com/yaki.gyoza.japan/" target="_blank" class="btn-icon" aria-label="instagram">
      <Icon name="prime:instagram" class="w-full h-full" />
    </a>
    <a href="https://note.com/yaki_gyoza/m/m6c8cc8ac407b" target="_blank" class="btn-icon" aria-label="note">
      <img src="/img/common/note.svg" alt="note" class="w-full h-full" />
    </a>
  </div>
</template>

<style lang="postcss" scoped>
a {
  @apply text-orange-950;
}
.btn-icon {
  @apply bg-white p-2 rounded-xl w-12 h-12 shadow flex justify-center items-center;
}
</style>