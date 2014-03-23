'use strict';

angular.module('paigeLabsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
