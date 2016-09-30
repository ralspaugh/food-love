'use strict';

angular.
  module('foodloveApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/swipe', {
          template: '<swipe></swipe>'
        }).
        when('/stats', {
          template: '<stats></stats>'
        }).
        when('/help', {
          template: '<help></help>'
        }).
        otherwise('/swipe');
    }
  ]);
