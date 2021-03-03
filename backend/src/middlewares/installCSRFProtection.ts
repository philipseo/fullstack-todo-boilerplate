import {Express} from 'express';
import csrf from 'csurf';

import {NODE_ENV, SERVER_URL, SERVICE_URL} from '@src/config';

export default function installCSRFProtection(app: Express) {
  try {
    const csrfProtection = csrf({
      cookie: false,
      value: (req) => {
        const csrfToken = req.headers['csrf-token'];
        return typeof csrfToken === 'string' ? csrfToken : '';
      }
    });
    const middleware = (req: any, res: any, next: any) => {
      if (
        NODE_ENV === 'development'
        || (
          req.method === 'POST'
          && req.path === '/graphql'
          && (
            req.headers.origin === `${SERVER_URL}`
            || req.headers.origin === `${SERVICE_URL}`
            || req.headers.referer === `${SERVER_URL}/graphiql`
            || req.headers.referer === `${SERVER_URL}/voyager`
            || req.headers.referer === `${SERVER_URL}/graphql`
          )
        )
      ) {
        next();
      } else {
        csrfProtection(req, res, next);
      }
    }

    app.use(middleware);
  } catch (error) {
    throw new Error(error);
  }
}
