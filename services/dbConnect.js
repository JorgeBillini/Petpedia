const pgp = require('pg-promise')({});
const cn = {
   host: 'Your-HostName-Here',
   port: 5432,
   database: 'Your-DB-NAME',
   user: 'postgres',
   password: 'your-password'
};
const db = pgp(cn);

module.exports =  {
    db,
}
