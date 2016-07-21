var gulp = require('gulp');
var path = require('path');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var livereload = require('gulp-livereload');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

gulp.task('default', function () {
    livereload.listen();
    return gulp.src('src/app.js')
      .pipe(webpackStream({
        module: {
          loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.js$/, loader: 'babel-loader', query: { presets: 'es2015' } },
            { test: /\.html$/, loader: 'mustache' }
          ]
        },
        stats: {
          colors: true
        },
        watch: true,
        devtool: 'source-map',
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
              sourceMap: true,
              comments: false
            }),
            new webpack.optimize.DedupePlugin(),
            new ExtractTextPlugin("style.css", {
                allChunks: true
            })
          ]
      }))
      .pipe(gulp.dest('dist/'))
      .pipe(livereload());
});
