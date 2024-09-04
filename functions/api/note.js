export const onRequest = async (context) => {
  const parser = new URL(context.request.url)
  const query = parser.search
  const url = context.env.API_NOTE

  try {
    const res = await fetch(url + query)
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