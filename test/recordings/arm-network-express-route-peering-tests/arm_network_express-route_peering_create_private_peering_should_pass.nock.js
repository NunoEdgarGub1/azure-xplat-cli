// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '52b6b790-9d5f-450c-98d9-97dbd91015d5',
    name: 'IXPMegaportASHPri',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourcegroups/xplatTestGroupERPeering?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGroupERPeering' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'x-ms-correlation-request-id': 'dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103624Z:dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:23 GMT',
  connection: 'close',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourcegroups/xplatTestGroupERPeering?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGroupERPeering' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'x-ms-correlation-request-id': 'dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103624Z:dd280f8e-b691-4428-82ea-69c29dca1bd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:23 GMT',
  connection: 'close',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourcegroups/xplatTestGroupERPeering?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering\",\"name\":\"xplatTestGroupERPeering\",\"location\":\"brazilsouth\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'x-ms-correlation-request-id': '852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103627Z:852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourcegroups/xplatTestGroupERPeering?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering\",\"name\":\"xplatTestGroupERPeering\",\"location\":\"brazilsouth\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'x-ms-correlation-request-id': '852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103627Z:852b3761-7859-4a1a-a3df-8120cbb0cabc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit' under resource group 'xplatTestGroupERPeering' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'x-ms-correlation-request-id': 'b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103628Z:b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:28 GMT',
  connection: 'close',
  'content-length': '190' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit' under resource group 'xplatTestGroupERPeering' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'x-ms-correlation-request-id': 'b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103628Z:b04d4439-aad1-4758-9dc9-2c995a6fd7d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 10:36:28 GMT',
  connection: 'close',
  'content-length': '190' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"b9a84fac-4c32-4732-8a3e-7950cae73f68\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3d7e41fc-32c9-4db0-9389-ab227f65f720\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1050',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6ce50e1e-7d7d-4283-9d24-b94d6586383c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c6cee50e-bb01-462c-9a56-1187ffcb1836',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103633Z:c6cee50e-bb01-462c-9a56-1187ffcb1836',
  date: 'Wed, 31 May 2017 10:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01', '*')
  .reply(201, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"b9a84fac-4c32-4732-8a3e-7950cae73f68\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3d7e41fc-32c9-4db0-9389-ab227f65f720\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1050',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6ce50e1e-7d7d-4283-9d24-b94d6586383c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c6cee50e-bb01-462c-9a56-1187ffcb1836',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103633Z:c6cee50e-bb01-462c-9a56-1187ffcb1836',
  date: 'Wed, 31 May 2017 10:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '175a36fa-77af-473e-807b-41e15bd57943',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '84d84b43-9a23-439d-8b8c-bdcd96a6c43f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103704Z:84d84b43-9a23-439d-8b8c-bdcd96a6c43f',
  date: 'Wed, 31 May 2017 10:37:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '175a36fa-77af-473e-807b-41e15bd57943',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '84d84b43-9a23-439d-8b8c-bdcd96a6c43f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103704Z:84d84b43-9a23-439d-8b8c-bdcd96a6c43f',
  date: 'Wed, 31 May 2017 10:37:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f523ea6e-f749-45ab-85e7-d6ec0f0f3e09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6ecf891c-1c0d-4d58-9b5e-6375d6996825',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103735Z:6ecf891c-1c0d-4d58-9b5e-6375d6996825',
  date: 'Wed, 31 May 2017 10:37:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/6ce50e1e-7d7d-4283-9d24-b94d6586383c?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f523ea6e-f749-45ab-85e7-d6ec0f0f3e09',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6ecf891c-1c0d-4d58-9b5e-6375d6996825',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103735Z:6ecf891c-1c0d-4d58-9b5e-6375d6996825',
  date: 'Wed, 31 May 2017 10:37:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"72400360-3cc7-460d-8e60-898aad67bb4b\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3d7e41fc-32c9-4db0-9389-ab227f65f720\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"f0b6ab79-8e97-4ff0-ac6d-508e707c36c2\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1081',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0d7de5c2-fad4-4585-a844-d563b77bbc2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'cb00e64d-cc42-4d1f-91fe-b8310175cea6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103737Z:cb00e64d-cc42-4d1f-91fe-b8310175cea6',
  date: 'Wed, 31 May 2017 10:37:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteCircuit\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit\",\r\n  \"etag\": \"W/\\\"72400360-3cc7-460d-8e60-898aad67bb4b\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3d7e41fc-32c9-4db0-9389-ab227f65f720\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"f0b6ab79-8e97-4ff0-ac6d-508e707c36c2\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1081',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0d7de5c2-fad4-4585-a844-d563b77bbc2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'cb00e64d-cc42-4d1f-91fe-b8310175cea6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103737Z:cb00e64d-cc42-4d1f-91fe-b8310175cea6',
  date: 'Wed, 31 May 2017 10:37:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '300',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2b8e294c-2c8c-4b26-9198-4233cca9ffb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3f34650a-8bc6-41c9-9f94-675ce1689cca',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103738Z:3f34650a-8bc6-41c9-9f94-675ce1689cca',
  date: 'Wed, 31 May 2017 10:37:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '300',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2b8e294c-2c8c-4b26-9198-4233cca9ffb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '3f34650a-8bc6-41c9-9f94-675ce1689cca',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103738Z:3f34650a-8bc6-41c9-9f94-675ce1689cca',
  date: 'Wed, 31 May 2017 10:37:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01', '*')
  .reply(201, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"f9e197bc-3066-405b-b479-7a2ebcac86be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 0,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"state\": \"Disabled\",\r\n    \"vlanId\": 200,\r\n    \"lastModifiedBy\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '623',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f66ace23-030a-40dd-a24a-eaa4830ac29d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8c36a83e-1eff-40e2-8686-a97bf81ffa6e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103740Z:8c36a83e-1eff-40e2-8686-a97bf81ffa6e',
  date: 'Wed, 31 May 2017 10:37:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01', '*')
  .reply(201, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"f9e197bc-3066-405b-b479-7a2ebcac86be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 0,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"state\": \"Disabled\",\r\n    \"vlanId\": 200,\r\n    \"lastModifiedBy\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '623',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'f66ace23-030a-40dd-a24a-eaa4830ac29d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8c36a83e-1eff-40e2-8686-a97bf81ffa6e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103740Z:8c36a83e-1eff-40e2-8686-a97bf81ffa6e',
  date: 'Wed, 31 May 2017 10:37:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fca2a8f5-c6d4-4af2-911e-b9b1bd097991',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '027274fc-fd71-42a0-b429-0320ca28c173',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103811Z:027274fc-fd71-42a0-b429-0320ca28c173',
  date: 'Wed, 31 May 2017 10:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fca2a8f5-c6d4-4af2-911e-b9b1bd097991',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '027274fc-fd71-42a0-b429-0320ca28c173',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103811Z:027274fc-fd71-42a0-b429-0320ca28c173',
  date: 'Wed, 31 May 2017 10:38:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8169cf2a-2418-44b9-8692-b71236bdf699',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '3aab9bed-e5f9-4b37-b9b5-ece049826042',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103843Z:3aab9bed-e5f9-4b37-b9b5-ece049826042',
  date: 'Wed, 31 May 2017 10:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/providers/Microsoft.Network/locations/brazilsouth/operations/f66ace23-030a-40dd-a24a-eaa4830ac29d?api-version=2016-12-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8169cf2a-2418-44b9-8692-b71236bdf699',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '3aab9bed-e5f9-4b37-b9b5-ece049826042',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103843Z:3aab9bed-e5f9-4b37-b9b5-ece049826042',
  date: 'Wed, 31 May 2017 10:38:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"1a09874c-9cfa-4923-b0b7-3d0bafbabdb2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1379e634-6d3d-4a05-8516-b62bf687f812',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '53eaf4c2-acbd-4357-916f-69b1fb19d5cd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103845Z:53eaf4c2-acbd-4357-916f-69b1fb19d5cd',
  date: 'Wed, 31 May 2017 10:38:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-12-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"1a09874c-9cfa-4923-b0b7-3d0bafbabdb2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1379e634-6d3d-4a05-8516-b62bf687f812',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '53eaf4c2-acbd-4357-916f-69b1fb19d5cd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T103845Z:53eaf4c2-acbd-4357-916f-69b1fb19d5cd',
  date: 'Wed, 31 May 2017 10:38:44 GMT',
  connection: 'close' });
 return result; }]];