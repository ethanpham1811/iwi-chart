import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'green-dark': '#5e8b92',
        'green-light': '#75a0a6',
        'gray-dark': '#949494',
        'gray-light': '#d0d0d0'
      }
    }
  },
  plugins: []
}
export default config
