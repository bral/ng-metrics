var angular = window.angular || require('angular');

var pkg =
// module.exports =
angular.module('ng-metrics', []);

pkg.directive('ngMetrics', [
  '$document',
  '$window',
  function($document, $window) {
    return function(scope, el, attrs) {
      return angular.element(document).ready(function() {
        var metrics = $window.performance.timing;
        metrics.element = el;
        console.log(metrics);
      });
    };
  }
]);

pkg.name = 'ng-metrics';
