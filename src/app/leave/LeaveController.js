
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('LeaveController', LeaveController);

    /** @ngInject */
    function LeaveController($scope, $window,LeaveServ,WorkHistoryServ, AuthService,toastr,$state,$rootScope) {
        //start here
        $rootScope.title = 'leave';
        $scope.data={};
        $scope.doSave = function () {
          LeaveServ.add($scope.data,
            function (response) {
              toastr.success(response.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });
        }
      $scope.doUpdate= function () {
          LeaveServ.update($scope.data,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });
      }
      $scope.doDelete= function () {
        LeaveServ.delete(function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
      }
      $scope.doNext = function () {
        var eId=$scope.data.eId;
        console.log(eId);
        WorkHistoryServ.get({eId:eId}, function (response) {
          console.log(response);
          AuthService.setUser(response)
          $state.go("workHistory");
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
           }

        $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        LeaveServ.get({eId:eId}, function (response) {
           if(response.data==null)
          {
            $scope.data='';
            toastr.success(response.message);
          }
          console.log(response);
          $scope.data=response;
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
        }
         $scope.doGet();
          }


      

})();
