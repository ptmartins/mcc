const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

const data1 = require('./data/info.json');
const data2 = require('./data/license.json');

const combinedData = {
  info: data1.info,
  license: data2.licences
};

const router = jsonServer.router(combinedData);

server.use('/api', router); // Prefix all routes with '/api'

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});