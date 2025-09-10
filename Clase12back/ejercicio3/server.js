const net = require("net");
const path = require("path");

const PORT = 8082;


const server = net.createServer((socket) => {
  console.log("📡 Cliente conectado");

  socket.on("data", (data) => {
    const ruta = data.toString().trim();
    console.log("📥 Ruta recibida:", ruta);

   
    const base = path.basename(ruta);
    const dir = path.dirname(ruta);
    const ext = path.extname(ruta);

    
    socket.write(
      `📂 Información de la ruta:\n` + `- Directorio: ${dir}\n` + `- Nombre base: ${base}\n` +`- Extensión: ${ext || "(sin extensión)"}\n`
    );
  });

  socket.on("end", () => {
    console.log("🔌 Cliente desconectado");
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor TCP escuchando en el puerto ${PORT}`);
});