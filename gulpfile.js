const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');
const uglify=require('gulp-uglify');
const obfuscate=require('gulp-obfuscate');
const imagemin=require('gulp-imagemin');

// -----------------------------------------------------------------------
// função de compilaçao
function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .on('error', function(err) {
    console.error('Erro ao ler o arquivo:', err);
    })
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .on('error', function(err) {
    console.error('Erro ao compilar SASS:', err);
    })
    .pipe(gulp.dest('./build/style'))
    .on('error', function(err) {
    console.error('Erro ao escrever o arquivo:', err);
    })
    .on('end', function() {
    console.log('SASS compilado com sucesso!');
    });
}
//----------------------------------------------------------------------
// compilação de imagens------------------------------------------------
function compressImages(){
    return gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .on('data', function(file) {
        console.log(file.path + " foi comprimido");
    })
    .pipe(gulp.dest('./build/imagens'));
}
//----------------------------------------------------------------------
//compila e obfusca
function comprimiJs(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/script'));
}
//----------------------------------------------------------------------
exports.default = function() {
    gulp.watch('./source/style/*.scss', 
    { ignoreInitial: false }, gulp.series(compilaSass))
    gulp.watch('./source/imagens/*', 
    { ignoreInitial: false }, gulp.series(compressImages))
    gulp.watch('./source/script/*', 
    { ignoreInitial: false }, gulp.series(comprimiJs))
}

