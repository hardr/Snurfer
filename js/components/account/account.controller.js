(function() {

  'use strict';

  angular
    .module('snurfApp.components.account', ['rzModule'])
    .controller('accountController', accountController);

  accountController.$inject = ['$scope', '$rootScope', 'accountService', '$window'];

  function accountController($scope, $rootScope, accountService, $window) {
    /*jshint validthis: true */

    this.userInput = {
      active: true
    };

    $rootScope.loggedIn = false;

    this.userContent = [];

    this.signup = () => {
      accountService.signup(this.userInput)
      .then(newUser => {
        console.log(newUser, 'newUser in Controller')
        if (newUser.data[0].id) {
          this.loggedIn = newUser.data[0];
          // $window.location.href = '/#/account';
          $window.location.href = '/#/account';
          console.log($rootScope.loggedIn, 'inside signup');
        } else {
          console.log(newUser);
        }
      })
      .catch(err => {
        console.log(err);
      });
    };

    this.login = () => {
      accountService.login(this.userInput)
      .then(user => {
        console.log(user, 'newUser in Controller')
        if (typeof user === object) {
          this.loggedIn = user.data[0];
          $window.location.href = '/#/account';
        } else {
          console.log(user);
        }

      })
      .catch(err => {
        console.log(err);
      });
    };

    accountService.allContent()
      .then(account => {
        account.data.forEach((each) => {
          if (each.user_id === $rootScope.loggedIn.id)
            this.userContent.push(each);
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

})();
