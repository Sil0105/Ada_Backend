class Coche {
  private marca: string;
  private modelo: string;
  private _año: number;
  private _kilometraje: number;

  constructor(marca: string, modelo: string, año: number, kilometraje: number) {
    this.marca = marca;
    this.modelo = modelo;


    if (año < 1886) {
      console.log("Error: el año no puede ser menor que 1886.");
      this._año = 1886; 
    } else {
      this._año = año;
    }

    if (kilometraje < 0) {
      console.log("Error: el kilometraje no puede ser negativo.");
      this._kilometraje = 0;
    } else {
      this._kilometraje = kilometraje;
    }
  }

  get año() {
    return this._año;
  }

  
  set año(valor: number) {
    if (valor < 1886) {
      console.log("Error: el año no puede ser menor que 1886.");
    } else {
      this._año = valor;
    }
  }

  get kilometraje() {
    return this._kilometraje;
  }

  set kilometraje(valor: number) {
    if (valor < 0) {
      console.log("Error: el kilometraje no puede ser negativo.");
    } else {
      this._kilometraje = valor;
    }
  }


  encender() {
    console.log(`El coche ${this.marca} ${this.modelo} está encendido.`);
  }

  viajar(distancia: number) {
    if (distancia <= 0) {
      console.log("La distancia debe ser mayor a 0.");
      return;
    }

    this._kilometraje += distancia;
    console.log(`Viajaste ${distancia} km. Kilometraje actual: ${this._kilometraje} km.`);
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2020, 50000);
miCoche.encender();
miCoche.viajar(100);