// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '23a4074d-cca6-4cd3-878f-7f4c2116918d',
    name: 'AutoscaleRunners',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'microsoft.web', 'microsoft.visualstudio', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/features?api-version=2014-08-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Batch/betaAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Batch/features/betaAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Cache/betaAccess2\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Cache/features/betaAccess2\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Cache/betaAccess3\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Cache/features/betaAccess3\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Compute/armApiPreviewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Compute/features/armApiPreviewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Compute/vmssApiPreviewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Compute/features/vmssApiPreviewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"microsoft.dns/privatepreview\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/microsoft.dns/features/privatepreview\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"microsoft.insights/billing\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/microsoft.insights/features/billing\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.KeyVault/previewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.KeyVault/features/previewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Media/privatePreview\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Media/features/privatePreview\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Network/armApiPreviewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Network/features/armApiPreviewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.NotificationHubs/betaAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.NotificationHubs/features/betaAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"microsoft.Security/PrivatePreview\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/microsoft.Security/features/PrivatePreview\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.ServiceFabric/armApiPreviewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.ServiceFabric/features/armApiPreviewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbsterling\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbsterling\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Sql/sqldbtde\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Sql/features/sqldbtde\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.SqlVM/SqlDWVM\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.SqlVM/features/SqlDWVM\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.SqlVM/SqlVMDWaaS\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.SqlVM/features/SqlVMDWaaS\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Storage/armApiPreviewAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Storage/features/armApiPreviewAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.WinFab/alphaAccess\",\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.WinFab/features/alphaAccess\",\"type\":\"Microsoft.Features/providers/features\"},{\"name\":\"Microsoft.Automation/dsc\",\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5344',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:2670a8d1-68b2-4103-881f-b1c0169f63df',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': 'f371f96e-ca3c-4887-8e94-cde3ee66f55c',
  'x-ms-routing-request-id': 'WESTUS:20150407T232143Z:f371f96e-ca3c-4887-8e94-cde3ee66f55c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Apr 2015 23:21:42 GMT' });
 return result; }]];