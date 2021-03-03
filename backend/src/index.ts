import express, {Express} from 'express';

import {logger} from '@utils/logger';
import {NODE_ENV, PORT, SERVER_URL} from '@src/config';
import installMiddlewares from '@src/middlewares';

(async () => {
  try {
    const app: Express = express();

    await installMiddlewares(app);

    app.listen(PORT, () => {
      logger.info(`🚀 GraphQL Server is running on ${SERVER_URL}`);
      if (NODE_ENV === 'development') {
        logger.info(`🚀 Graphiql Playground is running on ${SERVER_URL}/graphiql`);
        logger.info(`🚀 Voyager is running on ${SERVER_URL}/voyager`);
      }
    });
  } catch (error) {
    console.log('🚀 GraphQL Server is Error: ', error);
  }
})();
