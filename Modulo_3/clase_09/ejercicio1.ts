interface Mueble {
    id: number;
    nombre: string;
    precio: number;
}

class Muebleria {
    private inventario: Mueble[] = [];

    
    public agregarMueble(id: number, nombre: string, precio: number): void {
        const existe = this.inventario.some(m => m.id === id);

        if (existe) {
            console.log("El ID ya existe. No se puede agregar el mueble.");
            return;
        }

        this.inventario.push({ id, nombre, precio });
        console.log(`Mueble agregado: ${nombre} ($${precio})`);
    }

   
    public actualizarPrecio(id: number, nuevoPrecio: number): void {
        console.log("Actualizando precio... espere 3 segundos.");

        setTimeout(() => {
            const mueble = this.inventario.find(m => m.id === id);

            if (!mueble) {
                console.log("No se encontró el mueble.");
                return;
            }

            mueble.precio = nuevoPrecio;
            console.log(`Precio actualizado del mueble "${mueble.nombre}" → $${nuevoPrecio}`);
        }, 3000);
    }

    
    public mostrarInventario(): void {
        console.log("Inventario de la mueblería:");
        this.inventario.forEach(mueble => {
            console.log(`- ID: ${mueble.id} | ${mueble.nombre} | $${mueble.precio}`);
        });
    }
}

const tienda = new Muebleria();

tienda.agregarMueble(1, "Mesa de Roble", 50000);
tienda.agregarMueble(2, "Silla Premium", 15000);
tienda.agregarMueble(3, "Sillón 3 cuerpos", 180000);

tienda.mostrarInventario();

tienda.actualizarPrecio(2, 17500);

setTimeout(() => tienda.mostrarInventario(), 3500);