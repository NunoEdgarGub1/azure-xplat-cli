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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nic' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-request-id': 'c2ac7f32-7aea-40e4-97f3-1dd0f2a73c2b',
  'x-ms-correlation-request-id': 'c2ac7f32-7aea-40e4-97f3-1dd0f2a73c2b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142033Z:c2ac7f32-7aea-40e4-97f3-1dd0f2a73c2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:20:33 GMT',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic\",\"name\":\"xplat-test-nic\",\"location\":\"westeurope\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '195',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '6e21309d-ed0e-4061-a38a-409b411a79dd',
  'x-ms-correlation-request-id': '6e21309d-ed0e-4061-a38a-409b411a79dd',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142034Z:6e21309d-ed0e-4061-a38a-409b411a79dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:20:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ea2fe67f-0846-4d59-8b3a-b980be3d9dd3',
  'x-ms-correlation-request-id': 'ea2fe67f-0846-4d59-8b3a-b980be3d9dd3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142035Z:ea2fe67f-0846-4d59-8b3a-b980be3d9dd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:20:35 GMT',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"1d762973-2b98-4f70-bab5-ebc32441e0ba\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westeurope\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"0cfca44b-07a9-41eb-873e-53c1c484dd40\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '0a2ddf99-d2a1-4bc9-a5c5-a32ae141704f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/0a2ddf99-d2a1-4bc9-a5c5-a32ae141704f?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4523ce1f-d752-40cc-bbf5-6f68aff99fb2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142036Z:4523ce1f-d752-40cc-bbf5-6f68aff99fb2',
  date: 'Wed, 07 Dec 2016 14:20:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/0a2ddf99-d2a1-4bc9-a5c5-a32ae141704f?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2cc80208-7395-4642-a6c8-b53df56bce4f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '928459b8-4776-4ad0-ba3e-41227dc0d45e',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142107Z:928459b8-4776-4ad0-ba3e-41227dc0d45e',
  date: 'Wed, 07 Dec 2016 14:21:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"ed06bf4d-13a8-45d4-9eac-d7c039480f71\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westeurope\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0cfca44b-07a9-41eb-873e-53c1c484dd40\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ed06bf4d-13a8-45d4-9eac-d7c039480f71"',
  'x-ms-request-id': '3ddceba0-34e8-4320-811c-73d7e43ee423',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '965f52bf-70ef-4013-a308-954d44bf5f60',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142107Z:965f52bf-70ef-4013-a308-954d44bf5f60',
  date: 'Wed, 07 Dec 2016 14:21:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"ed06bf4d-13a8-45d4-9eac-d7c039480f71\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westeurope\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0cfca44b-07a9-41eb-873e-53c1c484dd40\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ed06bf4d-13a8-45d4-9eac-d7c039480f71"',
  'x-ms-request-id': 'b14d694b-37bd-446f-8f89-218c24937a48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': 'd7040515-be12-49fa-bcf6-fd8dbf671b88',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142108Z:d7040515-be12-49fa-bcf6-fd8dbf671b88',
  date: 'Wed, 07 Dec 2016 14:21:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3a5817d9-0a38-402a-a6ab-a1b05f7c0ff2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '7500b5ee-c635-4087-99ff-40f14cd45919',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142108Z:7500b5ee-c635-4087-99ff-40f14cd45919',
  date: 'Wed, 07 Dec 2016 14:21:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"cc7df03c-6f87-4429-ab67-0f3c811dded5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"serviceTunnels\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '124fc512-4765-4404-9760-57ad29b7f21c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/124fc512-4765-4404-9760-57ad29b7f21c?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '0a5a893b-e915-4e72-96f7-5969aaf8d689',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142109Z:0a5a893b-e915-4e72-96f7-5969aaf8d689',
  date: 'Wed, 07 Dec 2016 14:21:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/124fc512-4765-4404-9760-57ad29b7f21c?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91042652-51cb-4a20-b247-8432520761e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'c9277d63-d671-44d2-b007-7f49865598f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142139Z:c9277d63-d671-44d2-b007-7f49865598f2',
  date: 'Wed, 07 Dec 2016 14:21:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"4996673d-28c6-4f90-b2e0-b18c27a4fa3b\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"serviceTunnels\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4996673d-28c6-4f90-b2e0-b18c27a4fa3b"',
  'x-ms-request-id': '981737b9-8530-43d0-b1b2-fc303543cfdd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '7d81bfd3-fac6-49ca-878f-52b9eead1ce3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142147Z:7d81bfd3-fac6-49ca-878f-52b9eead1ce3',
  date: 'Wed, 07 Dec 2016 14:21:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '7f854b9e-26da-425f-90a0-766d92c28fe8',
  'x-ms-correlation-request-id': '7f854b9e-26da-425f-90a0-766d92c28fe8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142147Z:7f854b9e-26da-425f-90a0-766d92c28fe8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:21:47 GMT',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"4bd6bf8d-41fe-4a18-8390-288eb70b3ed3\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"5c673606-54fe-4975-aa5b-265612471498\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"foo-domain\",\r\n      \"fqdn\": \"foo-domain.westeurope.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '732',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'bb0402f7-b48e-40d8-8156-f84d8798d28d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/bb0402f7-b48e-40d8-8156-f84d8798d28d?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '3060b53a-e77e-4909-83fd-3081a104c474',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142148Z:3060b53a-e77e-4909-83fd-3081a104c474',
  date: 'Wed, 07 Dec 2016 14:21:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/bb0402f7-b48e-40d8-8156-f84d8798d28d?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1534971e-a8ab-40ce-ab09-b1b2c5007fea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '67113695-0fda-4310-b441-c1a23d0f77d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142219Z:67113695-0fda-4310-b441-c1a23d0f77d7',
  date: 'Wed, 07 Dec 2016 14:22:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"7737a196-11b5-426f-9583-6d6178ead7ca\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5c673606-54fe-4975-aa5b-265612471498\",\r\n    \"ipAddress\": \"13.80.150.234\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"foo-domain\",\r\n      \"fqdn\": \"foo-domain.westeurope.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7737a196-11b5-426f-9583-6d6178ead7ca"',
  'x-ms-request-id': '40c9c7b1-f350-4b4e-8051-d1ec87f01f88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-correlation-request-id': '97c57282-58db-4fde-b3b4-e26362ddf46b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142219Z:97c57282-58db-4fde-b3b4-e26362ddf46b',
  date: 'Wed, 07 Dec 2016 14:22:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/test-nic' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '94217e0f-6267-41aa-af6e-0068d9f0fac3',
  'x-ms-correlation-request-id': '94217e0f-6267-41aa-af6e-0068d9f0fac3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142220Z:94217e0f-6267-41aa-af6e-0068d9f0fac3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:22:20 GMT',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"1b3403e5-0817-49c6-abb4-0a4120ea6517\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9345a996-75aa-4d3e-94d6-d661f7f679f1\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"1b3403e5-0817-49c6-abb4-0a4120ea6517\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1901',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc04c5f1-60ce-4be7-94db-0a80c9f232ad',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/cc04c5f1-60ce-4be7-94db-0a80c9f232ad?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': 'f2220065-7981-442d-acc0-983bdb0df4ab',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142221Z:f2220065-7981-442d-acc0-983bdb0df4ab',
  date: 'Wed, 07 Dec 2016 14:22:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"1b3403e5-0817-49c6-abb4-0a4120ea6517\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9345a996-75aa-4d3e-94d6-d661f7f679f1\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"1b3403e5-0817-49c6-abb4-0a4120ea6517\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1901',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1b3403e5-0817-49c6-abb4-0a4120ea6517"',
  'x-ms-request-id': '922d4612-7bbd-4b7d-a1ad-b83ec78b2cf1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '55873dcb-b4d8-4cd3-9564-a8134ad63213',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142221Z:55873dcb-b4d8-4cd3-9564-a8134ad63213',
  date: 'Wed, 07 Dec 2016 14:22:21 GMT' });
 return result; }]];