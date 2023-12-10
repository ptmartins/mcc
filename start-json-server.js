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
const data6 = require('./data/updates.json');
const data7 = require('./data/resourceGroups.json');
const data8 = require('./data/applications.json');
const data9 = require('./data/schema.json');
const data10 = require('./data/databases.json');
const data11 = require('./data/localCertificates.json');
const data12 = require('./data/fields.json');
const data13 = require('./data/roles.json');
const data14 = require('./data/renditionProfile.json');
const data15 = require('./data/mappingFiles.json');
const data16 = require('./data/defaultRights.json');
const data17 = require('./data/tabs.json');

const combinedData = {
  info: data1.info,
  license: data2.licences,
  plugins: data2.plugins,
  general: data3,
  certificates: data4.certificates,
  diagnostics: data5.dumpfiles,
  updates: data6,
  resourceGroups: data7,
  applications: data8.applications,
  schema: data9,
  databases: data10.databases,
  localCertificates: data11,
  fields: data12,
  roles: data13,
  renditions: data14,
  mappings: data15,
  defaultRights: data16,
  tabs: data17
};

const router = jsonServer.router(combinedData);

server.use('/api', router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
