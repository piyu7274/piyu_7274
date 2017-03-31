angular.module('emsdashboard')
  .service('AuthService', function($window, $http) {

    this.user = angular.fromJson({}) ;

    this.setUser = function(user){
      this.user = user;
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
    }

    this.clearUser = function(){
      this.user  = {};
    }

  });
