// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '952258c5-aebb-4110-92e9-34f70f6c183a',
  'x-ms-correlation-request-id': '952258c5-aebb-4110-92e9-34f70f6c183a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154023Z:952258c5-aebb-4110-92e9-34f70f6c183a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:40:22 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/gatewayTypeOutOfRangeName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '952258c5-aebb-4110-92e9-34f70f6c183a',
  'x-ms-correlation-request-id': '952258c5-aebb-4110-92e9-34f70f6c183a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154023Z:952258c5-aebb-4110-92e9-34f70f6c183a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:40:22 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"GatewaySubnet\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\",\r\n  \"etag\": \"W/\\\"88941319-4b9c-446c-9289-50f0797aba25\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"88941319-4b9c-446c-9289-50f0797aba25"',
  'x-ms-request-id': '81109239-b326-4998-983a-63e01bc9753a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e9ea10fd-063c-4d81-a71a-241ed9bb5fce',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154023Z:e9ea10fd-063c-4d81-a71a-241ed9bb5fce',
  date: 'Wed, 04 Oct 2017 15:40:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"GatewaySubnet\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\",\r\n  \"etag\": \"W/\\\"88941319-4b9c-446c-9289-50f0797aba25\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"88941319-4b9c-446c-9289-50f0797aba25"',
  'x-ms-request-id': '81109239-b326-4998-983a-63e01bc9753a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e9ea10fd-063c-4d81-a71a-241ed9bb5fce',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154023Z:e9ea10fd-063c-4d81-a71a-241ed9bb5fce',
  date: 'Wed, 04 Oct 2017 15:40:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"fe7a87fd-c425-4d8e-b944-996de51bb2a1\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8fd96e31-4c3f-4a2d-87c2-50a1e9f0c13d\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '615',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fe7a87fd-c425-4d8e-b944-996de51bb2a1"',
  'x-ms-request-id': '1c5d1891-9f51-4948-88d5-2679b3778cd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'cb2875c8-4bec-4b42-9e03-8b8a03f12036',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154024Z:cb2875c8-4bec-4b42-9e03-8b8a03f12036',
  date: 'Wed, 04 Oct 2017 15:40:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"fe7a87fd-c425-4d8e-b944-996de51bb2a1\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8fd96e31-4c3f-4a2d-87c2-50a1e9f0c13d\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '615',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fe7a87fd-c425-4d8e-b944-996de51bb2a1"',
  'x-ms-request-id': '1c5d1891-9f51-4948-88d5-2679b3778cd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'cb2875c8-4bec-4b42-9e03-8b8a03f12036',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T154024Z:cb2875c8-4bec-4b42-9e03-8b8a03f12036',
  date: 'Wed, 04 Oct 2017 15:40:24 GMT',
  connection: 'close' });
 return result; }]];
