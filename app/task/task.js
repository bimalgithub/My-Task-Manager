var myModule = angular.module('MyTask');

myModule.controller('taskListController',function($scope){
    $scope.taskData = {
        "tasks":[
            {
                "id":1,
                "name":"Send Status Report",
                "dueDate":"12/30/1981",
                "note":"",
                "completed":false,
                "labelName":"Inbox"
            },
            {
                "id":2,
                "name":"Learn Angular JS 1.x",
                "dueDate":"12/30/1981",
                "note":"",
                "completed":false,
                "labelName":"Work"
            },
            {
                "id":3,
                "name":"Purchase Grocery",
                "dueDate":"12/30/1981",
                "note":"",
                "completed":true,
                "labelName":"Home"
            }
        ]
    };

});