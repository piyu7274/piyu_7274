angular.module('emsdashboard')
  .service('AuthService', function($window, $http) {

    this.user = angular.fromJson($window.localStorage['EMS.emsdashboard.admin']) || {};

    this.setUser = function(user){
      this.user = user;
      console.log(user);
    }
    this.getUser = function(){
      return this.user;
    }
    this.isAuthenticated = function () {
      if(this.user && this.user.token)
      {
        return true;
      }
      return false;
    }
    this.persist = function(){
      window.localStorage['EMS.emsdashboard.admin'] = angular.toJson( this.user)
    }

    this.clearUser = function(){
       this.user  = {};
       window.localStorage['EMS.emsdashboard.admin'] = {}
    }

  });
