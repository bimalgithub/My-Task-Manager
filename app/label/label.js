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

myModule.controller('newLabelController',function($scope, $state, $stateParams, dataService) {

    $scope.name = "";
    $scope.color = "";

    $scope.setColor = function(value){
        $scope.color = value;
    };

    $scope.saveLabel = function(){
        var label={
            "name":$scope.name,
            "color":$scope.color
        };
        dataService.addNewLabel(label);
        dataService.setSelectedLabel($scope.name);
        $state.transitionTo('showTasks',$stateParams,{reload:true});

    };

});

myModule.config(function($stateProvider){
    $stateProvider.state('newLabel',{
        url: '/newLabel',
        templateUrl: 'app/label/partial/newLabel.template.html',
        controller: 'newLabelController'
    });
});