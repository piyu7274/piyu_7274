/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('DepartmentController', DepartmentController);

    /** @ngInject */
    function DepartmentController($scope, $window,DepartmentServ, monthlyWorkServ,AuthService,toastr,$state,$rootScope) {
        //start here
        $rootScope.title = 'department';
        $scope.data={};
         $scope.data.eId=$rootScope.eId;
        $scope.doSave = function () {
          DepartmentServ.add($scope.data,
            function (response) {
              toastr.success(response.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });
        }
          $scope.doUpdate = function () {
            DepartmentServ.update($scope.department,
              function (response) {
                console.log(response.data.message);
              }, function (err) {
                console.log(err.data.message)
                toastr.error(err.data.message);

              });
          }

            $scope.doDelete = function () {
              DepartmentServ.delete(function (response) {
                console.log(response);
              }, function (err) {
                console.log(err.data.message)
                toastr.error(err.data.message);

              });
            }

              $scope.doNext = function () {
               /* var eId=$scope.data.eId;
                console.log(eId);
        monthlyWorkServ.get({eId:eId}, function (response) {
          console.log(response);
          AuthService.setUser(response)*/
           $state.go("monthlyWork")
        }/*, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);
      });
        }*/


         $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        DepartmentServ.get({eId:eId}, function (response) {
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
