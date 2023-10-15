let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

let route = "assets";

sass.compiler = require('node-sass');

var config = {
	dev: {
		sass: {
            precision: 6,
            outputStyle: 'expanded'
		},
        autoprefixer: {
            add: false,
            overrideBrowserslist: ['> 3%', 'last 2 versions', 'ie > 9', 'ios > 5', 'android > 3'],
            cascade: true
		}
	}
};

gulp.task('sass-to-css', () => {
    return gulp.src(route + '/scss/**/*.scss')
        .pipe(sass(config.dev.sass).on('error', sass.logError))
		.pipe(autoprefixer(config.dev.autoprefixer))
        .pipe(gulp.dest(route + '/css'));
});

gulp.task('watch', function () {
	gulp.watch(route + '/scss/**/*.scss', gulp.series('sass-to-css'));
});

gulp.task('default', gulp.parallel('sass-to-css', 'watch'));
