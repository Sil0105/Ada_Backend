/*
Consigna:
Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
en el ejercicio anterior y muestra la información en la consola para
asegurarte de que todo está correcto.
 Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el
contenido del archivo como texto legible.
*/

const fs= require('fs');
fs.readFile( 'perfil.Json', 'utf-8', function (err,data) {
    if (err) {
          console.log("Error al leer el archivo:", err);
    }
    else {
      const perfil = JSON.parse(data);
        console.log("Aqui esta tu perfil:", perfil);
    }

});

