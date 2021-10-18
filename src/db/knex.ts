const knexS = require('knex');

const connectedKnex = knexS({
  client: 'sqlite3',
  connection: {
    filename: 'user.sqlite3',
  },
});

module.exports = connectedKnex;
