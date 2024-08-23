import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
  readFile('./archivo3.txt', 'utf-8')
]).then(([text, text2, text3]) => {
  console.log(`1: ${text}, 2: ${text2}, 3:${text3}`)
})
