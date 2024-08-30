export default defineEventHandler((event) => {
  const url = process.env.API_NOTE
  return $fetch(url)
})
