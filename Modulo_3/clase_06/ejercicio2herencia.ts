class Maestro {
  protected nombre: string;
  protected materia: string;

  constructor(nombre: string, materia: string) {
    this.nombre = nombre;
    this.materia = materia;
  }

  enseñar(): void {
    console.log(`${this.nombre} está enseñando ${this.materia}.`);
  }
}

class MaestroMatematicas extends Maestro {
  constructor(nombre: string) {
    super(nombre, "Matemáticas"); 
  }

  enseñar(): void {
    console.log(`${this.nombre} está explicando ecuaciones y resolviendo problemas de matemáticas.`);
  }
}


const profe = new MaestroMatematicas("Silvana");
profe.enseñar();