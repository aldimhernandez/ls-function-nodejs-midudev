const fs = require('node:fs/promises');

//* IIFE - Immediately invoked function expression
(
  //* Read File ASÍNCRONO SECUENCIAL
  async () => {
    console.log('Leyendo el archivo 1 (vacío)')
    const text = await fs.readFile('./archivo.txt', 'utf-8')
    text ? console.log(`text 1: ${text}`) : console.log('Error al leer el archivo 1')

    console.log('Leyendo el archivo 2')
    await fs.readFile('./archivo2.txt', 'utf-8').then((error, text2) => {
      text2 ? console.log(`text 2: ${text2}`) : console.log(`Error al leer el archivo 2: ${error}`)
    })

    console.log('Leyendo el archivo 3')
    const text3 = await fs.readFile('./archivo3.txt', 'utf-8')
    text3 ? console.log(`text 3: ${text3}`) : console.log('Error al leer el archivo 3')

    console.log('Leyendo el archivo 4 (no existe)')
    const text4 = await fs.readFile('./archivo4.txt', 'utf-8')
    text4 ? console.log(`text 4: ${text4}`) : console.log('Error al leer el archivo 4')

    console.log('Leyendo el archivo 5')
    const text5 = await fs.readFile('./archivo5.txt', 'utf-8')
    text5 ? console.log(`text 5: ${text5}`) : console.log('Error al leer el archivo 5')
  })()
