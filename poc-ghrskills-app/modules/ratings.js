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

  angularApp.directive('ghrSkillsRatings', ['$log',
    function($log) {
      return {
        template: [
          '<circle r="18" cx="20" cy="20" fill="none" stroke="#E0E0E0" stroke-width="4"></circle>',
          '<circle r="18" cx="20" cy="20" fill="none" ng-attr-stroke="{{outerColor}}" stroke-width="4" stroke-dasharray="113.1" ng-attr-stroke-dashoffset="{{outerOffset}}"></circle>',
          '<circle r="13" cx="20" cy="20" fill="none" stroke="#E0E0E0" stroke-width="4"></circle>',
          '<circle r="13" cx="20" cy="20" fill="none" ng-attr-stroke="{{innerColor}}" stroke-width="4" stroke-dasharray="81.68" ng-attr-stroke-dashoffset="{{innerOffset}}"></circle>'
        ].join('\n'),
        templateNamespace: 'svg',
        scope: {
          ratings: '@',
          outerColor: '<',
          innerColor: '<',
          innerCircle: '<'
        },
        link: link
      };

      function link (scope, iElement, iAttrs) {
        scope.innerOffset = 81.68;
        scope.outerOffset = 113.1;
        
        if(iAttrs.innerCircle == undefined) {
          $log.info(iElement, iElement.children());
          var child = iElement.children()[2];
          if(child)
            child.remove();
        }

        scope.$watch(function() {
          return scope.ratings;
        }, function(newV) {
          newV = JSON.parse(newV);
          scope.outerOffset = (1 - newV[0] / 100) * 113.1;
          if(newV[1] != undefined)
            scope.innerOffset = (1 - newV[1] / 100) * 81.68;
        });
      }
    }
  ]);

  return {
    lifecycle: {}
  };
});
