var appRoot = 'app/';
var distRoot = 'build/';

module.exports = {
    root: appRoot,
    output: distRoot,
    sass: [
        appRoot + 'resources/sass/**/*.scss'
    ],
    html: appRoot + '*.html'
};
