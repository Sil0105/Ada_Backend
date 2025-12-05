class Bodega {
    
    private nombre: string;
    private direccion: string;
    private inventario: { producto: string; cantidad: number }[] = [];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    
    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log("No se puede agregar una cantidad negativa.");
            return;
        }

        
        const item = this.inventario.find(p => p.producto === producto);

        if (item) {
            item.cantidad += cantidad;
        } else {
            this.inventario.push({ producto, cantidad });
        }

        console.log(`Producto agregado: ${producto} (${cantidad})`);
    }

    
    public eliminarProducto(producto: string): void {
        const index = this.inventario.findIndex(p => p.producto === producto);

        if (index === -1) {
            console.log("Producto no encontrado en el inventario.");
            return;
        }

        this.inventario.splice(index, 1);
        console.log(`Producto eliminado: ${producto}`);
    }

    
    public listarInventario(): void {
        console.log("Inventario actual de la bodega:");
        this.inventario.forEach(item => {
            console.log(`- ${item.producto}: ${item.cantidad}`);
        });
    }
}

const bodega = new Bodega("Bodega Central", "Calle Falsa 123");

bodega.agregarProducto("Vino Malbec", 10);
bodega.agregarProducto("Cerveza Artesanal", 20);
bodega.agregarProducto("Vino Malbec", 5);
bodega.agregarProducto("Agua", -3); 

bodega.listarInventario();

bodega.eliminarProducto("Cerveza Artesanal");
bodega.listarInventario();