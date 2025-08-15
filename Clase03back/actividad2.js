/*
Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y
la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la
cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en
Node.js. Este método se usa para comprobar si un archivo o
directorio existe en el sistema de archivos de manera sincrónica, lo
que significa que el código se ejecuta y espera a que la operación se
complete antes de continuar con el siguiente paso.
• Sintaxis: fs.existsSync(path);

*/

const fs = require('fs');

const archivo = 'series.json';
function leerSeries() {
  try {
    const datos = fs.readFileSync(archivo, 'utf-8');
    return JSON.parse(datos);
  } catch (e) {
    return [];
  }
}
function guardarSeries(series) {
    fs.writeFileSync(archivo, JSON.stringify(series, null, 2));
    }
function agregarSerie(nombre, temporadas) {
  const series = leerSeries();
  series.push({ nombre, temporadas });
  guardarSeries(series);
  console.log(`Serie "${nombre}" agregada con ${temporadas} temporadas.`);
}
function listarSeries() {
    const series = leerSeries();
    if (series.length === 0) {
        console.log("No hay series registradas.");
        return;
    }
    console.log("Series registradas:");
    series.forEach((serie, i) => {
        console.log(`${i + 1}. ${serie.nombre} - ${serie.temporadas} temporadas`);
    });
    }

function actualizarTemporadas(nombre, nuevasTemporadas) {
    const series = leerSeries();
    const serie = series.find(s => s.nombre === nombre);
    if (serie) {
        serie.temporadas = nuevasTemporadas;
        guardarSeries(series);
        console.log(`Temporadas de "${nombre}" actualizadas a ${nuevasTemporadas}.`);
    } else {
        console.log(`Serie "${nombre}" no encontrada.`);
    }
}
 
// Ejemplo de uso
agregarSerie("Stranger Things", 4); 
agregarSerie("Breaking Bad", 5);
listarSeries();
actualizarTemporadas("Stranger Things", 5);
listarSeries();

