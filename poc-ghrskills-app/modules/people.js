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

  angularApp.controller('PeopleController', ['$scope', '$rootScope', '$mdMedia', '$mdTheming', '$log', '$timeout', '$routeParams', '$location',
    function($scope, $rootScope, $mdMedia, $mdTheming, $log, $timeout, $routeParams, $location) {
      $scope.$watch(function() {return $mdMedia('xs')}, function(isSmall) {
        $scope.isSmall = isSmall;
      });

      $scope.id = $routeParams.personId != ":personId"? $routeParams.personId: Math.round(Math.random() * 5);

      $scope.completeness = {
        values: [0]
      }

      $scope.skills = [{
        title: "Fondamentaux de la garantie",
        tooltipVisible: false
      },
      {
        title: "Basiques métier maintenance",
        tooltipVisible: false
      },
      {
        title: "Fondamentaux de la qualité",
        tooltipVisible: false
      },
      {
        title: "Fondamentaux de la garantie",
        tooltipVisible: false
      },
      {
        title: "Basiques métier maintenance",
        tooltipVisible: false
      },
      {
        title: "Fondamentaux de la qualité",
        tooltipVisible: false
      },
      {
        title: "Fondamentaux de la garantie",
        tooltipVisible: false
      }];

      for (var i = 0; i < $scope.skills.length; i++) {
        $scope.skills[i].max = 0;
        $scope.skills[i].value = 0;
        $scope.skills[i].values = [0];
      };

      $timeout(function() {
        $scope.completeness.values = [Math.round(Math.random()*100)];

        $scope.skills.forEach(function(skill) {
          skill.max = Math.floor(Math.random()*8 + 3);
          skill.value = Math.round(Math.random() * skill.max);
          skill.values = [skill.value / skill.max * 100];
        });
      });

      $scope.go = function(path) {
        $location.path(path);
      };
    }
  ]);

  return {
    lifecycle: {}
  };
});