
export const onRequest = async (context) => {
  const url = context.env.API_PODCAST

  try {
    const res = await fetch(url)
    const text = await res.text()
    const response = new Response(text)
    response.headers.set('Content-Type', 'application/xml;charset=utf-8')
    return response
  } catch (err) {
    console.error('ERROR', err)
    throw new Error(`Error: ${err}`)
  }
}