// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'x-ms-correlation-request-id': 'e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142610Z:e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:26:09 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'x-ms-correlation-request-id': 'e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142610Z:e90dfe0e-94fc-49c1-9227-7c56360ba604',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:26:09 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"ade40732-023a-4511-a40b-52cc9ff81935\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9718f47c-b4f8-43e5-9710-539aa940311d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142627Z:9718f47c-b4f8-43e5-9710-539aa940311d',
  date: 'Fri, 02 Jun 2017 14:26:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"ade40732-023a-4511-a40b-52cc9ff81935\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9718f47c-b4f8-43e5-9710-539aa940311d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142627Z:9718f47c-b4f8-43e5-9710-539aa940311d',
  date: 'Fri, 02 Jun 2017 14:26:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ffd3e4e7-19eb-4e63-a219-54a28f4db3f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '9462e98b-87da-48bc-afb1-4362e83edeaf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142658Z:9462e98b-87da-48bc-afb1-4362e83edeaf',
  date: 'Fri, 02 Jun 2017 14:26:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/8d3c2dd7-c651-4c0f-a6bb-eddbeed9952e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ffd3e4e7-19eb-4e63-a219-54a28f4db3f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '9462e98b-87da-48bc-afb1-4362e83edeaf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142658Z:9462e98b-87da-48bc-afb1-4362e83edeaf',
  date: 'Fri, 02 Jun 2017 14:26:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': 'be83226d-6163-4650-a1f0-8ca9cd910a5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'd8519505-d6ef-48e7-a6a5-52cfe14da8b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142659Z:d8519505-d6ef-48e7-a6a5-52cfe14da8b3',
  date: 'Fri, 02 Jun 2017 14:26:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': 'be83226d-6163-4650-a1f0-8ca9cd910a5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'd8519505-d6ef-48e7-a6a5-52cfe14da8b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142659Z:d8519505-d6ef-48e7-a6a5-52cfe14da8b3',
  date: 'Fri, 02 Jun 2017 14:26:59 GMT',
  connection: 'close' });
 return result; }]];
