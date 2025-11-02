function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, numero) => total + numero, 0);
}

const resultado = sumarTodos(1, 2, 3, 4, 5);
console.log(`El resultado de la suma es: ${resultado}`);

