'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();

gulp.task('stylus', function(){
  return gulp.src('app/styl/**/main.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', gulp.series(gulp.parallel('stylus')));

gulp.task('watch', function(){
  gulp.watch('app/styl/**/*.*', gulp.series('stylus'));
});

gulp.task('serve', function(){
  browsersync.init({
    server: 'dist'
  });

  browsersync.watch('dist/**/*.*').on('change', browsersync.reload);
});
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
