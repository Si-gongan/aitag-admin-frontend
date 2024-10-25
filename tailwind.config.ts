/** @type {import('tailwindcss').Config} */

const rem0_10 = Object.fromEntries(Array.from(Array(11), (_, i) => [i, `${i / 10}rem`]));
const rem0_100 = Object.fromEntries(Array.from(Array(101), (_, i) => [i, `${i / 10}rem`]));
const rem0_2000 = Object.fromEntries(Array.from(Array(2001), (_, i) => [i, `${i / 10}rem`]));

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_2000,
      minHeight: rem0_2000,
      spacing: rem0_2000,
      colors: {
        primary: {
          100: '#FAFBFC',
          500: '#4C80F1',
        },
        red: { 200: '#FF8E89', 500: '#F24147' },
        gray: {
          100: '#EFEFEF',
          200: '#D9D9D9',
          300: '#B7B7B7',
          400: '#848484',
          500: '#4D5256',
        },
        black: '#000',
        white: '#FFF',
        overlay: 'rgba(0, 0, 0, 0.6)',
      },
      zIndex: {
        DEFAULT: '1',
        dropdown: '200',
        sticky: '400',
        popover: '600',
        overlay: '800',
        modal: '1000',
        toast: '1200',
      },
    },
  },
  plugins: [],
};
