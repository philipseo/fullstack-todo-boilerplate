import { Pool } from 'pg';
import { createPostGraphileSchema, withPostGraphileContext } from 'postgraphile';
import { graphql } from 'graphql';

import {
  DATABASE_URL,
  DATABASE_SCHEMA,
  DATABASE_POOL,
  DATABASE_CONNECTION_TIMEOUT_MILLIS,
  DATABASE_IDLE_TIMEOUT_MILLIS,
} from '@src/config';

export function makePgPool() {
  return new Pool({
    connectionString: DATABASE_URL,
    max: Number(DATABASE_POOL),
    idleTimeoutMillis: Number(DATABASE_IDLE_TIMEOUT_MILLIS),
    connectionTimeoutMillis: Number(DATABASE_CONNECTION_TIMEOUT_MILLIS),
  });
}

export async function makeQueryRunner(options: any = {}) {
  const schema = await createPostGraphileSchema(
    DATABASE_URL,
    DATABASE_SCHEMA,
    options = {},
  );

  const pgPool = makePgPool();

  async function query(
    graphqlQuery: any,
    variables = {},
    jwtToken = null,
    operationName = null,
  ) {
    const pgSettings =
      typeof options?.pgSettings === "function"
        ? options?.pgSettings()
        : options?.pgSettings;
    const additionalContextFromRequest =
      typeof options?.additionalContextFromRequest === "function"
        ? options?.additionalContextFromRequest()
        : options?.additionalContextFromRequest;

    return await withPostGraphileContext(
      {
        ...options,
        pgPool,
        jwtToken,
        pgSettings,
      },
      async (context) => {
        return await graphql(
          schema,
          graphqlQuery,
          null,
          {
            ...context,
            ...additionalContextFromRequest,
          },
          variables,
          operationName,
        )
      }
    )
  }

  function release() {
    pgPool.end();
  }

  return {
    query,
    release,
  }
}
