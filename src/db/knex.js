/* eslint-disable no-undef */
const knex = requiere('knex');

const connectedKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: 'user.sqlite3',
  },
});

module.exports = connectedKnex;
