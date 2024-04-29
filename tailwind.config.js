/** @type {import('tailwindcss').Config} */
module.exports = {
  /** 2024/04/04 - calc class 설정 */
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './src/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '640px' },
        md: { min: '641px', max: '1024px' },
      },
      width: {
        layout: 'calc(100% - 240px)',
      },
      transitionProperty: {
        custom: 'all',
      },
      transitionTimingFunction: {
        custom: 'ease-in-out',
      },
      transitionDelay: {
        custom: '1s',
      },
      gridTemplateRows: {
        info: 'repeat(2, 100px)',
        smInfo: 'repeat(3, 100px)',
      },
      gridTemplateColumns: {
        summray: '2fr 1fr 1fr',
        info: 'repeat(3, minmax(100px, 1fr))',
        smInfo: 'repeat(2, minmax(100px, 1fr))',
        stackDetail: '30% 70%',
        projectDetail: 'minmax(100px, auto) 1fr',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
};
