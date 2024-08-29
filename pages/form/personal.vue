<script setup lang="ts">
const formId = '723e50bd-b3c7-45c7-a9d9-8e16b45ad961'
useSeoMeta({
  title: '個人賛助会員 お申し込みフォーム',
})
</script>

<template>
  <main class="container mx-auto py-16">
    <HubspotForm :formId class="mt-8 bg-slate-50 rounded-3xl">
      <template v-slot:header>
        <h1 class="font-bold text-3xl py-2 text-center">個人賛助会員 お申し込みフォーム</h1>
        <p class="text-sm text-center">
          この度は焼き餃子協会の法人賛助会員にご関心をいただきありがとうございます。<br />
          焼き餃子協会事務局にて審査の上、個人賛助会員の登録可否をご連絡申し上げます。
        </p>
      </template>
    </HubspotForm>
  </main>
</template>