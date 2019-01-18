var myModule = angular.module('MyTask');

myModule.controller('labelController',function($scope, dataService){

    dataService.loadTaskData()
        .then(function(data){
            $scope.labelData = dataService.getAllLabels();            
        },function(error){
            console.log(error);
        });

    $scope.getTasksLengthForLabel = function(label){
        return dataService.getTasksForLabel(label).length;
    };

    $scope.getAllTasksLength = function(){
        return dataService.getAllTasks().length;
    };

    $scope.getPendingTasksLength = function() {
        return dataService.getTaskByCompletionStatus(false).length;
    };

});