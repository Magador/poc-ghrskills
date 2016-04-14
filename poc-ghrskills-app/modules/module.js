define([
  'require',
  'module',

  '{lodash}/lodash',
  '{angular}/angular',
  '{angular-messages}/angular-messages'

], function(require, module, _, angular) {
  'use strict';

  var _config = module && module.config() || {},
    angularApp = angular.module('angularApp', ['ngResource', 'ngMessages']);

  angularApp.run(['$rootScope', function($rootScope) {
    $rootScope.search = {
      disabled: "false",
      placeholder: ""
    }

    $rootScope.swipe = {
      left: function() {
        $rootScope.$emit('w20.material.sidenav.open', false);
      },
      right: function() {
        $rootScope.$emit('w20.material.sidenav.open', true);
      }
    }

    $rootScope.$on('$routeChangeSuccess', function(event, route) {
      $rootScope.search.disabled = (!!(route && route.search && route.search.disabled)).toString();
      $rootScope.search.placeholder = route && route.search && route.search.placeholder ? route.search.placeholder : "";
    })
  }]);

  return {
    angularModules: ['angularApp'],
    module: angularApp
  };
});