/*
Crea un programa interactivo que permita convertir temperaturas de
grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso
del módulo readline para manejar entradas del usuario y aplicar cálculos
básicos. Además, incluye un mensaje personalizado de bienvenida
configurado a través de variables de entorno.
Requisitos del programa:
1. Usa una variable de entorno llamada WELCOME_MESSAGE para
mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al
conversor de temperaturas!" por defecto.
2. Usa el módulo readline para solicitar al usuario una temperatura en
grados Celsius.
3. Calcula la conversión a Fahrenheit usando la fórmula:
°F = (°C × 9/5) + 32
4. Muestra el resultado en la consola.
5. Despídete del usuario al final.
*/

require('dotenv').config();
const readLine = require('readline');   
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || '¡Bienvenido al conversor de temperaturas!';
console.log(WELCOME_MESSAGE);
const rl = readLine.createInterface({
    input : process.stdin,      
    output: process.stdout,     
});
rl.question('Ingrese la temperatura en grados Celsius: ',(celsius) => {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    console.log(`${celsius}°C son ${fahrenheit.toFixed(2)}°F`);
    console.log('¡Gracias por usar el conversor de temperaturas! ¡Hasta luego!');
    rl.close()
    
});
rl.on('close', () => {
    process.exit(0)
});
