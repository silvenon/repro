const gulp = require('gulp')
const posthtml= require('gulp-posthtml')

const build = () => {
  return gulp.src('index.html')
    .pipe(posthtml([
      require('posthtml-expressions')({
        locals: {
          foo: undefined,
        },
      }),
    ]))
}

module.exports = {
  build,
}
