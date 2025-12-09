import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;


const usuarios = [
    { name: "Juan", email: "juan@example.com" },
    { name: "Ana", email: "ana@example.com" },
    { name: "Carlos", email: "carlos@example.com" }
];


app.get("/usuarios", (req: Request, res: Response) => {
    res.json(usuarios);
});


app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});