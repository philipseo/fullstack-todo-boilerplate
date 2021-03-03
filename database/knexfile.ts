import 'dotenv/config';
import 'ts-node/register';

const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  KNEX_CLIENT,
  KNEX_MIGRATIONS_PATH,
  KNEX_SEEDS_PATH,
} = process.env;

module.exports = {
  client: KNEX_CLIENT,
  connection: {
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    port: DATABASE_PORT,
  },
  migrations: {
    directory: KNEX_MIGRATIONS_PATH,
    loadExtensions: ['.ts'],
  },
  seeds: {
    directory: KNEX_SEEDS_PATH,
  },
};
