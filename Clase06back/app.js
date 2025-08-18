 /*
 Consigna:
En este ejercicio, crearás un programa que salude al usuario. El saludo
será personalizado y dependerá de dos cosas:
1. Una variable de entorno llamada GREETING que define el tipo de
saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!").
2. El nombre del usuario, que se obtendrá como argumento desde la
línea de comandos.

 */
 
 require('dotenv').config();
const GREETING = process.env.GREETING || 'Bienvenido';

const nombre = process.argv[2] || 'Invitado';
console.log(`${GREETING}, ${nombre}`);
