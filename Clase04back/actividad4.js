/*
Consigna:
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
existe. Si no existe, crea uno nuevo con un perfil básico.
 Pista: Usa fs.existsSync para verificar la existencia del archivo.

*/
const fs = require('fs');
if (fs.existsSync('perfil.JSON')) {
    console.log("El perfil si existe:");
} else {
    console.log("El perfil no existe.Crear uno nuevo.");
    const perfil= {
        nombre: "Adriana",
        edad: 35,
        ciudadFavorita: "Punta Cana"
    };
    fs.writeFile('perfil.JSON', JSON.stringify(perfil,null,2)), (err) => {
        if (err) {
            console.log("Error al cargar el perfil nuevo", err);
        } else {
            console.log("Peril creado exitosamente");}
        }
}




