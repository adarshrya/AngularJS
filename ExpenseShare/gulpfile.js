var gulp = require('gulp');

var appDev = 'assets/app/';
var appProd = 'public/app/';
var vendor = 'public/js/vendor';

/* JS & TS */
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = typescript.createProject('tsconfig.json');


gulp.task('build-ts', function() {
    return gulp.src(appDev + '**/*.ts')

    .pipe(typescript(tsProject))
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function() {

    return gulp.src([appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
        .pipe(gulp.dest(appProd));
});

gulp.task('vendor', function() {

    // Angular 2 Framework
    gulp.src('node_modules/@angular/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest(vendor + '/@angular'));

    //ES6 Shim
    gulp.src('node_modules/es6-shim/es6-shim.min.js')
        .pipe(gulp.dest(vendor + '/es6-shim/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/dist/system.src.js')
        .pipe(gulp.dest(vendor + '/systemjs/dist/'));

    gulp.src('node_modules/systemjs/dist/system-polyfills.js')
        .pipe(gulp.dest(vendor + '/systemjs/dist/'));


    //zonejs
    gulp.src('node_modules/zone.js/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest(vendor + '/zone.js/'));

    //memory-web-api
    return gulp.src('node_modules/angular2-in-memory-web-api/**/*.+(ts|js|js.map)')
        .pipe(gulp.dest(vendor + '/angular2-in-memory-web-api/'));

});

gulp.task('watch', function() {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.{html,htm,css}', ['build-copy']);
});

gulp.task('default', ['watch', 'build-ts', 'build-copy']);
