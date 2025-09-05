/*
Requisitos:
o El servidor debe escuchar en el puerto 5000.
o Debe manejar el evento connection para aceptar nuevas
conexiones de clientes.
o Debe manejar el evento data para recibir y mostrar mensajes
de los clientes.
o Debe manejar el evento close para saber cuándo un cliente
se desconecta.
o Debe manejar el evento error para mostrar cualquier error
que ocurra.
o El servidor debe responder a los mensajes de los clientes con
"Mensaje recibido".
*/
const net = require('net');
const server = net.createServer();
server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('Mensaje del cliente: '+ socket.remoteAddress + ':' + socket.remotePort);
        socket.on('data', (data) => {
            console.log('Mensaje del cliente ' + socket.remoteAddress + ":" + socket.remotePort + ': ' + data.toString());
            socket.write('Mensaje recibido');
        });
        socket.on('close', () => {
            console.log('El cliente se ha desconectado ' + socket.remoteAddress + ':' + socket.remotePort);
        });
          socket.on('error', (err) => {
        console.log('Error:', err.message);
    });
 });
 server.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
  });

});

