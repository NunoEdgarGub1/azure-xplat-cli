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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 555,\r\n          \"frontendPortRangeEnd\": 999,\r\n          \"backendPort\": 987,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7fd25881-5f0b-4a94-a61b-43f599d3f819"',
  'x-ms-request-id': '9ce45e73-a680-4a6f-b2f2-affe6f0cde8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '03050031-3588-4a0a-b2ae-0c2bbcb158a1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110447Z:03050031-3588-4a0a-b2ae-0c2bbcb158a1',
  date: 'Wed, 27 Sep 2017 11:04:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7fd25881-5f0b-4a94-a61b-43f599d3f819\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 555,\r\n          \"frontendPortRangeEnd\": 999,\r\n          \"backendPort\": 987,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7fd25881-5f0b-4a94-a61b-43f599d3f819"',
  'x-ms-request-id': '9ce45e73-a680-4a6f-b2f2-affe6f0cde8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '03050031-3588-4a0a-b2ae-0c2bbcb158a1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110447Z:03050031-3588-4a0a-b2ae-0c2bbcb158a1',
  date: 'Wed, 27 Sep 2017 11:04:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 777,\r\n          \"frontendPortRangeEnd\": 888,\r\n          \"backendPort\": 789,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1af1c3b3-03bc-4e22-ae22-67c7f1045511',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/1af1c3b3-03bc-4e22-ae22-67c7f1045511?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '468d4134-8666-44be-8579-47860c95b0c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110448Z:468d4134-8666-44be-8579-47860c95b0c5',
  date: 'Wed, 27 Sep 2017 11:04:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 777,\r\n          \"frontendPortRangeEnd\": 888,\r\n          \"backendPort\": 789,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1af1c3b3-03bc-4e22-ae22-67c7f1045511',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/1af1c3b3-03bc-4e22-ae22-67c7f1045511?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '468d4134-8666-44be-8579-47860c95b0c5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110448Z:468d4134-8666-44be-8579-47860c95b0c5',
  date: 'Wed, 27 Sep 2017 11:04:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 777,\r\n          \"frontendPortRangeEnd\": 888,\r\n          \"backendPort\": 789,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7441e65c-cc50-48b2-aecc-cb799cee90d1"',
  'x-ms-request-id': 'ffa47947-2ffc-4a27-8957-88c52c44c827',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '2d4c3c56-01d9-4ee9-bab7-72478732adee',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110449Z:2d4c3c56-01d9-4ee9-bab7-72478732adee',
  date: 'Wed, 27 Sep 2017 11:04:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"d77b24f8-ba6f-4e8a-921f-26133f37ffa8\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolName\",\r\n        \"etag\": \"W/\\\"7441e65c-cc50-48b2-aecc-cb799cee90d1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 777,\r\n          \"frontendPortRangeEnd\": 888,\r\n          \"backendPort\": 789,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7441e65c-cc50-48b2-aecc-cb799cee90d1"',
  'x-ms-request-id': 'ffa47947-2ffc-4a27-8957-88c52c44c827',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '2d4c3c56-01d9-4ee9-bab7-72478732adee',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110449Z:2d4c3c56-01d9-4ee9-bab7-72478732adee',
  date: 'Wed, 27 Sep 2017 11:04:48 GMT',
  connection: 'close' });
 return result; }]];
