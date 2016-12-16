'use strict';

angular.module('dockstore.ui')
  .controller('StarringCtrl', [
    '$scope',
    '$q',
    '$auth',
    'WorkflowService',
    'UserService',
    'StarringService',
    function ($scope, $q, $auth, WorkflowService, UserService, StarringService) {
      $scope.rate = 1;
      $scope.max = 1;
      $scope.isReadonly = false;
      $scope.userObj = UserService.getUserObj();
      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
      };
      $scope.setStarring = function(userObj, workflowId){
        console.log(userObj);
        return StarringService.setStarring(userObj, workflowId, $scope.rate);
      };
    $scope.ratingStates = [
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
  ];
}]);
