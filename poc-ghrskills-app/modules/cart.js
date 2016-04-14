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

  angularApp.controller('CartController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    }
  ]);

  return {
    lifecycle: {}
  };
});