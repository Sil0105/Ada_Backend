let esMayorDeEdad: boolean = true;
let tieneDNI: boolean = false;

let puedeEntrar: boolean = esMayorDeEdad && tieneDNI;
console.log(`¿Es mayor y cuenta con DNI?: ${puedeEntrar}`);

let puedeEntrarConOR: boolean = esMayorDeEdad || tieneDNI;
console.log(`¿Puede entrar?: ${puedeEntrarConOR}`);
