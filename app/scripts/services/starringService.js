/*
 *    Copyright 2016 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

'use strict';

/**
 * @ngdoc service
 * @name dockstore.ui.WorkflowService
 * @description
 * # StarringService
 * Service in the dockstore.ui.
 */
angular.module('dockstore.ui')
  .service('StarringService', [
      '$q',
      '$http',
      'WebService',
      function ($q, $http, WebService) {

    this.setStarring = function(userId, workflowId, rate) {
      return $q(function(resolve, reject) {
        $http({
          method: 'POST',
          url: WebService.API_URI + '/users/' + userId,
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            workflowId: workflowId
          }
        }).then(function(response) {
          resolve(response.data);
        }, function(response) {
          reject(response);
        });
      });
    };

  }]);
