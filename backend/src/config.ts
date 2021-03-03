import dotenv from 'dotenv';

dotenv.config();

export const {
  SERVER_URL,
  NODE_ENV,
  PORT,
  DATABASE_URL = 'postgres:///',
  DATABASE_SCHEMA = 'local',
  DATABASE_POOL,
  DATABASE_IDLE_TIMEOUT_MILLIS,
  DATABASE_CONNECTION_TIMEOUT_MILLIS,
  SERVICE_URL,
} = process.env;
