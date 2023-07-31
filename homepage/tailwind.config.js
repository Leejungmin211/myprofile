/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0a7c',
        yellow_green: '#f7ffe5',
        violet: '#5C469C',
        light_skyblue: '#98c1fa',
      },
      screens: {
        xsm: { min: '360px', max: '639px' },
      },
    },
  },
  plugins: [],
};
