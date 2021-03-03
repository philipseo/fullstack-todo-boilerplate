import Knex from 'knex';

const { DATABASE_SCHEMA }: any = process.env;

export async function up(knex: Knex) {
  // install uuid-ossp plugin for using uuid
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  // create update_timestamp trigger
  await knex.raw(`
    CREATE OR REPLACE FUNCTION on_update_timestamp() RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
    $$
    BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
    END;
    $$;
  `);

  // create schema
  await knex.raw(`CREATE SCHEMA ${DATABASE_SCHEMA};`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP FUNCTION IF EXISTS on_update_timestamp() CASCADE;');
  await knex.raw(`DROP SCHEMA ${DATABASE_SCHEMA} CASCADE;`);
}
