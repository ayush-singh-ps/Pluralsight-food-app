
const knexConfig={
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1234',
      database: 'myproj_db',
    }
}



const knex = require('knex')(knexConfig);



module.exports={knex};

console.log('done');

