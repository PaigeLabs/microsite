'use strict';

describe('Controller: EducationCtrl', function () {

  // load the controller's module
  beforeEach(module('paigeLabsApp'));

  var EducationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EducationCtrl = $controller('EducationCtrl', {
      $scope: scope
    });
  }));


});
