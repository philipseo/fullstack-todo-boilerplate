import { Express } from 'express';
import morgan, { StreamOptions } from 'morgan';
import { IncomingMessage } from 'http';

import { NODE_ENV } from '@src/config';
import { logger } from '@utils/logger';

interface Request extends IncomingMessage {
  body: {
    query: String;
  }
}

export default async function installLogging(app: Express) {
  try {
    const stream: StreamOptions = {
      write: (message) => logger.http(message),
    };

    const skip = () => NODE_ENV === 'production';

    const registerGraphQLToken = () => {
      morgan.token('graphql-query', (req: Request) => `GraphQL ${req?.body?.query}`);
    }
    registerGraphQLToken();

    app.use(morgan(':method :url :status :res[content-length] - :response-time ms\n:graphql-query', { stream, skip }));
  } catch(error) {
    throw new Error(error);
  }
}
