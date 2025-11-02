
let valorDesconocido: unknown;

valorDesconocido = "Hola, mundo!";
if (typeof valorDesconocido === "string") {
  console.log(`El valor es una cadena: ${valorDesconocido}`);
}

valorDesconocido = 64;
if (typeof valorDesconocido === "number") {
  console.log(`El valor es un número: ${valorDesconocido}`)};