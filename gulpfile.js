const gulp = require('gulp')
const { spawn } = require('child_process')
const server = require('browser-sync').create()
const postcss = require('postcss')
const fs = require('fs/promises')
const { plugins } = require('./postcss.config')

const processor = postcss(plugins)

async function compileStyles() {
  const css = await fs.readFile('main.css')
  const result = await processor.process(css, { from: 'main.css' })
  await fs.writeFile('public/style.css', result.css)
}

function watchStyles() {
  gulp.watch(['main.css', 'tailwind.config.js'], compileStyles)
}

function serve(done) {
  server.init({
    server: 'public',
    watch: true,
  }, done)
}

module.exports = {
  dev: gulp.series(compileStyles, gulp.parallel(watchStyles, serve)),
}
