var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../package.json').config;


gulp.task('sass', function () {
  return gulp.src(config.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('config.dist.css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});