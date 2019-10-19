const server = require('./src/server');

const config = require('./config');

const port = +config.port;

server.listen(port, () => {
  process.stdout.write(`[!] server started on http://localhost:${port}\n`);
});
