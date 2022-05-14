module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DDF',
          500: "#8257e6"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),

  ],
}
