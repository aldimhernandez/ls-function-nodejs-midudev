const { error } = require('node:console');
const fs = require('node:fs');

//* Read File Async with callbacks (NO SECUENCIAL)
console.log('Leyendo el archivo 1')
fs.readFile('./archivo.txt', 'utf-8', (error, text) => {
    text ? console.log('1: ', text) : console.log(`1 con manejo de errores: error: ${error}`)
});

console.log('Leyendo el archivo 1 sin manejo de errores')
fs.readFile('./archivo.txt', 'utf-8', (text) => {
    text ? console.log('1: ', text) : console.log(`1: error`)
});

console.log('Leyendo el archivo 2')
fs.readFile('./archivo2.txt', 'utf-8', (error, text2) => {
    text2 ? console.log('2: ', text2) : console.log(`2: error: ${error}`)
});

console.log('Leyendo el archivo 3')
fs.readFile('./archivo3.txt', 'utf-8', (error, text3) => {
    text3 ? console.log('3: ', text3) : console.log(`3: error: ${error}`)
});

console.log('Leyendo el archivo 4 (no existe)')
fs.readFile('./archivo4.txt', 'utf-8', (error, text4) => {
    text4 ? console.log('4: ', text4) : console.log(`4: error: ${error}`)
});

console.log('Leyendo el archivo 5')
fs.readFile('./archivo5.txt', 'utf-8', (error, text5) => {
    text5 ? console.log('5: ', text5) : console.log(`5: error: ${error}`)
});