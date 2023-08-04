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
            fill: 'hsl(0, 0%, 94%)',
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
