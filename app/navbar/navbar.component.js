'use strict';

// Register `navbar` component, along with its associated controller and template
angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: function NavbarController() {
      const self = this;
      self.title = 'Food Love 💕';
      self.menuItems = [
        {
          name: 'My Stats',
          ref: '/#!/stats'
        },
        {
          name: 'Help',
          ref: '/#!/help'
        }
      ];
    }
  });
