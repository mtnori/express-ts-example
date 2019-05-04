import * as knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];

const knexConfig = knex(configuration);
export default knexConfig;
