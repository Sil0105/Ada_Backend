/*
Consigna:
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
archivo metas.json y cuente cuántas metas tienes actualmente.
 Pista: Usa length para obtener la cantidad de elementos en la lista.
*/

const fs = require('fs');
if (fs.existsSync('metas.json')) {
    fs.readFile('metas.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo metas.json:", err);
        } else {
            let metas = JSON.parse(data);
            console.log(`Tienes ${metas.length} metas establecidas.`);
        }
    });
}
