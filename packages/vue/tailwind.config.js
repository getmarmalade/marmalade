module.exports = {
  purge: {
    options: {
      safelist: [
        /data-theme$/
      ]
    },
    content: ['./public/**/*.html', './src/**/*.vue', './node_modules/@unlabel/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui')
  ]
}
