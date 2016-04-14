define([
  'require',
  'module',

  '{lodash}/lodash',
  '{angular}/angular',

  '{poc-ghrskills-app}/modules/module'

], function(require, module, _, angular, app) {
  'use strict';

  var _config = module && module.config() || {},
    angularApp = app.module;

  angularApp.controller('TeamController', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
      $scope.go = function(id) {
        $location.path('/poc-ghrskills-app/people/'+id);
      };
    }
  ]);

  return {
    lifecycle: {}
  };
});