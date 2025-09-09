const net = require("net");
const readline = require("readline");

const client = net.createConnection({ host: "localhost" , port: 8081 }, () => {
  console.log("✅ Conectado al servidor");
  console.log("Escribí rutas para normalizar (Ctrl+C para salir):");
});


client.on("data", (data) => {
  console.log("📩 Servidor:", data.toString());
});


client.on("end", () => {
  console.log("🔌 Desconectado del servidor");
});


client.on("error", (err) => {
  console.error("❌ Error:", err.message);
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  client.write(input);
});