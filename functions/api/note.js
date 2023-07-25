export const onRequest = async ({request, params}) => {
  const magazineId = params.id
  const url = 'https://note.com/yaki_gyoza/m/m6c8cc8ac407b/rss'

  try {
    const res = await fetch(url)
    const text = await res.text()
    const response = new Response(text)
    response.headers.set('Content-Type', 'application/xml;charset=utf-8')
    response.headers.append('Access-Control-Allow-Origin', '*')
    return response
  } catch (err) {
    console.error('ERROR', err)
    throw new Error(`Error: ${err}`)
  }
}