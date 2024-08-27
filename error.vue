<script setup lang="ts">
const error = useError();
</script>

<template>
    <AppHeader class="fixed"></AppHeader>
    <main class="pt-12 bg-[url('/img/top/contact_bg@pc.jpg')] bg-cover bg-center">
      <section class="py-64 bg-black/20 backdrop-blur flex flex-col justify-center items-center gap-y-2">
        <h1 class="text-5xl py-4 text-slate-50">HTTP {{ error?.statusCode }}</h1>
        <p class="text-xl text-slate-50">{{ error?.message }}</p>
        <p class="text-slate-200">{{ error.url }}</p>
        <NuxtLink to="/" class="mt-4 p-4 rounded-xl no-underline bg-white">トップページ</NuxtLink>
      </section>
    </main>
    <AppFooter class></AppFooter>
</template>