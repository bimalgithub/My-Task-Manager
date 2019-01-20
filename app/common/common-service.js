var myModule = angular.module('MyTask');

myModule.service('dataService', function($http, $q){

    var arrLabels = [];
    var arrAllTasks = [];

    this.loadTaskData = function() {

        var defer = $q.defer();
        $http.get('data/data.json')
            .success(function(data){
                defer.$$resolve(data);
                arrLabels = data.labels;
                arrAllTasks = data.tasks;

            })
            .error(function(data){
                defer.reject("Error");
            });
        return defer.promise;    
    };

    this.updateTask = function(updatedTask){
        angular.forEach(arrAllTasks, function(task, key){
            if(task.id === updatedTask.id){
                arrAllTasks[key] = updatedTask;
            }
        });
    };

    this.addNewLabel = function(label){
        arrLabels.push(label);
    };

    this.addNewTask=function(task){
        arrAllTasks.push(task);
    };

    ///////////////// label getter and setter /////////////////////

    var selectedLabel = "";
    this.setSelectedLabel = function(label){
        selectedLabel = label;
    };
    this.getSelectedLabel = function(){
        if(selectedLabel === ""){
            selectedLabel = "Inbox";
        }
        return selectedLabel;
    };

    this.getTasksForLabel = function(label) {
        var tasks = [];
        angular.forEach(arrAllTasks, function(obj, key){
            if(obj.labelName === label){
                tasks.push(obj);
            }
        });
        return tasks;
    };

    this.getTaskByCompletionStatus = function(status){
        var tasks = [];
        angular.forEach(arrAllTasks, function(task, key){
            if(task.completed===status){
                tasks.push(task);
            }
        });
        return tasks;
    };
  //////////////////getters for labelData and taskData ///////////////////////////
    this.getAllTasks = function(){
        return arrAllTasks;
    };

    this.getAllLabels = function() {
        return arrLabels;
    }
});