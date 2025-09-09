const net = require("net");
const path = require("path");

const PORT = 8080;


const server = net.createServer((socket) => {
  console.log("📡 Cliente conectado");

  
  socket.on("data", (data) => {
    const ruta = data.toString().trim(); 
    console.log("📥 Ruta recibida:", ruta);

    
    if (path.isAbsolute(ruta)) {
      socket.write(`✅ La ruta "${ruta}" es ABSOLUTA\n`);
    } else {
      socket.write(`📂 La ruta "${ruta}" es RELATIVA\n`);
    }
  });

 
  socket.on("end", () => {
    console.log("🔌 Cliente desconectado");
  });
});


server.listen(PORT, () => {
  console.log(`🚀 Servidor TCP escuchando en el puerto ${PORT}`);
});
