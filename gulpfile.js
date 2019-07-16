var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		imagemin      = require('gulp-imagemin'),
		cache         = require('gulp-cache'),
		del           = require('del'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	})
});

gulp.task('styles', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/owl.carousel/owl.carousel.min.js',
		'app/js/common.js'
		])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.stream())
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('clean', function() { 
	return del('dist'); 
});

gulp.task('css', function() {
	return gulp.src('app/css/main.min.css') 
	.pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
	return gulp.src('app/js/scripts.min.js') 
	.pipe(gulp.dest('dist/js'))
});

gulp.task('dist', gulp.series('clean', gulp.parallel('imagemin', 'fonts', 'code', 'css', 'js')));

gulp.task('watch', function() {
		gulp.watch('app/scss/**/*.scss', gulp.parallel('styles'));
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
		gulp.watch('app/*.html', gulp.parallel('code'))
	});

gulp.task('default', gulp.series('clean', gulp.parallel('watch', 'styles', 'scripts', 'browser-sync')));
