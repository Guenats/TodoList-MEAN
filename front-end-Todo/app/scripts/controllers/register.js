'use strict';

/**
 * @ngdoc function
 * @name frontEndTodoApp.controller:RegisterCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTodoApp
 */
angular.module('frontEndTodoApp')
  .controller('RegisterCtrl', function ($scope,$http,$location) {
    $scope.register = function(email,username,password,Confpassword) {
      var data = {
        username: username,
        email:email,
        password: password,
        Confpassword : Confpassword
        };
      $http.post("https://localhost:3001/",data)
      .then(function successCallback(response){
        console.log("Good");
        $location.url('/login')

      }, function errorCallback(response){
          console.log("Unable to perform get request");
      });
    }
  });

