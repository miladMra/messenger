const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } = process.env;
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
        charset: 'utf8',
        database: DB_NAME
    }
});
const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;