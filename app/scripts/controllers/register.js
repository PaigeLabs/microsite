'use strict';

angular.module('paigeLabsApp')
  .controller('RegisterCtrl', function ($scope, $location, Registration, StateService, ClassService) {
    $scope.user = {};
    $scope.errors = {};
    $scope.states = StateService.States;
    $scope.classes = ClassService.query();

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Registration.save($scope.user,
          function(){
            toastr.success('Successfully signed up to be notified.');
            $location.path('/');
          }, function(err){
            console.log(err);
          });
      }
    };
  });