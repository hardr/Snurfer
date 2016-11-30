(function() {

  'use strict';

  angular
    .module('snurfApp.components.main', ['rzModule'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'contentService'];

  function mainController($scope, contentService) {
    /*jshint validthis: true */
    this.greeting = 'This.Is.Snurfer!';

    this.snowVids = contentService.allVideos.snow;
    this.surfVids = contentService.allVideos.surf;

    $scope.slider = {
      value: 2,
      options: {
        showSelectionBar: true,
        getPointerColor: function(value) {
          if (value <= 3)
            return '#305CB2';
          if (value <= 6)
            return '#23A6B2';
          if (value <= 9)
            return '#E0FFFF';
          return '#E0FFFF';
        },
        translate: function(value, sliderId, label) {
          switch (label) {
            case 'model':
              return '<b>Min price:</b> $' + value;
            case 'high':
              return '<b>Max price:</b> $' + value;
            default:
              return '$' + value
          }
        }
      }
    };

  }

})();
