import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os' // operative system info

console.log('Información del sistema operativo')
console.log('Nombre del sistema operativo: ', platform())
console.log('Versión del sistema operativo: ', release())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus()) // <--- Permite escalar procesos
console.log('Memoria libre: ', freemem() / 1024 / 1024)
console.log('Memoria total: ', totalmem() / 1024 / 1024)
console.log('Uptime: ', uptime() / 60 / 60 / 24)
