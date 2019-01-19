var myModule = angular.module('MyTask');

myModule.controller('labelController',function($scope, dataService, $state, $stateParams){

    dataService.loadTaskData()
        .then(function(data){
            $scope.labelData = dataService.getAllLabels();            
        },function(error){
            console.log(error);
    });

    $scope.setLabel = function(label){
        dataService.setSelectedLabel(label);
        $state.transitionTo('showTasks', $stateParams, {reload:true});
    };

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