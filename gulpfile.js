var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
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

gulp.task('watch',function(){
    gulp.watch('app/stylus/**/*.styl',['stylus']);
    gulp.watch('app/**/*.jade',['jade']);

});


gulp.task('default',['jade','stylus']);