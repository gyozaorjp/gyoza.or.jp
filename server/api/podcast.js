export default defineEventHandler((event) => {
  const url = process.env.API_PODCAST
  return $fetch(url, { parseResponse: (txt) => txt })
})
