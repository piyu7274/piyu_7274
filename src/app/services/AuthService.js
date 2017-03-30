angular.module('emsdashboard')
  .service('AuthService', function($window, $http) {

    this.user = angular.fromJson($window.localStorage['47b.bustrack.admin']) || {};

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
      window.localStorage['47b.bustrack.admin'] = angular.toJson( this.user)
    }

    this.clearUser = function(){
      this.user  = {};
      window.localStorage['47b.bustrack.admin'] = {}
    }

  });
