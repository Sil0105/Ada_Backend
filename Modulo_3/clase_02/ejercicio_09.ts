let coche = {
  marca: "Peugeot",
  modelo: "307",
  encendido: false
};

function encenderCoche(auto: { marca: string; modelo: string; encendido: boolean }): void {
  auto.encendido = true; 
  console.log("El coche ha sido encendido.");
}

console.log("Estado inicial del coche:", coche);

encenderCoche(coche);

console.log("Estado final del coche:", coche);