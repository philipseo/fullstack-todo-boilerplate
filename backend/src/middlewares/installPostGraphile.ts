import { Express } from 'express';
import { postgraphile } from 'postgraphile';

import { NODE_ENV, DATABASE_SCHEMA } from '@src/config';
import {makePgPool} from '@utils/db';

export default async function installPostGraphile(app: Express) {
  try {
    const pgPool = await makePgPool();

    const postGraphileMiddleware = postgraphile(
      pgPool,
      DATABASE_SCHEMA,
      {
        watchPg: NODE_ENV === 'development',
        graphiql: NODE_ENV === 'development',
        enhanceGraphiql: true,
      },
    );

    app.use(postGraphileMiddleware);
  } catch (error) {
    throw new Error(error);
  }
}
