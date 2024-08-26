<script setup lang="ts">
const props = defineProps({
  formId: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  const script = document.createElement("script");
  script.src="https://js.hsforms.net/forms/v2.js";
  document.body.appendChild(script);

  script.addEventListener("load", () => {
    hbspt.forms.create({
      region: "na1",
      portalId: "22223407",
      formId: props.formId,
      target: '#hubspotForm',
    });
  })
})
</script>

<template>
  <section class="w-full p-4">
    <header class="flex flex-col gap-y-4">
      <h1 class="font-bold text-3xl py-2 text-center">聴く餃子 ご意見フォーム</h1>
      <p class="text-sm text-center">ご感想、ご意見、ご要望などいただけると、大変励みになります！</p>
    </header>
    <div class="max-w-xl mx-auto mt-8">
      <div id="hubspotForm" class="p-4 font-thin text-xl text-center text-orange-800">Loading...</div>
    </div>
  </section>
</template>