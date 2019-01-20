var myModule = angular.module('MyTask');

myModule.controller('headerController',function($scope, $state, $stateParams, $rootScope){
    $scope.createNewLabel = function(){
        $state.transitionTo('newLabel',$stateParams,{reload:true});
    };

    $scope.txtFilter = "";
    $scope.updateFilter = function(){
        $rootScope.filter = $scope.txtFilter;
    };
});