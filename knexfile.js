
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'knex_migration_practice_db',
    },
    migrations: {
       directory: './knex/migrations',
       tableName: 'knex_migrations'
      }
    }
  }





// const knexFile = require('knex')({

//   client: 'mysql',
//     connection: {
//       host: 'localhost',
//       user: 'root',
//       password: 'root',
//       database: 'knex_migration_practice_db',
//     },
//     pool: {
//       min: 0,
//       max: 7
//     },
//     migrations: {
//       directory: './knex/migrations',
//       tableName: 'knex_migrations'
//     }
// });

// module.exports = knexFile;
