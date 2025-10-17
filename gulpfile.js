const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

// Налаштування середовища
const isDev = process.env.NODE_ENV !== 'production';

// Шляхи до файлів
const paths = {
    src: {
        html: ['src/*.html', '!src/partials/**/*.html'],
        css: 'src/css/**/*.css',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        images: 'src/images/**/*',
        fonts: 'src/fonts/**/*'
    },
    dist: {
        base: 'docs/',
        css: 'docs/css/',
        js: 'docs/js/',
        images: 'docs/images/',
        fonts: 'docs/fonts/'
    }
};

// Очищення папки docs
function cleanDist() {
    return del(['docs/**/*']);
}

// Копіювання HTML файлів з обробкою includes (виключає partials)
function copyHTML() {
    return gulp.src(paths.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.dist.base))
        .pipe(browserSync.stream());
}

// Обробка CSS файлів
function processCSS() {
    let stream = gulp.src(paths.src.css);
    
    if (isDev) {
        stream = stream.pipe(sourcemaps.init());
    }
    
    stream = stream
        .pipe(autoprefixer({
            cascade: false
        }));
    
    if (isDev) {
        stream = stream.pipe(cleanCSS());
    }
    
    if (isDev) {
        stream = stream.pipe(sourcemaps.write('.'));
    }
    
    return stream
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
}

// Обробка SCSS файлів (якщо будуть використовуватися)
function processSCSS() {
    let stream = gulp.src(paths.src.scss);
    
    if (isDev) {
        stream = stream.pipe(sourcemaps.init());
    }
    
    stream = stream
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }));
    
    if (isDev) {
        stream = stream.pipe(cleanCSS());
    }
    
    if (isDev) {
        stream = stream.pipe(sourcemaps.write('.'));
    }
    
    return stream
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
}

// Обробка JavaScript файлів
function processJS() {
    // Спочатку копіюємо jQuery (завжди мініфікований)
    const jqueryTask = gulp.src('src/js/jquery-3.7.1.min.js')
        .pipe(gulp.dest(paths.dist.js));
    
    // Копіюємо всі інші JS файли окремо
    const copyOtherJsTask = gulp.src([
        'src/js/flickity-fade.js',
        'src/js/flickity.pkgd.js'
    ])
    .pipe(gulp.dest(paths.dist.js));
    
    // Потім обробляємо main.js окремо
    let mainJsStream = gulp.src('src/js/main.js');
    
    if (isDev) {
        mainJsStream = mainJsStream.pipe(sourcemaps.init());
    }
    
    const jsFileName = 'main.js';
    mainJsStream = mainJsStream
        .pipe(concat(jsFileName));
    
    // Minify only in development mode
    if (isDev) {
        mainJsStream = mainJsStream.pipe(uglify());
    }
    
    if (isDev) {
        mainJsStream = mainJsStream.pipe(sourcemaps.write('.'));
    }
    
    const mainJsTask = mainJsStream
        .pipe(gulp.dest(paths.dist.js))
        .pipe(browserSync.stream());
    
    return Promise.all([jqueryTask, copyOtherJsTask, mainJsTask]);
}

// Обробка зображень
function processImages() {
    return gulp.src(paths.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist.images));
}

// Копіювання шрифтів
function copyFonts() {
    return gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.dist.fonts));
}

// Налаштування BrowserSync для розробки
function serve() {
    browserSync.init({
        server: {
            baseDir: paths.dist.base
        },
        port: 3000,
        open: true,
        notify: false,
        reloadOnRestart: true,
        injectChanges: true
    });
}

// Спостереження за змінами файлів
function watchFiles() {
    gulp.watch(paths.src.html, copyHTML);
    gulp.watch('src/partials/**/*.html', copyHTML);
    gulp.watch(paths.src.css, processCSS);
    gulp.watch(paths.src.scss, processSCSS);
    gulp.watch(paths.src.js, processJS);
    gulp.watch(paths.src.images, processImages);
    gulp.watch(paths.src.fonts, copyFonts);
}

// Основні завдання
const build = gulp.series(
    cleanDist,
    gulp.parallel(
        copyHTML,
        processCSS,
        processSCSS,
        processJS,
        processImages,
        copyFonts
    )
);

const watch = gulp.series(build, gulp.parallel(serve, watchFiles));

// Експорт завдань
exports.clean = cleanDist;
exports.html = copyHTML;
exports.css = processCSS;
exports.scss = processSCSS;
exports.js = processJS;
exports.images = processImages;
exports.fonts = copyFonts;
exports.build = build;
exports.watch = watch;
exports.dev = watch;
exports.default = build;
