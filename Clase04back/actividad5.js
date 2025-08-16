/*
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.
 Pista: Usa fs.unlink para eliminar archivos
*/
const fs = require ('fs');
if (fs.existsSync('perfil.JSON')) {
    console.log("El perfil existe.Va a ser eliminado.");
    if(fs.unlinkSync('perfil.JSON')) {
        Console.log("El perfil ha sido eliminado correctamente");
    }
} else {
    console.log("El perfil no se ha encontrado");

}
