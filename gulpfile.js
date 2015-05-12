var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');


gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('copybootstrap', function() {
    gulp.src('./bower_components/bootstrap/less/**/*')
        .pipe(gulp.dest('./src/less/bootstrap'));
});

gulp.task('less', function () {
    return gulp.src('./src/less/styles.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['less']); //listen for changes to less files in root less dir
});