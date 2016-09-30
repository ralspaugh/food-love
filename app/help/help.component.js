'use strict';

// Register `help` component, along with its associated controller and template
angular.
  module('help').
  component('help', {
    templateUrl: 'help/help.template.html',
    controller: function HelpController() {
      const self = this;
      const imagePaths = [
        "img/help/help1.png",
        "img/help/help2.png",
        "img/help/help3.png"
      ]
      var currentIndex = 0;
      self.currentImagePath = imagePaths[currentIndex];
      self.nextImage = () => {
        if (currentIndex < imagePaths.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        self.currentImagePath = imagePaths[currentIndex];
      }
    }
  });
