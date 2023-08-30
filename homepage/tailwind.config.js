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
        l_brown: '#897d78',
        m_brown: '#6f615c',
        brown: '#45372f',
        pink: '#e17877',
        babypink: '#ffe3e3',
        beige: '#f5f1ee',
        bg_beige: '#f4eae5f0',
        bg_peach: '#f9d8ced9',
        bg_gray: '#e2dae4',
      },
      width: {
        450: '450px',
      },
      height: {
        300: '300px',
        120: '120px',
      },
      borderWidth: {
        20: '20px',
      },
      screens: {
        xsm: { min: '360px', max: '767px' },
        xlg: { min: '1500px' },
      },
      strokeWidth: {
        3: '3px',
      },
      animation: {
        textAnimate: 'textAnimate 5s infinite alternate',
      },
      keyframes: {
        textAnimate: {
          '0%': {
            fill: 'hsl(0, 100%, 79%)',
          },
          '100%': {
            fill: 'hsl(48.75, 198%, 98%)',
          },
        },
      },
    },
  },
  plugins: [],
};
