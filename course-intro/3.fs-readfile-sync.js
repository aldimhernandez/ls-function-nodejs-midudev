const fs = require('node:fs');

//* Read File Sync
console.log('Leyendo el archivo 1')
const text = fs.readFileSync('./archivo.txt', 'utf-8');
text ? console.log(`text 1: ${text}`) : console.log(`Error al leer el archivo 1`)

console.log('Leyendo el archivo 2')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');
text2 ? console.log(`text 2: ${text2}`) : console.log(`Error al leer el archivo 2`)

console.log('Leyendo el archivo 3')
const text3 = fs.readFileSync('./archivo3.txt', 'utf-8');
text3 ? console.log(`text 3: ${text3}`) : console.log(`Error al leer el archivo 3`)

console.log('Leyendo el archivo 4')
const text4 = fs.readFileSync('./archivo4.txt', 'utf-8');
text4 ? console.log(`text 4: ${text4}`) : console.log(`Error al leer el archivo 4`)

console.log('Leyendo el archivo 5')
const text5 = fs.readFileSync('./archivo5.txt', 'utf-8');
text5 ? console.log(`text 5: ${text5}`) : console.log(`Error al leer el archivo 5`)