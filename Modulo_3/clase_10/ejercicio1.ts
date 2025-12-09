function prepararPedido(
    plato: string,
    tiempo: number,
    callback: () => void
): void {
    console.log(`➡️ Iniciando pedido: ${plato}...`);

    setTimeout(() => {
        console.log(`🍽️ Pedido listo: ${plato}`);
        callback(); 
    }, tiempo);
}

function finalizarPedidos() {
    console.log("🎉 ¡Todos los pedidos han sido completados!");
}

prepararPedido("Pizza", 3000, () => {
    prepararPedido("Hamburguesa", 2000, () => {
        prepararPedido("Ensalada", 1000, () => {
            finalizarPedidos();
        });
    });
});