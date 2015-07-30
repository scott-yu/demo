var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');
var paths = require('./paths');

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(sass({
            sourceComments: 'map',
            sourceMap: 'sass',
            style: 'compact'
        }))
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest(paths.root));
});
