'use strict';

angular.module('paigeLabsApp')
  .factory('ClassService', function($resource){
    return $resource('/api/classes/');
  });