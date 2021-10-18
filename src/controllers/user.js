const knex = require('../db/knex');

function createUser(user) {
  return knex('users').insert(user);
}

module.exports = createUser;
