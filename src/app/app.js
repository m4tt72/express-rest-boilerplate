const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const logger = require('morgan');
const limiter = require('express-rate-limit');

const config = require('../../config');

const router = require('./router');

const app = express();

app.set('trust-proxy', 1);

app.use(limiter(config.limiter));
app.use(helmet());
app.use(cors(config.cors));
app.use(compression());
app.use(express.json());

if (config.env !== 'test') {
  app.use(logger(config.logger.format));
}

app.use(router);

module.exports = app;
