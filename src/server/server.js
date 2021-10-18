const user = require('../controllers/user');

async function createOne({ body }, res) {
  try {
    const createdUser = await user.createUser(body);
    res.status(200).send('El usuario se creó correctamente');
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = createOne;
