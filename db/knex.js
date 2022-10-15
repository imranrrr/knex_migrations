// const knex = require('knex');
import knex from 'knex';
// const knexfile = require('../knexfile')
import knexfile from '../knexfile';
const environment = 'development'

module.exports = knex(knexfile[environment])