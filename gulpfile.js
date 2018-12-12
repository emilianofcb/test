var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var gcmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');

var input   = 'sass/**/*.scss';
var output  = './prestashop/themes/PRS01/assets/css/';

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src(input)
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gcmq())
        .pipe(gulp.dest('./sass'));
});

// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('./sass/*.css')
    //The method pipe() allow you to chain multiple tasks together
    //I execute the task to minify the files
        .pipe(cleanCSS())
        //I define the destination of the minified files with the method dest
        .pipe(gulp.dest(output));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'minify-css']);