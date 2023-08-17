/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // under: '',
        base: '#e5e7eb',
        main: '#475569',
        sub: '#6b7280',
      },
    },
    zIndex: {
      loading: '2000',
      header: '1010',
      drawer: '1000',
      base: '0',
    },
  },
  plugins: [require('flowbite/plugin')],
}
