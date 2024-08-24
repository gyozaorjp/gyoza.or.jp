export const onRequest = async ({request, params}) => {
  const url = 'https://note.com/api/v1/layout/magazine/m6c8cc8ac407b/section?page=1'

  try {
    const res = await fetch(url)
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