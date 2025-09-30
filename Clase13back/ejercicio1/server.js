const net = require('net');
const { handleBookRequest } = require('./ejercicio1/controllers/bookController');

const PORT = 4000;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const bookId = data.toString().trim();
        console.log(`Solicitud recibida para el libro con ID: ${bookId}`);

        const response = handleBookRequest(bookId);
        socket.write(response);
        socket.end(); 
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en el servidor:', err);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});