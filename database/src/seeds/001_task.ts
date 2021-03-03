import Knex from 'knex';

const { DATABASE_SCHEMA }: any = process.env;

const MOCK_DATA = [
  { task: '공부하기' },
  { task: '출근하기' },
  { task: '영화보기' },
  { task: '씻기' },
];

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  await knex('tasks').withSchema(DATABASE_SCHEMA).del();

  // Inserts seed entries
  await knex('tasks')
    .withSchema(DATABASE_SCHEMA)
    .insert(
      MOCK_DATA.map((task) => task),
    );
}
