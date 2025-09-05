/*

o El cliente debe conectarse al servidor en el puerto 5000 y en
la dirección localhost.
o Debe permitir al usuario ingresar mensajes y enviarlos al
servidor.
o Debe mostrar en la consola la respuesta del servidor.
o El cliente debe manejar la desconexión y mostrar un mensaje
cuando se desconecta
*/

const net = require('net');
const readline = require('readline-sync');
const client = net.createConnection({ port: 5000, host : ' localhost'})
client.on = ('conect', () => {
    console.log('Se ha conectado al servidor');
 sendMessage();
});
client.on ('data', (data) => {
    console.log('Mensaje del servidor: ', data.toString());
    sendMessage();
});
 client.on ('error', (err) => {
    console.log('Error; '  , (err.message));
 });

 function sendMessage() {
   const message = readline.question('Ingrese un mensaje para enviar al servidor: ');

    if (message.toLowerCase() === 'exit') {
        client.end();
    } else {
        client.write(message);    
     } 
}
