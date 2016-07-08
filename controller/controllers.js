
    
      
    myapp.controller("appCtrl", ["$scope", function ($scope) {
    }])

    //homeCtrl provides the logic for the home screen
    myapp.controller("InscriptionCtrl", ["$scope", "$state", "$http", "$location", function ($scope, $state, $http, $location) {
        var baseUrl = "http://localhost:9123/";
        var psanter = { Nom: "", Desc: "", Type: 1 };        
        var fformation = { Type: 1 };
        $scope.Santer = [];
        $scope.Formation = [];
        $scope.Formation.push(fformation);
        $scope.Santer.push(psanter);
    }])
    myapp.controller('HomeCtrl', ["$scope", "$state", "$http", "$location", function ($scope, $state, $http, $location) {
            var baseUrl = "http://localhost:9123/";
            $scope.sortType = 'name'; // set the default sort type
            $scope.sortReverse = false;  // set the default sort order
            $scope.searchFish = '';     // set the default search/filter term

            // create the list of sushi rolls
            $scope.sushi = [
              { name: 'Michel Gagnon', Status: 'Externe', tastiness: 2, CouponsTaxi: 3, CouponsBus: 7, },
              { name: 'Jacob Munger', Status: 'Interne', tastiness: 4, CouponsTaxi: 4, CouponsBus: 7, },
              { name: 'Larry Morin', Status: 'Interne', tastiness: 7, CouponsTaxi: 8, CouponsBus: 7, },
              { name: 'Michel Gagnon', Status: 'Externe', tastiness: 6, CouponsTaxi: 9, CouponsBus: 7, }
            ];
            $scope.salut = "Salut";
    }])
    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    myapp.controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }]);
