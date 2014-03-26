'use strict';

angular.module('paigeLabsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Education',
      'link': '/education'
    },{
      'title': 'Open Source',
      'link': '/opensource'
    },{
      'title': 'Community',
      'link': '/community'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
