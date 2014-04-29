var angular = window.angular || require('angular');

var pkg = module.exports = angular.module('ng-metrics', []);

pkg.directive('ngMetrics', [
  '$window',
  function($window) {
    return {
      scope: false,
      link: function($scope, ele, attrs) {
        
      }
    };
  }
]);
