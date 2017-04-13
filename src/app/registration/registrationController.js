/**
 * Created by piyush on 31/3/17.
 */
(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .controller('registrationController', registrationController);

  /** @ngInject */
  function registrationController($scope, RegistrationServ, toastr, $rootScope,$state) {
    //start here
    $rootScope.title = 'registration';

    $scope.username = '';
    $scope.password = '';

    $scope.doSave = function () {
       $scope.registration = {

      username: $scope.username,
      password: $scope.password
    }
      // console.log('in')
      console.log($scope.registration);
      RegistrationServ.add($scope.registration,
        function (response) {
          toastr.success(response.message);
          $state.go('personel_info');
          console.log(response.data.message);
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
    }
  }
})();


