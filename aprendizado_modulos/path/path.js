const path = require('path')

console.log(path.basename('c:\\temp\\arquivo.html'))
console.log('basename: ', path.basename('c:\\temp\\arquivo.html')) //mostra caminho
console.log('normalize: ', path.normalize('c:\\temp/dir//subdir/dir/..')) //ajusta os caminhos
console.log('join path: ', path.join('/teste', '/teste2', '/teste3/teste4', 'dir2', '..')) //concatena
console.log('resolve: ', path.resolve('path.js')) //caminho absoluto
console.log('extname (extension ): ', path.extname('path.js')) //extensao do arquivols