'use strict';

// Register `stats` component, along with its associated controller and template
angular.
  module('stats').
  component('stats', {
    templateUrl: 'stats/stats.template.html',
    controller: ['Stats', '$window',
      function StatsController(Stats, $window) {
        var self = this;
        self.loved = Stats.getLiked();
        self.hated = Stats.getDisliked();
        self.lovedNames = _.map(self.loved, r => r.name);
        self.hatedNames = _.map(self.hated, r => r.name);
        self.lovedCategories = _.flatMap(self.loved, r => r.category);
        self.hatedCategories = _.flatMap(self.hated, r => r.category);
        self.favoriteCategories = _.chain(self.lovedCategories).countBy().toPairs().sortBy(1).reverse().map(0).take(3).value();
        self.mostHatedCategories = _.chain(self.hatedCategories).countBy().toPairs().sortBy(1).reverse().map(0).take(3).value();

        self.clear = () => {
          Stats.clearAll();
          $window.location.reload();
        }
      }
    ]
  });
