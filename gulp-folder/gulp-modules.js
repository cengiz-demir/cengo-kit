const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const series = require('stream-series');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const rename = require('gulp-rename');
const fs = require('fs');
