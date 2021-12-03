const plugin = require('tailwindcss/plugin')

module.exports = {
  safelist: ['test'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('my-variant', '&:where(.one, .two)')
      // addVariant('my-variant', ({ modifySelectors, separator }) => {
      //   return modifySelectors(({ className }) => {
      //     console.log(`.my-variant${separator}${className}:where(.one, .two)`)
      //     return `.${className}${separator}my-variant:where(.one, .two)`
      //   })
      // })
    })
  ],
}
