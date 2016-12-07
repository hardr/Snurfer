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
    })
    .state('login', {
      url: '/login',
      templateUrl: './js/components/account/login.view.html',
      controller: 'accountController',
      controllerAs: 'accountCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './js/components/account/signup.view.html',
      controller: 'accountController',
      controllerAs: 'accountCtrl'
    })
    .state('account', {
      url: '/account',
      templateUrl: './js/components/account/account.view.html',
      controller: 'accountController',
      controllerAs: 'accountCtrl'
    });

    // $urlRouterProvider.otherwise('/#/');

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://player.vimeo.com/**', 'https://www.youtube.com/embed/**', 'https://www.npr.org/**', 'https://api.wunderground.com/**', 'https://icons.wxug.com/**']);
  }

})();
