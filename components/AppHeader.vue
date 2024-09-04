<script setup lang="ts">
const menuExpand = ref(false)
</script>

<template>
  <header class="w-full z-50">
    <div class="relative bg-orange-800 shadow-xl z-10">
      <div class="relative h-16 container mx-auto px-4 flex justify-center items-center">
        <a href="/" aria-label="焼き餃子協会 Home">
          <img src="/img/common/logo-white.png" alt="一般社団法人焼き餃子協会" class="h-12" />
        </a>
        <button @click="menuExpand=!menuExpand" class="absolute right-4 inset-y-0 cursor-pointer" :class="{open:menuExpand}">
          <svg class="inline-block h-8 w-12 fill-slate-50" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
            <g>
              <path class="line line-1" d="M5 13h90v14H5z"/>
              <path class="line line-2" d="M5 43h90v14H5z"/>
              <path class="line line-3" d="M5 73h90v14H5z"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <nav
      class="absolute top-0 w-full bg-slate-50/90 backdrop-blur pt-16 pb-4 z-0 transition duration-1000 drop-shadow"
      :class="[menuExpand?'translate-y-0':'-translate-y-full']"
      @click="menuExpand=!menuExpand">
      <Sitemap></Sitemap>
    </nav>
  </header>
</template>

<style scoped>
.line {
  @apply transition duration-1000 opacity-100 rotate-0 translate-x-0 translate-y-0;
}
.line-1 {
  @apply origin-top-right;
}
.line-3 {
  @apply origin-bottom-right;
}
.open .line-1 {
  @apply -rotate-45;
}
.open .line-2 {
  @apply opacity-0;
}
.open .line-3 {
  @apply rotate-45;
}
</style>