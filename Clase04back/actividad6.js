/*
Es momento de planear tus metas. Crea un archivo llamado metas.json
con una lista vacía al principio. Luego, agrega metas como: “Aprender
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
 Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
lista.


*/

const fs=require ('fs');
 let metas=[];
 metas.push ("Viajar a japon");
metas.push ("VAprender Node.js");
 fs.writeFile('metas',JSON.stringify(metas,null,2),err =>{
    if(err) {
        console.log("Error al cargar las metas",err);
    } else {
        console.log("Metas cargadas exitosamente");
    }
});