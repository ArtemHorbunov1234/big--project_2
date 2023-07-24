const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

function optimizeSVG() {
    return gulp.src('path/to/source/folder/*.svg').pipe(svgmin()).pipe(gulp.dest('path/to/destination/folder'));
}

// Создаем задачу 'svg' для оптимизации SVG-файлов
gulp.task('svg', optimizeSVG);
