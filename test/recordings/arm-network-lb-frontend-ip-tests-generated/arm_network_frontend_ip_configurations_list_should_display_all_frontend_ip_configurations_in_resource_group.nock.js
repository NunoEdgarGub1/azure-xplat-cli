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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"0eb161c8-df18-4006-8ed8-56a75c500c12\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"0eb161c8-df18-4006-8ed8-56a75c500c12\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0eb161c8-df18-4006-8ed8-56a75c500c12"',
  'x-ms-request-id': '966be19c-4a14-4619-9de1-466c0f6386a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b093c3da-11e2-409d-8179-a0590c276204',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110141Z:b093c3da-11e2-409d-8179-a0590c276204',
  date: 'Wed, 27 Sep 2017 11:01:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"0eb161c8-df18-4006-8ed8-56a75c500c12\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus2\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"345ce78d-d150-44c1-94e8-bfd322ab64f9\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"0eb161c8-df18-4006-8ed8-56a75c500c12\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-frontend-ip/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        },\r\n        \"zones\": [\r\n          \"2\"\r\n        ]\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1497',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0eb161c8-df18-4006-8ed8-56a75c500c12"',
  'x-ms-request-id': '966be19c-4a14-4619-9de1-466c0f6386a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b093c3da-11e2-409d-8179-a0590c276204',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T110141Z:b093c3da-11e2-409d-8179-a0590c276204',
  date: 'Wed, 27 Sep 2017 11:01:41 GMT',
  connection: 'close' });
 return result; }]];
