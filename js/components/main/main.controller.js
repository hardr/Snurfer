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
    // this.currentWeather = {};
    this.forecastWeather = {};

    this.typeSlider = {
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
          $scope.listContent();
        }
      }
    };

    this.contentSlider = {
      value: 'A bit of both',
      options: {
        stepsArray: ['Videos', 'A bit of both', 'News'],
        showSelectionBar: true,
        getPointerColor: function(value) {
          if (value === 'Videos')
            return '#305CB2';
          if (value === 'A bit of both')
            return '#23A6B2';
          if (value === 'News')
            return '#E0FFFF';
        },
        showTicksValues: true,
        onChange: () => {
          this.contentList = [];
          $scope.listContent();
        }
      }
    };

    $scope.listContent = () => {
      var typeSlideVal = this.typeSlider.value;
      var contentSlideVal = this.contentSlider.value;

      if (typeSlideVal === 'Snurf') {
        if (contentSlideVal === 'Videos') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allVideos.snow[i],
              contentService.allVideos.surf[i]
            );
          }
        } else if (contentSlideVal === 'A bit of both') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allVideos.snow[i],
              contentService.allVideos.surf[i],
              contentService.allNews.snow[i],
              contentService.allNews.surf[i]
            );
          }
        } else if (contentSlideVal === 'News') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allNews.snow[i],
              contentService.allNews.surf[i]
            );
          }
        }
      } else if (typeSlideVal === 'Pow Day') {
        if (contentSlideVal === 'Videos') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allVideos.snow[i]
            );
          }
        } else if (contentSlideVal === 'A bit of both') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allVideos.snow[i],
              contentService.allNews.snow[i]
            );
          }
        } else if (contentSlideVal === 'News') {
          for (let i = 0; i < contentService.allVideos.snow.length; i++) {
            this.contentList.push(
              contentService.allNews.snow[i]
            );
          }
        }
      } else if (typeSlideVal === 'Shred') {
        var surfCount = 0;
        if (contentSlideVal === 'Videos') {
          for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
            this.contentList.push(
              contentService.allVideos.snow[i],
              contentService.allVideos.surf[surfCount],
              contentService.allVideos.snow[i + 1],
              contentService.allVideos.snow[i + 2]
            );
            surfCount++;
          }
        } else if (contentSlideVal === 'A bit of both') {
          for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
            this.contentList.push(
              contentService.allVideos.snow[i],
              contentService.allVideos.surf[surfCount],
              contentService.allNews.snow[i],
              contentService.allVideos.snow[i + 1],
              contentService.allNews.snow[i + 1],
              contentService.allNews.surf[surfCount],
              contentService.allVideos.snow[i + 2],
              contentService.allNews.snow[i + 2]
            );
            surfCount++;
          }
        } else if (contentSlideVal === 'News') {
          for (let i = 0; i < contentService.allVideos.snow.length; i += 3) {
            this.contentList.push(
              contentService.allNews.snow[i],
              contentService.allNews.surf[surfCount],
              contentService.allNews.snow[i + 1],
              contentService.allNews.snow[i + 2]
            );
            surfCount++;
          }
        }
      } else if (typeSlideVal === 'Surfs Up') {
        var snowCount = 0;
        if (contentSlideVal === 'Videos') {
          for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
            this.contentList.push(
              contentService.allVideos.surf[i],
              contentService.allVideos.snow[snowCount],
              contentService.allVideos.surf[i + 1],
              contentService.allVideos.surf[i + 2]
            );
            snowCount++;
          }
        } else if (contentSlideVal === 'A bit of both') {
          for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
            this.contentList.push(
              contentService.allVideos.surf[i],
              contentService.allVideos.snow[snowCount],
              contentService.allNews.surf[i],
              contentService.allVideos.surf[i + 1],
              contentService.allNews.surf[i + 1],
              contentService.allNews.snow[snowCount],
              contentService.allVideos.surf[i + 2],
              contentService.allNews.surf[i + 2]
            );
            snowCount++;
          }
        } else if (contentSlideVal === 'News') {
          for (let i = 0; i < contentService.allVideos.surf.length; i += 3) {
            this.contentList.push(
              contentService.allNews.surf[i],
              contentService.allNews.snow[snowCount],
              contentService.allNews.surf[i + 1],
              contentService.allNews.surf[i + 2]
            );
            snowCount++;
          }
        }
      } else if (typeSlideVal === 'Barrels') {
        if (contentSlideVal === 'Videos') {
          for (let i = 0; i < contentService.allVideos.surf.length; i++) {
            this.contentList.push(
              contentService.allVideos.surf[i]
            );
          }
        } else if (contentSlideVal === 'A bit of both') {
          for (let i = 0; i < contentService.allVideos.surf.length; i++) {
            this.contentList.push(
              contentService.allVideos.surf[i],
              contentService.allNews.surf[i]
            );
          }
        } else if (contentSlideVal === 'News') {
          for (let i = 0; i < contentService.allVideos.surf.length; i++) {
            this.contentList.push(
              contentService.allNews.surf[i]
            );
          }
        }
      }
    };

    $scope.listContent();

    // contentService.getCurrentWeather()
    // .then((weather) => {
    //   var weatherData = weather.data.current_observation;
    //   this.currentWeather = weatherData;
    //   console.log(this.currentWeather);
    // });

    contentService.getForecastWeather()
    .then((forecast) => {
      var forecastData = forecast.data.forecast.simpleforecast.forecastday;
      this.forecastWeather = forecastData;
      console.log(this.forecastWeather);
    })
    .catch((err) => {
      console.log(err);
    });

  }

})();
