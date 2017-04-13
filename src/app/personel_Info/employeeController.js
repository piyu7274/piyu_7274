(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .controller('employeeController', employeeController);

  /** @ngInject */
  function employeeController($scope, EmployeeServ,$rootScope,LoginServ, AuthService, $http, toastr, $state,ngTableParams) {
    $rootScope.title = 'employee';
    $scope.tableParams ;
console.log('in controller');
    $scope.addEmployeenew = function(){
      AuthService.setUser('');
      $rootScope.eId='';
      $scope.data='';
      $state.go('personel_info')
    }
$scope.logout = function(){
        $scope.user ={
          username: '',
          password : ''
        }
        LoginServ.logout($scope.user,
          function (response) {
            console.log(response);
            AuthService.user= '';
             window.localStorage.removeItem("EMS.emsdashboard.admin");
            $http.defaults.headers.common.Authorization = '';
            $state.go("login")
            toastr.success(response.message);

          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
      }
    $scope.getEmployeeList = function(){
      EmployeeServ.employeeList(function (data) {
        var dataset = data
        $scope.tableParams = new ngTableParams({count:10}, {counts: [], dataset: dataset});
      }, function (err) {
        console.log(err.data.message);
      });
    }
    $scope.getEmployeeList();

    $scope.gotoDashboard = function (eId) {
      EmployeeServ.getEmployee({eId:eId}, function (response) {
      console.log(response);
      $rootScope.eId=response.eId;
      console.log($rootScope.eId);
      AuthService.setUser(response);
        $state.go('personel_info');
        return response;
      }, function (error) {
        toastr.error("error getting access.");
      })
    }
    $scope.doDelete = function (eId) {
        EmployeeServ.delete({eId:eId},function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
      }
  }
})();
