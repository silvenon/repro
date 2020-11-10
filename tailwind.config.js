module.exports = {
  plugins: [require('@tailwindcss/typography')],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.orange.600'),
          },
        },
      },
    }),
  },
}
