/*
1.En la misma carpeta clase2, crea un nuevo archivo llamado
actividad2.js.
2.Crea un objeto en JavaScript que represente a un estudiante con las
siguientes propiedades: nombre, edad, curso, notas (un array de
números).
Instrucciones:
• Convierte este objeto a una cadena JSON usando JSON.stringify().
• Muestra la cadena JSON en la consola.
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
JSON.parse() y muestra el objeto en la consola. 
*/

let estudiante = {
    nombre: "Silvana",
    edad: 34,
    curso: "Backend",
    notas: [8, 6, 10, 7]

};
let estudianteJSON = JSON.stringify(estudiante);
console.log("\nEstudiante como JSON: \n", estudianteJSON); // \n le dice a la consola (o a cualquier texto) que haga un salto de línea, o sea, que pase a la línea siguiente.
let estudianteObjeto = JSON.parse(estudianteJSON);
console.log("\nEstudiante como Objeto: \n", estudianteObjeto); // \n le dice a la consola (o a cualquier texto) que haga un salto de línea, o sea, que pase a la línea siguiente.