//current working directory
console.log(process.cwd())

//platform
// console.log(process)

//?argumentos de entrada
console.log(process.argv);

//controlar el proceso de salida 0 is ok 1 is error
process.exit(0);

//podemos controlar eventos del proceso
process.on('exit', () => {
    //limpiar recursos
})
