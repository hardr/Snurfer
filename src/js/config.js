(function() {

  'use strict';

  angular
    .module('snurfApp.config', ['ui.router'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    });

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://player.vimeo.com/**', 'https://www.youtube.com/embed/**', 'https://www.npr.org/**', 'http://api.wunderground.com/api/**', 'http://icons.wxug.com/**']);
  }

})();

// function appConfig($stateProvider, $urlRouterProvider) {
//     $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: 'js/components/main/main.view.html',
//       controller: 'mainController',
//       controllerAs: 'mainCtrl'
//     })
//     .state('home.list', {
//       templateUrl: 'js/components/main/partials/_list.html'
//     })
//     .state('about', {
//       url: '/about',
//       templateUrl: 'js/components/about/about.view.html',
//       controller: 'aboutController',
//       controllerAs: 'aboutCtrl'
//     })
//     .state('about.contacts', {
//       templateUrl: 'js/components/about/partials/_contacts.html'
//     });
//
//     $urlRouterProvider.otherwise('/#/whatever')
//   }
