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
  },

  staging: {
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
  },

  production: {
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
  }
};
