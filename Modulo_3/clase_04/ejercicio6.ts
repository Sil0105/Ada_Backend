function filtrarElementos<T>(arreglo: T[]): string[] {
const resultado: string[] = [];


for (const elemento of arreglo) {

if (typeof elemento === 'string') {

const texto = elemento as string;

console.log('Longitud del string:', texto.length);
resultado.push(texto);
}
}


return resultado;
}


const valoresMixtos = ["Hola", 123, true, "TypeScript", false];
const soloStrings = filtrarElementos(valoresMixtos);
console.log('Strings filtrados:', soloStrings)