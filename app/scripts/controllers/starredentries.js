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
 * @ngdoc function
 * @name dockstore.ui.controller:starredEntries
 * @description
 * # StarredEntriesCtrl
 * Controller of the dockstore.ui
 */
angular.module('dockstore.ui')
  .controller('StarredEntriesCtrl', [
    '$scope',
    '$auth',
    '$location',
    '$window',
    'UserService',
    'NotificationService',
    'ContainerService',
    'WorkflowService',
    function($scope, $auth, $location, $window,
      UserService, NtfnService, ContainerService, WorkflowService) {
      UserService.getStarredWorkflows().then(function(data) {
        $scope.starredWorkflows = data;
        console.log($scope.starredWorkflows);
      });
      UserService.getStarredTools().then(function(data) {
        $scope.starredTools = data;
        console.log($scope.starredTools);
      });
    }
  ]);
