
import net from 'net';
import { bookController } from './controllers/bookController.js';
import { authorController } from './controllers/authorController.js';
import { publisherController } from './controllers/publisherController.js';

const PORT = 8080;

const server = net.createServer(socket => {
  console.log('Cliente conectado');

  socket.on('data', raw => {
    try {
      const msg = raw.toString().trim();

      // Libros
      if (msg === 'LIST BOOKS') socket.write(bookController.getBooks());
      else if (msg.startsWith('ADD BOOK ')) {
        const book = JSON.parse(msg.replace('ADD BOOK ', ''));
        socket.write(bookController.addBook(book));
      }

      // Autores
      else if (msg === 'LIST AUTHORS') socket.write(authorController.getAuthors());
      else if (msg.startsWith('ADD AUTHOR ')) {
        const author = JSON.parse(msg.replace('ADD AUTHOR ', ''));
        socket.write(authorController.addAuthor(author));
      }
      else if (msg.startsWith('FIND AUTHOR ')) {
        const query = JSON.parse(msg.replace('FIND AUTHOR ', ''));
        socket.write(authorController.findAuthors(query));
      }

      // Editoriales
      else if (msg === 'LIST PUBLISHERS') socket.write(publisherController.getPublishers());
      else if (msg.startsWith('ADD PUBLISHER ')) {
        const pub = JSON.parse(msg.replace('ADD PUBLISHER ', ''));
        socket.write(publisherController.addPublisher(pub));
      }

      else socket.write(JSON.stringify({ status: 'error', message: 'Comando no reconocido' }));
    } catch (err) {
      socket.write(JSON.stringify({ status: 'error', message: err.message }));
    }
  });

  socket.on('end', () => console.log('Cliente desconectado'));
});

server.listen(PORT, () => console.log(`Servidor TCP escuchando en puerto ${PORT}`));