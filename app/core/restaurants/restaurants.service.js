'use strict';

angular.
  module('core.restaurants').
  factory('Restaurants', ['$resource',
    function($resource) {
      return $resource('restaurants/:resourceName.json', {}, {
        query: {
          method: 'GET',
          params: {resourceName: 'restaurants'},
          isArray: true
        }
      });
    }
  ]);
