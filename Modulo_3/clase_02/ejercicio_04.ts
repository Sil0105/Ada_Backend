function crearLibro(titulo: string, autor: string, paginas: number):  { titulo: string, autor: string, paginas: number } 
{
  return {
    titulo,
    autor,
    paginas,
  };
}

const libro1 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 471);
const libro2 = crearLibro("El Principito", "Antoine de Saint-Exupéry", 96);


console.log("Detalles del primer libro:", libro1);
console.log("Detalles del segundo libro:", libro2);