import { Express } from 'express';
import cors from 'cors';

export default function installHelmet(app: Express) {
  try {
    app.use(cors());
  } catch(error) {
    throw new Error(error);
  }
}
