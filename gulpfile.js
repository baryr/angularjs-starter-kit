const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

const scripts = require('./scripts');
const styles = require('./styles');
const templates = require('./templates');

const browserSync = require('browser-sync').create();

const buildDir = './dist/';

function browserSyncReload() {
    return browserSync.reload({
        stream: true
    })
}

function watch() {
    browserSync.init({
        server: {
            baseDir: buildDir
        }
    });
    gulp.watch(['./src/**/*.html']).on('change', html);
    gulp.watch(['./src/**/*.js']).on('change', js);
    gulp.watch(['./src/**/*.css']).on('change', css);
    gulp.watch(['./assets/**/*.*']).on('change', assets);
}

function html() {
    return gulp.src(templates)
      .pipe(gulp.dest(buildDir))
      .pipe(browserSyncReload())
}

function js() {
  return gulp.src(scripts)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
}

function css() {
  return gulp.src(styles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
}

function assets() {
    return gulp.src([
          'assets/**/*'
      ])
      .pipe(gulp.dest(buildDir))
      .pipe(browserSyncReload());
}


function clean(callBack) {
  del.sync([buildDir]);
  callBack();
};

function build(callBack) {
  return gulp.series(clean, html, js, css, assets)(callBack);
}

exports.clean = clean
exports.build = build
exports.watch = watch
