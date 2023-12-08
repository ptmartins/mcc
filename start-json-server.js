const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

const data1 = require('./data/info.json');
const data2 = require('./data/license.json');
const data3 = require('./data/general.json');
const data4 = require('./data/certificates.json');
const data5 = require('./data/diagnostics.json');

const combinedData = {
  info: data1.info,
  license: data2.licences,
  plugins: data2.plugins,
  general: data3,
  certificates: data4.certificates,
  diagnostics: data5.dumpfiles
};

const router = jsonServer.router(combinedData);

server.use('/api', router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
