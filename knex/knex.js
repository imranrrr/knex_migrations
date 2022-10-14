import knex from 'knex'
import knexfile from '../knexfile.js'
const environment = 'development'

export default knex(knexfile[environment])