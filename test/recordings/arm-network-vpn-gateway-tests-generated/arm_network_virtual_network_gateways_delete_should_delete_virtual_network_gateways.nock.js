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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"b6318c1f-0149-4c9b-ad9d-c5de94311af9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3c78f1b3-7cf6-43b1-826c-a7ae6462be9a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"b6318c1f-0149-4c9b-ad9d-c5de94311af9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"15.0.0.0/8\"\r\n        ]\r\n      },\r\n      \"vpnClientProtocols\": [],\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7ca39c4-6ccd-4e9b-8f64-0162b9c01da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd67e077f-3ea5-46a1-b67b-a88e8e016ad0',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150810Z:d67e077f-3ea5-46a1-b67b-a88e8e016ad0',
  date: 'Wed, 04 Oct 2017 15:08:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkGatewayName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName\",\r\n  \"etag\": \"W/\\\"b6318c1f-0149-4c9b-ad9d-c5de94311af9\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3c78f1b3-7cf6-43b1-826c-a7ae6462be9a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"b6318c1f-0149-4c9b-ad9d-c5de94311af9\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"15.0.0.0/8\"\r\n        ]\r\n      },\r\n      \"vpnClientProtocols\": [],\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2208',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e7ca39c4-6ccd-4e9b-8f64-0162b9c01da3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd67e077f-3ea5-46a1-b67b-a88e8e016ad0',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150810Z:d67e077f-3ea5-46a1-b67b-a88e8e016ad0',
  date: 'Wed, 04 Oct 2017 15:08:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '8f1df378-b414-4599-9199-b777e77c9d44',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6ebeae12-d4f3-4915-92a3-8ce57b5be556',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150812Z:6ebeae12-d4f3-4915-92a3-8ce57b5be556',
  date: 'Wed, 04 Oct 2017 15:08:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '8f1df378-b414-4599-9199-b777e77c9d44',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6ebeae12-d4f3-4915-92a3-8ce57b5be556',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150812Z:6ebeae12-d4f3-4915-92a3-8ce57b5be556',
  date: 'Wed, 04 Oct 2017 15:08:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3b73d61b-0735-4716-9046-014dbb9d7e26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '4f54896a-8991-47cf-9b6d-e5eae2d3484a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150843Z:4f54896a-8991-47cf-9b6d-e5eae2d3484a',
  date: 'Wed, 04 Oct 2017 15:08:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3b73d61b-0735-4716-9046-014dbb9d7e26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '4f54896a-8991-47cf-9b6d-e5eae2d3484a',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150843Z:4f54896a-8991-47cf-9b6d-e5eae2d3484a',
  date: 'Wed, 04 Oct 2017 15:08:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a047cc9e-4c42-4c1e-88f3-71f8b185f3fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'f5026314-3226-48ce-829e-d293ec6340a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150914Z:f5026314-3226-48ce-829e-d293ec6340a3',
  date: 'Wed, 04 Oct 2017 15:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a047cc9e-4c42-4c1e-88f3-71f8b185f3fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'f5026314-3226-48ce-829e-d293ec6340a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150914Z:f5026314-3226-48ce-829e-d293ec6340a3',
  date: 'Wed, 04 Oct 2017 15:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3a1f5bc2-f558-4d8b-aaac-f5643bed20d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '94a1263f-ed43-42c3-a14f-09a5221aa637',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150945Z:94a1263f-ed43-42c3-a14f-09a5221aa637',
  date: 'Wed, 04 Oct 2017 15:09:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8f1df378-b414-4599-9199-b777e77c9d44?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3a1f5bc2-f558-4d8b-aaac-f5643bed20d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '94a1263f-ed43-42c3-a14f-09a5221aa637',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150945Z:94a1263f-ed43-42c3-a14f-09a5221aa637',
  date: 'Wed, 04 Oct 2017 15:09:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '062c9d0f-6783-4644-b42c-37c305827756',
  'x-ms-correlation-request-id': '062c9d0f-6783-4644-b42c-37c305827756',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150947Z:062c9d0f-6783-4644-b42c-37c305827756',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:09:47 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworkGateways/virtualNetworkGatewayName' under resource group 'xplat-test-vpn-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '062c9d0f-6783-4644-b42c-37c305827756',
  'x-ms-correlation-request-id': '062c9d0f-6783-4644-b42c-37c305827756',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150947Z:062c9d0f-6783-4644-b42c-37c305827756',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:09:47 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2017-10-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '5127e819-14f6-4078-a162-e1edfcea811b',
  'x-ms-correlation-request-id': '5127e819-14f6-4078-a162-e1edfcea811b',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150948Z:5127e819-14f6-4078-a162-e1edfcea811b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:09:47 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways?api-version=2017-10-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '5127e819-14f6-4078-a162-e1edfcea811b',
  'x-ms-correlation-request-id': '5127e819-14f6-4078-a162-e1edfcea811b',
  'x-ms-routing-request-id': 'WESTEUROPE:20171004T150948Z:5127e819-14f6-4078-a162-e1edfcea811b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 04 Oct 2017 15:09:47 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];
