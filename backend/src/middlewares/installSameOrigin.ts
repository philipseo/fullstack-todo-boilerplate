import { Express, RequestHandler } from 'express';

import { SERVER_URL } from '@src/config';

export default function installSameOrigin(app: Express) {
  try {
    const middleware: RequestHandler = (req: any, _res: any, next: any) => {
      req.isSameOrigin =
        !req.headers.origin || req.headers.origin === `${SERVER_URL}`;
      next();
    }

    app.use(middleware);
  } catch(error) {
    throw new Error(error);
  }
}
