(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .run(runBlock);

  /** @ngInject */
  /*function runBlock($log) {

    $log.debug('runBlock end');
  }*/
function runBlock(AuthService, $http, $state, $rootScope) {
     console.log("inside run");
      $rootScope.toggle = false;
      $rootScope.menuT =function(){
          $rootScope.toggle = !$rootScope.toggle
          console.log('menu t ',$rootScope.toggle)
      }
  		 if (AuthService.isAuthenticated()) {
        console.log("===header===");
                $http.defaults.headers.common.Authorization = 'Bearer ' + AuthService.getUser().token;
         // console.log("run ",  AuthService.getUser().token)
            }
            else
            {
              $state.go('login')
            }
    $rootScope.$on('unauthorized', function() {
      console.log("===unauthorized===");
      AuthService.clearUser()
      $state.go("login")
      $rootScope.isAuthenticated = false;
    });
    $rootScope.$on('$stateChangeStart', function (e,$rootScope, toState, toParams, fromState, fromParams) {
            // console.log("to - " + toState.name + " $state.current.name - " + $state.current.name)
            if (AuthService.isAuthenticated() && (toState.name == "login")) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + AuthService.getUser().token;
                $state.go("employee")
                e.preventDefault();
                //   returna

            }
            
        });
    $rootScope.$on('$stateChangeSuccess', function(next, current) {
       if (window.innerWidth < 767){
         $rootScope.toggle = true
        }
    });
  }

})();
