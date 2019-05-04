const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'practice',
      user: 'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    typeCast(field, next) {
      if (field.type === 'TINY' && field.length === 1) {
        return field.string() === '1'; // 1 = true, 0 = false
      }
      return next();
    }
    // ...knexSnakeCaseMappers()
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers()
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'practice',
      user: 'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers()
  }
};
