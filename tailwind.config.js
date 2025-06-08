const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0057FF',
        'brand-dark': '#0046CC',
      },
      boxShadow: {
        card: '0 4px 24px -2px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
