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
        violet: '#c8b6ff',
        l_brown: '#897d78',
        m_brown: '#6f615c',
        brown: '#45372f',
        pink: '#e17877',
        babypink: '#ffe3e3',
        dark_violet: '#5a189a',
        beige: '#f5f1ee',
        bg_beige: '#f4eae5f0',
        bg_peach: '#f9d8ced9',
        bg_gray: '#e2dae4',
        dark_black: '#101010',
        clean_white: '#fffafa',
        transparent_White: '#fffafa6e',
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
      boxShadow: {
        white_button:
          '-2px -2px 7px 0px #0001, 2px 2px 7px 0px rgb(255, 255, 255)',
      },
      screens: {
        xsm: { min: '360px', max: '767px' },
        xlg: { min: '1600px' },
      },
      strokeWidth: {
        3: '3px',
      },
      animation: {
        moveImageAnimate: 'moveAnimate 1.5s forwards 0s',
        moveTextAnimate: 'moveAnimate 1.5s forwards 0.5s',
        moveContentAnimate: 'moveAnimate 1.5s forwards 1s',
      },
      keyframes: {
        moveAnimate: {
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
