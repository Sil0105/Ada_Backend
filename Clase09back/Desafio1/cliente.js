/*
Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
 El cliente debe:
 Conectarse al servidor en el puerto 5000.
 Enviar un mensaje inicial: "¡Hola, servidor!".
 Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
 Escuchar y manejar 'error', mostrando el mensaje
*/

const net = require('net');
function conectarCliente() {
const client =net.createConnection({port :5000});
client.on('connect', () => {
    console.log('conectado al servidor');
    client.write('¡Hola, servidor!');

});

client.on('data', (data) => {
    console.log('Mensaje recibido del servidor', data.toString());
});
client.on('close', () =>{
    console.log('Conexion cerrada por el servidor. Reintentando en 3 segundos...');
    setTimeout (conectarCliente,3000);
});
client.on('error', (err) => {
    console.log('Error: ', err.message);
});
}
conectarCliente();

