const net = require("net");
const path = require("path");

const PORT = 8081;


const server = net.createServer((socket) => {
  console.log("📡 Cliente conectado");

  socket.on("data", (data) => {
    const ruta = data.toString().trim();
    console.log("📥 Ruta recibida:", ruta);

    
    const normalizada = path.normalize(ruta);
    socket.write(`🔧 Ruta normalizada: ${normalizada}\n`);
  });

  socket.on("end", () => {
    console.log("🔌 Cliente desconectado");
  });
});


server.listen(PORT, () => {
  console.log(`🚀 Servidor TCP escuchando en el puerto 8081`);
});