/*
1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
clase2.
2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
3.En este archivo, crea un objeto JSON que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.
*/
let libro = {
    titulo: "El Alquimista",    
    autor: "Paulo Coelho",
    anio: 1988,
    genero: ["Ficción", "Aventura"],
 };

  console.log("Título: " , libro.titulo);

  console.log("Autor: ", libro.autor );
  

    libro.anio = 2023;

    libro.paginas = 208;

console.log("Libros actualizados: ", libro);

