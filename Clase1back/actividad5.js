//Escribe una función que reciba un nombre completo y devuelva las
//iniciales en mayúsculas.
//Consigna:
//• Usa el método split() para dividir el nombre.
//• Usa un bucle for y métodos de string.

let nombre = "juan perez gomez";

function iniciales(nombre) {
    let palabras = nombre.split(" ");
    let iniciales = "";
    for (let i=0; i <palabras.length; i++) {

        iniciales += palabras[i][0].toUpperCase();

    }
    return iniciales;
}
console.log (iniciales(nombre));
