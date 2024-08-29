<template>
  <section
    class="background mt-20 w-full px-4 py-32 flex flex-col justify-center items-center gap-8">
    <p class="text-5xl text-white font-serif">お問い合わせ</p>
    <ul class="container w-full grid lg:grid-cols-2 gap-8">
      <li class="relative w-full bg-white/70 hover:bg-orange-50 transition duration-500 border border-orange-400 p-4 shadow-lg text-center text-2xl flex items-center justify-center">
        <p>フォームでのお問い合わせ</p>
        <NuxtLink to="/form" class="absolute inset-0" aria-label="フォームでのお問い合わせ"></NuxtLink>
      </li>
      <li class="relative w-full bg-white/70 hover:bg-orange-50 transition duration-500 border border-orange-400 p-4 shadow-lg text-center text-2xl flex items-center justify-center">
        <p>電話でのお問い合わせ<br />TEL 03-4446-6137</p>
        <a href="tel:03-4446-6137" class="absolute inset-0" aria-label="TEL 03-4446-6137"></a>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.background {
  @apply bg-[url('/img/top/contact_bg@pc.jpg')] bg-cover bg-center bg-no-repeat;
}
</style>