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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"addcdfe8-78c2-48db-850d-bdfd6c29ca9c\",\r\n    \"sku\": {\r\n      \"name\": \"WAF_Medium\",\r\n      \"tier\": \"WAF\",\r\n      \"capacity\": 3\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 443,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Enabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '9754',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa458e96-0f82-40cd-bd06-105438cb9aa6"',
  'x-ms-request-id': '0bc87b87-c79a-4f7c-83e2-28c9c627e25b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '717ae26f-b30e-456f-b5e4-5ffadee466ea',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152314Z:717ae26f-b30e-456f-b5e4-5ffadee466ea',
  date: 'Mon, 02 Oct 2017 15:23:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationGatewayName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName\",\r\n  \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"addcdfe8-78c2-48db-850d-bdfd6c29ca9c\",\r\n    \"sku\": {\r\n      \"name\": \"WAF_Medium\",\r\n      \"tier\": \"WAF\",\r\n      \"capacity\": 3\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 443,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"10.0.0.0\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 80,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Enabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"fa458e96-0f82-40cd-bd06-105438cb9aa6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '9754',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa458e96-0f82-40cd-bd06-105438cb9aa6"',
  'x-ms-request-id': '0bc87b87-c79a-4f7c-83e2-28c9c627e25b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '717ae26f-b30e-456f-b5e4-5ffadee466ea',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152314Z:717ae26f-b30e-456f-b5e4-5ffadee466ea',
  date: 'Mon, 02 Oct 2017 15:23:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendhealth?api-version=2017-10-01')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '089d369c-7b2e-4574-a16f-9abcffc273d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '97969fa5-d21b-425f-a55e-f812f02a4579',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152317Z:97969fa5-d21b-425f-a55e-f812f02a4579',
  date: 'Mon, 02 Oct 2017 15:23:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendhealth?api-version=2017-10-01')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '089d369c-7b2e-4574-a16f-9abcffc273d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '97969fa5-d21b-425f-a55e-f812f02a4579',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152317Z:97969fa5-d21b-425f-a55e-f812f02a4579',
  date: 'Mon, 02 Oct 2017 15:23:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01')
  .reply(200, "{\r\n  \"backendAddressPools\": [\r\n    {\r\n      \"backendAddressPool\": {\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n      },\r\n      \"backendHttpSettingsCollection\": [\r\n        {\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          },\r\n          \"servers\": [\r\n            {\r\n              \"address\": \"10.0.0.0\",\r\n              \"health\": \"Unhealthy\"\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '805',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01',
  'x-ms-request-id': '089d369c-7b2e-4574-a16f-9abcffc273d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8c73ed2e-3782-41e2-b276-e2a799c991af',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152348Z:8c73ed2e-3782-41e2-b276-e2a799c991af',
  date: 'Mon, 02 Oct 2017 15:23:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01')
  .reply(200, "{\r\n  \"backendAddressPools\": [\r\n    {\r\n      \"backendAddressPool\": {\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendAddressPools/pool01\"\r\n      },\r\n      \"backendHttpSettingsCollection\": [\r\n        {\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-application-gateway/providers/Microsoft.Network/applicationGateways/applicationGatewayName/backendHttpSettingsCollection/httpSettings01\"\r\n          },\r\n          \"servers\": [\r\n            {\r\n              \"address\": \"10.0.0.0\",\r\n              \"health\": \"Unhealthy\"\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '805',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/089d369c-7b2e-4574-a16f-9abcffc273d3?api-version=2017-10-01',
  'x-ms-request-id': '089d369c-7b2e-4574-a16f-9abcffc273d3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8c73ed2e-3782-41e2-b276-e2a799c991af',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T152348Z:8c73ed2e-3782-41e2-b276-e2a799c991af',
  date: 'Mon, 02 Oct 2017 15:23:47 GMT',
  connection: 'close' });
 return result; }]];
