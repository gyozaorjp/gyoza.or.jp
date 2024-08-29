<script setup lang="ts">
const formId = '24d5fabc-2156-443a-8ea7-1d54775307fb'
useSeoMeta({
  title: 'お問い合わせフォーム',
})
</script>

<template>
  <main class="container mx-auto py-16">
    <HubspotForm :formId class="mt-8 bg-slate-50 rounded-3xl">
      <template v-slot:header>
        <h1 class="font-bold text-3xl py-2 text-center">お問い合わせフォーム</h1>
        <p class="text-sm text-center">
          当サイトについてのお問い合わせ、取材お申し込み、当協会への加入お申し込みなど、ご用件もご記入ください。<br />
          ご要望、ご質問事項の内容に応じて担当の者より ご連絡させていただきます。
        </p>
      </template>
    </HubspotForm>
  </main>
</template>