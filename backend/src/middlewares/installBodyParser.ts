import { Express } from 'express';
import bodyParser from 'body-parser';

export default function installHelmet(app: Express) {
  try {
    app.use(bodyParser.json());
  } catch(error) {
    throw new Error(error);
  }
}
