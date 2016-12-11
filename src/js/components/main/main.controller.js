(function() {

  'use strict';

  angular
    .module('snurfApp.components.main', ['rzModule'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope', 'contentService', 'accountService'];

  function mainController($scope, $rootScope, contentService, accountService) {
    /*jshint validthis: true */

    console.log($rootScope.loggedIn);

    this.allContent = contentService.allContent()
      .then(content => {
        content.data.forEach((each) => {
          if (each.type === 'snow')
            this.snowList.push(each);
          if (each.type === 'skate')
            this.skateList.push(each);
          if (each.type === 'surf')
            this.surfList.push(each);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.snowList = [];
    this.skateList = [];
    this.surfList = [];

    $rootScope.tabValue = 'surf';

    // check out 'pubsub' after capstone

    this.grabTab = (val) => {
      $rootScope.tabValue = val;
    };

    this.contentSlider = {
      value: 'All',
      options: {
        stepsArray: ['Videos', 'All', 'Photos'],
        showSelectionBar: true
      },
      showTicksValues: false
    };

    // this.location = {
    //   updateWeather: () => {
    //     contentService.getForecastWeather(this.location.city, this.location.state)
    //     .then((forecast) => {
    //
    //       var forecastData = forecast.data.forecast.simpleforecast.forecastday;
    //       this.forecastWeather = forecastData;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   }
    // };
    // this.currentWeather = {};
    // this.forecastWeather = {};

    // this.typeSlider = {
    //   value: 'Surf',
    //   options: {
    //     stepsArray: ['Snow', 'Skate', 'Surf'],
    //     showSelectionBar: true,
    //     getPointerColor: function(value) {
    //       if (value === 'Snow') {
    //         currentColor = snowColor;
    //         return snowColor;
    //       }
    //       if (value === 'Skate') {
    //         currentColor = skateColor;
    //         return skateColor;
    //       }
    //       if (value === 'Surf') {
    //         currentColor = surfColor;
    //         return surfColor;
    //       }
    //     },
    //     showTicksValues: false
    //     // onChange: () => {
    //     //   this.contentList = [];
    //     //   $scope.listContent();
    //     // }
    //   }
    // };

    // $scope.listContent = () => {
    //   var typeSlideVal = this.typeSlider.value;
    //   var contentSlideVal = this.contentSlider.value;
    //
    //   if (typeSlideVal === 'Snurf') {
    //     if (contentSlideVal === 'Videos') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i],
    //           contentService.allVideos.surf[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'A bit of both') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i],
    //           contentService.allVideos.surf[i],
    //           contentService.allNews.snow[i],
    //           contentService.allNews.surf[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'News') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allNews.snow[i],
    //           contentService.allNews.surf[i]
    //         );
    //       }
    //     }
    //   } else if (typeSlideVal === 'Pow Day') {
    //     if (contentSlideVal === 'Videos') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'A bit of both') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i],
    //           contentService.allNews.snow[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'News') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i++) {
    //         this.contentList.push(
    //           contentService.allNews.snow[i]
    //         );
    //       }
    //     }
    //   } else if (typeSlideVal === 'Shred') {
    //     var surfCount = 0;
    //     if (contentSlideVal === 'Videos') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i],
    //           contentService.allVideos.surf[surfCount],
    //           contentService.allVideos.snow[i + 1],
    //           contentService.allVideos.snow[i + 2]
    //         );
    //         surfCount++;
    //       }
    //     } else if (contentSlideVal === 'A bit of both') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allVideos.snow[i],
    //           contentService.allVideos.surf[surfCount],
    //           contentService.allNews.snow[i],
    //           contentService.allVideos.snow[i + 1],
    //           contentService.allNews.snow[i + 1],
    //           contentService.allNews.surf[surfCount],
    //           contentService.allVideos.snow[i + 2],
    //           contentService.allNews.snow[i + 2]
    //         );
    //         surfCount++;
    //       }
    //     } else if (contentSlideVal === 'News') {
    //       for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allNews.snow[i],
    //           contentService.allNews.surf[surfCount],
    //           contentService.allNews.snow[i + 1],
    //           contentService.allNews.snow[i + 2]
    //         );
    //         surfCount++;
    //       }
    //     }
    //   } else if (typeSlideVal === 'Surfs Up') {
    //     var snowCount = 0;
    //     if (contentSlideVal === 'Videos') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allVideos.surf[i],
    //           contentService.allVideos.snow[snowCount],
    //           contentService.allVideos.surf[i + 1],
    //           contentService.allVideos.surf[i + 2]
    //         );
    //         snowCount++;
    //       }
    //     } else if (contentSlideVal === 'A bit of both') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allVideos.surf[i],
    //           contentService.allVideos.snow[snowCount],
    //           contentService.allNews.surf[i],
    //           contentService.allVideos.surf[i + 1],
    //           contentService.allNews.surf[i + 1],
    //           contentService.allNews.snow[snowCount],
    //           contentService.allVideos.surf[i + 2],
    //           contentService.allNews.surf[i + 2]
    //         );
    //         snowCount++;
    //       }
    //     } else if (contentSlideVal === 'News') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
    //         this.contentList.push(
    //           contentService.allNews.surf[i],
    //           contentService.allNews.snow[snowCount],
    //           contentService.allNews.surf[i + 1],
    //           contentService.allNews.surf[i + 2]
    //         );
    //         snowCount++;
    //       }
    //     }
    //   } else if (typeSlideVal === 'Barrels') {
    //     if (contentSlideVal === 'Videos') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.surf[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'A bit of both') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i++) {
    //         this.contentList.push(
    //           contentService.allVideos.surf[i],
    //           contentService.allNews.surf[i]
    //         );
    //       }
    //     } else if (contentSlideVal === 'News') {
    //       for (let i = 0; i < contentService.allVideos.surf.length; i++) {
    //         this.contentList.push(
    //           contentService.allNews.surf[i]
    //         );
    //       }
    //     }
    //   }
    // };

    // $scope.listContent();

    // contentService.getCurrentWeather()
    // .then((weather) => {
    //   var weatherData = weather.data.current_observation;
    //   this.currentWeather = weatherData;
    //   console.log(this.currentWeather);
    // });

    // contentService.getForecastWeather(location.city, location.state)
    // .then((forecast) => {
    //   var forecastData = forecast.data.forecast.simpleforecast.forecastday;
    //   this.forecastWeather = forecastData;
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

  }

})();
