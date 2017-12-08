var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean-css");

gulp.task("sass", function() {
    gulp.src("static/css/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(clean())
        .pipe(gulp.dest("static/css/"));
});
gulp.task("default", function() {
    gulp.watch(["static/css/*.scss"],["sass"]);
});
