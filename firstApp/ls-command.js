const fs = require('node:fs/promises')
const path = require('node:path')
const color = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(color.red(`Error al intentar leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // status - info del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString().padEnd(5)
    const fileModified = stats.mtime.toLocaleString('es-ES')

    return `${color.black(fileType)} ${color.blue(file.padEnd(30))} ${color.green(fileSize)} ${color.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(fileInfo => console.info(fileInfo))
}

ls(folder)
