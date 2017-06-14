/**
 * Required plugins
 */
const gulp = require('gulp');
const gulpif = require('gulp-if');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const useref = require('gulp-useref');
const babili = require("gulp-babili");
const inject = require('gulp-inject');
const browserSync = require('browser-sync').create();
const config = require('./config.json');

/**
 * Sass processing
 */
gulp.task('sass', function() {
  return gulp.src(config.app.sass.src)
    .pipe(sass())
    .pipe(gulp.dest(config.app.sass.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
});

/**
 * Minify CSS files
 */
gulp.task('minify-css', function() {
  return gulp.src(config.app.css.src)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.app.css.dest));
});

/**
 * Inject javascript file references to index.html file
 * THREE.js goes first, so other js files won't break
 */
gulp.task('index', function () {
    return gulp.src(config.app.html.index)
        .pipe(inject(gulp.src(['./app/js/vendor/three.min.js','./app/js/vendor/**/*.js'], {read: false}), {relative: true}))
        .pipe(gulp.dest('app/'));
});

/**
 * Check javascript for syntax errors
 */
gulp.task('lint', function() {
    return gulp.src(['./app/js/**/*.js','!app/js/vendor/*.js'])
        .pipe(jshint({esversion: 6}))
        .pipe(jshint.reporter('default', { verbose: true }));
});

/**
 * Watch project files and reload the screen
 * Reloads the browser whenever HTML or JS files change
 */
gulp.task('watch', function (){
    gulp.watch(config.app.sass.src, gulp.series('sass'));
    gulp.watch(config.app.html.src, gulp.series(browserSync.reload));
    gulp.watch(config.app.js.src).on('change', gulp.series('lint', browserSync.reload));
});

/**
 * Automatic Browser reload
 */
gulp.task('browserSync', function(callback) {
    browserSync.init({
        server: {
          baseDir: config.app.baseDir
        }
    }, callback)
});

/**
 * JS concatenation and minification
 */
gulp.task('useref', function(){
    return gulp.src(config.app.html.src)
        .pipe(useref())
        .pipe(gulpif('*.js', babili()))
        .pipe(gulp.dest('dist'))
});

/**
 * Clean production dist folder
 */
gulp.task('clean:dist', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

/**
 * Copy the required assets folders to the dist folder
 */
gulp.task('copy-assets-folder', function(){
    return gulp.src(config.app.assets.src)
        .pipe(gulp.dest(config.app.assets.dest));
});

/**
 * Default task for development environment
 */
gulp.task('default', gulp.series(gulp.parallel('sass', 'index', 'lint'), 'browserSync',  'watch'));

/**
 * Build task for production environment
 */
gulp.task('build', gulp.series('clean:dist', gulp.parallel('copy-assets-folder', 'useref')));