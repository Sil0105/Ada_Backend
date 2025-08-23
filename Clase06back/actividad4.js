/*
Crea un programa interactivo que pregunte al usuario su nombre y lo
use en un mensaje de despedida. Usa variables de entorno para
personalizar el saludo inicial.
Requisitos del programa:
1. Usa una variable de entorno llamada START_MESSAGE para
configurar el saludo inicial.
2. Usa readline para preguntar el nombre del usuario.
3. Despídete del usuario con un mensaje personalizado.
*/

require('dotenv').config();
const readLine = require('readline');
const START_MESSAGE = process.env.START_MESSAGE || 'Bienvenidos a la clase de Node.js';
console.log(START_MESSAGE);

const rl = readLine.createInterface({
    input : process.stdin,      
    output: process.stdout,     
});
rl.question('¿Cual es tu nombre? ',(nombre) => {
    console.log(`¡Nos vemos pronto, ${nombre}!`);
    rl.close()
    
});
rl.on('close', () => {
    process.exit(0)
});