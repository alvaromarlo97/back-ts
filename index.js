const express = require('express'); // Middleware express
const user = require('./src/controllers/user');

const server = express();
const port = 5000;

server.use(express.json()); // Si viene petición con datos .json los añade en el body

server.post('/user', async ({ body }, res) => {
  const createdUser = await user(body);
  res.status(200).send('El usuario se creó correctamente');
  res.json(createdUser);
});

server.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}`),
);
