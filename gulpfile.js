var gulp = require('gulp'),
    del = require('del'),

    paths = {
        watch: ['app/design/frontend/rb/default/**', 'skin/frontend/rb/default/**']
    };

gulp.task('clean', function (next) {
console.log('cleaning...');
    del(['var/cache/'], next);
});

gulp.task('watch', function () {
    gulp.watch(paths.watch, ['clean']);
});

gulp.task('default', ['watch', 'clean'], function() {
    console.log('done');
});
