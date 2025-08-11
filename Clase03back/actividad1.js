const fs = require('fs');
const archivo = 'libros.json';


function leerLibros() {
  try {
    const datos = fs.readFileSync(archivo, 'utf-8');
    return JSON.parse(datos);
  } catch (e) {
    return [];
  }
}

function guardarLibros(libros) {
  fs.writeFileSync(archivo, JSON.stringify(libros, null, 2));
}


function agregarLibro(nombre) {
  const libros = leerLibros();
  libros.push({ nombre });
  guardarLibros(libros);
  console.log(`Libro "${nombre}" agregado a favoritos.`);
}


function listarLibros() {
  const libros = leerLibros();
  if (libros.length === 0) {
    console.log("No hay libros registrados.");
    return;
  }
  console.log("Libros favoritos:");
  libros.forEach((libro, i) => {
    console.log(`${i + 1}. ${libro.nombre}`);
  });
}


agregarLibro("Don Quijote de la Mancha");
agregarLibro("Cien Años de Soledad");
listarLibros();