function saludar(nombre: string, saludo: string = "Hola"): string {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar("Flavio"));          
console.log(saludar("Flavio", "Buenos días"));