"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let esMayorDeEdad = true;
let tieneDNI = false;
let puedeEntrar = esMayorDeEdad && tieneDNI;
console.log(`¿Es mayor y cuenta con DNI?: ${puedeEntrar}`);
let puedeEntrarConOR = esMayorDeEdad || tieneDNI;
console.log(`¿Puede entrar?: ${puedeEntrarConOR}`);
//# sourceMappingURL=ejercicio_9.js.map