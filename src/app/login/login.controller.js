(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, LoginServ, toastr,$rootScope, $http, $state, AuthService) {
    //start here
    	$rootScope.title = 'login'
	    $scope.userName = '';
	    $scope.password = '';
	    $scope.user ={
	      username: $scope.userName,
	      password : $scope.password
	    }

	    $scope.doLogin = function () {
	      // console.log('in')
	      $scope.user ={
	      username: $scope.userName,
	      password : $scope.password
	    	}
	      console.log($scope.user)
	      LoginServ.login($scope.user,
	          function (response) {
	           console.log(response)
                ga('create', 'UA-XXXXX-Y', 'auto', {
                userId: $scope.user.username
              });
	            AuthService.setUser(response)
	            AuthService.persist()
	          $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
              console.log("1", response.token)
              if(response.role == 'admin'){
                $state.go("")
                //toastr.success(response.message);
              }else if(response.role == 'superadmin'){
                $state.go("")
                //toastr.success(response.message);
              }



	          }, function (err) {
	            console.log(err.data.message)
	            toastr.error(err.data.message);

	          });
	    }

	      $scope.doLoginnew = function () {
	      	$state.go("personel_info");
	      }
    }

})();
