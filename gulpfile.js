var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade');

gulp.task('stylus',function(){
   gulp.src('app/css/**/*.styl')
       .pipe(stylus())
       .pipe(gulp.dest('dist/css'))
});

gulp.task('jade',function (){
    gulp.src('app/**/*.jade')
        .pipe(jade({
            pretty:true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('minify', function () {
    gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch',function(){
    gulp.watch('app/stylus/**/*.styl',['stylus']);
    gulp.watch('app/**/*.jade',['jade']);
    gulp.watch('app/js/**/*.js',['minify']);

});


gulp.task('default',['jade','stylus','minify']);