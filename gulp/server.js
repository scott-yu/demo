var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('./paths');

gulp.task('serve', function(done) {
    browserSync({
        open: false,
        port: 9000,
        server: {
            baseDir: [paths.root]
        }
    }, done);
});
