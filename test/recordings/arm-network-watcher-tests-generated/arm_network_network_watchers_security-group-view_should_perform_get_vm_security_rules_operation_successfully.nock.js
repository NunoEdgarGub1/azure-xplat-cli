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
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"36981f07-c0e1-41ae-9a2e-0aa1c18552e0\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36981f07-c0e1-41ae-9a2e-0aa1c18552e0"',
  'x-ms-request-id': 'b3365a3d-41dc-4bda-9454-df95bb5a6a10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'a9ea3134-a8a9-460b-93da-2e3ad1ca9634',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082318Z:a9ea3134-a8a9-460b-93da-2e3ad1ca9634',
  date: 'Mon, 02 Oct 2017 08:23:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"36981f07-c0e1-41ae-9a2e-0aa1c18552e0\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36981f07-c0e1-41ae-9a2e-0aa1c18552e0"',
  'x-ms-request-id': 'b3365a3d-41dc-4bda-9454-df95bb5a6a10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'a9ea3134-a8a9-460b-93da-2e3ad1ca9634',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082318Z:a9ea3134-a8a9-460b-93da-2e3ad1ca9634',
  date: 'Mon, 02 Oct 2017 08:23:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/securityGroupView?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"networkInterfaces\": [\r\n    {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n      \"securityRuleAssociations\": {\r\n        \"networkInterfaceAssociation\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n          \"securityRules\": []\r\n        },\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          }\r\n        ],\r\n        \"effectiveSecurityRules\": [\r\n          {\r\n            \"name\": \"DefaultOutboundDenyAll\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"*\",\r\n            \"destinationAddressPrefix\": \"*\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowVnetOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n            \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65000,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowInternetOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"Internet\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"Internet\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65001,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_DenyAllOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultInboundDenyAll\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"*\",\r\n            \"destinationAddressPrefix\": \"*\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowVnetInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n            \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65000,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowAzureLoadBalancerInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"AzureLoadBalancer\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65001,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_DenyAllInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Inbound\"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/1382f970-9d81-4e32-b360-e4d0cd2f6838?api-version=2017-10-01',
  'x-ms-request-id': '1382f970-9d81-4e32-b360-e4d0cd2f6838',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '782ad9a8-769a-4899-ae18-9998bd1e2f24',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082328Z:782ad9a8-769a-4899-ae18-9998bd1e2f24',
  date: 'Mon, 02 Oct 2017 08:23:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/securityGroupView?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"networkInterfaces\": [\r\n    {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n      \"securityRuleAssociations\": {\r\n        \"networkInterfaceAssociation\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n          \"securityRules\": []\r\n        },\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions//resourceGroups//providers/Microsoft.Network/networkSecurityGroups//defaultSecurityRules/\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\",\r\n              \"sourcePortRanges\": [],\r\n              \"destinationPortRanges\": [],\r\n              \"sourceAddressPrefixes\": [],\r\n              \"destinationAddressPrefixes\": []\r\n            }\r\n          }\r\n        ],\r\n        \"effectiveSecurityRules\": [\r\n          {\r\n            \"name\": \"DefaultOutboundDenyAll\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"*\",\r\n            \"destinationAddressPrefix\": \"*\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowVnetOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n            \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65000,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowInternetOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"Internet\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"Internet\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65001,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_DenyAllOutBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Outbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultInboundDenyAll\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"*\",\r\n            \"destinationAddressPrefix\": \"*\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"*\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowVnetInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n            \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"VirtualNetwork\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65000,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_AllowAzureLoadBalancerInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"AzureLoadBalancer\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Allow\",\r\n            \"priority\": 65001,\r\n            \"direction\": \"Inbound\"\r\n          },\r\n          {\r\n            \"name\": \"DefaultRule_DenyAllInBound\",\r\n            \"protocol\": \"All\",\r\n            \"sourcePortRange\": \"0-65535\",\r\n            \"destinationPortRange\": \"0-65535\",\r\n            \"sourcePortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"destinationPortRanges\": [\r\n              \"0-65535\"\r\n            ],\r\n            \"sourceAddressPrefix\": \"0.0.0.0/0\",\r\n            \"destinationAddressPrefix\": \"0.0.0.0/0\",\r\n            \"sourceAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"destinationAddressPrefixes\": [\r\n              \"0.0.0.0/0\"\r\n            ],\r\n            \"access\": \"Deny\",\r\n            \"priority\": 65500,\r\n            \"direction\": \"Inbound\"\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/1382f970-9d81-4e32-b360-e4d0cd2f6838?api-version=2017-10-01',
  'x-ms-request-id': '1382f970-9d81-4e32-b360-e4d0cd2f6838',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '782ad9a8-769a-4899-ae18-9998bd1e2f24',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082328Z:782ad9a8-769a-4899-ae18-9998bd1e2f24',
  date: 'Mon, 02 Oct 2017 08:23:27 GMT',
  connection: 'close' });
 return result; }]];
