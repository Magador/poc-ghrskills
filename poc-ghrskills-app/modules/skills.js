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

  angularApp.controller('SkillsController', ['$scope', '$rootScope', '$mdMedia', '$mdTheming', '$log', '$timeout', '$mdSidenav',
    function($scope, $rootScope, $mdMedia, $mdTheming, $log, $timeout, $mdSidenav) {
      $scope.template = {
        url: "",
        onload: function() {
          if(angular.isFunction($scope.unwatch))
            $scope.unwatch();

          $scope.swipeRight = angular.noop;
          $scope.unwatch = $scope.$watch(function() {
            return $mdSidenav('skills-details').isOpen();
          }, function(isOpen, wasOpen) {
            if(isOpen && !wasOpen) {
              $scope.swipeRight = $rootScope.swipe.right;
              $rootScope.swipe.right = $scope.sidenav.close;
            } else if(!isOpen && wasOpen) {
              $rootScope.swipe.right = $scope.swipeRight;
              $scope.swipeRight = angular.noop;
            }
          });
        }
      };

      $scope.$watch(function() {
        return $mdMedia('gt-xs')
      }, function(isDesktop) {
        $scope.template.url = isDesktop? "/poc-ghrskills-app/views/skills.desktop.html": "/poc-ghrskills-app/views/skills.mobile-tablet.html";
      });

      $scope.microSkills = [
        {
          name: "Politique",
          description: "Règles et procédures applicables en point de vente"
        },
        {
          name: "Vocabulaire"
        },
        {
          name: "Tableaux de bord"
        },
        {
          name: "Indicateur de garantie"
        },
        {
          name: "Système d’information COMTEC",
          description: "Portail échanges et facturation des fournisseurs, au titre de la Garantie"
        },
        {
          name: "Système d’information Univers Centre Garantie",
          description: "Expertise pièces"
        }
      ];
      $scope.microSkills.forEach(function(micro) {
        micro.jobTarget = Math.floor(Math.random()*5);
        micro.revisedTarget = Math.floor(Math.random()*5);
        micro.targets = [0, 0];
        micro.rating = [0];
      });

      $timeout(function() {
        $scope.microSkills.forEach(function(micro) {
          micro.targets = [micro.jobTarget * 25, micro.revisedTarget*25];
          micro.rating = [Math.floor(Math.random()*5)*25];
        });
      });

      $scope.sidenav = {
        opened: false,
        open: function() {
          $mdSidenav('skills-details').open().then(function() {
            $scope.sidenav.opened = true;
          })
        },
        close: function() {
          $mdSidenav('skills-details').close().then(function() {
            $scope.sidenav.opened = false;
          })
        }
      };

      $scope.skill = {
        rating: Math.floor(Math.random()*5),
        touched: false,
        unwatch: $scope.$watch(function() {
          return $scope.skill.rating;
        }, function(newV, oldV) {
          if(newV != oldV) {
            $scope.skill.touched = true;
            $scope.skill.unwatch();
          }
        })
      };

      $scope.levels = [
        {
          cardinal: "one",
          title: "Base",
          description: "Citer les points clés et le système d'information utilisé (portail SC/SB)"
        },
        {
          cardinal: "two",
          title: "Autonomie",
          description: "Mettre en œuvre les règles et procédures en point de vente, suivant sa fonction"
        },
        {
          cardinal: "3",
          title: "Maîtrise",
          description: "Mettre en œuvre les règles et procédures en point de vente, suivant sa fonction, et les justifier"
        },
        {
          cardinal: "4",
          title: "Référent",
          description: "Proposer des évolutions"
        }
      ];
      $scope.modalities = [
        {
          title: "Accueil",
          items: [
            {
              type: "TUT",
              label: "Dans le Parcours d’Intégration(ressources : Document « Politique Garantie »)",
              reference: ""
            },
            {
              type: "ELE",
              label: "Elearn Garantie - règles et procédures 1/2",
              reference: "007983"
            },
            {
              type: "ELE",
              label: "Elearn Garantie - règles et procédures 2/2",
              reference: "007984"
            },
            {
              type: "ELE",
              label: "Garantie - Base fonctions administrations en point de vente",
              reference: "KC0642"
            },
            {
              type: "FOR",
              label: "Garantie  - Importateur - Base fonctions CCS-CAS-CET des points de vente",
              reference: "010141"
            },
            {
              type: "FOR",
              label: "Garantie - Importateur - Base fonctions Administration pt de vente",
              reference: "010162"
            }
          ]
        },
        {
          title: "Perfectionnement",
          items: [
            {
              type: "FOR",
              label: "Garantie  - Le dossier Garantie en point de vente (AC/AP)",
              reference: "KC0643"
            },
            {
              type: "FOR",
              label: "Garantie - Perfectionnement fonctions administration en point de vente",
              reference: "KC0643"
            }
          ]
        },
        {
          title: "Expérimenté",
          items: [
            {
              type: "FOR",
              label: "Garantie  - Expérimenté - fonctions administration en point de vente",
              reference: "KC0644"
            }
          ]
        }
      ]
    }
  ]);

  return {
    lifecycle: {}
  };
});