<script setup>
const props = defineProps({
  align: {
    type: String,
    required: false,
  },
  padding: {
    type: String,
    required: false,
  },
})

const tw = ref([])
tw.value.push('font-thin')

if (props.align) {
  tw.value.push(`text-${props.align}`)
}
if (props.padding) {
  tw.value.push(props.padding)
}

</script>

<template>
  <div :class="tw">
    <slot />
  </div>
</template>