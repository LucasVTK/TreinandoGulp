
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function minJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilandoSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest('./build/styles'))
}


exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial:false },  gulp.series(compilandoSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial:false },  gulp.series(minJs))
    gulp.watch('./source/images/*',{ignoreInitial:false },  gulp.series(comprimeImagens))
}

