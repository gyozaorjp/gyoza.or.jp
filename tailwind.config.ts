import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      'sans':  [
        'Noto Sans JP',
        'sans-serif',
      ],
      'serif': [
        'Noto Serif JP',
        'serif',
      ],
      'mono': [
        'Noto Sans Mono',
        'monospace',
      ],
    }
  },
  content: [],
  plugins: [],
}
