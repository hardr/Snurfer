

(function() {
  // 'use strict';

  angular
  .module('snurfApp')
  .filter('slideVideoFilter', slideVideoFilter);

  // slideVideoFilter.$inject = ['$http'];

  function slideVideoFilter() {

    return function(content, slideVal) {
      var snowCount = 0;
      var surfCount = 0;
      return filtered = content.filter((video, i) => {

        if (slideVal === 'Snurf') {
          return video;
        } else if (slideVal === 'Pow Day') {
          return video.type === 'snow';
        } else if (slideVal === 'Shred') {
          console.log(snowCount);
          console.log(surfCount);
          if (video.type === 'snow') {
            snowCount++;
            return video;
          } else if (video.type === 'surf' && surfCount === 0) {
            console.log(surfCount);
            surfCount++;
            console.log(surfCount);
            return video;
          } else if (video.type === 'surf' && snowCount % surfCount === 3) {
            surfCount++;
            return video;
          }
        } else if (slideVal === 'Surfs Up') {
          return ;
        } else if (slideVal === 'Barrels') {
          return video.type === 'surf';
        }
      })
    };
  }

}());
