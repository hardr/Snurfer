

(function() {
  // 'use strict';

  angular
  .module('snurfApp')
  .filter('slideVideoFilter', slideVideoFilter);

  // slideVideoFilter.$inject = ['$http'];

  function slideVideoFilter() {
    return function(number) {
      console.log(number);
    };
  }

}());
