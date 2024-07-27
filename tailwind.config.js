/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: {
          dark: '#111111',
          soft: '#282828',
          darker: '#000000'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
