import type { Request, Response } from "express";
const express = require("express");

const app = express();
app.use(express.json());

interface User {
  name: string;
  email: string;
}

const users: User[] = [];

app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .send("Faltan datos obligatorios: name y email");
  }

  users.push({ name, email });

  res.status(201).json({
    message: "Usuario ha sido agregado con éxito",
    users,
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});