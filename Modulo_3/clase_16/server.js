const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { z } = require('zod');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const databasePath = './database.json';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Bienvenida al sistema');
});


const userSchema = z.object({
  id: z.number(),
  name: z.string()
});

const productSchema = z.object({
  id: z.number(),
  name: z.string()
});

const taskSchema = z.object({
  title: z.string(),
  completed: z.boolean().default(false)
});

app.get('/users', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  res.json(database.users);
});

app.post('/users', (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const database = JSON.parse(fs.readFileSync(databasePath));
  database.users.push(result.data);
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

  res.status(201).json({ message: 'Usuario creado' });
});

app.patch('/users/:id', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  const user = database.users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  user.name = req.body.name;
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

  res.json({ message: 'Usuario actualizado' });
});

app.delete('/users/:id', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  database.users = database.users.filter(u => u.id != req.params.id);

  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
  res.json({ message: 'Usuario eliminado' });
});

app.get('/products', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  res.json(database.products);
});

app.post('/products', (req, res) => {
  const result = productSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const database = JSON.parse(fs.readFileSync(databasePath));
  database.products.push(result.data);
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

  res.status(201).json({ message: 'Producto creado' });
});

app.patch('/products/:id', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  const product = database.products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  product.name = req.body.name;
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

  res.json({ message: 'Producto actualizado' });
});

app.delete('/products/:id', (req, res) => {
  const database = JSON.parse(fs.readFileSync(databasePath));
  database.products = database.products.filter(p => p.id != req.params.id);

  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
  res.json({ message: 'Producto eliminado' });
});

app.post('/tasks', (req, res) => {
  const result = taskSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  const database = JSON.parse(fs.readFileSync(databasePath));
  database.tasks.push(result.data);
  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

  res.status(201).json({ message: 'Tarea creada' });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});