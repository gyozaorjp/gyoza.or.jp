export const onRequest = async (context) => {
  const base = context.env.API_MICROCMS_BASE
  const api = context.params.api
  const parser = new URL(context.request.url)
  const query = parser.search

  try {
    const res = await fetch(base + api + query, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_MICROCMS_KEY,
      }
    })
    const text = await res.text()
    const response = new Response(text)
    response.headers.set('Content-Type', 'application/json;charset=utf-8')
    response.headers.append('Access-Control-Allow-Origin', '*')
    return response
  } catch (err) {
    console.error('ERROR', err)
    throw new Error(`Error: ${err}`)
  }
}