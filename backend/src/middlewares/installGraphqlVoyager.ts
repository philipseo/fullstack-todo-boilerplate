import { Express } from 'express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { SERVER_URL } from '@src/config';

export default function installGraphqlVoyager(app: Express) {
  try {
    app.use('/voyager', voyagerMiddleware({
      endpointUrl: `${SERVER_URL}/graphql`,
      displayOptions: {
        hideRoot: true,
        skipDeprecated: true,
        skipRelay: true,
      },
    }));
  } catch(error) {
    throw new Error(error);
  }
}
