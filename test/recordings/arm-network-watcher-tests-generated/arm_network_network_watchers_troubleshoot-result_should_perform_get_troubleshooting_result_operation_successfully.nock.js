// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"cc1f12f5-c86d-453e-9156-1bc330c08a16\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cc1f12f5-c86d-453e-9156-1bc330c08a16"',
  'x-ms-request-id': 'b7e3cccc-0bff-416f-8aa9-5a9a3b9dfff0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8692cdae-e7b0-4430-900c-934a5616391c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082556Z:8692cdae-e7b0-4430-900c-934a5616391c',
  date: 'Mon, 02 Oct 2017 08:25:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"cc1f12f5-c86d-453e-9156-1bc330c08a16\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cc1f12f5-c86d-453e-9156-1bc330c08a16"',
  'x-ms-request-id': 'b7e3cccc-0bff-416f-8aa9-5a9a3b9dfff0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8692cdae-e7b0-4430-900c-934a5616391c',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082556Z:8692cdae-e7b0-4430-900c-934a5616391c',
  date: 'Mon, 02 Oct 2017 08:25:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/queryTroubleshootResult?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"startTime\": \"2017-10-02T08:23:29.2950389Z\",\r\n  \"endTime\": \"2017-10-02T08:23:37.842Z\",\r\n  \"code\": \"UnHealthy\",\r\n  \"results\": [\r\n    {\r\n      \"id\": \"UnKnown\",\r\n      \"summary\": \"The health status for this VPN gateway is unknown\",\r\n      \"detail\": \"We are currently unable to determine the health of this VPN gateway\",\r\n      \"recommendedActions\": [\r\n        {\r\n          \"actionText\": \"If you are having problems with the VPN gateway, try resetting the VPN gateway\",\r\n          \"actionUri\": \"https://azure.microsoft.com/en-us/documentation/articles/vpn-gateway-resetgw-classic/\",\r\n          \"actionUriText\": \"resetting the VPN gateway\"\r\n        },\r\n        {\r\n          \"actionText\": \"If you are experiencing problems you believe are caused by Azure, contact support\",\r\n          \"actionUri\": \"http://azure.microsoft.com/support\",\r\n          \"actionUriText\": \"contact support\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '915',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '769cdc74-28ad-45ed-928e-a10bf8073b2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f390b72d-8e34-4362-83b4-277777ca516d',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082556Z:f390b72d-8e34-4362-83b4-277777ca516d',
  date: 'Mon, 02 Oct 2017 08:25:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/queryTroubleshootResult?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"startTime\": \"2017-10-02T08:23:29.2950389Z\",\r\n  \"endTime\": \"2017-10-02T08:23:37.842Z\",\r\n  \"code\": \"UnHealthy\",\r\n  \"results\": [\r\n    {\r\n      \"id\": \"UnKnown\",\r\n      \"summary\": \"The health status for this VPN gateway is unknown\",\r\n      \"detail\": \"We are currently unable to determine the health of this VPN gateway\",\r\n      \"recommendedActions\": [\r\n        {\r\n          \"actionText\": \"If you are having problems with the VPN gateway, try resetting the VPN gateway\",\r\n          \"actionUri\": \"https://azure.microsoft.com/en-us/documentation/articles/vpn-gateway-resetgw-classic/\",\r\n          \"actionUriText\": \"resetting the VPN gateway\"\r\n        },\r\n        {\r\n          \"actionText\": \"If you are experiencing problems you believe are caused by Azure, contact support\",\r\n          \"actionUri\": \"http://azure.microsoft.com/support\",\r\n          \"actionUriText\": \"contact support\"\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '915',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '769cdc74-28ad-45ed-928e-a10bf8073b2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f390b72d-8e34-4362-83b4-277777ca516d',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082556Z:f390b72d-8e34-4362-83b4-277777ca516d',
  date: 'Mon, 02 Oct 2017 08:25:56 GMT',
  connection: 'close' });
 return result; }]];
