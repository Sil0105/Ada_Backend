/*
Crea una función que reciba una cadena de texto y devuelva otra cadena
con las palabras en orden inverso.
Consigna:
• Usa el método split() para separar las palabras.
• Usa el método reverse() para invertir el array.
• Usa el método join() para unir las palabras en una nueva cadena.

*/

let frase = "Aprender a programar es divertido";
function invertirPalabras(frase) {
    let palabras = frase.split(" "); 
    palabras.reverse(); 
    return palabras.join(" "); 

}
console.log(invertirPalabras(frase));
