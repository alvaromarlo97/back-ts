const crypto = require('crypto');
const knex = require('../db/knex');

function createUser(user) {
  const hash = crypto.createHmac('sha256', user.password).digest('hex');
  return knex('users').insert({
    username: user.username,
    password: hash,
  });
}

module.exports = createUser;
