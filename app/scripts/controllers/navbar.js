'use strict';

angular.module('paigeLabsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'HOME',
      'link': '/'
    },{
      'title': 'EDUCATION',
      'link': '/education'
    },{
      'title': 'OPEN SOURCE',
      'link': '/opensource'
    },{
      'title': 'COMMUNITY',
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
