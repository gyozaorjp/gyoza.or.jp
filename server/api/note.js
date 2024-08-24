export default defineEventHandler((event) => {
  const url = 'https://note.com/api/v1/layout/magazine/m6c8cc8ac407b/section?page=1'
  return $fetch(url)
})
