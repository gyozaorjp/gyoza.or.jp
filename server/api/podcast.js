export default defineEventHandler((event) => {
  const url = process.env.API_PODCAT_JSON
  return $fetch(url)
})
