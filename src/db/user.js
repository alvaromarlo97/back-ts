const knex = require('./knex');

function createUser(user) {
  return knex('Tabla USER').insert(user);
}

module.exports = createUser;
