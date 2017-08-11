var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var ngTemplates = require('gulp-ng-templates');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer');

var sourceFiles = require('./source-files');

gulp.task('app:html', function () {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('app:templates', function () {
    gulp.src(sourceFiles.templates)
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'app.templates',
            path: function(path, base) {
                return path.replace(base, '').split('/')[1];
            }
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('app:vendor', function () {
    gulp.src(sourceFiles.vendorScripts)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('app:scripts', function () {
    gulp.src(sourceFiles.appScripts)
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('app:styles', function () {
   gulp.src(sourceFiles.css)
       .pipe(concat('styles.css'))
       .pipe(sass().on('error', sass.logError))
       .pipe(cleanCSS({compatibility: 'ie8'}))
       .pipe(autoprefix({
           browsers: ['last 2 versions'],
           cascade: false
       }))
       .pipe(gulp.dest('dist'))
});

gulp.task('app:build', [
    'app:html',
    'app:templates',
    'app:vendor',
    'app:scripts',
    'app:styles'
]);

gulp.task('app:watch', function () {
    gulp.watch(sourceFiles.appScripts, ['app:scripts']);
    gulp.watch(sourceFiles.templates, ['app:templates']);
    gulp.watch(sourceFiles.vendorScripts, ['app:vendor']);
    gulp.watch(sourceFiles.css, ['app:styles']);
});