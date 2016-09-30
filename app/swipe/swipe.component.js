'use strict';

// Register `swipe` component, along with its associated controller and template
angular.
  module('swipe').
  component('swipe', {
    templateUrl: 'swipe/swipe.template.html',
    controller: ['Restaurants', 'Stats',
      function SwipeController(Restaurants, Stats) {
        var self = this;

        Stats.clearAll();

        const nomore = {
          id: 0,
          name: 'no more',
          image: 'img/restaurants/nomore.png'
        };

        Restaurants.query().$promise.then((restaurants) => {
          self.restaurants = restaurants;
          self.getNextRestaurant();
        });

        self.getNextRestaurant = (restaurant, liked) => {
          if (restaurant && restaurant.id != nomore.id) {
            Stats.add(restaurant, liked);
          }
          const next = _.find(self.restaurants, r => !r.selected);
          if (next) {
            next.selected = true;
            self.currentRestaurant = next;
          } else {
            self.currentRestaurant = nomore;
          }
        }
      }
    ]
  });
