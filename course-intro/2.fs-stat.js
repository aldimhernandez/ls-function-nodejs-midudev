const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')
const stats2 = fs.statSync('./archivo2.txt')
const stats3 = fs.statSync('./archivo3.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)

console.log(
  stats2.isFile(),
  stats2.isDirectory(),
  stats2.isSymbolicLink(),
  stats2.size
)

console.log(
  stats3.isFile(),
  stats3.isDirectory(),
  stats3.isSymbolicLink(),
  stats3.size
)
