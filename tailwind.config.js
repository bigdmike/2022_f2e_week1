/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['kongtext', 'cubic', 'Noto Sans TC', 'sans-serif'],
        noto_sans: ['Noto Sans TC', 'sans-serif'],
      },
      colors: {
        primary_blue: '#52C4CC',
        primary_purple: '#6633FF',
        primary_orange: '#FF7A00',
        primary_yellow: '#FBBF00',
        primary_black: '#131415',
      },
    },
  },
  plugins: [],
};
