(function() {
  // 'use strict';

  angular
  .module('snurfApp')
  .filter('slideVideoFilter', slideVideoFilter);

  // slideVideoFilter.$inject = ['$http'];

  function slideVideoFilter() {

    return function(content, contentSlide) {
      var filtered = content.filter((video) => {
        if (contentSlide === 'Videos') {
          if (video.content === 'video') {
            return video;
          }
        } else if (contentSlide === 'Photos') {
          if (video.content === 'image') {
            return video;
          }
        } else {
          return video;
        }
      });
      return filtered;
    };

  }

}());
