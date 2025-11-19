interface Libro {
  titulo: string;
  autor: string;
  anioPublicacion: number;
}

const miLibro: Libro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  anioPublicacion: 1943
};

console.log("Título:", miLibro.titulo);
console.log("Autor:", miLibro.autor);
console.log("Año de publicación:", miLibro.anioPublicacion);