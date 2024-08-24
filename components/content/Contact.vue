<template>
  <section class="relative my-12 p-8 background transition-opacity duration-1000 hover:opacity-70">
    <div class="p-8 w-full bg-white/70 backdrop-opacity-10 flex flex-col justify-center items-center">
      <div class="p-4 text-center text-orange-950 text-xl">
        <slot />
      </div>
      <button class="bg-gradient-to-r from-orange-950 to-orange-200 text-white p-4 w-1/2 rounded-xl text-xl">お問い合わせ</button>
    </div>
    <a
      href="https://share.hsforms.com/1gPwfyg1lRKePmkYJrluR2gd8bov"
      target="_blank"
      class="absolute inset-0"></a>
  </section>
</template>

<style lang="postcss" scoped>
.background {
  @apply bg-[url('/img/top/contact_bg@pc.jpg')] bg-fixed bg-cover bg-center bg-no-repeat;
}
</style>