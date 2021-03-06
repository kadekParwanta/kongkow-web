'use strict';

/**
 * @ngdoc service
 * @name kongkowWebApp.Auth
 * @description
 * # Auth
 * Service in the kongkowWebApp.
 */
angular.module('kongkowWebApp')
  .service('Auth',function ($rootScope,ChatUser,$location) {

  	var self = {
      signup:function(data){
        ChatUser.create(data,function () {
          ChatUser.login(data,function (data) {
            self.currentUser=data.user;
            $rootScope.islogged=true;
            $location.path('/');
          });
        });
      },
  		login: function(user){
  			ChatUser.login(user,function(data){
  				self.currentUser=data.user;
  				console.log(self.currentUser);
  				$rootScope.islogged=true;
          if($location.nextAfterLogin) {
						$location.path($location.nextAfterLogin);
          }else{
            $location.path('/');
          } 				
  			});
  		},
  		logout: function(){
  			ChatUser.logout(function(){
  				$location.path('/');
  				$rootScope.islogged=false;
  				self.currentUser=null;
  			});
  		},
  		ensureCurrentUser: function(cb){
  			if(ChatUser.isAuthenticated() && self.currentUser == null){
  				$rootScope.islogged=true;  				
  				ChatUser.getCurrent(function(data){
  					self.currentUser = data;
  					cb();
  				});
  			}
  		},
  		currentUser:null

  	};
  		
  	return self;
  });
