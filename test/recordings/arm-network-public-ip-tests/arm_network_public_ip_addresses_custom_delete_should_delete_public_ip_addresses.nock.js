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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"db20166d-5989-4d97-83d5-04692fc68f39\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad9a177d-0e6a-4f87-af7a-7cb165550661\",\r\n    \"ipAddress\": \"52.163.58.224\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '756',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"db20166d-5989-4d97-83d5-04692fc68f39"',
  'x-ms-request-id': '0af46ef0-7919-4d1b-bb3c-c168375d6ba8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '20ae70db-d2db-49fc-98df-932ff01b0c94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135758Z:20ae70db-d2db-49fc-98df-932ff01b0c94',
  date: 'Fri, 07 Jul 2017 13:57:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"db20166d-5989-4d97-83d5-04692fc68f39\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad9a177d-0e6a-4f87-af7a-7cb165550661\",\r\n    \"ipAddress\": \"52.163.58.224\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '756',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"db20166d-5989-4d97-83d5-04692fc68f39"',
  'x-ms-request-id': '0af46ef0-7919-4d1b-bb3c-c168375d6ba8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '20ae70db-d2db-49fc-98df-932ff01b0c94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135758Z:20ae70db-d2db-49fc-98df-932ff01b0c94',
  date: 'Fri, 07 Jul 2017 13:57:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operationResults/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '6c6fa155-095e-48aa-b151-8fddb246ba90',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fe7cd8b4-85cb-47c8-8da9-bb7691849a63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135800Z:fe7cd8b4-85cb-47c8-8da9-bb7691849a63',
  date: 'Fri, 07 Jul 2017 13:58:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operationResults/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '6c6fa155-095e-48aa-b151-8fddb246ba90',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fe7cd8b4-85cb-47c8-8da9-bb7691849a63',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135800Z:fe7cd8b4-85cb-47c8-8da9-bb7691849a63',
  date: 'Fri, 07 Jul 2017 13:58:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0cc5bea9-6dc3-4493-8584-fa7c80615804',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '49f6874e-ca4c-4cae-8dd0-b0c72ee2f79c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135831Z:49f6874e-ca4c-4cae-8dd0-b0c72ee2f79c',
  date: 'Fri, 07 Jul 2017 13:58:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/6c6fa155-095e-48aa-b151-8fddb246ba90?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0cc5bea9-6dc3-4493-8584-fa7c80615804',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '49f6874e-ca4c-4cae-8dd0-b0c72ee2f79c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135831Z:49f6874e-ca4c-4cae-8dd0-b0c72ee2f79c',
  date: 'Fri, 07 Jul 2017 13:58:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '50d8beec-08ef-432f-be96-dff23ff270f0',
  'x-ms-correlation-request-id': '50d8beec-08ef-432f-be96-dff23ff270f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135833Z:50d8beec-08ef-432f-be96-dff23ff270f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:58:33 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip-custom' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '50d8beec-08ef-432f-be96-dff23ff270f0',
  'x-ms-correlation-request-id': '50d8beec-08ef-432f-be96-dff23ff270f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T135833Z:50d8beec-08ef-432f-be96-dff23ff270f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 13:58:33 GMT',
  connection: 'close',
  'content-length': '186' });
 return result; }]];
