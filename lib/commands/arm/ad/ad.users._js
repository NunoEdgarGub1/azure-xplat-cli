/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var profile = require('../../../util/profile');
var policyClientWorkaround = require('../role/policyClientWorkaround');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;

  var ad = cli.category('ad')
    .description($('Commands to display active directory objects'));
  var adUser = ad.category('user')
    .description($('Commands to display active directory users'));

  adUser.command('list')
    .description($('Get all active directory users in current subscription\' tenant'))
    .execute(function (options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = policyClientWorkaround.getADGraphClient(subscription);
      var progress = cli.interaction.progress($('Listing active directory users'));
      var result;
      try {
        result = client.user.list(_);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(result.users, function (data) {
        if (data.length === 0) {
          log.info($('No users'));
        } else {
          log.table(data, function(row, user) {
            row.cell($('Id'), user.objectId);
            row.cell($('Principal Name'), user.userPrincipalName);
            row.cell($('Display Name'), user.displayName);
          });
        }
      });
    });

  adUser.command('show [name]')
    .description($('Get an active directory user'))
    .option('-n --name <name>', $('the user principal name'))
    .execute(function (name, options, _) {
    if (!name) {
      return cli.missingArgument('name');
    }
    var subscription = profile.current.getSubscription(options.subscription);
    var client = policyClientWorkaround.getADGraphClient(subscription);
    var progress = cli.interaction.progress($('Getting active directory user'));
    var user; 
    try {
      user = client.user.get(name, _).user;
    } finally {
      progress.end();
    }

    if (user) {
      log.data($('Id:             '), user.objectId);
      log.data($('Principal Name: '), user.userPrincipalName);
      log.data($('Display Name:   '), user.displayName);
    } else {
      log.data($('No matching user was found'));
    }
  });
};