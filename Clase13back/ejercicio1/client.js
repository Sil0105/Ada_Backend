const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el ID del libro que desea consultar: ', (bookId) => {
    requestBook(bookId);
});

const PORT = 4000;
const HOST = '127.0.0.1';


const requestBook = (bookId) => {
    const client = new net.Socket();

    client.connect(PORT, HOST, () => {
        console.log(`Conectado al servidor. Solicitando información del libro con ID: ${bookId}`);
        client.write(bookId);
    });

    client.on('data', (data) => {
        console.log('Respuesta del servidor:', data.toString());
        client.destroy(); 
    });

    client.on('close', () => {
        console.log('Conexión cerrada');
        rl.close();
    });

    client.on('error', (err) => {
        console.error('Error en el cliente:', err);
        rl.close();
    });
};
