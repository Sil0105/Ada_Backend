/*
Tu tarea es escribir un programa interactivo que permita al usuario
ingresar dos números y calcule su suma. Este ejercicio te ayudará a
practicar el uso del módulo readline para leer entradas del usuario en la
consola.
Requisitos del programa:
1. Usa el módulo readline para crear una interfaz interactiva.
2. Pide al usuario que ingrese dos números, uno a la vez.
3. Calcula y muestra la suma de los dos números.
4. Finaliza el programa con un mensaje de agradecimiento.
*/

const readLine = require('readline')

const rl = readLine.createInterface({
    input : process.stdin,      
    output: process.stdout,     
});
rl.question('Introduce el primer número: ',(num1) => {
    rl.question('Introduce el segundo número: ',(num2) => {
        const suma = parseFloat(num1) + parseFloat(num2);
        console.log(`El resultado de la suma es ${suma}`);
        rl.close()
        
    })
});

rl.on('close', () => {
    console.log(`Hasta luego, ¡Nos vemos la próxima!`);
    process.exit(0)
});