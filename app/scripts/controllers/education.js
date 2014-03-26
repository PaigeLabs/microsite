'use strict';

angular.module('paigeLabsApp')
  .controller('EducationCtrl', function ($scope, $http) {
    $http.get('/api/classes').success(function(classes) {
      $scope.classes = classes;
    });
  });
