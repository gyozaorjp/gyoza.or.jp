export default defineEventHandler((event) => {
  const query = getQuery(event)
  const url = `${process.env.API_NOTE}?page=${query.page || 1}`
  return $fetch(url)
})
