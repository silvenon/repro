const gulp = require('gulp')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()
const postcssConfig = require('./postcss.config')

function serve() {
  browserSync.init({
    server: { baseDir: 'dist' },
  })
}

function views() {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({ once: true }))
}

function styles() {
  return gulp
    .src('src/index.css')
    .pipe(postcss(postcssConfig.plugins))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
}

function watch() {
  gulp.watch(['src/**/*.css', 'tailwind.config.js'], styles)
  gulp.watch('src/**/*.html', gulp.parallel(styles, views))
}

module.exports = {
  dev: gulp.parallel(views, styles, watch, serve),
  build: gulp.parallel(views, styles),
}
