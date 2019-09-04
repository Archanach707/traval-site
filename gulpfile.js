var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default',function() {
  console.log("Hoory - you created a gulp task.");
});

gulp.task('html', function(){
  console.log("imagine something useful being done to your HTML here.");
});

gulp.task('styles', function(){
  console.log("imaging Sass or postcss tast runing here.");
});

  watch('./app/index.html', function(){
    gulp.start('html');
  });

watch('./app/assets/styles/**/*.css', function(){
gulp.start('html')
});


});     