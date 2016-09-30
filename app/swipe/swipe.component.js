'use strict';

// Register `swipe` component, along with its associated controller and template
angular.
  module('swipe').
  component('swipe', {
    templateUrl: 'swipe/swipe.template.html',
    controller: ['Restaurants', 'Stats',
      function SwipeController(Restaurants, Stats) {
        const self = this;
        const nomore = {
          id: 0,
          name: 'no more',
          image: 'img/restaurants/nomore.png'
        };

        function updateCurrentRestaurant(restaurant, liked) {
          const next = _.find(self.restaurants, r => !r.selected);
          if (next) {
            next.selected = true;
            self.currentRestaurant = next;
          } else {
            self.currentRestaurant = nomore;
          }
        }

        self.$onInit = () => {
          Stats.clearAll();
          Restaurants.query().$promise.then((restaurants) => {
            self.restaurants = restaurants;
            updateCurrentRestaurant();
          });
        };

        self.onSwipe = (restaurant, liked) => {
          if (restaurant && restaurant.id != nomore.id) {
            Stats.add(restaurant, liked);
          }
          updateCurrentRestaurant(restaurant, liked);
        };
      }
    ]
  });
