import { Express } from 'express';

import installBodyParser from '@middlewares/./installBodyParser';
import installCors from '@middlewares/installCors';
import installHelmet from '@middlewares/installHelmet';
import installSameOrigin from '@middlewares/installSameOrigin';
import installCSRFProtection from '@middlewares/installCSRFProtection';
import installCompression from '@middlewares/installCompression';
import installLogging from '@middlewares/installLogging';
import installGraphqlVoyager from '@middlewares/installGraphqlVoyager';
import installPostGraphile from '@middlewares/installPostGraphile';

export default async function installMiddlewares(app: Express) {
  await installBodyParser(app);
  await installCors(app);
  await installHelmet(app);
  await installSameOrigin(app);
  await installCSRFProtection(app);
  await installCompression(app);
  await installLogging(app);
  await installPostGraphile(app);
  await installGraphqlVoyager(app);
}
