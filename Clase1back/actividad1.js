//Ejercicio 2: El menú del día 
//Escribe una función que reciba un objeto con platos y precios, y devuelva los platos cuyo precio sea menor a $20.
//Consigna:
//•	Usa un bucle for...in.
//•	Usa objetos y arrays.

function platosBaratos(menu) {
    let platos = []; 

    for (let plato in menu) {
        if (menu[plato] < 20) {
            platos.push(plato); 
        }
    }
    return platos; 
}

let menu = {
    "Milanesa": 18,
    "Chocotorta": 8,
    "Asado": 25,
    "Pizza muzzarela": 15
};
console.log(platosBaratos(menu));