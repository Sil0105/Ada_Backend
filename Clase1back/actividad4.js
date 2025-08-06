//Crea una función que reciba una cadena de texto y devuelva cuántas
//vocales contiene.
//Consigna:
//• Usa un bucle for y condicionales.
//• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Hola mundo";
function contarvocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOU"; 
    for (let i =0; i < texto.length; i++) {
        if (vocales.includes(texto[i]))
            contador++;
    }
    return contador;
}
console.log(contarvocales(texto));