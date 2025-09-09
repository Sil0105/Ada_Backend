const net = require("net");
const readline = require("readline");

const PORT = 8080;
const HOST = "localhost";


const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log("✅ Conectado al servidor");
  console.log("Escribí rutas para validar (Ctrl+C para salir):");
});


client.on("data", (data) => {
  console.log("📩 Servidor:", data.toString());
});


client.on("end", () => {
  console.log("🔌 Desconectado del servidor");
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  client.write(input);
});