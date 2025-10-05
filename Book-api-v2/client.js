import net from 'net';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const client = net.createConnection({ port: 8080 }, () => console.log('Conectado al servidor TCP'));

// Función para pedir datos de la editorial
function agregarEditorial() {
  const editorial = {};
  rl.question('Nombre de la editorial: ', name => {
    editorial.name = name;
    rl.question('País de la editorial: ', country => {
      editorial.country = country;

      // Convertimos a JSON y enviamos al servidor
      const msg = JSON.stringify(editorial);
      client.write(`ADD PUBLISHER ${msg}`);
    });
  });
}

// Escuchar la respuesta del servidor
client.on('data', data => {
  console.log('Respuesta del servidor:', data.toString());

  // Función para validar respuesta s/n
  function preguntarOtra() {
    rl.question('\n¿Agregar otra editorial? (s/n): ', ans => {
      const respuesta = ans.toLowerCase();
      if (respuesta === 's') {
        agregarEditorial();
      } else if (respuesta === 'n') {
        console.log('Desconectando del servidor...');
        client.end();
        rl.close();
      } else {
        console.log('ERROR: Debes ingresar "s" o "n".');
        preguntarOtra(); // vuelve a preguntar hasta que sea válido
      }
    });
  }

  preguntarOtra();
});

client.on('end', () => console.log('Desconectado del servidor.'));
client.on('error', err => console.log('Error:', err.message));

// Iniciamos la primera editorial
agregarEditorial();