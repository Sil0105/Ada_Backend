function prepararPedido(plato, tiempo, callback) {
    console.log("\u27A1\uFE0F Iniciando pedido: ".concat(plato, "..."));
    setTimeout(function () {
        console.log("\uD83C\uDF7D\uFE0F Pedido listo: ".concat(plato));
        callback();
    }, tiempo);
}
function finalizarPedidos() {
    console.log("🎉 ¡Todos los pedidos han sido completados!");
}
prepararPedido("Pizza", 3000, function () {
    prepararPedido("Hamburguesa", 2000, function () {
        prepararPedido("Ensalada", 1000, function () {
            finalizarPedidos();
        });
    });
});
