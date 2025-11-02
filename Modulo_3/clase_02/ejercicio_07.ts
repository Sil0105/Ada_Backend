let empleado: { nombre: string; salario: number } = { nombre: "Silvana", salario: 650000 };

function aumentarSalario(empleado: { nombre: string, salario: number }, porcentaje: number): number
 {
    empleado.salario += empleado.salario * (porcentaje / 100);
    return empleado.salario;
}

const nuevoSalario = aumentarSalario(empleado, 10);

console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);