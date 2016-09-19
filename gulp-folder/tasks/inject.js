gulp.task('inject:js',['wiredep'], () => {
  return gulp.src('app/layouts/layouts/*.jade')
    .pipe($.inject(series(gulp.src('./app/scripts/app.js', {read: false}), gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(rename(function (path) {
      var paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: 'app',
      addRootSlash: false
    }))
    .pipe(gulp.dest('app/layouts/layouts/'));
});

