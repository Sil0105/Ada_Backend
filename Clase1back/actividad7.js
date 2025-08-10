/*
Ejercicio 7: Filtrar palabras largas 
Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
•	Usa el método filter().
•	Usa una función flecha para simplificar el código.
*/

let palabras = ["programacion", "javascript", "funcion", "Html"];
function filtrarPalabrasLargas(palabras, longitud) {
    return palabras.filter(palabra => palabra.length > longitud);
}
console.log(filtrarPalabrasLargas(palabras, 4)); 