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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"dde7a8fa-ce51-49f6-9bfd-ac8e490197f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 100,\r\n    \"totalBytesPerSession\": 536870912,\r\n    \"timeLimitInSeconds\": 15000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"d:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dde7a8fa-ce51-49f6-9bfd-ac8e490197f5"',
  'x-ms-request-id': '3eb6faf1-4c9a-4e64-a383-e6e7280554d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'e87dcb22-1ac5-478a-bb29-c563beee8096',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110755Z:e87dcb22-1ac5-478a-bb29-c563beee8096',
  date: 'Wed, 15 Feb 2017 11:07:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"dde7a8fa-ce51-49f6-9bfd-ac8e490197f5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 100,\r\n    \"totalBytesPerSession\": 536870912,\r\n    \"timeLimitInSeconds\": 15000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"d:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dde7a8fa-ce51-49f6-9bfd-ac8e490197f5"',
  'x-ms-request-id': '3eb6faf1-4c9a-4e64-a383-e6e7280554d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'e87dcb22-1ac5-478a-bb29-c563beee8096',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110755Z:e87dcb22-1ac5-478a-bb29-c563beee8096',
  date: 'Wed, 15 Feb 2017 11:07:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName/queryStatus?api-version=2017-06-01')
  .reply(202, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"captureStartTime\": \"2017-02-15T11:07:29.6361453Z\",\r\n  \"packetCaptureStatus\": \"Running\",\r\n  \"packetCaptureError\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '22ce3f07-e133-43ed-acc3-ab445c7cc64e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4f4345ad-a18a-4c27-a37a-de43ceffebc3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110756Z:4f4345ad-a18a-4c27-a37a-de43ceffebc3',
  date: 'Wed, 15 Feb 2017 11:07:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName/queryStatus?api-version=2017-06-01')
  .reply(202, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"captureStartTime\": \"2017-02-15T11:07:29.6361453Z\",\r\n  \"packetCaptureStatus\": \"Running\",\r\n  \"packetCaptureError\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '22ce3f07-e133-43ed-acc3-ab445c7cc64e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4f4345ad-a18a-4c27-a37a-de43ceffebc3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110756Z:4f4345ad-a18a-4c27-a37a-de43ceffebc3',
  date: 'Wed, 15 Feb 2017 11:07:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"captureStartTime\": \"2017-02-15T11:07:29.6361453Z\",\r\n  \"packetCaptureStatus\": \"Running\",\r\n  \"packetCaptureError\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01',
  'x-ms-request-id': '22ce3f07-e133-43ed-acc3-ab445c7cc64e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'cf4aebb5-4e4a-4550-af44-85dbbdd60bf6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110827Z:cf4aebb5-4e4a-4550-af44-85dbbdd60bf6',
  date: 'Wed, 15 Feb 2017 11:08:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"captureStartTime\": \"2017-02-15T11:07:29.6361453Z\",\r\n  \"packetCaptureStatus\": \"Running\",\r\n  \"packetCaptureError\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/22ce3f07-e133-43ed-acc3-ab445c7cc64e?api-version=2017-06-01',
  'x-ms-request-id': '22ce3f07-e133-43ed-acc3-ab445c7cc64e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'cf4aebb5-4e4a-4550-af44-85dbbdd60bf6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110827Z:cf4aebb5-4e4a-4550-af44-85dbbdd60bf6',
  date: 'Wed, 15 Feb 2017 11:08:27 GMT',
  connection: 'close' });
 return result; }]];
