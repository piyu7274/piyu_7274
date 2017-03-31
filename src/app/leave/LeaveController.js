
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('LeaveController', LeaveController);

    /** @ngInject */
    function LeaveController($scope, LeaveServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'leave'
        $scope.holiday = '';
        $scope.leaveDays = '';
        $scope.leaveMonth = '';
        $scope.leaveFrom = '';
        $scope.leaveTo = '';
        $scope.leave ={
            holiday: $scope.holiday ,
            leaveDays:$scope.days,
            leaveMonth : $scope.lmonth,
            leaveFrom : $scope.fromDate,
            leaveTo : $scope.toDate
    }

        $scope.doSave = function () {
          // console.log('in')
          $scope.leave = {
            holiday: $scope.holiday,
            leaveDays: $scope.days,
            leaveMonth: $scope.lmonth,
            leaveFrom: $scope.fromDate,
            leaveTo: $scope.toDate
          }
          console.log($scope.leave)
          LeaveServ.add($scope.leave,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });
        }
      $scope.doUpdate= function () {
          LeaveServ.update($scope.leave,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });
      }
      $scope.doDelete= function () {
        LeaveServ.delete(function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message)
          toastr.error(err.data.message);

        });
      }
      $scope.doGet= function () {
        LeaveServ.get(function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message)
          toastr.error(err.data.message);

        });

      }}

})();
