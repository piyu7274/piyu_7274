
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('monthlyWorkController', monthlyWorkController);

    /** @ngInject */
    function monthlyWorkController($scope, monthlyWorkServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'monthlyWork'
        $scope.workHour = '';
        $scope.daysOff = '';
        $scope.overTime = '';
        $scope.fromDate = '';
        $scope.toDate = '';
        $scope.workMonth='';
        $scope.monthlyWork ={
            workHour: $scope.workHour ,
            daysOff : $scope.days_off,
            overTime : $scope.overTime,
            fromDate : $scope.fromDate,
            toDate : $scope.toDate,
            workMonth : $scope.workMonth
        }

        $scope.doSave = function () {
          // console.log('in')
          $scope.monthlyWork = {
            workHour: $scope.workHour,
            daysOff: $scope.days_off,
            overTime: $scope.overTime,
            fromDate: $scope.fromDate,
            toDate: $scope.toDate,
            workMonth: $scope.workMonth
          }
          console.log($scope.monthlyWork)
          monthlyWorkServ.add($scope.monthlyWork,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });
        }
      $scope.doUpdate= function () {
        monthlyWorkServ.update($scope.monthlyWork,
          function (response) {
            console.log(response.data.message);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });

      }
      $scope.doDelete = function () {
        monthlyWorkServ.delete(function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message)
          toastr.error(err.data.message);

        });
      }
      $scope.doGet = function () {
          monthlyWorkServ.get(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });
        }
    }

})();
