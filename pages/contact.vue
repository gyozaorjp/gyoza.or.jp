<script setup lang="ts">
interface Hubspot extends Window {
  hbspt: any;
}
declare const window: Hubspot;

const config = useRuntimeConfig()

const title = ref('お問い合わせ')

useHead({
  script: [
    {
      src: 'https://js.hsforms.net/forms/embed/v2.js',
      defer: true,
      children: `console.log(hbspt)`
    },
  ],
})

onMounted(() => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: config.HUBSPOT.REGION,
      portalId: config.HUBSPOT.PORTALID,
      formId: config.HUBSPOT.FORM.CONTACT,
      target: '#form'
    })
  }
  console.log(config.HUBSPOT)
})
</script>

<template>
  <article>
    <header class="hero relative w-full text-white" style="background-image: url(/img/common/visual-main_bg@pc.png)">
      <h1 class="py-20 text-2xl sm:text-3xl">お問い合わせ</h1>
    </header>

    <section class="mt-8 container mx-auto max-w-5xl">
      <p>
        当サイトについてのお問い合わせ、取材お申し込み、当協会への加入お申し込みなど、ご用件もご記入ください。<br />
        ご要望、ご質問事項の内容に応じて担当の者より ご連絡させていただきます。
      </p>
      <p class="mt-4 text-sm">
        ※このページをご利用の際は当サイトのプライバシーポリシーが適用されます。
      </p>

      <div id="form" v-once class="mt-8 p-4 bg-white">
        <div class="p-4 flex flex-col justify-center items-center gap-4">
          <p>フォーム読み込み中</p>
        </div>
      </div>
    </section>

  </article>
</template>
