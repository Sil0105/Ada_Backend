export const persona = {
  nombre: "Martin",
  edad: 50,
  ciudad: "CABA"
};

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
}