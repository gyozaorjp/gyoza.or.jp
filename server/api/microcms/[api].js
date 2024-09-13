export default defineEventHandler((event) => {
  const api = getRouterParam(event, 'api')
  const query = getQuery(event)

  return $fetch(api, {
    baseURL: process.env.API_MICROCMS_BASE,
    query: query,
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_MICROCMS_KEY,
    },
  })
})
