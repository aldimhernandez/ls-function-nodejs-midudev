const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al intentar leer el directorio')
  }

  files.forEach(file => {
    console.info(file)
  })
})
