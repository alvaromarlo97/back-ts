const cryptoP = require('crypto');
const knex = require('../db/knex.ts');

function createUser(user) {
  const hash = cryptoP.createHmac('sha256', user.password).digest('hex');
  return knex('users').insert({
    username: user.username,
    password: hash,
  });
}

module.exports = createUser;
