/*
Consigna:
Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
Filtra las metas que ya completaste y muéstralas en la consola.
 Pista: Modifica las metas para que sean objetos con un atributo
estado. Usa el método filter para obtener las completas.
*/
const fs = require('fs');
if (fs.existsSync('metas.json')) {
    fs.readFile('metas.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo metas.json:", err);
        } else {
            let metas = JSON.parse(data);
         
            let metasCompletas = metas.filter(meta => meta.estado === 'completa');
            console.log("Metas completas:", metasCompletas);
        }
    });
}