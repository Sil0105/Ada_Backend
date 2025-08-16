/*
Consigna:
Nunca está de más guardar una copia de seguridad. Escribe un programa
que copie el contenido de metas.json en un archivo llamado
respaldo_metas.json.
 Pista: Usa el método fs.copyFile para copiar archivos de manera
sencilla.
*/
const fs = require('fs');
fs.copyFile('metas.json', 'respaldo_metas.json', (err) => {
    if (err) {
        console.error("Error al crear la copia de seguridad:", err);
    } else {
        console.log("¡Copia de seguridad creada exitosamente! Revisar respaldo_metas.json.");
    }
});
