// sample angular code

(function() {

  'use strict';

  angular
    .module('snurfApp', [
      'ui.materialize',
      'snurfApp.config',
      'snurfApp.components.main',
      'snurfApp.services',
      'ui.router'
    ]);

})();
