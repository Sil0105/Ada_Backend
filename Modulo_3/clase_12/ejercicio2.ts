import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); 


const usuarios: { name: string; email: string }[] = [];

app.post("/usuarios", (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Faltan datos: name y email son obligatorios",
        });
    }

    const nuevoUsuario = { name, email };
    usuarios.push(nuevoUsuario);

    res.status(201).json({
        mensaje: "Usuario agregado correctamente",
        usuario: nuevoUsuario,
    });
});

app.listen(3000, () => {
    console.log("🚀 Servidor funcionando en http://localhost:3000");
});