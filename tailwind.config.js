/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/infra/components/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
    './src/app/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#6130b3',
      primaryDark: '#1F073B',
      white: '#ffffff',
      'gray-100': '#f1f5f9',
      'gray-400': '#94a3b8',
      'gray-500': '#64748b',
      'gray-500': '#475569',
      'gray-900': '#111827',
      'red-600': '#dc2626',
      rose: '#E8507F',
    },
    extend: {},
  },
  plugins: [],
};
