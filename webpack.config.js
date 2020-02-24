const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
  ],
}
