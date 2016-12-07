(function() {
  // 'use strict';

  angular
  .module('snurfApp.services', [])
  .service('contentService', contentService)
  .service('accountService', accountService);

  contentService.$inject = ['$http'];
  accountService.$inject = ['$http'];

  function contentService($http, $window) {

    this.tabSelect = 'surf';

    this.updateTabSelect = (val) => {
      this.tabSelect = val;
    };

    this.allContent = function() {
      return $http.get('http://mysterious-cove-11042.herokuapp.com/allContent');
    };

    this.weatherBaseUrl = 'https://api.wunderground.com/api/9c007c8680fe69c5/';

    this.getForecastWeather = function(city, state) {
      return $http.get(this.weatherBaseUrl + `forecast/q/${state || 'CO'}/${city || 'Denver'}.json`);
    };
  }

  function accountService($http) {

    this.allContent = function() {
      return $http.get('http://mysterious-cove-11042.herokuapp.com/allContent');
    };

    const baseUrl = 'http://mysterious-cove-11042.herokuapp.com/';

    this.signup = newUser => {
      var validated = validateUserInput(newUser);

      if (typeof validated === 'object') {
        return $http.post(baseUrl + 'accounts/register', JSON.stringify(validated));
      } else {
        return new Promise(() => {
          return 'Invalid ' + validated;
        });
      }
    };

    function validateUserInput(userData) {
      const newUser = {};
      newUser.active = userData.active;
      if (userData.name.length >= 6) {
        newUser.name = userData.name;
      } else {
        return 'name!';
      }
      if (userData.password.length >= 6) {
        newUser.password = userData.password;
      } else {
        return 'password!';
      }
      if (userData.email.includes('@') && userData.email.includes('.com')) {
        newUser.email = userData.email;
      } else {
        return 'email!';
      }
      return newUser;
    }
  }

}());
