let gulp = require('gulp');

gulp.task('name', function() {

});

gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('src/assets'))
});