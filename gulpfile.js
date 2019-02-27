let gulp = require('gulp');
let sass = require('gulp-sass');
sass.compiler = require('node-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let minify = require('gulp-minify');


//compile scss to css
gulp.task('scss', function(){
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({includePaths: ['scss']}))
    .pipe(gulp.dest('./dist/css'));
});


//minify css
gulp.task('minify-css', function() {
  return gulp.src('./dist/css/sleek-gallery.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});


//minify js
gulp.task('minify-js', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
});


//copy js file 
gulp.task('copy-js', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(gulp.dest('./dist/js'))
});


//initialize and watch for changes
gulp.task('default', ['scss', 'minify-css', 'minify-js', 'copy-js'], function () {
	gulp.watch('src/scss/partials/*.scss', ['scss']);
	gulp.watch('src/scss/*.scss', ['scss']);
 	gulp.watch('dist/css/sleek-gallery.css', ['minify-css']);
 	gulp.watch('src/js/*sleek-gallery.js', ['minify-js', 'copy-js']);
});