
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('monthlyWorkController', monthlyWorkController);

    /** @ngInject */
    function monthlyWorkController($scope,$window, monthlyWorkServ, LeaveServ,AuthService,toastr,$state,$rootScope) {
        //start here
        $rootScope.title = 'monthlyWork';
        $scope.data={};
        $scope.doSave = function () {
          monthlyWorkServ.add($scope.data,
            function (response) {
              toastr.success(response.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });
        }
      $scope.doUpdate= function () {
        monthlyWorkServ.update($scope.data,
          function (response) {
            console.log(err.data.message);
            toastr.error(err.data.message);

            console.log(response.data.message);
          }, function (err) {
          });

      }
      $scope.doDelete = function () {
        monthlyWorkServ.delete(function (response) {
          console.log(response);
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
      }
      $scope.doNext = function () {
        var eId=$scope.data.eId;
        LeaveServ.get({eId:eId}, function (response) {
          console.log(response);
          AuthService.setUser(response);
           $state.go("leave");
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
        

        }


        $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        monthlyWorkServ.get({eId:eId}, function (response) {
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
