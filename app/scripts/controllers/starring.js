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
 * @name dockstore.ui.controller:StarringCtrl
 * @description
 * # StarringCtrl
 * Controller of the dockstore.ui
 */

angular.module('dockstore.ui')
  .controller('StarringCtrl', [
    '$scope',
    '$q',
    '$auth',
    'WorkflowService',
    'UserService',
    'StarringService',
    'TokenService',
    'ContainerService',
    function ($scope, $q, $auth, WorkflowService, UserService, StarringService, TokenService, ContainerService) {
      $scope.getStarring = function(user, workflowId, entryType)
      {
        return StarringService.getStarring(user, workflowId, entryType)
        .then(
          function(starring) {
            for (var star in starring){
              if (user.id === starring[star].id){
                return 1;
              }
              return 0;
            }
          },
          function(response) {
            $scope.setWorkflowDetailsError(
              'The webservice encountered an error trying to modify labels ' +
              'for this workflow, please ensure that the label list is ' +
              'properly-formatted and does not contain prohibited ' +
              'characters of words.',
              '[HTTP ' + response.status + '] ' + response.statusText + ': ' +
              response.data
            );
            return $q.reject(response);
          }
        );
      };
      $scope.setStarring = function(userObj, entryId, entryType) {
        $scope.setStar(userObj,entryId, entryType).then(function(data) {
          $scope.getStarredUsers($scope.userObj, $scope.entryId, $scope.entryType).then(function(data2) {
              $scope.total_stars = data2;
          });
        });
      };
      $scope.setStar = function(userObj, entryId, entryType){
        if ($scope.rate === 0){
          return StarringService.setUnstar($scope.userObj, entryId, entryType);
        }
        else {
          return StarringService.setStar($scope.userObj, entryId, entryType);
        }
      };
      $scope.getStarredUsers = function(userObj, entryId, entryType){
        return StarringService.getStarring(userObj, entryId, entryType)
        .then(
          function(starring) {
            return starring.length;
          },
          function(response) {
            $scope.setWorkflowDetailsError(
              'The webservice encountered an error trying to modify labels ' +
              'for this workflow, please ensure that the label list is ' +
              'properly-formatted and does not contain prohibited ' +
              'characters of words.',
              '[HTTP ' + response.status + '] ' + response.statusText + ': ' +
              response.data
            );
            return $q.reject(response);
          }
        );
      };

      $scope.userObj = UserService.getUserObj();
      if ((typeof $scope.workflowObj) !== 'undefined'){
        $scope.entryId = $scope.workflowObj.id;
        $scope.entryType = 'workflow';
      }
      else {
        $scope.entryId = $scope.containerObj.id;
        $scope.entryType = 'container';
      }
      $scope.getStarring($scope.userObj, $scope.entryId, $scope.entryType).then(function(data) {
        $scope.rate=data;
      });
      $scope.max = 1;
      $scope.isReadonly = false;
      $scope.getStarredUsers($scope.userObj, $scope.entryId, $scope.entryType).then(function(data) {
        $scope.total_stars = data;
      });
      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
      };



    $scope.ratingStates = [
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
  ];
}]);
