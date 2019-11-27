const gulp = require('gulp');
const gulpTaskListing = require('gulp-task-listing');
const del = require('del');

const buildDir = './dist/';


// BrowserSync
const browserSync = require('browser-sync').create();

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
  gulp.watch(['./src/**/*.html']).on('change', webpack);
  gulp.watch(['./src/**/*.js']).on('change', webpack);
  gulp.watch(['./src/**/*.scss']).on('change', webpack);
  gulp.watch(['./assets/**/*.*']).on('change', copyAssets);
}


// Webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const webpackStream = require('webpack-stream');
const path = require('path');

const webpackOptions = {
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  watch: false,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.(html)$/, use: 'html-loader'},
      { test: /\.(scss)$/, use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new NgAnnotatePlugin({
      add: true,
    })
  ]
};

function webpack() {
  return gulp.src([
      "./src/app.module.js",
      "./src/app/**/*.module.js"
    ])
    .pipe(webpackStream(webpackOptions))
    .pipe(gulp.dest(buildDir))
    .pipe(browserSyncReload())
};


// Main tasks:
function clean(callBack) {
  del.sync([buildDir]);
  callBack();
};

function build(callBack) {
  return gulp.series(clean, copyAssets, webpack)(callBack);
}

function build_watch(callBack) {
  return gulp.series(build, watch)(callBack);
}

function copyAssets() {
    return gulp.src([
          'assets/**/*'
      ])
      .pipe(gulp.dest(buildDir))
      .pipe(browserSyncReload());
}

exports.help = gulpTaskListing
exports.clean = clean
exports.build = build
exports.build_watch = build_watch
