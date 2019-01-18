var myModule = angular.module('MyTask');

myModule.controller('taskListController',function($scope, dataService){
   
    dataService.loadTaskData()
        .then(function(data){
            $scope.taskData = dataService.getAllTasks();            
        },function(error){
            console.log(error);
        });

});