var gulp = require('gulp');
var paths = require('./paths.js');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var util = require('gulp-util');
var _ = require('lodash');

function reportChange(event){
    util.log('File ' + util.colors.magenta(event.path) + ' was ' + util.colors.blue(event.type) + ', running tasks...');
}

function watchInfo(name, watcher) {
    if (!watcher) return;
    util.log('Watching ', util.colors.magenta(_.keys(watcher._pollers).length), ' ', util.colors.blue(name), ' files.');
}

function processFiles(err, files) {
    util.log('Processing ', util.colors.magenta(files.length), ' files');
}


var createWatcher = function(name, glob, tasks, reloadBrowser) {

    if (reloadBrowser) tasks.push(browserSync.reload);

    gulp.watch(glob, tasks)
        .on('change', reportChange)
        .on('ready', function(watcher) { watchInfo(name, watcher); });
}

gulp.task('watch', ['build'], function () {
    // createWatcher('js', paths.js, ['build-js', 'eslint'], true);
    createWatcher('html', paths.html, [''], true);
    createWatcher('sass', paths.sass, ['sass'], false);
    createWatcher('css', paths.root + 'app.css', ['reloadCSS'], false);
});

gulp.task('reloadCSS', function() {
    gulp.src(paths.root + 'app.css')
        .pipe(reload({stream: true}));
})
