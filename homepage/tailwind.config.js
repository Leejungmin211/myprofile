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
        120: '120px',
        150: '150px',
        450: '450px',
      },
      height: {
        300: '300px',
        120: '120px',
      },
      fontSize: {
        140: '140px',
      },
      borderWidth: {
        20: '20px',
      },
      screens: {
        xsm: { min: '360px', max: '767px' },
        xlg: { min: '1600px' },
      },
      strokeWidth: {
        3: '3px',
      },
      animation: {
        textAnimate: 'textAnimate 5s infinite alternate',
        moveImageAnimate: 'moveAnimate 1.5s forwards 0s',
        moveTextAnimate: 'moveAnimate 1.5s forwards 0.5s',
        moveContentAnimate: 'moveAnimate 1.5s forwards 1s',
      },
      keyframes: {
        textAnimate: {
          '0%': {
            fill: 'rgb(244 63 94)',
          },
          '100%': {
            fill: 'hsl(48.75, 198%, 98%)',
          },
        },
        moveAnimate: {
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};
