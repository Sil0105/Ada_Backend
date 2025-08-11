
const estudiantes = require('./estudiantes.js');


console.log('\nLista de Estudiantes:');
estudiantes.forEach(est => console.log(`- ${est.nombre}`));


const calcularPromedio = notas => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const nombreEstudiante = 'Luis'; 
const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`\nEl promedio de ${nombreEstudiante} es: ${promedio.toFixed(2)}`);
} else {
    console.log(`\nEstudiante con nombre ${nombreEstudiante} no encontrado.`);
}


estudiantes.push({ nombre: 'Martin', edad: 24, curso: 'Quimica', notas: [8, 9, 10] });

console.log('\nLista actualizada de estudiantes:');
console.log(JSON.stringify(estudiantes, null, 2));