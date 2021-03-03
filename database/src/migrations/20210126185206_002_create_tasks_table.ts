import Knex, { CreateTableBuilder } from 'knex';

const { DATABASE_SCHEMA }: any = process.env;

export async function up(knex: Knex): Promise<void> {
  // create account table
  return knex.schema
    .withSchema(DATABASE_SCHEMA)
    .createTable('tasks', (table: CreateTableBuilder) => {
      table.comment('Tasks Table');
      // Fields
      table
        .uuid('id')
        .primary()
        .notNullable()
        .unique()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.timestamps(false, true);
      table.timestamp('deleted_at');
      table.timestamp('completedAt');
      table.string('task').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DATABASE_SCHEMA).dropTableIfExists('post');
}
