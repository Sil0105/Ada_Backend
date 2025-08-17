/*
Objetivo: Configurar un servidor TCP que escuche en el puerto 5000.
Guía paso a paso:
1. Crea un archivo llamado servidor.js.
2. Importa el módulo que te permite trabajar con servidores TCP
(net).
3. Usa el método que crea un servidor.
o Pista: Este método necesita una función que se ejecuta
cuando alguien se conecta.
4. Configura el servidor para que escuche en el puerto 5000.
o Pista: Usa el método que pone al servidor "a escuchar".
5. Agrega un mensaje en la consola para confirmar que el servidor
está listo.
*/

const net = require('net');
 const server = net.createServer((socket) => {
    console.log(' El cliente se ha conectado');
    socket.on('data'), (data) => {
        const mensaje = data.toString();
        console.log(`El mensaje recibido del cliente es: ${mensaje}`);
        const respuesta = ' ¡Hola, cliente! se ha recibido tu mensaje.';
        socket.write(respuesta);
 };

  socket.on('end', () => {
    console.log('el Cliente se ha desconectado.');
  });
  
});

const PORT =5000
server.listen(5000, () => {
    console.log('El servidor esta escuchando en el puerto:', PORT);
});
