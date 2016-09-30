'use strict';

angular.
  module('core.stats').
  factory('Stats', ['$cookies',
    function($cookies) {
      const LIKED_KEY = 'FoodLovedRestaurants';
      const DISLIKED_KEY = 'FoodHatedRestaurants';
      return {
        add: (restaurant, liked) => {
          const key = liked ? LIKED_KEY : DISLIKED_KEY;
          const currentValue = $cookies.getObject(key);
          const newValue = currentValue ? currentValue.concat(restaurant) : Array.of(restaurant);
          $cookies.putObject(key, newValue);
        },
        getLiked: () => $cookies.getObject(LIKED_KEY),
        getDisliked: () => $cookies.getObject(DISLIKED_KEY),
        clearAll: () => {
          $cookies.remove(LIKED_KEY);
          $cookies.remove(DISLIKED_KEY);
        }
      };
    }
]);
