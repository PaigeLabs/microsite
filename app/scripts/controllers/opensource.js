'use strict';

angular.module('paigeLabsApp')
  .controller('OpensourceCtrl', function ($scope, $http) {
    $http.get('https://api.github.com/users/PaigeLabs/repos').success(function(repos){
      $scope.repos = repos;
    });
  });
