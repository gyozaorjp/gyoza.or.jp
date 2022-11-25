import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      'sans':  [
        'Noto Sans JP',
        'sans-serif'
      ],
      'serif': [
        'Noto Serif JP',
        'serif'
      ],
      'mono': [
        'Noto Sans Mono',
        'monospace'
      ],
    },
  },
  plugins: [
    // https://tailwindcss.com/docs/typography-plugin
    require("@tailwindcss/typography"),
    // https://daisyui.com/docs
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        gyoza: {
          "primary": "#671800",
          "secondary": "#D75050",
          "accent": "#D59B6C",
          "neutral": "#ae3b0b",
          "base-100": "#e5d3b8",
          "info": "#42AEBD",
          "success": "#489380",
          "warning": "#EB8014",
          "error": "#E01A2E",
        },
      },
    ],
  },  
}
