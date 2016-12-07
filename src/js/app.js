// sample angular code

(function() {

  'use strict';

  angular
    .module('snurfApp', [
      'ui.materialize',
      'snurfApp.config',
      'snurfApp.components.main',
      'snurfApp.components.account',
      'snurfApp.services',
      'ui.router',
      'ngAnimate'
    ]);

})();
