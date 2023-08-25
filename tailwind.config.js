const withMT = require('@material-tailwind/react/utils/withMT')

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          '00': '#f9fafb',
          10: '#f3f4f6',
          20: '#e5e7eb',
        },
        main: '#475569',
        sub: '#6b7280',
        hover: '#94a3b8',
        success: {
          base: '#22c55e',
          main: '#16a34a',
        },
        error: {
          base: '#fecaca',
          main: '#dc2626',
        },
      },
    },
    zIndex: {
      loading: '2000',
      header: '1010',
      drawer: '1000',
      alert: '999',
      base: '0',
    },
  },
  plugins: [],
})
