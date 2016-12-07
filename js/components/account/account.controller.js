(function() {

  'use strict';

  angular
    .module('snurfApp.components.account', ['rzModule'])
    .controller('accountController', accountController);

  accountController.$inject = ['$scope', 'accountService'];

  function accountController($scope, accountService) {
    /*jshint validthis: true */

    this.userInput = {
      active: true
    };

    this.userContent = [];

    this.signup = () => {
      accountService.signup(this.userInput)
      .then(newUser => {
        console.log(newUser);
      })
      .catch(err => {
        console.log(err);
      });
    };

    accountService.allContent()
      .then(account => {
        account.data.forEach((each) => {
          if (each.user_id === 1)
            this.userContent.push(each);
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

})();
