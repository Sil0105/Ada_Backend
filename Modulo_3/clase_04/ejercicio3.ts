function retornoGenerico<T>(valor: T): T {
  return valor;
}

const texto = retornoGenerico<string>("Hola ADA");
console.log(texto);

