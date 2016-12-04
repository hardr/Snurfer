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
        showTicksValues: false,
        onChange: () => {
          this.contentList = [];
          $scope.listContent()
        }
      }
    };

    $scope.listContent = () => {
      var slideVal = this.slider.value;
      console.log(slideVal);
      if (slideVal === 'Snurf') {
        for (let i = 0; i < contentService.allVideos.snow.length; i++) {
          this.contentList.push(
            contentService.allVideos.snow[i],
            contentService.allVideos.surf[i]
          );
        }
      } else if (slideVal === 'Pow Day') {
        for (let i = 0; i < contentService.allVideos.snow.length; i++) {
          this.contentList.push(
            contentService.allVideos.snow[i]
          );
        }
      } else if (slideVal === 'Shred') {
        var surfCount = 0;
        for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
          this.contentList.push(
            contentService.allVideos.snow[i],
            contentService.allVideos.snow[i + 1],
            contentService.allVideos.snow[i + 2],
            contentService.allVideos.surf[surfCount]
          );
          surfCount++;
        }
      } else if (slideVal === 'Surfs Up') {
        var snowCount = 0;
        for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
          this.contentList.push(
            contentService.allVideos.surf[i],
            contentService.allVideos.surf[i + 1],
            contentService.allVideos.surf[i + 2],
            contentService.allVideos.snow[snowCount]
          );
          snowCount++;
        }
      } else if (slideVal === 'Barrels') {
        for (let i = 0; i < contentService.allVideos.surf.length; i++) {
          this.contentList.push(
            contentService.allVideos.surf[i]
          );
        }
      }
    };

    $scope.listContent();

    // $scope.$watch('test', () => {
    //   console.log('!');
    //   // this.listContent()
    // })
    //
    // this.slideToInt = () => {
    //   var slideVal = this.slider.value;
    //   if (slideVal === 'Pow Day') {
    //     return 1;
    //   } else if (slideVal === 'Shred') {
    //     return 2;
    //   } else if (slideVal === 'Snurf') {
    //     return 3;
    //   } else if (slideVal === 'Surfs Up') {
    //     return 4;
    //   } else if (slideVal === 'Barrels') {
    //     return 5;
    //   }
    // };

  }

})();
