const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("home/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: [] }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["home/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
