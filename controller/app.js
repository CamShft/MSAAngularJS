

var myapp = angular.module('ngapp', ['ui.router']);
    myapp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/view-home.html',
            controller : 'HomeCtrl'
        })
        .state('app', {
            url: '/app',
            templateUrl: 'views/view-home.html',
            controller: 'HomeCtrl'
        })
        .state('suivis', {
            url: '/suivis',
            templateUrl: 'views/view-suivis.html'
        })
         .state('inscription', {
             url: '/inscription',
             templateUrl: 'views/view-inscription.html',
             controller: 'InscriptionCtrl'
         })
        $urlRouterProvider.otherwise("/app");
    }]);

    var chartM = angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                  },
                  {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: true,
                      position: 'right'
                  }
                ]
            }
        };
    });
