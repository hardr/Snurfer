(function() {
  // 'use strict';

  angular
  .module('snurfApp.services', [])
  .service('contentService', contentService);

  contentService.$inject = ['$http'];

  function contentService($http, $window) {
    this.allVideos = window.videoSamples;
    this.allNews = window.news;

    this.weatherBaseUrl = 'https://api.wunderground.com/api/9c007c8680fe69c5/';

    // this.getCurrentWeather = function(city, state) {
    //   return $http.get(this.weatherBaseUrl + `conditions/q/${state || 'CO'}/${city || 'Denver'}.json`);
    // };
    this.getForecastWeather = function(city, state) {
      return $http.get(this.weatherBaseUrl + `forecast/q/${state || 'CO'}/${city || 'Denver'}.json`);
    };
  }

}());
