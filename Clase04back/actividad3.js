/*

Consigna:
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.
 Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
escribirlo.

*/

const fs = require ('fs');
fs.readFile('perfil.JSON', 'utf-8', function (err, data) {
    if (err) {
        console.error("Error al leer el archivo:", err);

    } else {

      const perfil = JSON.parse(data);
        perfil.hobby = "escuchar musica";

        fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
            if (err)
                console.error("No se encuentra el archivo:", err);

            else {
                console.log("perfil con hobby actualizado correctamente:", perfil);
            }
        });

    }
});

