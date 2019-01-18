var myModule = angular.module('MyTask');

myModule.controller('labelController',function($scope){
    $scope.labelData = {
        "labels": [
            {
                "name":"Work",
                "color":"color_red"
            },
            {
                "name":"Home",
                "color":"color_green"
            },
            {
                "name":"Personal",
                "color":"color_blue"
            }
        ]
    };  

});