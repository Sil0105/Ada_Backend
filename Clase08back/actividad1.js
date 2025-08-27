/*
EJERCICIO 1
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
*/

const net = require('net');
const PORT=5000
const HOST='localhost'
const client = net.createConnection({PORT,HOST});
client.on ('connet',() => {
      console.log('El cliente se ha conectado al servidor');
      client.write('Hola, Cliente conectado');
});
client.on('data', (data) => {
    console.log('Los datos fueron recibidos del servidor.' , data.toString());
});

/*
EJERCICIO 2
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de
cerrar.
*/
client.setTimeout(5000,() => {
    console.log('El tiempo de espera ha expirado');
    client.end();
});


/*
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3
segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando
los mensajes en consola.
*/
client.on('data', (data) => {
    console.log('Los datos fueron recibidos', data.toString());
    client.pause();
    setTimeout(() => {
        console.log('Reanudando la recepción de datos...');
        client.resume();
        }, 3000 );

    });

/*
EJERCICIO 4
Modifica el cliente para que:
1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
muestre con " Error: [mensaje]".
2. Si la conexión se cierra inesperadamente, muestre " Conexión
cerrada inesperadamente".
*/
 client.on('error', (err) => {
    console.log( 'Error: ', err.message)
 });
    client.on('close', () => {
        console.log('Conexión cerrada inesperadamente');
    });

 /* EJERCICIO 5
 Crea un cliente que:
1. Se conecte y envíe "¿Sigues ahí, servidor?".
2. Cuando el servidor cierre la conexión, muestre " Servidor cerró
la conexión"
 */   
    const client2 = net.createConnection({PORT,HOST}, () => {
        console.log('Cliente conectado al servidor');
        client2.write('¿Sigues ahí, servidor?');
    });

 /*
 EJERCICIO 6
 Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
enviarlos al servidor.
• Después de cada mensaje, la usuaria puede escribir otro.
• Si escribe "salir", el cliente se desconecta.

 */   
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function enviarMensaje() {
    readline.question('Escribe un mensaje: ', (msg) => {
        if (msg === 'salir') {
            client.end();
            readline.close();
        } else {
            client.write(msg);
            enviarMensaje();
        }
    });
}
client.on('connect', enviarMensaje);

/*
EJERCICIO 7
Crea un cliente que:
1. Se conecte al servidor.
2. Si hay un error en la conexión, use client.destroy() y muestre "
Conexión destruida".
*/
client.on('error', (err) => {
    console.error('Error en la conexión: ', err.message);
    client.destroy();
    console.log('Conexion destruida');
});

/*
EJERCICIO8
Crea un cliente que:
1. Use client.unref() para permitir que Node.js termine si no hay otras
tareas.
2. Luego, después de 5 segundos, use client.ref() para evitar que el
proceso termine.
*/
client.unref();
setTimeout(() => {
    console.log('🔄 Manteniendo proceso activo con ref()');
    client.ref();
}, 5000);
/*
EJERCICIO 9
Crea un cliente que:
1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
que tenga éxito.
*/
function reconectar() {
    setTimeout(() => {
        console.log('🔄 Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

/*
EJERCICIO 10
Crea un cliente que:
1. Si deja de recibir datos durante 10 segundos, muestre " No hay
datos del servidor" y cierre la conexión.
*/
let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});
