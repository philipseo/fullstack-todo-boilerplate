import { Express } from 'express';
import helmet from 'helmet';

export default function installHelmet(app: Express) {
  try {
    const scriptSrcUrls = ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'];
    const styleSrcUrls = ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'];
    const connectSrcUrls = ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'];

    app.use(helmet());
    app.use(helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: scriptSrcUrls,
        styleSrc: styleSrcUrls,
        frameSrc: ["'self'"],
        childSrc: ["'self'"],
        objectSrc: ["'self'"],
        imgSrc: ["'self'"],
        workerSrc: ["'self'", 'blob:'],
        connectSrc: connectSrcUrls,
      },
    }));
  } catch(error) {
    throw new Error(error);
  }
}
