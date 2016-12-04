(function() {
  // 'use strict';

  angular
  .module('snurfApp.services', [])
  .service('contentService', contentService);

  contentService.$inject = ['$http'];

  function contentService($http, $window) {
    this.allVideos = window.videoSamples;
    this.allNews = window.news;
  }

}());
