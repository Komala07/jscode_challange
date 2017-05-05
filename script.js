var app = angular.module('myApp',[]);

app.controller ('dataController',function ($scope, $http) {

    $scope.sortingOrder = 'userId';
    $scope.reverse = false;

    var onSuccess = function(success){
         $scope.tableData = success.data;
    };
    var onError = function(err){
        console.log("failed to load data");
    };

    //get the data from server
    $scope.initialise = function () {
        var url = "http://jsonplaceholder.typicode.com/posts";
        $http.get(url).then(onSuccess,onError);
    };
    //function to sort table
    $scope.sort_table = function (newSortOrder) {
        if ($scope.sortingOrder === newSortOrder) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.sortingOrder = newSortOrder;
    }
    //function to change icon
    $scope.getClass = function (colOrder) {
        if ($scope.sortingOrder === colOrder) {
            if ($scope.reverse) {
                 return 'icon-arrow-up';
            }else{ 
                return 'icon-arrow-down';

            }
        }
        return '';
    };
     $scope.initialise();
});
