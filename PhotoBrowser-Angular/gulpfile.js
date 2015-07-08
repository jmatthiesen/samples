var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("build", function () {
    return gulp.src("Scripts/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat("all.js"))
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("wwwroot/app"));
});

gulp.task("watch", function () {
    return gulp.watch("Scripts/**/*.js", ["build"]);
})