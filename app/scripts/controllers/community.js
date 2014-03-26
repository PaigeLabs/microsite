'use strict';

angular.module('paigeLabsApp')
  .controller('CommunityCtrl', function ($scope, $http) {
    $http.get('/api/news').success(function(news){
      $scope.news = news;
    });
  });
