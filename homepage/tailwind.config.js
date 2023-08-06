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
        beige: '#f5f1ee',
        bg_beige: '#f4eae5f0',
        bg_peach: '#f9d8ced9',
        bg_gray: '#e2dae4',
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
            'stroke-dasharray': '0 50%',
            'stroke-dashoffset': '20%',
            fill: 'hsl(0, 100%, 79%)',
          },
          '100%': {
            'stroke-dasharray': '50% 0',
            'stroke-dashoffset': '-20%',
            fill: 'hsla(189, 68%, 75%, 0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
