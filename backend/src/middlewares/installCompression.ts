import { Express } from 'express';
import compression from 'compression';

export default function installCompression(app: Express) {
  try {
    app.use(compression());
  } catch(error) {
    throw new Error(error);
  }
}
