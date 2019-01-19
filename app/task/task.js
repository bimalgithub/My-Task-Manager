var myModule = angular.module('MyTask');

myModule.controller('taskListController',function($scope, dataService){
   
    // dataService.loadTaskData()
    //     .then(function(data){
    //         $scope.taskData = dataService.getAllTasks();            
    //     },function(error){
    //         console.log(error);
    //     });

    $scope.label = dataService.getSelectedLabel();

    if($scope.label =="All Pending"){
        $scope.tasks = dataService.getTaskByCompletionStatus(false);
    } else if($scope.label == "All Tasks"){
        $scope.tasks = dataService.getAllTasks();
    } else {
        $scope.tasks = dataService.getTasksForLabel($scope.label);
    }

    $scope.updateTask=function(task){
        dataService.updateTask(task);
    };
});

myModule.config(function($stateProvider){

    $stateProvider.state('showTasks',{
        url: '/taskList',
        templateUrl: 'app/task/partial/taskList.template.html',
        controller: 'taskListController'
    });
});