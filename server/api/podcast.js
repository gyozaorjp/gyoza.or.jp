import Parser from 'rss-parser'
const parser = new Parser()

export default defineEventHandler((event) => {
  const url = process.env.API_PODCAST
  return parser.parseURL(url)
  //return $fetch(url, { parseResponse: (txt) => txt })
})
