(function() {

  'use strict';

  angular
    .module('snurfApp.components.main', ['rzModule'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'contentService'];

  function mainController($scope, contentService) {
    /*jshint validthis: true */
    this.greeting = 'This.Is.Snurfer!';

    this.contentList = [];

    this.slider = {
      value: 'Snurf',
      options: {
        stepsArray: ['Pow Day', 'Shred', 'Snurf', 'Surfs Up', 'Barrels'],
        showSelectionBar: true,
        getPointerColor: function(value) {
          if (value === 'Barrels')
            return '#305CB2';
          if (value === 'Surfs Up')
            return '#305CB2';
          if (value === 'Snurf')
            return '#23A6B2';
          if (value === 'Shred')
            return '#E0FFFF';
          if (value === 'Pow Day')
            return '#E0FFFF';
        },
        showTicksValues: false
      }
    };

    this.initialContent = () => {
      for (let i = 0; i < contentService.allVideos.snow.length; i++) {
        this.contentList.push(
          contentService.allVideos.snow[i],
          contentService.allVideos.surf[i]
        );
      }
    };
    this.initialContent();

    this.slideToInt = () => {
      var slideVal = this.slider.value;
      if (slideVal === 'Pow Day') {
        return 1;
      } else if (slideVal === 'Shred') {
        return 2;
      } else if (slideVal === 'Snurf') {
        return 3;
      } else if (slideVal === 'Surfs Up') {
        return 4;
      } else if (slideVal === 'Barrels') {
        return 5;
      }
    };

  }

})();
