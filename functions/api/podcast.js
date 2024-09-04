import Parser from 'rss-parser'
const parser = new Parser()

export const onRequest = async (context) => {
  const url = context.env.API_NOTE

  try {
    return parser.parseURL(url)
  } catch (err) {
    console.error('ERROR', err)
    throw new Error(`Error: ${err}`)
  }
}