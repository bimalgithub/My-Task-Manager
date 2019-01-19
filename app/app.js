var myModule = angular.module('MyTask', ['ui.router']);

myModule.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/tasklist');
});



