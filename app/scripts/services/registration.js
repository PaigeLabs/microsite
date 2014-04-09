'use strict';

angular.module('paigeLabsApp')
  .factory('Registration', function ($resource) {
    return $resource('/api/registrations/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      }
    });
  });
