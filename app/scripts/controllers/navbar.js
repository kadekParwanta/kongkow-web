'use strict';

/**
 * @ngdoc function
 * @name kongkowWebApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the kongkowWebApp
 */
angular.module('kongkowWebApp')
  .controller('NavbarCtrl', function () {
   
    $scope.isLoggedin=false;
 
		Auth.ensureCurrentUser(function(){
 			$scope.currentUser=Auth.currentUser;
 			$scope.islogged=$rootScope.islogged;
 		});
 
		$rootScope.$watch('islogged', function(newValue, oldValue) {
 			$scope.isLoggedin=newValue;
 			console.log('islogged changed value : '+newValue);
 			if(newValue){
 				$scope.currentUser=Auth.currentUser;
        		$scope.isLoggedin=newValue;
 			}
 		});
 
 
 		$scope.logout = function  () {
 			Auth.logout();  			
 		};
  });
