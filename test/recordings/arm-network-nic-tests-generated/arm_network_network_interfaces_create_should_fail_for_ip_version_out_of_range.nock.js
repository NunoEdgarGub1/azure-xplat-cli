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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'x-ms-correlation-request-id': '2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091451Z:2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:14:51 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName?api-version=2017-10-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/IPVersionOutOfRangeName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'x-ms-correlation-request-id': '2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091451Z:2ab09cd5-6345-4836-a02d-6bd5dc0486ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:14:51 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; }]];
