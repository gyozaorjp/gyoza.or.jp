<script setup>
  const props = defineProps({
    url: String,
  })

  const {data:xml, error, reflesh} = await useFetch(props.url, {
    server: false
  })


  const items = (xml) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, 'application/xml')
    const items = Array.from(doc.getElementsByTagName('item'))
    items.length = 6
    return items
  }

  const getThumbnail = item => {
    const el = item.getElementsByTagName('media:thumbnail')[0]
    return el ? el.textContent :'/img/dummy.jpg'
  }

</script>
<template>
  <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <li
      class="note relative flex flex-col sm:p-0"
      v-for="item in items(xml)"
      :key="item.querySelector('guid').textContent">
      <div class="overflow-hidden w-full">
        <img :src="getThumbnail(item)" alt="" />
      </div>
      <p class="mt-2 text-xs">
        {{ $dayjs(item.querySelector('pubDate').textContent).format('YYYY/MM/DD') }}
      </p>
      <p class="mt-1 text-md">
        {{ item.querySelector('title').textContent }}
      </p>
      <a :href="item.querySelector('link').textContent"
        target="_blank"
        class="absolute inset-0"></a>
    </li>
  </ul>
</template>