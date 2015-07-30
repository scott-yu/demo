require('./gulp/sass.js');
require('./gulp/server.js');
require('./gulp/watch.js');
require('./gulp/build.js');

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
    return runSequence(
        'watch',
        'serve',
        callback
    );
});
