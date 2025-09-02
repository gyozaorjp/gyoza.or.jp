<template>
  <footer class="w-full bg-slate-50 p-4">
    <section class="bg-orange-50 p-4 sm:pb-8 my-4">
      <h2 class="text-center text-2xl sm:text-4xl font-bold">オフィシャルスポンサー</h2>
      <ul class="container mt-4 mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
        <li class="w-full sm:w-1/3">
          <a href="https://www.j-oil.com/" target="_blank" class="block shadow-md hover:shadow-xl">
            <img src="/img/joil/joil-corp.png" alt="株式会社J-オイルミルズ" class="w-full">
          </a>
        </li>
        <li class="w-full sm:w-1/3">
          <a href="https://www.foodservice-joyl.com/" target="_blank" class="block shadow-md hover:shadow-xl">
            <img src="/img/joil/joil-business.png" alt="業務用油脂サイト" class="w-full">
          </a>
        </li>
      </ul>
    </section>
    <NuxtLink to="/" aria-label="焼き餃子協会 Home">
      <img
        src="/img/common/title.png"
        alt="一般社団法人焼き餃子協会"
        class="w-64 mx-auto" />
    </NuxtLink>

    <Sitemap></Sitemap>

    <p class="px-4 mt-8 text-center font-thin">
      Copyright &copy;
      一般社団法人 焼き餃子協会 <br class="sm:hidden" />
      All Rights Reserved.
    </p>
  </footer>
</template>