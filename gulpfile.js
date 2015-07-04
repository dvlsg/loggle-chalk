var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var eslint  = require('gulp-eslint');
var plumber = require('gulp-plumber');
var babel   = require('gulp-babel');
var del     = require('del');

var srcDir = './src/';
var srcGlob = srcDir + '*.js';

var distDir = './dist/';
var distGlob = distDir + '*.js';

gulp.task('lint', function() {
    return gulp.src(srcGlob)
        .pipe(eslint()) // config in .eslintrc
        .pipe(eslint.format())
});

gulp.task('clean', function() {
    return del(distDir);
});

gulp.task('build', ['lint'], function() {
    return gulp.src(srcGlob)
        .pipe(plumber())
        .pipe(babel()) // config in .babelrc
        .pipe(plumber.stop())
        .pipe(gulp.dest(distDir))
});

gulp.task('watch', ['build'], function() {
    gulp.watch(srcGlob, ['build']);
});

gulp.task('default', ['lint']);
