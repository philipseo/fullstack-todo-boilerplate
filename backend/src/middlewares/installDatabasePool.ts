import { Express } from 'express';
import { Pool } from 'pg';

import { makePgPool } from '@utils/db';

export function getRootPgPool(app: Express): Pool {
  return app.get("rootPgPool");
}

/**
 * When a PoolClient omits an 'error' event that cannot be caught by a promise
 * chain (e.g. when the PostgreSQL server terminates the link but the client
 * isn't actively being used) the error is raised via the Pool. In Node.js if
 * an 'error' event is raised and it isn't handled, the entire process exits.
 * This NOOP handler avoids this occurring on our pools.
 *
 * TODO: log this to an error reporting service.
 */
function swallowPoolError(_error: Error) {
  /* noop */
}

export async function installDatabasePools(app: Express) {
  const rootPgPool = await makePgPool();
  try {
    rootPgPool.on("error", swallowPoolError);
    app.set("rootPgPool", rootPgPool);
  } catch (error) {
    throw new Error(error);
    rootPgPool.end();
  }
}
