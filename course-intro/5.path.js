const path = require('node:path');

//barra separadora de carpetas según SO
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//nombre del archivos mas extensión
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

//nombre del archivo sin extensión
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

//extensión del archivo
const extension = path.extname('my.super.image.jpg');
console.log(extension);