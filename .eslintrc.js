module.exports = {
  env: {
    es6: true,
  },
  plugins: ['fp', 'import'],
  rules: {
    'no-bitwise': 'error',
    'fp/no-let': 'error',
    'import/no-unresolved': 'error',
  },
}
