<script setup lang="ts">
const formId = 'cbd69571-e533-435d-8c0b-59bd86461aef'
useSeoMeta({
  title: '法人賛助会員 お申し込みフォーム',
})
</script>

<template>
  <main class="container mx-auto py-16">
    <HubspotForm :formId class="mt-8 bg-slate-50 rounded-3xl">
      <template v-slot:header>
        <h1 class="font-bold text-3xl py-2 text-center">法人賛助会員 お申し込みフォーム</h1>
        <p class="text-sm text-center">法人賛助会員の登録は審査を行わせていただいております。</p>
      </template>
    </HubspotForm>
  </main>
</template>