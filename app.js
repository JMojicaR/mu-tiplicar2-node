//const fs = require('fs')
const  argv = require('./config/yargs').argv;

const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar')
//let base = 4
let comando = argv._[0]
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(e => console.log(e))
    break;
    default:
        console.log('Comando no reconocido');
}
//let argv2 = process.argv
//let parametro = argv[2]
//let base = parametro.split('=')[1]
/* let data = ''
for(let i = 1; i<=10; i++){
    data += `${base}*${i} = ${base*i}\n`;
}

fs.writeFile(`03-bases-node/tablas/tabla-${base}.txt`, data, (err) => {
    if(err) throw err
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
}) */

/* crearArchivo(base).then(archivo => {
    console.log(`Archivo creado: ${archivo}`);
}).catch(e => console.log(e)) */