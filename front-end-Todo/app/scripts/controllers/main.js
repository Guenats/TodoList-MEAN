'use strict';

/**
 * @ngdoc function
 * @name frontEndTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTodoApp
 */

angular.module('frontEndTodoApp')
  .controller('MainCtrl', function ($scope,$http,$rootScope) {
    $scope.formData = {};
    if($rootScope.user != null){
    $scope.user = $rootScope.user
    }

      $http.get("https://localhost:3001/todos/"+localStorage.getItem('user'))
      .then(function successCallback(response){
        console.log("Good");
        $rootScope.user = response.data.userId;
        $scope.todos = response.data

      }, function errorCallback(response){
          console.log("Unable to perform get request");
      });

      $scope.createTodo = function() {
        var data = {
          title:$scope.formData.text,
          creator:localStorage.getItem('user')
          };
        $http.post('https://localhost:3001/todo', data)
        .then(function successCallback(response){
          $scope.todos.push(data);

          },function errorCallback(response){
          console.log('Error: ' + data);
        });
    };
    $scope.deleteTodo = function(todo) {
      $http.delete('https://localhost:3001/todos/'+todo._id)
      .then(function successCallback(response){
        var index=$scope.todos.indexOf(todo)
        $scope.todos.splice(index,1);

        },function errorCallback(response){
        console.log('Error: ' + data);
      });
  };
    });
