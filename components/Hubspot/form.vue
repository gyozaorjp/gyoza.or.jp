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
      <slot name="header" />
    </header>
    <div class="max-w-xl mx-auto mt-8">
      <div id="hubspotForm" class="p-4 font-thin text-xl text-center text-orange-800">Loading...</div>
    </div>
  </section>
</template>