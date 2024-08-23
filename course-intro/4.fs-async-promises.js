const { error } = require('node:console');
const fs = require('node:fs/promises');

//* Read File Async with promises
console.log('Leyendo el archivo 1')
fs.readFile('./archivo.txt', 'utf-8')
    .then((error, text) => {
        text ? console.log(`text 1: ${text}`) : console.log(`text 1 error: ${error}`)
    });

console.log('Leyendo el archivo 2')
fs.readFile('./archivo2.txt', 'utf-8')
    .then((error, text) => {
        text ? console.log(`text 2: ${text}`) : console.log(`text 2 error: ${error}`)
    });

console.log('Leyendo el archivo 3')
fs.readFile('./archivo3.txt', 'utf-8')
    .then((error, text) => {
        text ? console.log(`text 3: ${text}`) : console.log(`text 3 error: ${error}`)
    });

console.log('Leyendo el archivo 4 (no existe)')
fs.readFile('./archivo4.txt', 'utf-8')
    .then((error, text) => {
        text ? console.log(`text 4: ${text}`) : console.log(`text 4 error: ${error}`)
    });

console.log('Leyendo el archivo 5')
fs.readFile('./archivo5.txt', 'utf-8')
    .then((error, text) => {
        text ? console.log(`text 4: ${text}`) : console.log(`text 4 error: ${error}`)
    });