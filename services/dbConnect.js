const pgp = require('pg-promise')({});
const cn = {
   host: 'localhost',
   port: 5432,
   database: 'petpedia',
   user: 'postgres',
   password: 'lol'
};
const db = pgp(cn);

module.exports =  {
    db,
}