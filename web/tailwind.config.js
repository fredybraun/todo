/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Josefin Sans',
      },
      spacing: {
        '526': '38rem',
        '542': '42rem',
      },
      colors: {
        'blue-deep': '#25273C',
        'blue-button': '#4777DB',
        'blue-deep-bg': '#161622',
        'gray-500': '#6C6E83'
      },
    },
    letterSpacing:{
      largest: '1.5rem'
    }
  },
  plugins: [],
}
