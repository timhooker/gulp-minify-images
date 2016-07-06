const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const src = './src'
const dist = './dist'

gulp.task('default', () =>
	gulp.src(src)
		.pipe(imagemin())
		.pipe(gulp.dest(dist))
);