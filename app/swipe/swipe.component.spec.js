'use strict';

describe('swipe', function() {

  // Load the module that contains the `swipe` component before each test
  beforeEach(module('swipe'));

  // Test the controller
  describe('SwipeController', function() {
    var $httpBackend, ctrl;

    const httpResp = [
      {
        "id": 1,
        "name": "Halal Guys",
        "category": ["Halal", "Mediterranean", "Gyro", "Chicken", "Falafel", "Wraps", "Customization", "New York"],
        "image": "img/restaurants/halalguys.png"
      },
      {
        "id": 2,
        "name": "Freshii",
        "category": ["Healthy", "Wraps", "Salads", "Soup", "Bowls", "Customization"],
        "image": "img/restaurants/freshii.png"
      }
    ];

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('restaurants/restaurants.json')
                  .respond(httpResp);

      ctrl = $componentController('swipe');
    }));

    it('should create a `restaurants` property with 2 restaurants fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.restaurants).toEqual(undefined);

      $httpBackend.flush();
      const restaurants = angular.copy(httpResp);
      restaurants[0].selected = true;
      expect(ctrl.restaurants).toEqual(restaurants);
    });

  });

});
