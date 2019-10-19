const dotenv = require('dotenv');

const { NODE_ENV } = process.env;

dotenv.config({ path: `${__dirname}/../.env.${NODE_ENV}` });

module.exports = {
  env: NODE_ENV,
  port: process.env.PORT,
  secret: process.env.APP_SECRET,
  cors: {
    origin: NODE_ENV === 'production' ? ['*'] : '*', // Change this to your domain
  },
  logger: {
    format: ':method :url :status :res[content-length] - :response-time ms',
  },
  limiter: {
    windowMs: 10 * 60 * 1000,
    max: 100,
  },
  database: {
    [NODE_ENV]: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      dialect: process.env.DATABASE_DIALECT,
      logging: NODE_ENV === 'development',
    },
  },
};
