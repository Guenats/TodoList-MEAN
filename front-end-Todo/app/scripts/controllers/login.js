'use strict';

/**
 * @ngdoc function
 * @name frontEndTodoApp.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTodoApp
 */

angular.module('frontEndTodoApp')
  .controller('LoginCtrl', function ($scope,$location,$http,$rootScope) {
    $scope.login = function(email,password) {
      var data = {
        email:email,
        password: password,
        };
      $http.post("https://localhost:3001/login",data)
      .then(function successCallback(response){
        console.log("Good");
        if(localStorage.getItem('user') === null){
        localStorage.setItem('user',response.data.userId);
        }
        $location.url('/')

      }, function errorCallback(response){
          console.log("Unable to perform get request");
      });
    }
  });
