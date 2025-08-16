/*
Consigna:
Revisa tu lista de metas en el archivo metas.json. Busca si una meta
específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
 Pista: Usa fs.readFile para leer el archivo y un método como find para
buscar en la lista.
*/
const fs = require('fs');
const metaBuscar = "Viajar a Japón";

if (fs.existsSync('metas.json')) {
    console.log("El archivo metas.json existe.");

    fs.readFile('metas.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo", err);
        } else {
            let metas = JSON.parse(data);
            if (metas.includes(metaBuscar)) {
                console.log(`¡La meta "${metaBuscar}" ya está en la lista!`);
            } else {
                metas.push(metaBuscar);
                fs.writeFile('metas.json', JSON.stringify(metas, null, 2), err => {
                    if (err) {
                        console.log("Error al actualizar el archivo metas", err);
                    } else {
                        console.log(`Meta "${metaBuscar}" agregada correctamente.`);
                    }
                });
            }
        }
    });
}