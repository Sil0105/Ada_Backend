let nombre : string = "Flavio";
let edad : number | undefined;  

if (edad !== undefined) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
} else {
  console.log(`Nombre: ${nombre}, Edad no proporcionada`);
}
