const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

async function sassGlobal() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    return gulp.src('./assets/scss/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./assets/css'));
}

gulp.task('sass-global', sassGlobal);

gulp.task('watch', function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass-global'));
});

gulp.task('default', gulp.series('sass-global', 'watch'));
